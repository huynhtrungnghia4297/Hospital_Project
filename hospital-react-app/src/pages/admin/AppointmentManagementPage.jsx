import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Pagination, Badge, Row, Col } from 'react-bootstrap';
import Avatar from '../../components/common/Avatar';
import { FaUserMd, FaUserInjured, FaCalendarAlt, FaClock, FaStethoscope, FaInfoCircle, FaBirthdayCake, FaPhone, FaEnvelope } from 'react-icons/fa';
import { getAllAppointments } from '../../services/api';

const AppointmentManagementPage = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const appointmentsPerPage = 5;

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const res = await getAllAppointments();
                setAppointments(res.data);
            } catch (error) {
                setAppointments([]);
            } finally {
                setLoading(false);
            }
        };
        fetchAppointments();
    }, []);

    const handleShowModal = (appointment) => {
        setSelectedAppointment(appointment);
        setShowModal(true);
    };
    const handleCloseModal = () => setShowModal(false);

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Đã xác nhận': return 'primary';
            case 'Hoàn thành': return 'success';
            case 'Đã hủy':
            case 'Cancelled': return 'danger';
            case 'Chờ xác nhận': return 'warning';
            default: return 'secondary';
        }
    };

    const formatDate = (dateStr) => {
        if (!dateStr || dateStr.startsWith('0001')) return 'N/A';
        return new Date(dateStr).toLocaleDateString('vi-VN');
    };

    const indexOfLastAppointment = currentPage * appointmentsPerPage;
    const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
    const currentAppointments = appointments.slice(indexOfFirstAppointment, indexOfLastAppointment);
    const totalPages = Math.ceil(appointments.length / appointmentsPerPage);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="admin-header"><h1>Quản lý Lịch hẹn</h1></div>
            <div className="admin-card">
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Bệnh nhân</th>
                            <th>Bác sĩ</th>
                            <th>Ngày</th>
                            <th>Giờ</th>
                            <th className="text-center">Trạng thái</th>
                            <th className="text-center">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentAppointments.map(apt => (
                            <tr key={apt.id}>
                                <td>{apt.id}</td>
                                <td>{apt.patientName || 'N/A'}</td>
                                <td>{apt.doctorName || 'N/A'}</td>
                                <td>{formatDate(apt.appointmentDate)}</td>
                                <td>{apt.startTime || 'N/A'}</td>
                                <td className="text-center">
                                    <Badge bg={getStatusBadge(apt.status)}>{apt.status}</Badge>
                                </td>
                                <td className="text-center">
                                    <Button variant="outline-info" size="sm" onClick={() => handleShowModal(apt)}>Xem chi tiết</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                {totalPages > 1 && (
                    <Pagination className="justify-content-center">
                        {[...Array(totalPages).keys()].map(number => (
                            <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
                                {number + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                )}
            </div>

            <AppointmentDetailModal
                show={showModal}
                onHide={handleCloseModal}
                appointment={selectedAppointment}
                getStatusBadge={getStatusBadge}
                formatDate={formatDate}
            />
        </div>
    );
};

const AppointmentDetailModal = ({ show, onHide, appointment, getStatusBadge, formatDate }) => {
    if (!appointment) return null;

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Chi tiết Lịch hẹn #{appointment.id}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="appointment-modal-body">
                <Row className="g-4">
                    <Col xs={6} className="d-flex">
                        <div className="info-block h-100 w-100">
                            <div className="avatar-container">
                                <Avatar src={null} name={appointment.patientName} size={90} />
                            </div>
                            <div className="name">{appointment.patientName || 'N/A'}</div>
                            <div className="specialty text-muted"><FaUserInjured className="me-2" /> Bệnh nhân</div>
                            <div className="info-block-detail"><FaBirthdayCake /> N/A</div>
                            <div className="info-block-detail"><FaPhone /> N/A</div>
                        </div>
                    </Col>
                    <Col xs={6} className="d-flex">
                        <div className="info-block h-100 w-100">
                            <div className="avatar-container">
                                <Avatar src={null} name={appointment.doctorName} size={90} />
                            </div>
                            <div className="name">{appointment.doctorName || 'N/A'}</div>
                            <div className="specialty text-muted"><FaUserMd className="me-2" /> {appointment.specialization || 'N/A'}</div>
                            <div className="info-block-detail"><FaEnvelope /> N/A</div>
                        </div>
                    </Col>
                </Row>

                <div className="details-block">
                    <div className="detail-item"><div className="detail-item-icon"><FaCalendarAlt /></div><div><strong>Ngày:</strong> {formatDate(appointment.appointmentDate)}</div></div>
                    <div className="detail-item"><div className="detail-item-icon"><FaClock /></div><div><strong>Giờ:</strong> {appointment.startTime || 'N/A'}</div></div>
                    <div className="detail-item"><div className="detail-item-icon"><FaStethoscope /></div><div><strong>Lý do khám:</strong> {appointment.note || 'N/A'}</div></div>
                    <div className="detail-item"><div className="detail-item-icon"><FaInfoCircle /></div><div><strong>Trạng thái:</strong> <Badge bg={getStatusBadge(appointment.status)}>{appointment.status}</Badge></div></div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Đóng</Button>
                {appointment.status === 'Chờ xác nhận' && (
                    <>
                        <Button variant="success">Xác nhận</Button>
                        <Button variant="danger">Hủy lịch</Button>
                    </>
                )}
            </Modal.Footer>
        </Modal>
    );
};

export default AppointmentManagementPage;
