import React, { useState } from "react";

const initialDoctors = [
  {
    id: "#d1001",
    name: "Dr. Johen Doe",
    specialty: "Cardiologist",
    status: "Active",
    room: "Room 101",
  },
  {
    id: "#d1002",
    name: "Dr. Aiden Smith",
    specialty: "Neurologist",
    status: "On Leave",
    room: "Room 102",
  },
  {
    id: "#d1003",
    name: "Dr. Emily Clark",
    specialty: "Pediatrician",
    status: "Active",
    room: "Room 103",
  },
];

const Doctor = () => {
  const [doctors, setDoctors] = useState(initialDoctors);
  const [showPopup, setShowPopup] = useState(false);
  const [currentDoctor, setCurrentDoctor] = useState(null);

  const handleAdd = () => {
    setCurrentDoctor({
      id: "",
      name: "",
      specialty: "",
      status: "Active",
      room: "",
    });
    setShowPopup(true);
  };

  const handleEdit = (id) => {
    const doctor = doctors.find((doc) => doc.id === id);
    setCurrentDoctor(doctor);
    setShowPopup(true);
  };

  const handleSave = () => {
    if (currentDoctor.id) {
      // Update existing doctor
      setDoctors((prevDoctors) =>
        prevDoctors.map((doc) =>
          doc.id === currentDoctor.id ? currentDoctor : doc
        )
      );
    } else {
      // Add new doctor
      setDoctors((prevDoctors) => [
        ...prevDoctors,
        { ...currentDoctor, id: `#d${Math.floor(Math.random() * 10000)}` },
      ]);
    }
    setShowPopup(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this doctor?")) {
      setDoctors(doctors.filter((doctor) => doctor.id !== id));
    }
  };

  return (
    <section className="content">
      <div className="row">
        <div className="col-12">
          <div className="box">
            <div className="box-header d-flex justify-content-between align-items-center">
              <h4 className="box-title">Doctor Management</h4>
              <button className="btn btn-primary" onClick={handleAdd}>
                Add Doctor
              </button>
            </div>
            <div className="box-body">
              <div className="table-responsive rounded card-table">
                <table className="table border-no">
                  <thead>
                    <tr>
                      <th>Doctor ID</th>
                      <th>Name</th>
                      <th>Specialty</th>
                      <th>Status</th>
                      <th>Room No</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctors.map((doctor) => (
                      <tr key={doctor.id}>
                        <td>{doctor.id}</td>
                        <td>{doctor.name}</td>
                        <td>{doctor.specialty}</td>
                        <td>
                          <span
                            className={`badge ${
                              doctor.status === "Active"
                                ? "badge-success"
                                : doctor.status === "On Leave"
                                ? "badge-warning"
                                : "badge-danger"
                            }`}
                          >
                            {doctor.status}
                          </span>
                        </td>
                        <td>{doctor.room}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-info me-2"
                            onClick={() => handleEdit(doctor.id)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDelete(doctor.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h4>{currentDoctor.id ? "Edit Doctor" : "Add Doctor"}</h4>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={currentDoctor.name}
                onChange={(e) =>
                  setCurrentDoctor({ ...currentDoctor, name: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Specialty</label>
              <input
                type="text"
                className="form-control"
                value={currentDoctor.specialty}
                onChange={(e) =>
                  setCurrentDoctor({
                    ...currentDoctor,
                    specialty: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label>Status</label>
              <select
                className="form-control"
                value={currentDoctor.status}
                onChange={(e) =>
                  setCurrentDoctor({ ...currentDoctor, status: e.target.value })
                }
              >
                <option value="Active">Active</option>
                <option value="On Leave">On Leave</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="form-group">
              <label>Room No</label>
              <input
                type="text"
                className="form-control"
                value={currentDoctor.room}
                onChange={(e) =>
                  setCurrentDoctor({ ...currentDoctor, room: e.target.value })
                }
              />
            </div>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-secondary me-2"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Doctor;
