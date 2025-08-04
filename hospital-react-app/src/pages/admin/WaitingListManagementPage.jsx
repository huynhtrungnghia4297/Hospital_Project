import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container, Row, Col, Card, Button, Table, Badge, Alert, Form
} from 'react-bootstrap';
import { FaListOl } from 'react-icons/fa';
import {
  getAllWaitingList,
  getAppointmentById,
  updateWaitingEntry
} from '../../services/api';

function WaitingListManagementPage() {
  const [waitingList, setWaitingList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingStatus, setEditingStatus] = useState({}); // lưu trạng thái đang chọn

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllWaitingList();
        const listWithNames = await Promise.all(res.data.map(async item => {
          try {
            const appt = await getAppointmentById(item.appointmentID);
            return {
              ...item,
              patientName: appt.data.patientName || 'N/A'
            };
          } catch {
            return { ...item, patientName: 'N/A' };
          }
        }));
        setWaitingList(listWithNames);
      } catch {
        setWaitingList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const statusOptions = [
    'Đang chờ',
    'Đã gọi',
    'Đang khám',
    'Hoàn tất',
    'Đã huỷ'
  ];

  const handleChangeStatus = (id, value) => {
    setEditingStatus(prev => ({ ...prev, [id]: value }));
  };

  const handleSave = async (entry) => {
    const newStatus = editingStatus[entry.id];
    if (!newStatus || newStatus === entry.status) return;

    const updatedEntry = {
      id: entry.id,
      appointmentID: entry.appointmentID,
      queueNumber: entry.queueNumber,
      status: newStatus
    };

    try {
      await updateWaitingEntry(entry.id, updatedEntry);
      setWaitingList(prev =>
        prev.map(p => (p.id === entry.id ? { ...p, status: newStatus } : p))
      );
    } catch (err) {
      alert('Lỗi khi cập nhật trạng thái!');
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Đang chờ': return <Badge bg="warning" text="dark">Đang chờ</Badge>;
      case 'Đã gọi': return <Badge bg="primary">Đã gọi</Badge>;
      case 'Đang khám': return <Badge bg="info">Đang khám</Badge>;
      case 'Hoàn tất': return <Badge bg="success">Hoàn tất</Badge>;
      case 'Đã huỷ': return <Badge bg="danger">Đã huỷ</Badge>;
      default: return <Badge bg="secondary">{status}</Badge>;
    }
  };

  const sortedList = [...waitingList].sort((a, b) => a.queueNumber - b.queueNumber);

  return (
    <Container fluid className="p-4">
      <Row className="mb-4">
        <Col>
          <h2 className="admin-page-title">
            <FaListOl className="me-2" /> Quản lý danh sách chờ
          </h2>
        </Col>
      </Row>

      {loading && <Alert variant="info">Đang tải dữ liệu...</Alert>}
      {!loading && sortedList.length === 0 && (
        <Alert variant="info">Không có bệnh nhân trong danh sách chờ.</Alert>
      )}

      <Row>
        <Col xs={12}>
          <Card className="admin-card w-100">
            <Card.Header className="fw-bold">Danh sách bệnh nhân</Card.Header>
            <Card.Body>
              <Table hover responsive className="waiting-list-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Bệnh nhân</th>
                    <th>Trạng thái</th>
                    <th>Chỉnh sửa</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedList.map(p => (
                    <tr key={p.id}>
                      <td className="fw-bold">{p.queueNumber}</td>
                      <td>{p.patientName}</td>
                      <td>{getStatusBadge(p.status)}</td>
                      <td>
                        <Form.Select
                          value={editingStatus[p.id] || p.status}
                          onChange={(e) => handleChangeStatus(p.id, e.target.value)}
                          className="mb-2"
                          style={{ maxWidth: '180px', display: 'inline-block' }}
                        >
                          {statusOptions.map(status => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </Form.Select>
                        <Button
                          size="sm"
                          variant="primary"
                          onClick={() => handleSave(p)}
                          disabled={!editingStatus[p.id] || editingStatus[p.id] === p.status}
                        >
                          Lưu
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default WaitingListManagementPage;
