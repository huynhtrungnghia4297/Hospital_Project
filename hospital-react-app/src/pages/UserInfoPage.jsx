import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import Avatar from '../components/common/Avatar';
import axios from 'axios';
import { API_BASE_URL } from '../services/api';

const UserInfoPage = () => {
  const [userData, setUserData] = useState({});
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("authData"));
    if (!authData || !authData.token || !authData.userId) return;

    const fetchUserData = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/user/${authData.userId}`, {
          headers: { Authorization: `Bearer ${authData.token}` }
        });
        setUserData(res.data);
      } catch (err) {
        console.error("Failed to fetch user info", err);
      }
    };

    fetchUserData();
  }, []);

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
    setPasswordError('');
    setPasswordSuccess('');
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    const { currentPassword, newPassword, confirmPassword } = passwordData;

    if (newPassword !== confirmPassword) {
      setPasswordError('New passwords do not match');
      return;
    }
    if (newPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    }

    try {
      const authData = JSON.parse(localStorage.getItem('authData'));
      const token = authData?.token;
      await axios.post(
        `${API_BASE_URL}/auth/change-password`,
        { currentPassword, newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setPasswordSuccess('Password changed successfully!');
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (error) {
      if (error.response?.data?.message) {
        setPasswordError(error.response.data.message);
      } else {
        setPasswordError('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <Container fluid className="min-vh-100 d-flex justify-content-center align-items-start py-5 bg-light">
      <Row className="w-100" style={{ maxWidth: '960px' }}>
        <Col xs={12}>
          <Card className="border-0 shadow-sm mb-4">
            <Card.Body className="text-center p-4">
              <div className="position-relative d-inline-block mb-4">
                <Avatar name={userData.username} size={120} className="border-3 border-primary" />
                <span className="position-absolute bottom-0 end-0 bg-success rounded-circle p-2 border border-white"></span>
              </div>
              <h4 className="mb-1">{userData.fullName}</h4>
              <p className="text-muted mb-3">{userData.email}</p>
              <div className="d-grid col-6 mx-auto">
                <Button variant="outline-primary" onClick={() => setShowPasswordForm(!showPasswordForm)}>
                  <i className="fas fa-key me-2"></i>
                  Change Password
                </Button>
              </div>

              {showPasswordForm && (
                <Form onSubmit={handlePasswordSubmit} className="mt-4 text-start">
                  {passwordError && <Alert variant="danger">{passwordError}</Alert>}
                  {passwordSuccess && <Alert variant="success">{passwordSuccess}</Alert>}

                  <Form.Group className="mb-3">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="currentPassword"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      required
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button type="submit" variant="primary">
                      Update Password
                    </Button>
                  </div>
                </Form>
              )}
            </Card.Body>
          </Card>

          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h5 className="mb-3">Personal Information</h5>
              <div className="mb-3">
                <small className="text-muted d-block">Full Name</small>
                <div>{userData.fullName}</div>
              </div>
              <div className="mb-3">
                <small className="text-muted d-block">Email</small>
                <div>{userData.email}</div>
              </div>
              <div>
                <small className="text-muted d-block">Username</small>
                <div>{userData.username}</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserInfoPage;
