import React, { useEffect, useState } from "react";
import { getInvoicesByPatientId } from "../services/api";
import { toast } from "react-toastify";

const PatientInvoicePage = ({ patientIdProp }) => {
  const [invoices, setInvoices] = useState([]);
  const patientId = patientIdProp || localStorage.getItem("patientId");

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        if (!patientId) {
          toast.error("Patient ID not found.");
          return;
        }
        const res = await getInvoicesByPatientId(patientId);
        setInvoices(res.data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch invoices.");
      }
    };
    fetchInvoices();
  }, [patientId]);

  const getStatusColor = (status) => {
    const lower = status.toLowerCase();
    if (lower === "paid") return "bg-green-500";
    if (lower === "pending") return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-6">My Invoices</h1>
      {invoices.length === 0 ? (
        <p className="text-center text-gray-600">No invoices available.</p>
      ) : (
        invoices.map((invoice) => (
          <div key={invoice.id} className="border rounded-lg shadow-lg p-5 hover:shadow-xl transition space-y-3">
            <div className="flex justify-between">
              <div>
                <h2 className="text-xl font-bold text-blue-700">Invoice #{invoice.id}</h2>
                <p className="text-gray-500">Issued Date: {new Date(invoice.issuedDate).toLocaleDateString()}</p>
                <p className="text-gray-700 mt-1">{invoice.note || "No additional notes"}</p>
              </div>
              <div className="text-right space-y-1">
                <p className="text-2xl font-bold text-green-600">${invoice.totalAmount.toFixed(2)}</p>
                <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full text-white ${getStatusColor(invoice.status)}`}>
                  {invoice.status}
                </span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-md p-3">
              <p className="font-medium mb-2 text-gray-800">Invoice Details:</p>
              {invoice.invoiceDetails.map((item) => (
                <div key={item.id} className="flex justify-between text-sm border-b py-1 last:border-b-0">
                  <span className="text-gray-700">{item.description || item.itemType}</span>
                  <span className="text-gray-600">${item.unitPrice.toFixed(2)} x {item.quantity}</span>
                </div>
              ))}
            </div>

            {invoice.payments.length > 0 && (
              <p className="text-sm text-gray-500 italic">
                Paid via {invoice.payments[0].paymentMethod} on{" "}
                {new Date(invoice.payments[0].paymentDate).toLocaleDateString()}
              </p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default PatientInvoicePage;
