import React, { useEffect, useState } from 'react';
import { getPrescriptionsByPatientId } from '../services/api';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';

const MyPrescriptionsPage = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  const patientId = localStorage.getItem('patientId');

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const fetchPrescriptions = async () => {
    try {
      const { data } = await getPrescriptionsByPatientId(patientId);
      setPrescriptions(data);
    } catch (err) {
      toast.error('Failed to load prescriptions');
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <Container className="py-5">
  <h3 className="mb-4">Your Prescriptions</h3>

  {loading ? (
    <div className="text-center my-5">
      <Spinner animation="border" />
    </div>
  ) : prescriptions.length === 0 ? (
    <p className="text-muted">No prescriptions found.</p>
  ) : (
    prescriptions.map(p => (
      <Card key={p.id} className="mb-4 shadow-sm">
        <Card.Body>
          <div className="d-flex justify-content-between mb-3">
            <div>
              <h5 className="mb-1">{new Date(p.createdAt).toLocaleDateString()}</h5>
              <div className="text-muted">Prescription #{p.id}</div>
              <Badge bg="success" className="mt-2">Active</Badge>
            </div>
            <div className="text-end">
              <h5 className="mb-0">Dr. {p.prescribedBy}</h5>
              <div className="text-muted">General Medicine</div>
            </div>
          </div>

          <hr />

          <div className="mb-3">
            <strong>Diagnosis:</strong>
            <p className="mb-0">{p.diagnosis || "N/A"}</p>
          </div>

          <h5 className="mt-4 mb-3">Medications (Valid until: {getValidUntilDate(p.createdAt, 7)})</h5>

          {p.prescriptionDetails.map((d, idx) => (
            <Card key={idx} className="mb-3 shadow-sm border-0">
              <Card.Body>
                <h6 className="fw-bold mb-1">{getMedicineNameById(d.medicineID)}</h6>
                <div className="text-muted mb-1">{d.dosage}</div>
                <div className="text-muted mb-1">Instructions: {d.instructions}</div>
                <div className="small text-muted">Quantity: {d.quantity}</div>
              </Card.Body>
            </Card>
          ))}
        </Card.Body>
      </Card>
    ))
  )}
</Container>
  );
};

export default MyPrescriptionsPage;
