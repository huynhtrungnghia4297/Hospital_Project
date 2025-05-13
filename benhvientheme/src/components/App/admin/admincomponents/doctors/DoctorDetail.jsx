import React from "react";

const patientsToday = [
  {
    time: "10:30am",
    name: "Sarah Hostemn",
    diagnosis: "Bronchitis",
    image: "../images/avatar/1.jpg",
  },
  {
    time: "11:00am",
    name: "Dakota Smith",
    diagnosis: "Stroke",
    image: "../images/avatar/2.jpg",
  },
  {
    time: "11:30am",
    name: "John Lane",
    diagnosis: "Liver cirrhosis",
    image: "../images/avatar/3.jpg",
  },
];

const appointments = [
  {
    name: "Shawn Hampton",
    type: "Emergency appointment",
    time: "10:00",
    price: "$30",
    image: "../images/avatar/avatar-1.png",
  },
  {
    name: "Polly Paul",
    type: "USG + Consultation",
    time: "10:30",
    price: "$50",
    image: "../images/avatar/avatar-2.png",
  },
  {
    name: "Johen Doe",
    type: "Laboratory screening",
    time: "11:00",
    price: "$70",
    image: "../images/avatar/avatar-3.png",
  },
];

const recoveryRates = [
  { label: "Cold", percentage: 80, color: "primary" },
  { label: "Fracture", percentage: 24, color: "success" },
  { label: "Ache", percentage: 91, color: "info" },
  { label: "Hematoma", percentage: 50, color: "danger" },
  { label: "Caries", percentage: 72, color: "warning" },
];

const DoctorDetail = () => {
  return (
    <section className="content">
      <div className="row">
        {/* Patients Today */}
        <div className="col-xl-4 col-12">
          <div className="box">
            <div className="box-header">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Your Patients Today</h4>
                <a href="#" className="">
                  All patients <i className="ms-10 fa fa-angle-right"></i>
                </a>
              </div>
            </div>
            <div className="box-body p-15">
              {patientsToday.map((patient, index) => (
                <div
                  className="mb-10 d-flex justify-content-between align-items-center"
                  key={index}
                >
                  <div className="fw-600 min-w-120">{patient.time}</div>
                  <div className="w-p100 p-10 rounded10 d-flex bg-lightest">
                    <div className="d-flex align-items-center">
                      <img
                        src={patient.image}
                        className="me-10 avatar rounded-circle"
                        alt={patient.name}
                      />
                      <div>
                        <h6 className="mb-0">{patient.name}</h6>
                        <p className="mb-0 fs-12 text-mute">
                          Diagnosis: {patient.diagnosis}
                        </p>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a data-bs-toggle="dropdown" href="#">
                        <i className="ti-more-alt rotate-90"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          <i className="ti-import"></i> Details
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti-export"></i> Lab Reports
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recovery Rate */}
          <div className="box">
            <div className="box-header">
              <h4 className="box-title">Recovery Rate</h4>
            </div>
            <div className="box-body">
              {recoveryRates.map((rate, index) => (
                <div className="mb-30" key={index}>
                  <div className="d-flex align-items-center justify-content-between mb-5">
                    <h5>{rate.percentage} %</h5>
                    <h5>{rate.label}</h5>
                  </div>
                  <div className="progress progress-xs">
                    <div
                      className={`progress-bar progress-bar-${rate.color}`}
                      role="progressbar"
                      aria-valuenow={rate.percentage}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: `${rate.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Appointments */}
        <div className="col-xl-8 col-12">
          <div className="box">
            <div className="box-header">
              <h4 className="box-title">Appointments</h4>
            </div>
            <div className="box-body">
              {appointments.map((appointment, index) => (
                <div className="d-flex align-items-center mb-10" key={index}>
                  <div className="me-15">
                    <img
                      src={appointment.image}
                      className="avatar avatar-lg rounded10 bg-primary-light"
                      alt={appointment.name}
                    />
                  </div>
                  <div className="d-flex flex-column flex-grow-1 fw-500">
                    <p className="hover-primary text-fade mb-1 fs-14">
                      {appointment.name}
                    </p>
                    <span className="text-dark fs-16">{appointment.type}</span>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="waves-effect waves-circle btn btn-circle btn-primary-light btn-sm"
                    >
                      <i className="fa fa-phone"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetail;
