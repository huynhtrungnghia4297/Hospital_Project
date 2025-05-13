import React, { Component } from "react";

const doctors = [
  {
    name: "Dr. Tristan",
    specialty: "Gynecologist",
    image: "../images/avatar/375x200/1.jpg",
    ribbon: { text: "Full Time", color: "primary" },
  },
  {
    name: "Dr. Sophia",
    specialty: "Dentist",
    image: "../images/avatar/375x200/2.jpg",
    ribbon: { text: "Part Time", color: "danger" },
  },
  {
    name: "Dr. Jacob",
    specialty: "Physical Therapy",
    image: "../images/avatar/375x200/3.jpg",
    ribbon: { text: "Part Time", color: "success" },
  },
  {
    name: "Dr. Isabella",
    specialty: "Nursing",
    image: "../images/avatar/375x200/4.jpg",
  },
  {
    name: "Dr. Emma",
    specialty: "Urologist",
    image: "../images/avatar/375x200/5.jpg",
    ribbon: { text: "Full Time", color: "info" },
  },
  {
    name: "Dr. William",
    specialty: "Rheumatologist",
    image: "../images/avatar/375x200/6.jpg",
  },
  {
    name: "Dr. Tristan",
    specialty: "Orthopedic",
    image: "../images/avatar/375x200/7.jpg",
  },
  {
    name: "Dr. Michael",
    specialty: "ENT Specialist",
    image: "../images/avatar/375x200/8.jpg",
  },
  {
    name: "Dr. Sophia",
    specialty: "Vascular Specialist",
    image: "../images/avatar/375x200/2.jpg",
  },
];

export default class DoctorList extends Component {
  render() {
    return (
      <section className="content">
        <div className="row">
          {doctors.map((doctor, index) => (
            <div className="col-12 col-lg-4" key={index}>
              <div className={`box ${doctor.ribbon ? "ribbon-box" : ""}`}>
                {doctor.ribbon && (
                  <div
                    className={`ribbon-two ribbon-two-${doctor.ribbon.color}`}
                  >
                    <span>{doctor.ribbon.text}</span>
                  </div>
                )}
                <div className="box-header no-border p-0">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src={doctor.image}
                      alt={doctor.name}
                    />
                  </a>
                </div>
                <div className="box-body">
                  <div className="text-center">
                    <div className="user-contact list-inline text-center">
                      <a href="#" className="btn btn-circle mb-5 btn-facebook">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="#" className="btn btn-circle mb-5 btn-instagram">
                        <i className="fa fa-instagram"></i>
                      </a>
                      <a href="#" className="btn btn-circle mb-5 btn-twitter">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#" className="btn btn-circle mb-5 btn-warning">
                        <i className="fa fa-envelope"></i>
                      </a>
                    </div>
                    <h3 className="my-10">
                      <a href="#">{doctor.name}</a>
                    </h3>
                    <h6 className="user-info mt-0 mb-10 text-fade">
                      {doctor.specialty}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
