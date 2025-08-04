import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col, Badge } from 'react-bootstrap';
import { getPrescriptionsByPatientId, getPatientByUserId } from '../services/api';
import { toast } from 'react-toastify';

const PrescriptionPage = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const authData = JSON.parse(localStorage.getItem('authData'));
        const userId = authData?.userId;

        if (!userId) {
          toast.error('User not logged in');
          return;
        }

        // Lấy patientId từ userId
        const patientRes = await getPatientByUserId(userId);
        const patientId = patientRes.data.id;

        // Lấy danh sách đơn thuốc theo patientId
        const res = await getPrescriptionsByPatientId(patientId);
        setPrescriptions(res.data);
      } catch (error) {
        console.error('Error fetching prescriptions:', error);
        toast.error('Failed to load prescriptions');
      } finally {
        setLoading(false);
      }
    };

    fetchPrescriptions();
  }, []);

  if (loading) return <p className="text-center mt-5">Loading prescriptions...</p>;

  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Your Prescriptions</h2>

      {prescriptions.length === 0 ? (
        <p className="text-center text-muted">No prescriptions found.</p>
      ) : (
        prescriptions.map((prescription) => (
          <Card key={prescription.id} className="mb-4 shadow-sm">
            <Card.Body>
              <Row>
                <Col md={6}>
                  <p className="mb-1"><strong>Prescribed by:</strong> {prescription.prescribedBy}</p>
                  <p className="mb-1"><strong>Date:</strong> {new Date(prescription.createdAt).toLocaleDateString()}</p>
                  {prescription.medicalRecord && (
                    <p className="mb-1"><strong>Diagnosis:</strong> {prescription.medicalRecord.diagnosis}</p>
                  )}
                </Col>
                <Col md={6} className="text-md-end">
                  <Badge bg="info">Prescription #{prescription.id}</Badge>
                </Col>
              </Row>

              <hr />

              <h6 className="mb-3">Medications:</h6>
              {prescription.details?.map((item, idx) => (
                <div key={idx} className="mb-3 p-2 border rounded bg-light">
                  <p className="mb-1"><strong>Medicine ID:</strong> {item.medicineID}</p>
                  <p className="mb-1"><strong>Dosage:</strong> {item.dosage}</p>
                  <p className="mb-1"><strong>Quantity:</strong> {item.quantity}</p>
                  <p className="mb-1"><strong>Instructions:</strong> {item.instructions}</p>
                </div>
              ))}
            </Card.Body>
          </Card>
        ))
      )}
    </Container>
  );
};

export default PrescriptionPage;
