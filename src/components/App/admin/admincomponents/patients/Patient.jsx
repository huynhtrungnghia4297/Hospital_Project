import React, { Component } from "react";
import "./Patient.css"; // Đảm bảo file CSS được import đúng cách

export default class Patient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 5,
      patients: [
        {
          id: "#p245879",
          date: "14 April 2021, 10:30 AM",
          name: "Aaliyah Clark",
          doctor: "Dr. Johen Doe",
          disease: "Cold & Flu",
          status: "New Patient",
          room: "FF-103",
        },
        {
          id: "#p245880",
          date: "18 April 2021, 11:30 AM",
          name: "Mical Clark",
          doctor: "Dr. Aiden Doe",
          disease: "Diabetes",
          status: "Recovered",
          room: "FF-105",
        },
        // Thêm dữ liệu mẫu khác...
      ],
      showPopup: false,
      currentPatient: null,
    };
  }

  handleNextPage = () => {
    const { currentPage, itemsPerPage, patients } = this.state;
    const totalPages = Math.ceil(patients.length / itemsPerPage);
    if (currentPage < totalPages) {
      this.setState({ currentPage: currentPage + 1 });
    }
  };

  handlePreviousPage = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState({ currentPage: currentPage - 1 });
    }
  };

  handlePageClick = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  handleAdd = () => {
    this.setState({
      currentPatient: {
        id: "",
        date: "",
        name: "",
        doctor: "",
        disease: "",
        status: "New Patient",
        room: "",
      },
      showPopup: true,
    });
  };

  handleEdit = (id) => {
    const patient = this.state.patients.find((p) => p.id === id);
    this.setState({ currentPatient: patient, showPopup: true });
  };

  handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this patient?")) {
      this.setState({
        patients: this.state.patients.filter((patient) => patient.id !== id),
      });
    }
  };

  handleSave = () => {
    const { currentPatient, patients } = this.state;
    if (currentPatient.id) {
      // Update existing patient
      this.setState({
        patients: patients.map((p) =>
          p.id === currentPatient.id ? currentPatient : p
        ),
        showPopup: false,
      });
    } else {
      // Add new patient
      this.setState({
        patients: [
          ...patients,
          { ...currentPatient, id: `#p${Math.floor(Math.random() * 100000)}` },
        ],
        showPopup: false,
      });
    }
  };

  render() {
    const { currentPage, itemsPerPage, patients, showPopup, currentPatient } =
      this.state;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPatients = patients.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(patients.length / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <>
        <section className="content">
          <div className="row">
            <div className="col-12">
              <div className="box">
                <div className="box-header d-flex justify-content-between align-items-center">
                  <h4 className="box-title">Patient Management</h4>
                  <button className="btn btn-primary" onClick={this.handleAdd}>
                    Add Patient
                  </button>
                </div>
                <div className="box-body">
                  <div className="table-responsive rounded card-table">
                    <table className="table border-no">
                      <thead>
                        <tr>
                          <th>Patient ID</th>
                          <th>Date Check In</th>
                          <th>Patient Name</th>
                          <th>Doctor Assigned</th>
                          <th>Disease</th>
                          <th>Status</th>
                          <th>Room No</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentPatients.map((patient, index) => (
                          <tr key={index}>
                            <td>{patient.id}</td>
                            <td>{patient.date}</td>
                            <td>{patient.name}</td>
                            <td>{patient.doctor}</td>
                            <td>{patient.disease}</td>
                            <td>
                              <span
                                className={`badge badge-${
                                  patient.status === "Recovered"
                                    ? "success"
                                    : patient.status === "In Treatment"
                                    ? "warning"
                                    : "danger"
                                }`}
                              >
                                {patient.status}
                              </span>
                            </td>
                            <td>{patient.room}</td>
                            <td>
                              <button
                                className="btn btn-sm btn-info me-1"
                                onClick={() => this.handleEdit(patient.id)}
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-sm btn-danger"
                                onClick={() => this.handleDelete(patient.id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="pagination justify-content-center mt-3">
                      <ul className="pagination">
                        <li
                          className={`page-item ${
                            currentPage === 1 ? "disabled" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={this.handlePreviousPage}
                            disabled={currentPage === 1}
                          >
                            Previous
                          </button>
                        </li>
                        {pageNumbers.map((number) => (
                          <li
                            key={number}
                            className={`page-item ${
                              currentPage === number ? "active" : ""
                            }`}
                          >
                            <button
                              className="page-link"
                              onClick={() => this.handlePageClick(number)}
                            >
                              {number}
                            </button>
                          </li>
                        ))}
                        <li
                          className={`page-item ${
                            currentPage === totalPages ? "disabled" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={this.handleNextPage}
                            disabled={currentPage === totalPages}
                          >
                            Next
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popup */}
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h4>{currentPatient.id ? "Edit Patient" : "Add Patient"}</h4>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={currentPatient.name}
                  onChange={(e) =>
                    this.setState({
                      currentPatient: {
                        ...currentPatient,
                        name: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label>Doctor</label>
                <input
                  type="text"
                  className="form-control"
                  value={currentPatient.doctor}
                  onChange={(e) =>
                    this.setState({
                      currentPatient: {
                        ...currentPatient,
                        doctor: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label>Disease</label>
                <input
                  type="text"
                  className="form-control"
                  value={currentPatient.disease}
                  onChange={(e) =>
                    this.setState({
                      currentPatient: {
                        ...currentPatient,
                        disease: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select
                  className="form-control"
                  value={currentPatient.status}
                  onChange={(e) =>
                    this.setState({
                      currentPatient: {
                        ...currentPatient,
                        status: e.target.value,
                      },
                    })
                  }
                >
                  <option value="New Patient">New Patient</option>
                  <option value="In Treatment">In Treatment</option>
                  <option value="Recovered">Recovered</option>
                </select>
              </div>
              <div className="form-group">
                <label>Room No</label>
                <input
                  type="text"
                  className="form-control"
                  value={currentPatient.room}
                  onChange={(e) =>
                    this.setState({
                      currentPatient: {
                        ...currentPatient,
                        room: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-secondary me-2"
                  onClick={() => this.setState({ showPopup: false })}
                >
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={this.handleSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
