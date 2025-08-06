import React, { useState, useEffect } from 'react';
import { 
  Table, 
  Button, 
  Modal, 
  Form, 
  Input, 
  Select, 
  DatePicker, 
  TimePicker, 
  Space, 
  message, 
  Popconfirm, 
  Tag, 
  Tooltip, 
  Card, 
  Row, 
  Col, 
  Calendar, 
  Badge,
  List, 
  Typography,
  Tabs,
  Alert,
  Descriptions
} from 'antd';
import { 
  InfoCircleOutlined, 
  CalendarOutlined, 
  DollarOutlined, 
  UserOutlined, 
  MedicineBoxOutlined, 
  BranchesOutlined 
} from '@ant-design/icons';
import axios from 'axios';
import dayjs from 'dayjs';
import { API_BASE_URL } from '../../services/api';

const { Title, Text } = Typography;

const AppointmentManagementPage = () => {
  // States
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingId, setEditingId] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [doctorSchedules, setDoctorSchedules] = useState([]);
  const [medicalPackages, setMedicalPackages] = useState([]);
  const [medicalServices, setMedicalServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [doctorDetails, setDoctorDetails] = useState(null);
  const [branchDetails, setBranchDetails] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Handle appointment confirmation
  const handleConfirm = async (id) => {
    try {
      await axios.put(`${API_BASE_URL}/Appointment/${id}/confirm`);
      message.success('Appointment confirmed successfully');
      fetchData();
    } catch (error) {
      console.error('Error confirming appointment:', error);
      message.error('Failed to confirm appointment');
    }
  };

  // Check if all invoices are paid and update status to Completed
  const checkAndUpdateStatus = async (appointmentId) => {
    try {
      // Fetch all invoices for this appointment
      const invoicesRes = await axios.get(`${API_BASE_URL}/Invoices/appointment/${appointmentId}`);
      const invoices = invoicesRes.data;
      
      // Check if all invoices are paid
      const allPaid = invoices.every(invoice => invoice.status === 'Paid');
      
      if (allPaid && invoices.length > 0) {
        // Update appointment status to Completed
        await axios.put(`${API_BASE_URL}/Appointment/${appointmentId}/complete`);
        message.success('Appointment marked as completed');
        fetchData();
      }
    } catch (error) {
      console.error('Error checking invoices:', error);
    }
  };

  // Handle appointment cancellation
  const handleCancel = async (id) => {
    try {
      await axios.put(`${API_BASE_URL}/Appointment/cancel/${id}`);
      message.success('Appointment cancelled successfully');
      fetchData();
    } catch (error) {
      console.error('Error cancelling appointment:', error);
      message.error('Failed to cancel appointment');
    }
  };

  // Table columns configuration
  const columns = [
    {
      title: 'Appointment No',
      dataIndex: 'appointmentNo',
      key: 'appointmentNo',
    },
    {
      title: 'Patient',
      dataIndex: 'patientName',
      key: 'patientName',
      render: (text, record) => (
        <span>
          {text}
          {record.note && (
            <Tooltip title={record.note}>
              <InfoCircleOutlined style={{ marginLeft: 8, color: '#1890ff' }} />
            </Tooltip>
          )}
        </span>
      ),
    },
    {
      title: 'Doctor',
      dataIndex: 'doctorName',
      key: 'doctorName',
      render: (text, record) => (
        <span>
          {text}
          {record.specialization && <Tag color="blue" style={{ marginLeft: 8 }}>{record.specialization}</Tag>}
        </span>
      ),
    },
    {
      title: 'Branch',
      dataIndex: 'branchName',
      key: 'branchName',
    },
    {
      title: 'Date',
      dataIndex: 'appointmentDate',
      key: 'appointmentDate',
      render: (date) => {
        const appointmentDate = dayjs(date);
        const today = dayjs();
        const isPast = appointmentDate.isBefore(today, 'day');
        const isToday = appointmentDate.isSame(today, 'day');
        
        return (
          <Tag color={isPast ? 'red' : isToday ? 'green' : 'blue'}>
            {appointmentDate.format('DD/MM/YYYY')}
          </Tag>
        );
      },
      sorter: (a, b) => dayjs(a.appointmentDate).unix() - dayjs(b.appointmentDate).unix(),
    },
    {
      title: 'Time',
      key: 'time',
      render: (_, record) => (
        <Space>
          <Tag color="purple">{record.startTime}</Tag>
          <span>-</span>
          <Tag color="purple">{record.endTime}</Tag>
        </Space>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={statusColors[status] || 'default'}>
          {status}
        </Tag>
      ),
      filters: [
        { text: 'Pending', value: 'Pending' },
        { text: 'Confirmed', value: 'Confirmed' },
        { text: 'Cancelled', value: 'Cancelled' },
        { text: 'Completed', value: 'Completed' },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => {
        const appointmentDate = dayjs(record.appointmentDate);
        const today = dayjs();
        const isPastAppointment = appointmentDate.isBefore(today, 'day');

        if (isPastAppointment) {
          return (
            <Tag color="default">No actions available</Tag>
          );
        }

        return (
          <Space>
            {record.status === 'Pending' && (
              <Button type="primary" onClick={() => handleConfirm(record.id)}>
                Confirm
              </Button>
            )}
            {record.status === 'Confirmed' && (
              <Button type="primary" onClick={() => checkAndUpdateStatus(record.id)}>
                Check Payment
              </Button>
            )}
            {record.status !== 'Cancelled' && record.status !== 'Completed' && (
              <Popconfirm
                title="Are you sure you want to cancel this appointment?"
                onConfirm={() => handleCancel(record.id)}
                okText="Yes"
                cancelText="No"
              >
                <Button type="default" danger>
                  Cancel
                </Button>
              </Popconfirm>
            )}
          </Space>
        );
      },
    },
  ];

  // Status colors mapping
  const statusColors = {
    'Pending': 'gold',
    'Confirmed': 'green',
    'Cancelled': 'red',
    'Completed': 'blue'
  };

  // Fetch all data
  const fetchData = async () => {
    setLoading(true);
    try {
      const [appointmentsRes, doctorsRes, patientsRes, branchesRes, packagesRes, servicesRes] = await Promise.all([
        axios.get(`${API_BASE_URL}/Appointment`),
        axios.get(`${API_BASE_URL}/Doctor`),
        axios.get(`${API_BASE_URL}/Patient`),
        axios.get(`${API_BASE_URL}/Branch`),
        axios.get(`${API_BASE_URL}/MedicalPackage`),
        axios.get(`${API_BASE_URL}/MedicalService`)
      ]);

      setAppointments(appointmentsRes.data);
      setDoctors(doctorsRes.data);
      setPatients(patientsRes.data);
      setBranches(branchesRes.data);
      setMedicalPackages(packagesRes.data);
      setMedicalServices(servicesRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      message.error('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  // Handle branch selection
  const handleBranchChange = async (value) => {
    setSelectedBranch(value);
    form.setFieldsValue({ doctorId: undefined });
    setSelectedDoctor(null);
    setDoctorDetails(null);
    setDoctorSchedules([]);
    
    try {
      // Fetch branch details
      const branchResponse = await axios.get(`${API_BASE_URL}/Branch/${value}`);
      setBranchDetails(branchResponse.data);
      
      // Fetch doctors for the branch
      const doctorsResponse = await axios.get(`${API_BASE_URL}/Doctor/branchId/${value}`);
      setDoctors(doctorsResponse.data);
    } catch (error) {
      console.error('Error fetching branch data:', error);
      message.error('Failed to fetch branch data');
    }
  };

  // Handle doctor selection
  const handleDoctorChange = async (value) => {
    console.log('Selected doctor:', value);
    setSelectedDoctor(value);
    form.setFieldsValue({ 
      appointmentDate: null,
      startTime: null,
      endTime: null 
    });
    setSelectedSlot(null);
    if (value) {
      try {
        const response = await axios.get(`${API_BASE_URL}/DoctorSchedule/doctor/${value}`);
        console.log('Doctor schedules:', response.data);
        setDoctorSchedules(response.data);
        
        // Find doctor details
        const doctor = doctors.find(d => d.id === parseInt(value));
        console.log('Doctor details:', doctor);
        setDoctorDetails(doctor);
      } catch (error) {
        console.error('Error fetching doctor schedules:', error);
        message.error('Failed to fetch doctor schedules');
      }
    } else {
      setDoctorSchedules([]);
      setDoctorDetails(null);
    }
  };

  // Check if doctor is available on a specific date
  const isDoctorAvailable = (date) => {
    if (!doctorSchedules || !doctorSchedules.length) return false;
    
    const selectedDateStr = date.format('YYYY-MM-DD');
    return doctorSchedules.some(schedule => {
      const scheduleDate = dayjs(schedule.date).format('YYYY-MM-DD');
      return scheduleDate === selectedDateStr;
    });
  };

  // Handle date selection
  const handleDateSelect = (date) => {
    console.log('Selected date:', date.format('YYYY-MM-DD'));
    setSelectedDate(date);
    form.setFieldsValue({ 
      startTime: null,
      endTime: null 
    });
    setSelectedSlot(null);

    // Get available slots for the selected date
    if (selectedDoctor) {
      const selectedDateStr = date.format('YYYY-MM-DD');
      console.log('Looking for schedules on:', selectedDateStr);
      console.log('All doctor schedules:', doctorSchedules);

      const filtered = doctorSchedules.filter(schedule => {
        const scheduleDate = schedule.date.split('T')[0];
        return scheduleDate === selectedDateStr;
      });

      console.log('Filtered schedules:', filtered);

      // Convert to Date objects for time slots
      const slots = filtered.map(schedule => {
        return {
          id: schedule.id,
          startTime: new Date(`${schedule.date.split('T')[0]}T${schedule.startTime}`),
          endTime: new Date(`${schedule.date.split('T')[0]}T${schedule.endTime}`)
        };
      });

      console.log('Generated slots:', slots);
      setAvailableSlots(slots);
    }
  };

  // Handle time slot selection
  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    form.setFieldsValue({
      startTime: slot.startTime,
      endTime: slot.endTime
    });
  };

  // Handle form submission
  const handleSubmit = async (values) => {
    try {
      const formData = {
        patientId: values.patientId,
        doctorId: values.doctorId,
        branchId: values.branchId,
        appointmentDate: selectedDate.format('YYYY-MM-DD'),
        startTime: selectedSlot.startTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        }),
        endTime: selectedSlot.endTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        }),
        note: values.note,
        servicePackage: selectedPackage?.name || '',
        packagePrice: selectedPackage?.price || 0,
        status: 'Pending' // Mặc định là chờ xác nhận
      };

      if (editingId) {
        await axios.put(`${API_BASE_URL}/Appointment/${editingId}`, formData);
        message.success('Appointment updated successfully');
      } else {
        const appointmentRes = await axios.post(`${API_BASE_URL}/Appointment`, formData);
        const appointmentId = appointmentRes.data?.id;

        if (!appointmentId) throw new Error('Could not get appointment ID');

        // Create invoice if package is selected
        if (selectedPackage) {
          const invoiceDetails = selectedPackage.items.map(item => ({
            itemType: item.itemType,
            itemId: item.itemId,
            description: item.itemName,
            quantity: 1,
            unitPrice: item.itemPrice,
            totalPrice: item.itemPrice * 1,
          }));

          const totalAmount = invoiceDetails.reduce(
            (sum, item) => sum + item.unitPrice * item.quantity,
            0
          );

          await axios.post(`${API_BASE_URL}/Invoices/createdetails`, {
            appointmentId,
            patientId: values.patientId,
            totalAmount,
            status: 'Unpaid',
            note: `Invoice for appointment on ${formData.appointmentDate}`,
            invoiceDetails,
          });
        }

        message.success('Appointment created successfully');
      }

      setModalVisible(false);
      form.resetFields();
      setEditingId(null);
      setSelectedDoctor(null);
      setSelectedBranch(null);
      setSelectedPackage(null);
      setDoctorDetails(null);
      setBranchDetails(null);
      setDoctorSchedules([]);
      setAvailableSlots([]);
      fetchData();
    } catch (error) {
      console.error('Error submitting form:', error);
      message.error('Failed to save appointment');
    }
  };

  // Initial data fetch
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Appointment Management</h1>
        <Button type="primary" onClick={() => {
          setEditingId(null);
          form.resetFields();
          setModalVisible(true);
        }}>
          Create New Appointment
        </Button>
      </div>

      <Table
        loading={loading}
        columns={columns}
        dataSource={appointments}
        rowKey="id"
        pagination={{
          showSizeChanger: true,
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} appointments`,
        }}
      />

      <Modal
        title={editingId ? 'Edit Appointment' : 'Create New Appointment'}
        open={modalVisible}
        onCancel={() => {
          setModalVisible(false);
          form.resetFields();
          setEditingId(null);
          setSelectedDoctor(null);
          setSelectedBranch(null);
          setSelectedPackage(null);
          setDoctorDetails(null);
          setBranchDetails(null);
          setDoctorSchedules([]);
          setAvailableSlots([]);
        }}
        footer={null}
        width={1200}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
        >
          <Row gutter={24}>
            <Col span={12}>
              <Card title={<><BranchesOutlined /> Branch & Doctor Selection</>}>
                <Form.Item
                  name="branchId"
                  label="Branch"
                  rules={[{ required: true, message: 'Please select a branch' }]}
                >
                  <Select 
                    placeholder="Select branch"
                    onChange={handleBranchChange}
                    disabled={loading}
                  >
                    {branches.map(branch => (
                      <Select.Option key={branch.id} value={branch.id}>
                        {branch.name}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  name="doctorId"
                  label="Doctor"
                  rules={[{ required: true, message: 'Please select a doctor' }]}
                >
                  <Select 
                    placeholder="Select doctor"
                    onChange={handleDoctorChange}
                    disabled={!selectedBranch || loading}
                  >
                    {doctors.map(doctor => (
                      <Select.Option key={doctor.id} value={doctor.id}>
                        {doctor.fullName} - {doctor.specialization}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                {doctorDetails && (
                  <Alert
                    message="Doctor Information"
                    description={
                      <>
                        <p><strong>Specialization:</strong> {doctorDetails.specialization}</p>
                        <p><strong>Experience:</strong> {doctorDetails.experience || 'N/A'} years</p>
                      </>
                    }
                    type="info"
                    showIcon
                  />
                )}
              </Card>

              <Card title={<><UserOutlined /> Patient Selection</>} style={{ marginTop: 16 }}>
                <Form.Item
                  name="patientId"
                  label="Patient"
                  rules={[{ required: true, message: 'Please select a patient' }]}
                >
                  <Select 
                    placeholder="Select patient"
                    showSearch
                    optionFilterProp="children"
                  >
                    {patients.map(patient => (
                      <Select.Option key={patient.id} value={patient.id}>
                        {patient.fullName}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Card>

              <Card title={<><MedicineBoxOutlined /> Medical Package</>} style={{ marginTop: 16 }}>
                <Tabs defaultActiveKey="1">
                  <Tabs.TabPane tab="Medical Packages" key="1">
                    <List
                      dataSource={medicalPackages}
                      renderItem={item => (
                        <List.Item
                          actions={[
                            <Button 
                              type={selectedPackage?.id === item.id ? 'primary' : 'default'}
                              onClick={() => setSelectedPackage(item)}
                            >
                              Select
                            </Button>
                          ]}
                        >
                          <List.Item.Meta
                            title={item.name}
                            description={
                              <>
                                <Text>{item.description}</Text>
                                <br />
                                <Text type="success">${item.price}</Text>
                              </>
                            }
                          />
                        </List.Item>
                      )}
                    />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Medical Services" key="2">
                    <List
                      dataSource={medicalServices}
                      renderItem={item => (
                        <List.Item>
                          <List.Item.Meta
                            title={item.name}
                            description={
                              <>
                                <Text>{item.description}</Text>
                                <br />
                                <Text type="success">${item.price}</Text>
                              </>
                            }
                          />
                        </List.Item>
                      )}
                    />
                  </Tabs.TabPane>
                </Tabs>
              </Card>
            </Col>

            <Col span={12}>
              <Card title={<><CalendarOutlined /> Appointment Date & Time</>}>
                <Calendar
                  fullscreen={false}
                  value={selectedDate}
                  onChange={handleDateSelect}
                  disabledDate={(current) => {
                    if (!selectedDoctor) return true;
                    return !isDoctorAvailable(current) || current < dayjs().startOf('day');
                  }}
                  dateFullCellRender={(date) => {
                    const isAvailable = isDoctorAvailable(date);
                    const isSelected = selectedDate && date.isSame(selectedDate, 'day');
                    const isPast = date.isBefore(dayjs().startOf('day'));
                    
                    return (
                      <div
                        className={`ant-picker-cell-inner ${isSelected ? 'ant-picker-cell-selected' : ''}`}
                        style={{
                          position: 'relative',
                          height: '100%',
                          padding: '4px',
                          backgroundColor: isSelected ? '#1890ff' : isAvailable && !isPast ? '#f6ffed' : undefined,
                          color: isSelected ? 'white' : isPast ? '#ccc' : undefined,
                          border: isAvailable && !isPast && !isSelected ? '1px solid #b7eb8f' : undefined,
                          borderRadius: '2px'
                        }}
                      >
                        <div>{date.date()}</div>
                        {isAvailable && !isPast && (
                          <div style={{ fontSize: '10px', color: isSelected ? 'white' : '#52c41a' }}>
                            Available
                          </div>
                        )}
                      </div>
                    );
                  }}
                />

                <div style={{ marginTop: 16 }}>
                  <Title level={5}>Available Time Slots</Title>
                  {loading ? (
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                      Loading...
                    </div>
                  ) : availableSlots.length > 0 ? (
                    <Space wrap>
                      {availableSlots.map((slot, index) => (
                        <Button
                          key={index}
                          type={selectedSlot === slot ? 'primary' : 'default'}
                          onClick={() => handleSlotSelect(slot)}
                          style={{ margin: '4px' }}
                        >
                          {slot.startTime.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: false
                          })} - {slot.endTime.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: false
                          })}
                        </Button>
                      ))}
                    </Space>
                  ) : (
                    <Alert
                      message="No available slots"
                      description={selectedDoctor ? "Please select another date" : "Please select a doctor first"}
                      type="info"
                      showIcon
                    />
                  )}
                </div>

                <Form.Item
                  name="note"
                  label="Note"
                  style={{ marginTop: 16 }}
                >
                  <Input.TextArea rows={4} placeholder="Additional notes for the appointment..." />
                </Form.Item>
              </Card>

              {selectedPackage && selectedDoctor && selectedDate && selectedSlot && (
                <Card title="Appointment Summary" style={{ marginTop: 16 }}>
                  <Descriptions column={1}>
                    <Descriptions.Item label="Branch">
                      {branchDetails?.name}
                    </Descriptions.Item>
                    <Descriptions.Item label="Doctor">
                      {doctorDetails?.fullName} - {doctorDetails?.specialization}
                    </Descriptions.Item>
                    <Descriptions.Item label="Date">
                      {selectedDate.format('DD/MM/YYYY')}
                    </Descriptions.Item>
                    <Descriptions.Item label="Time">
                      {selectedSlot.startTime.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false
                      })} - {selectedSlot.endTime.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false
                      })}
                    </Descriptions.Item>
                    <Descriptions.Item label="Package">
                      {selectedPackage.name}
                    </Descriptions.Item>
                    <Descriptions.Item label="Price">
                      <Text type="success">${selectedPackage.price}</Text>
                    </Descriptions.Item>
                  </Descriptions>
                </Card>
              )}
            </Col>
          </Row>

          <div style={{ textAlign: 'right', marginTop: 16 }}>
            <Space>
              <Button onClick={() => {
                setModalVisible(false);
                form.resetFields();
                setEditingId(null);
                setSelectedDoctor(null);
                setSelectedBranch(null);
                setSelectedPackage(null);
                setDoctorDetails(null);
                setBranchDetails(null);
                setDoctorSchedules([]);
                setAvailableSlots([]);
              }}>
                Cancel
              </Button>
              <Button 
                type="primary" 
                htmlType="submit"
                disabled={!form.getFieldValue('patientId') || !selectedDoctor || !selectedDate || !selectedSlot || !selectedBranch}
              >
                {editingId ? 'Update' : 'Create'} Appointment
              </Button>
            </Space>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AppointmentManagementPage;