import React, { Component } from "react";

export default class DoctorDashboard extends Component {
  render() {
    return (
      <>
        <section className="content">
          <div className="row">
            <div className="col-xxxl-6 col-xl-12 col-12 ">
              <div className="box-body d-sm-flex justify-content-between align-items-center">
                <div>
                  <h1 className="fw-500 text-blue">Hi Mary</h1>
                  <p className="text-fade m-0">
                    Welcome Mary gary We are proud to you with us.
                  </p>
                  <p className="text-fade">
                    We all have faith that you'll deliver result &amp; make us
                    all proud.
                  </p>
                </div>
                <div>
                  <p className="text-fade fs-16 w-100">1 Aug 2022</p>
                </div>
              </div>
              <div className="box">
                <div
                  className="box-body px-35 bg-lightgray"
                  style={{ position: "relative" }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="m-0">Revenue</h4>
                    <div className="dropdown pull-right position-year">
                      <button
                        className="bg-blue btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Yearly
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item active" href="#">
                          Today
                        </a>
                        <a className="dropdown-item" href="#">
                          Yesterday
                        </a>
                        <a className="dropdown-item" href="#">
                          Last week
                        </a>
                        <a className="dropdown-item" href="#">
                          Last month
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="py-20">
                    <div className="d-flex justify-content-start align-items-center">
                      <div className="me-30">
                        <h5 className="text-fade">This month</h5>
                        <h2 className="m-0  text-blue">$124,12</h2>
                      </div>
                      <div>
                        <h5 className="text-fade">This week</h5>
                        <h2 className="m-0 text-blue">$4879</h2>
                      </div>
                    </div>
                  </div>
                  <div id="chart-1" style={{ minHeight: 290 }}>
                    <svg
                      id="SvgjsSvg1733"
                      width={1021}
                      height={290}
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlnsSvgjs="http://svgjs.com/svgjs"
                      className="apexcharts-svg hovering-zoom"
                      xmlnsData="ApexChartsNS"
                      transform="translate(0, 0)"
                      style={{ background: "transparent" }}
                    >
                      <g
                        id="SvgjsG1735"
                        className="apexcharts-inner apexcharts-graphical"
                        transform="translate(22, 30)"
                      >
                        <defs id="SvgjsDefs1734">
                          <clipPath id="gridRectMasku3868clc">
                            <rect
                              id="SvgjsRect1741"
                              width="986.0038547515869"
                              height="228.42666563796996"
                              x="-4.5"
                              y="-2.5"
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fff"
                            />
                          </clipPath>
                        </defs>
                        <line
                          id="SvgjsLine1740"
                          x1="-0.5"
                          y1={0}
                          x2="-0.5"
                          y2="223.42666563796996"
                          stroke="#b6b6b6"
                          strokeDasharray={3}
                          className="apexcharts-xcrosshairs"
                          x="-0.5"
                          y={0}
                          width={1}
                          height="223.42666563796996"
                          fill="#b1b9c4"
                          filter="none"
                          fillOpacity="0.9"
                          strokeWidth={1}
                        />
                        <g
                          id="SvgjsG1781"
                          className="apexcharts-xaxis"
                          transform="translate(0, 0)"
                        >
                          <g
                            id="SvgjsG1782"
                            className="apexcharts-xaxis-texts-g"
                            transform="translate(0, -4)"
                          >
                            <text
                              id="SvgjsText1784"
                              fontFamily="Helvetica, Arial, sans-serif"
                              x={0}
                              y="252.42666563796996"
                              textAnchor="middle"
                              dominantBaseline="auto"
                              fontSize="12px"
                              fontWeight={400}
                              fill="#373d3f"
                              className="apexcharts-text apexcharts-xaxis-label"
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                              }}
                            >
                              {/* <tspan id="SvgjsTspan1785">Jan</tspan> */}
                              <title>Jan</title>
                            </text>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="resize-triggers">
                    <div className="expand-trigger">
                      <div style={{ width: 1092, height: 479 }} />
                    </div>
                    <div className="contract-trigger" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxxl-3 col-xl-6 col-lg-6">
              <div className="box bg-lightgray">
                <div className="box-body px-0 appointment">
                  <div className="d-flex justify-content-between align-items-center pb-30 px-30">
                    <h4 className="m-0">Today's Appointment</h4>
                  </div>
                  <div className="pt-15 pb-25 d-flex justify-content-between align-items-center px-30 bb-gray-1">
                    <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                      <div className="d-flex justify-content-between align-items-center">
                        <img
                          src="../images/avatar/avatar-13.png"
                          className="me-20 avatar bg-light rounded-circle"
                          alt=""
                        />
                        <div>
                          <p className="m-0 fs-16 fw-600 hover-blue">
                            John Smith
                          </p>
                          <p className="m-0 fs-12 fw-600 text-lightgreen">
                            {" "}
                            First visit
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="mb-0 fs-16">
                          <i
                            className="fa fa-check-circle text-lightgreen fs-18 me-5"
                            aria-hidden="true"
                          />{" "}
                          10:00 AM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="py-25 d-flex justify-content-between align-items-center px-25 bb-gray-1">
                    <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                      <div className="d-flex justify-content-between align-items-center">
                        <img
                          src="../images/avatar/avatar-13.png"
                          className="me-20 avatar bg-light rounded-circle"
                          alt=""
                        />
                        <div>
                          <p className="m-0 fs-16 fw-600 hover-blue">
                            Hilda Hunter
                          </p>
                          <p className="m-0 fs-12 fw-600 text-fade">
                            {" "}
                            First visit
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="mb-0 fs-16">
                          <i
                            className="fa fa-check-circle text-lightgreen fs-18 me-5"
                            aria-hidden="true"
                          />{" "}
                          11:00 AM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="py-25 d-flex justify-content-between align-items-center px-25 bb-gray-1">
                    <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                      <div className="d-flex justify-content-between align-items-center">
                        <img
                          src="../images/avatar/avatar-13.png"
                          className="me-20 avatar bg-light rounded-circle"
                          alt=""
                        />
                        <div>
                          <p className="m-0 fs-16 fw-600 hover-blue">
                            Michal Bomb
                          </p>
                          <p className="m-0 fs-12 fw-600 text-lightgreen">
                            {" "}
                            First visit
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="mb-0 fs-16">
                          <i
                            className="fa fa-check-circle text-lightgreen fs-18 me-5"
                            aria-hidden="true"
                          />{" "}
                          12:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="py-25 d-flex justify-content-between align-items-center px-25 bb-gray-1">
                    <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                      <div className="d-flex justify-content-between align-items-center">
                        <img
                          src="../images/avatar/avatar-13.png"
                          className="me-20 avatar bg-light rounded-circle"
                          alt=""
                        />
                        <div>
                          <p className="m-0 fs-16 fw-600 hover-blue">
                            Ellen Barton
                          </p>
                          <p className="m-0 fs-12 fw-600 text-fade">
                            {" "}
                            First visit
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="mb-0 fs-16">
                          <i
                            className="fa fa-check-circle text-lightgreen fs-18 me-5"
                            aria-hidden="true"
                          />{" "}
                          13:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="py-25 d-flex justify-content-between align-items-center px-25 bb-gray-1">
                    <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                      <div className="d-flex justify-content-between align-items-center">
                        <img
                          src="../images/avatar/avatar-13.png"
                          className="me-20 avatar bg-light rounded-circle"
                          alt=""
                        />
                        <div>
                          <p className="m-0 fs-16 fw-600 hover-blue">
                            Thad Ennings
                          </p>
                          <p className="m-0 fs-12 fw-600 text-danger">
                            {" "}
                            Consultation
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="mb-0 fs-16">
                          <i
                            className="fa fa-times-circle text-danger fs-18 me-5"
                            aria-hidden="true"
                          />{" "}
                          14:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-25 d-flex justify-content-between align-items-center px-25">
                    <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                      <div className="d-flex justify-content-between align-items-center">
                        <img
                          src="../images/avatar/avatar-13.png"
                          className="me-20 avatar bg-light rounded-circle"
                          alt=""
                        />
                        <div>
                          <p className="m-0 fs-16 fw-600 hover-blue	">
                            Brittni Lando
                          </p>
                          <p className="m-0 fs-12 fw-600 text-fade">
                            {" "}
                            First visit
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="mb-0 fs-16">
                          <i
                            className="fa fa-times-circle text-danger fs-18 me-5"
                            aria-hidden="true"
                          />{" "}
                          16:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxxl-3 col-xl-6 col-lg-6 col-12">
              <div className="box box-body bg-lightgray dr-profile">
                <div className="">
                  <h4 className="box-title mb-0">Profile</h4>
                  <ul className="box-controls pull-right">
                    <li className="dropdown">
                      <a data-bs-toggle="dropdown" href="#" className="px-10">
                        <i className="ti-settings bg-light text-dark rounded py-5 px-10" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          <i className="ti-import" /> Import
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti-export" /> Export
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti-printer" /> Print
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          <i className="ti-settings" /> Settings
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="box-body px-0 pt-40 text-center">
                  <div className="avatar avatar-xxl status-success">
                    <img
                      src="../images/avatar/avatar-13.png"
                      className="rounded-circle bg-blue"
                      alt=""
                    />
                  </div>
                  <h3 className="mt-20 mb-10">Dr. Mary Gary</h3>
                  <p className="mb-0 fs-18 text-fade">
                    Infectious disease doctors.
                  </p>
                </div>
                <div className="box-body pb-40">
                  <div className="row">
                    <div className="col-xxl-6 col-lg-6 col-sm-6 col-6">
                      <div className="text-center">
                        <h5 className="text-fade fs-16">Overall Rating</h5>
                        <h3 className="mb-2 text-blue">4.5</h3>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-lg-6 col-sm-6 col-6">
                      <div className="text-center">
                        <h5 className="text-fade fs-16">Total Patients</h5>
                        <h3 className="mb-2 text-blue">200</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-30 d-flex justify-content-between align-items-center">
                  <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        src="../images/avatar/avatar-13.png"
                        className="me-20 avatar bg-light rounded-circle"
                        alt=""
                      />
                      <div>
                        <p className="m-0 fs-16 fw-600 hover-blue">Alexandra</p>
                        <p className="m-0 fs-12 text-mute">
                          Dr. Mary is a great doctor!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-30 d-flex justify-content-between align-items-center">
                  <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        src="../images/avatar/avatar-13.png"
                        className="me-20 avatar bg-light rounded-circle"
                        alt=""
                      />
                      <div>
                        <p className="m-0 fs-16 fw-600 hover-blue">Mackenzie</p>
                        <p className="m-0 fs-12 text-mute">
                          Dr. Mary and the staff are friendly
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-5 d-flex justify-content-between align-items-center">
                  <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        src="../images/avatar/avatar-13.png"
                        className="me-20 avatar bg-light rounded-circle"
                        alt=""
                      />
                      <div>
                        <p className="m-0 fs-16 fw-600 hover-blue">Raelynn</p>
                        <p className="m-0 fs-12 text-mute">
                          Dr. Mary was a wonderful surgeon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxxl-6 col-xl-4 col-12">
              <div className="box shadow-sm rounded">
                <div className="box-body px-4 py-3 bg-light">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="m-0 fw-bold">Duty Hours</h4>
                    <div className="dropdown">
                      <button
                        className="btn btn-primary btn-sm dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Weekly
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item active" href="#">
                            Today
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Yesterday
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Last Week
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Last Month
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="fs-16 mb-4">
                    Avg Duty Hours:{" "}
                    <span className="text-primary fs-18 fw-bold">57 h</span>
                  </p>
                  <div className="duty-hours">
                    <ul className="d-flex justify-content-between list-unstyled m-0">
                      {[
                        { day: "Sat", hours: 8 },
                        { day: "Sun", hours: 6 },
                        { day: "Mon", hours: 5 },
                        { day: "Tue", hours: 7 },
                        { day: "Wed", hours: 8 },
                        { day: "Thu", hours: 8 },
                        { day: "Fri", hours: 5 },
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="text-center p-2 rounded bg-white shadow-sm"
                          style={{
                            width: "12%",
                            margin: "0 5px",
                            backgroundColor:
                              item.hours >= 7 ? "#e8f5e9" : "#ffebee",
                          }}
                        >
                          <p className="mb-1 fw-bold text-dark">{item.day}</p>
                          <p className="mb-0 fs-16 text-secondary">
                            {item.hours} h
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxxl-3 col-xl-4 col-lg-6 col-12">
              <div className="box">
                <div className="box-body pb-0 bg-lightgray">
                  <div className="d-flex justify-content-between align-items-center px-15">
                    <h4 className="m-0">Patient Gender</h4>
                    <a
                      className="btn btn-rounded btn-light fw-500"
                      href="#"
                      style={{ width: "90px" }}
                    >
                      View As
                    </a>
                  </div>
                  <div className="row mt-20">
                    <div className="col-xxxl-7 col-xl-7 col-lg-6 col-sm-7 col-6">
                      <div id="revenue5" style={{ minHeight: "200px" }}>
                        {/* Placeholder for chart */}
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            background: "#f0f0f0",
                            borderRadius: "10px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <p className="text-muted">Chart Placeholder</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxxl-5 col-xl-5 col-lg-6 col-sm-5 col-6 align-self-center">
                      <div className="d-flex align-items-center mb-20">
                        <span className="badge badge-xl badge-dot bg-primary me-15" />
                        <div>
                          <h3 className="m-0">5432</h3>
                          <small>Male</small>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="badge badge-xl badge-dot bg-secondary me-15" />
                        <div>
                          <h3 className="m-0">1538</h3>
                          <small>Female</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxxl-3 col-xl-4 col-lg-6 col-lg-6">
              <div className="box box-body px-35 bg-lightgray">
                <div className="d-flex justify-content-between align-items-center mb-15">
                  <h4 className="m-0">Patient File</h4>
                  <span className="float-end ">
                    <a
                      className="btn btn-rounded  btn-light fw-500 w-90"
                      href="patient_details.html"
                    >
                      View As
                    </a>
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-15">
                  <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        src="../images/pdf.png"
                        className="me-10 avatar-sm"
                        alt=""
                      />
                      <div>
                        <p className="m-0 fs-16 fw-500 hover-blue">
                          Prescription.pdf
                        </p>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a href="#">
                        <i
                          className="fa fa-download bg-light rounded p-5 me-5 text-dark"
                          aria-hidden="true"
                        />
                      </a>
                      <a
                        data-bs-toggle="dropdown"
                        href="#"
                        aria-expanded="false"
                        className=""
                      >
                        <i className="ti-more-alt rotate-90" />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        style={{}}
                      >
                        <a className="dropdown-item" href="#">
                          <i className="ti-import" /> Details
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti-export" /> Lab Reports
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-15">
                  <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        src="../images/pdf.png"
                        className="me-10 avatar-sm"
                        alt=""
                      />
                      <div>
                        <p className="m-0 fs-16 fw-500  hover-blue">
                          X-ray report.pdf
                        </p>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a href="#">
                        <i
                          className="fa fa-download bg-light rounded p-5 me-5 text-dark"
                          aria-hidden="true"
                        />
                      </a>
                      <a
                        data-bs-toggle="dropdown"
                        href="#"
                        aria-expanded="false"
                        className=""
                      >
                        <i className="ti-more-alt rotate-90" />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        style={{}}
                      >
                        <a className="dropdown-item" href="#">
                          <i className="ti-import" /> Details
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti-export" /> Lab Reports
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-13">
                  <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        src="../images/pdf.png"
                        className="me-10 avatar-sm"
                        alt=""
                      />
                      <div>
                        <p className="m-0 fs-16 fw-500 hover-blue">
                          Checkup.pdf
                        </p>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a href="#">
                        <i
                          className="fa fa-download bg-light rounded p-5 me-5 text-dark"
                          aria-hidden="true"
                        />
                      </a>
                      <a
                        data-bs-toggle="dropdown"
                        href="#"
                        aria-expanded="false"
                        className=""
                      >
                        <i className="ti-more-alt rotate-90" />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        style={{}}
                      >
                        <a className="dropdown-item" href="#">
                          <i className="ti-import" /> Details
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti-export" /> Lab Reports
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        src="../images/pdf.png"
                        className="me-10 avatar-sm"
                        alt=""
                      />
                      <div>
                        <p className="m-0 fs-16 fw-500 hover-blue">
                          Screening.pdf
                        </p>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a href="#">
                        <i
                          className="fa fa-download bg-light rounded p-5 me-5 text-dark"
                          aria-hidden="true"
                        />
                      </a>
                      <a
                        data-bs-toggle="dropdown"
                        href="#"
                        aria-expanded="false"
                        className=""
                      >
                        <i className="ti-more-alt rotate-90" />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-end"
                        style={{}}
                      >
                        <a className="dropdown-item" href="#">
                          <i className="ti-import" /> Details
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti-export" /> Lab Reports
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
