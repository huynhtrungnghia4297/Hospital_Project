import React, { useState } from 'react';
import { Container, Row, Col, Card, Nav, Tab, Form, Button, Alert } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import Avatar from '../components/common/Avatar';
import { mockUserData } from '../data/mockData';

const UserInfoPage = () => {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get('tab') || 'appointments';
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
    setPasswordError('');
    setPasswordSuccess('');
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError('New passwords do not match');
      return;
    }
    if (passwordData.newPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return;
    }
    setPasswordSuccess('Password changed successfully!');
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  return (
    <Container className="py-5">
      <Row className="g-4">
        <Col lg={4}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="text-center p-4">
              <div className="position-relative d-inline-block mb-4">
                <Avatar name={mockUserData.fullName} size={120} className="border-3 border-primary" />
                <span className="position-absolute bottom-0 end-0 bg-success rounded-circle p-2 border border-white"></span>
              </div>
              <h4 className="mb-1">{mockUserData.fullName}</h4>
              <p className="text-muted mb-3">{mockUserData.email}</p>
              <div className="d-grid">
                <Button variant="outline-primary" onClick={() => setShowPasswordForm(!showPasswordForm)}>
                  <i className="fas fa-key me-2"></i>Change Password
                </Button>
              </div>

              {showPasswordForm && (
                <Form onSubmit={handlePasswordSubmit} className="mt-4 text-start">
                  {passwordError && <Alert variant="danger">{passwordError}</Alert>}
                  {passwordSuccess && <Alert variant="success">{passwordSuccess}</Alert>}
                  <Form.Group className="mb-3">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control type="password" name="currentPassword" value={passwordData.currentPassword} onChange={handlePasswordChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" name="newPassword" value={passwordData.newPassword} onChange={handlePasswordChange} required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control type="password" name="confirmPassword" value={passwordData.confirmPassword} onChange={handlePasswordChange} required />
                  </Form.Group>
                  <div className="d-grid">
                    <Button type="submit" variant="primary">Update Password</Button>
                  </div>
                </Form>
              )}
            </Card.Body>
          </Card>

          <Card className="border-0 shadow-sm mt-4">
            <Card.Body className="p-4">
              <h5 className="mb-3">Personal Information</h5>
              <div className="mb-3">
                <small className="text-muted d-block">Phone</small>
                <div>{mockUserData.phone}</div>
              </div>
              <div className="mb-3">
                <small className="text-muted d-block">Address</small>
                <div>{mockUserData.address}</div>
              </div>
              <div>
                <small className="text-muted d-block">Member Since</small>
                <div>{new Date(mockUserData.joinDate).toLocaleDateString()}</div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={8}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-0">
              <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
                <Nav variant="tabs" className="nav-fill border-bottom">
                  <Nav.Item>
                    <Nav.Link eventKey="appointments" className="border-0 px-4 py-3">
                      <i className="fas fa-calendar-check me-2"></i>Appointments
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="waiting" className="border-0 px-4 py-3">
                      <i className="fas fa-clock me-2"></i>Waiting List
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="prescriptions" className="border-0 px-4 py-3">
                      <i className="fas fa-prescription me-2"></i>Prescriptions
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="invoices" className="border-0 px-4 py-3">
                      <i className="fas fa-file-invoice-dollar me-2"></i>Invoices
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="appointments" className="p-4">
                  <p>No appointment data found.</p>
                  </Tab.Pane>


                  <Tab.Pane eventKey="waiting" className="p-4">
                    {mockUserData.waitingList.map((item, index) => (
                      <Card key={index} className="border-0 shadow-sm mb-3">
                        <Card.Body className="p-3">
                          <Row>
                            <Col>{item.department}</Col>
                            <Col>Queue #{item.queueNumber}</Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    ))}
                  </Tab.Pane>

                  <Tab.Pane eventKey="prescriptions" className="p-4">
                    <p>Prescriptions Section (Mock)</p>
                  </Tab.Pane>

                  <Tab.Pane eventKey="invoices" className="p-4">
                    <p>Invoices Section (Mock)</p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserInfoPage;
