import React, { useState, useEffect, useMemo } from 'react';
import { Container, Row, Col, Card, Button, Table, Badge, Alert } from 'react-bootstrap';
import { FaListOl, FaCheck, FaUserSlash } from 'react-icons/fa';
import { getAllWaitingList, updateWaitingStatus, removeFromWaitingList } from '../../services/api'; // Thêm các hàm API phù hợp

function WaitingListManagementPage() {
  const [waitingList, setWaitingList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWaitingList = async () => {
      try {
        const res = await getAllWaitingList(); // Gọi API thật
        setWaitingList(res.data); // Điều chỉnh nếu API trả về khác
      } catch (error) {
        setWaitingList([]);
      } finally {
        setLoading(false);
      }
    };
    fetchWaitingList();
  }, []);

  const handleCallNext = async (doctorName) => {
    // Tìm bệnh nhân tiếp theo và cập nhật trạng thái qua API nếu cần
    const doctorQueue = waitingList
      .filter(p => p.doctorName === doctorName && p.status === 'Waiting')
      .sort((a, b) => a.queueNumber - b.queueNumber);

    if (doctorQueue.length > 0) {
      // Cập nhật trạng thái bệnh nhân đang phục vụ thành 'Done'
      const currentlyServingPatient = waitingList.find(p => p.doctorName === doctorName && p.status === 'Serving');
      if (currentlyServingPatient) {
        await updateWaitingStatus(currentlyServingPatient.id, 'Done');
      }
      // Đánh dấu bệnh nhân tiếp theo là 'Serving'
      await updateWaitingStatus(doctorQueue[0].id, 'Serving');
      // Reload danh sách
      const res = await getAllWaitingList();
      setWaitingList(res.data);
    }
  };

  const handleRemove = async (patientId) => {
    if (window.confirm('Are you sure you want to remove this patient from the waiting list?')) {
      await removeFromWaitingList(patientId);
      // Reload danh sách
      const res = await getAllWaitingList();
      setWaitingList(res.data);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Waiting': return <Badge bg="warning" text="dark">Waiting</Badge>;
      case 'Serving': return <Badge bg="success">Now Serving</Badge>;
      case 'Done': return <Badge bg="secondary">Done</Badge>;
      case 'Cancelled': return <Badge bg="danger">Cancelled</Badge>;
      default: return <Badge bg="light" text="dark">{status}</Badge>;
    }
  };

  // Group waiting list by doctor
  const groupedByDoctor = useMemo(() => {
    const groups = waitingList.reduce((acc, patient) => {
      const { doctorName } = patient;
      if (!acc[doctorName]) {
        acc[doctorName] = [];
      }
      acc[doctorName].push(patient);
      return acc;
    }, {});

    // Sort patients within each group
    for(const doctor in groups) {
        groups[doctor].sort((a,b) => a.queueNumber - b.queueNumber);
    }
    return groups;
  }, [waitingList]);

  return (
    <Container fluid className="p-4">
      <Row className="mb-4">
        <Col>
          <h2 className="admin-page-title"><FaListOl className="me-2" /> Waiting List Management</h2>
        </Col>
      </Row>

      {loading && <Alert variant='info'>Loading...</Alert>}
      {!loading && Object.keys(groupedByDoctor).length === 0 && <Alert variant='info'>The waiting list is currently empty.</Alert>}

      <Row>
        {Object.entries(groupedByDoctor).map(([doctorName, patients]) => (
          <Col md={6} lg={4} key={doctorName} className="mb-4">
            <Card className="admin-card h-100">
              <Card.Header className="d-flex justify-content-between align-items-center">
                <span className="fw-bold">{doctorName}'s Queue</span>
                <Button variant="primary" size="sm" onClick={() => handleCallNext(doctorName)}>
                  Call Next
                </Button>
              </Card.Header>
              <Card.Body>
                <Table hover responsive className="waiting-list-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Patient Name</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patients.map(p => (
                      <tr key={p.id} className={p.status === 'Serving' ? 'table-success' : ''}>
                        <td className="fw-bold">{p.queueNumber}</td>
                        <td>{p.patientName}</td>
                        <td>{getStatusBadge(p.status)}</td>
                        <td>
                          {p.status === 'Waiting' &&
                            <Button variant="outline-danger" size="sm" onClick={() => handleRemove(p.id)}>
                              <FaUserSlash/>
                            </Button>
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default WaitingListManagementPage;