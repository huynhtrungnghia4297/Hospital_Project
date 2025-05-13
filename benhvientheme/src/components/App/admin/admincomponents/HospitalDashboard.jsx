import React, { Component } from 'react'

export default class HospitalDashboard extends Component {
  render() {
    return (
      <>
        <section className="content">
          <div className="row">
            <div className="col-xxxl-8 col-12">
              <div className="box">
                <div className="box-body" style={{ position: "relative" }}>
                  <div className="">
                    <h3 className="box-title fw-500 position-revenue">
                      Revenue
                    </h3>
                    <div className="dropdown pull-right position-year">
                      <h6
                        className="dropdown-toggle mb-0"
                        data-bs-toggle="dropdown"
                      >
                        Yearly
                      </h6>
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
                  <div id="chart-1" style={{ minHeight: 250 }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1049"
                      height="250"
                      className="apexcharts-svg hovering-zoom"
                      style={{ background: "transparent" }}
                    >
                      <g className="apexcharts-inner apexcharts-graphical">
                        <line
                          x1="364.9559471823952"
                          y1="0"
                          x2="364.9559471823952"
                          y2="145.42666563796996"
                          stroke="#b6b6b6"
                          strokeDasharray="3"
                          className="apexcharts-xcrosshairs"
                        />
                        <g className="apexcharts-xaxis">
                          <text
                            x="0"
                            y="174.42666563796996"
                            textAnchor="middle"
                            fontSize="12px"
                            fontWeight="400"
                            fill="#373d3f"
                            className="apexcharts-text apexcharts-xaxis-label"
                          >
                            Jan
                          </text>
                          {/* Các phần tử SVG khác */}
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="resize-triggers">
                    <div className="expand-trigger">
                      <div style={{ width: 1092, height: 293 }} />
                    </div>
                    <div className="contract-trigger" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxxl-6 col-xl-6 col-lg-6">
                  <div className="box">
                    <div className="box-body">
                      <div className="d-flex justify-content-between align-items-center pb-25">
                        <h3 className="m-0 fw-500">Appointment History</h3>
                        <span className="float-end ">
                          <a
                            className="btn btn-rounded  btn-light fw-500 w-90"
                            href="appointments.html"
                          >
                            View all
                          </a>
                        </span>
                      </div>
                      <div className="mb-25 d-flex justify-content-between align-items-center">
                        <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                          <div className="d-flex justify-content-between align-items-center">
                            <i className="mdi mdi-calendar-range me-10 avatar bg-light rounded fs-16 text-purple" />
                            <div>
                              <a href="appointments.html">
                                <p className="m-0 fs-18 fw-600 hover-blue ">
                                  Madical Checkup
                                </p>
                              </a>
                              <p className="m-0 text-mute">
                                Mach 14 - 10:30 am
                              </p>
                            </div>
                          </div>
                          <a href="appointments.html">
                            <span className="glyphicon glyphicon-menu-right" />
                          </a>
                        </div>
                      </div>
                      <div className="mb-25 d-flex justify-content-between align-items-center">
                        <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                          <div className="d-flex justify-content-between align-items-center">
                            <i className="mdi mdi-qrcode-scan avatar me-10 bg-light rounded fs-16 text-purple" />
                            <div>
                              <a href="#">
                                <p className="m-0 fs-18 fw-600 hover-blue">
                                  Screening
                                </p>
                              </a>
                              <p className="m-0 text-mute">
                                April 10 - 9:30 am
                              </p>
                            </div>
                          </div>
                          <a href="#">
                            <span className="glyphicon glyphicon-menu-right" />
                          </a>
                        </div>
                      </div>
                      <div className="mb-25 d-flex justify-content-between align-items-center">
                        <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                          <div className="d-flex justify-content-between align-items-center">
                            <i className="mdi mdi-comment-processing-outline me-10 avatar bg-light rounded fs-16 text-purple" />
                            <div>
                              <a href="contact_app_chat.html">
                                <p className="m-0 fs-18 fw-600 hover-blue">
                                  Chat Consultation
                                </p>
                              </a>
                              <p className="m-0 text-mute">May 22 - 12:30 pm</p>
                            </div>
                          </div>
                          <a href="contact_app_chat.html">
                            <span className="glyphicon glyphicon-menu-right" />
                          </a>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                          <div className="d-flex justify-content-between align-items-center">
                            <i className="mdi mdi-video me-10 avatar bg-light rounded fs-18 text-purple" />
                            <div>
                              <a href="#">
                                <p className="m-0 fs-18 fw-600 hover-blue">
                                  Video call Consultation
                                </p>
                              </a>
                              <p className="m-0 text-mute">Jan 14 - 10:32 am</p>
                            </div>
                          </div>
                          <a href="#">
                            <span className="glyphicon glyphicon-menu-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="box-body">
                      <div className="d-flex justify-content-between align-items-center pb-20">
                        <h3 className="m-0 fw-500">Share Photos</h3>
                        <span className="float-end ">
                          <a
                            className="btn btn-rounded  btn-light fw-500 w-90"
                            href="#"
                          >
                            See all
                          </a>
                        </span>
                      </div>
                      <div className="row" id="image-popups">
                        <div className="col-xxxl-6 col-xl-6 col-lg-6 col-sm-6">
                          <a
                            href="../images/front-end-img/courses/1f.jpg"
                            data-effect="mfp-zoom-in"
                            className="h-p100 h-sm-100 w-p100"
                          >
                            <div className="rounded10 share-img-1 mb-15 mb-sm-0" />
                          </a>
                        </div>
                        <div className="col-xxxl-6 col-xl-6 col-lg-6 col-sm-6">
                          <a
                            href="../images/front-end-img/courses/9f.jpg"
                            data-effect="mfp-zoom-in"
                            className="h-p50 h-sm-80 w-p100 rounded10"
                          >
                            <div className="rounded10 share-img-2 mb-10" />
                          </a>
                          <a
                            href="../images/front-end-img/courses/11f.jpg"
                            data-effect="mfp-zoom-in"
                            className="h-p50 h-sm-80 w-p100 rounded10"
                          >
                            <div className="rounded10 share-img-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxxl-6 col-xl-6 col-lg-6">
                  <div className="box border border-blue">
                    <a href="#" className="p-5  ">
                      <div className=" rounded dr-image-box" />
                    </a>
                    <div className="box-body p-5 py-sm-0 px-sm-20">
                      <div className="box-header p-0 pt-15 pb-10">
                        <div className="media align-items-top p-0">
                          <a className="avatar avatar-lg mx-0" href="#">
                            <img
                              src="../images/avatar/2.jpg"
                              className="rounded"
                              alt="..."
                            />
                          </a>
                          <div className="d-flex d-block justify-content-between align-items-center w-p100 ">
                            <div className="media-body mb-lg-0 mb-0">
                              <p className="fs-16">
                                <a className="hover-blue" href="#">
                                  <strong>Dr. Jesmin July</strong>
                                </a>
                              </p>
                              <p className="fs-12">Last Seen 10:30pm ago</p>
                            </div>
                            <div>
                              <ul className="list-inline mb-0 fs-18">
                                <li className="list-inline-item bg-primary-lighti">
                                  <a href="#" className="hover-blue">
                                    <i className="fa fa-phone" />
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#" className="hover-blue">
                                    <i className="fa fa-video-camera" />
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#" className="hover-blue">
                                    <i className="fa fa-ellipsis-h rotate-90" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box-body p-10">
                        <div
                          className="slimScrollDiv"
                          style={{
                            position: "relative",
                            overflow: "hidden",
                            width: "auto",
                            height: 215,
                          }}
                        >
                          <div
                            className="chat-box-one2"
                            style={{
                              overflow: "hidden",
                              width: "auto",
                              height: 215,
                            }}
                          >
                            <div className="card d-inline-block mb-3 float-start me-2 no-shadow bg-lighter max-w-p90">
                              <div className="position-absolute pt-1 pe-2 r-0">
                                <span className="fs-12 text-muted">09:25</span>
                              </div>
                              <div className="card-body">
                                <div className="chat-text-start">
                                  <p className="mb-0 text-semi-muted">
                                    What do you think about our plans for this
                                    product launch?
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="clearfix" />
                            <div className="card d-inline-block mb-3 float-end me-2 bg-blue max-w-p80">
                              <div className="position-absolute pt-1 pe-2 r-0">
                                <span className="text-extra-small fs-12">
                                  09:41
                                </span>
                              </div>
                              <div className="card-body">
                                <div className="chat-text-start">
                                  <p className="mb-0 text-semi-muted">
                                    I would suggest you discuss this further
                                    with the advertising team.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="clearfix" />
                            <div className="card d-inline-block mb-3 float-end me-2 bg-blue max-w-p80">
                              <div className="position-absolute pt-1 pe-2 r-0">
                                <span className="text-extra-small fs-12">
                                  09:41
                                </span>
                              </div>
                              <div className="card-body">
                                <div className="chat-text-start">
                                  <p className="mb-0 text-semi-muted">
                                    I am very busy at the moment and on top of
                                    everything, I forgot my umbrella today.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="clearfix" />
                            <div className="card d-inline-block mb-3 float-start me-2 no-shadow bg-lighter max-w-p80">
                              <div className="position-absolute pt-1 pe-2 r-0">
                                <span className="text-extra-small text-muted fs-12">
                                  09:25
                                </span>
                              </div>
                              <div className="card-body">
                                <div className="chat-text-start">
                                  <p className="mb-0 text-semi-muted">
                                    What do you think about our plans for this
                                    product launch?
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="clearfix" />
                            <div className="card d-inline-block mb-3 float-start me-2 no-shadow bg-lighter max-w-p80">
                              <div className="position-absolute pt-1 pe-2 r-0">
                                <span className="text-extra-small text-muted fs-12">
                                  09:28
                                </span>
                              </div>
                              <div className="card-body">
                                <div className="chat-text-start">
                                  <p className="mb-0 text-semi-muted">
                                    It looks to me like you have a lot planned
                                    before your deadline. I would suggest you
                                    push your deadline back so you have time to
                                    run a successful advertising campaign.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="clearfix" />
                            <div className="card d-inline-block mb-3 float-end me-2 bg-blue max-w-p80">
                              <div className="position-absolute pt-1 pe-2 r-0">
                                <span className="text-extra-small fs-12">
                                  09:41
                                </span>
                              </div>
                              <div className="card-body">
                                <div className="chat-text-start">
                                  <p className="mb-0 text-semi-muted">
                                    I would suggest you discuss this further
                                    with the advertising team.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="clearfix" />
                            <div className="card d-inline-block mb-3 float-end me-2 bg-blue max-w-p80">
                              <div className="position-absolute pt-1 pe-2 r-0">
                                <span className="text-extra-small fs-12">
                                  09:41
                                </span>
                              </div>
                              <div className="card-body">
                                <div className="chat-text-start">
                                  <p className="mb-0 text-semi-muted">
                                    I am very busy at the moment and on top of
                                    everything, I forgot my umbrella today.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="slimScrollBar"
                            style={{
                              background: "rgb(0, 0, 0)",
                              width: 7,
                              position: "absolute",
                              top: 1,
                              opacity: "0.1",
                              display: "none",
                              borderRadius: 7,
                              zIndex: 99,
                              right: 1,
                              height: "63.4088px",
                            }}
                          />
                          <div
                            className="slimScrollRail"
                            style={{
                              width: 7,
                              height: "100%",
                              position: "absolute",
                              top: 0,
                              display: "none",
                              borderRadius: 7,
                              background: "rgb(51, 51, 51)",
                              opacity: "0.2",
                              zIndex: 90,
                              right: 1,
                            }}
                          />
                        </div>
                        <div className="box-footer no-border px-0 pb-0 pt-10">
                          <div className="d-flex d-block justify-content-between align-items-center bg-white p-5 rounded10 b-1 overflow-hidden">
                            <input
                              className="form-control b-0 py-10"
                              type="text"
                              placeholder="Say something..."
                            />
                            <div className="d-flex justify-content-between align-items-center mt-md-0">
                              <button
                                type="button"
                                className="waves-effect waves-circle btn btn-circle me-10 btn-outline-secondary"
                              >
                                <i className="mdi mdi-link" />
                              </button>
                              <button
                                type="button"
                                className="waves-effect waves-circle btn btn-circle me-10 btn-outline-secondary"
                              >
                                <i className="mdi mdi-microphone" />
                              </button>
                              <button
                                type="button"
                                className="waves-effect waves-circle btn btn-circle bg-blue"
                              >
                                <i className="mdi mdi-send" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxxl-4">
              <div className="row">
                <div className="col-xxxl-12 col-xl-6 col-lg-6">
                  <div className="box patient-list">
                    <div className="box-body px-35 py-30">
                      <div className="d-flex justify-content-between align-items-center pb-35">
                        <h3 className="m-0 fw-500">Patient List</h3>
                        <div className="lookup lookup-circle lookup-right">
                          <input
                            type="text"
                            name="s"
                            placeholder="Patients id"
                          />
                        </div>
                      </div>
                      <div className="mb-30 d-flex justify-content-between align-items-center">
                        <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                          <div className="d-flex justify-content-between align-items-center">
                            <img
                              src="../images/avatar/avatar-13.png"
                              className="me-10 avatar-lg bg-light rounded-circle"
                              alt=""
                            />
                            <div>
                              <p className="m-0 fs-16 fw-600 hover-blue">
                                John Smith
                              </p>
                              <p className="m-0 fs-12 text-mute">Male, 45</p>
                            </div>
                          </div>
                          <div className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="#"
                              aria-expanded="false"
                              className=""
                            >
                              <i className="ti-more-alt " />
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
                      <div className="mb-30 d-flex justify-content-between align-items-center">
                        <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                          <div className="d-flex justify-content-between align-items-center">
                            <img
                              src="../images/avatar/avatar-13.png"
                              className="me-10 avatar-lg bg-light rounded-circle"
                              alt=""
                            />
                            <div>
                              <p className="m-0 fs-16 fw-600 hover-blue">
                                Hilda Hunter
                              </p>
                              <p className="m-0 fs-12 text-mute">Female, 35</p>
                            </div>
                          </div>
                          <div className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="#"
                              aria-expanded="false"
                              className=""
                            >
                              <i className="ti-more-alt " />
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
                      <div className="mb-30 d-flex justify-content-between align-items-center">
                        <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                          <div className="d-flex justify-content-between align-items-center">
                            <img
                              src="../images/avatar/avatar-13.png"
                              className="me-10 avatar-lg bg-light rounded-circle"
                              alt=""
                            />
                            <div>
                              <p className="m-0 fs-16 fw-600 hover-blue">
                                Michal Bomb
                              </p>
                              <p className="m-0 fs-12 text-mute">Male, 25</p>
                            </div>
                          </div>
                          <div className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="#"
                              aria-expanded="false"
                              className=""
                            >
                              <i className="ti-more-alt " />
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
                      <div className="mb-30 d-flex justify-content-between align-items-center">
                        <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                          <div className="d-flex justify-content-between align-items-center">
                            <img
                              src="../images/avatar/avatar-13.png"
                              className="me-10 avatar-lg bg-light rounded-circle"
                              alt=""
                            />
                            <div>
                              <p className="m-0 fs-16 fw-600 hover-blue">
                                Ellen Barton
                              </p>
                              <p className="m-0 fs-12 text-mute">Female, 29</p>
                            </div>
                          </div>
                          <div className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="#"
                              aria-expanded="false"
                              className=""
                            >
                              <i className="ti-more-alt " />
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
                      <div className="mb-30 d-flex justify-content-between align-items-center">
                        <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                          <div className="d-flex justify-content-between align-items-center">
                            <img
                              src="../images/avatar/avatar-13.png"
                              className="me-10 avatar-lg bg-light rounded-circle"
                              alt=""
                            />
                            <div>
                              <p className="m-0 fs-16 fw-600 hover-blue">
                                Thad Ennings
                              </p>
                              <p className="m-0 fs-12 text-mute">Male, 40</p>
                            </div>
                          </div>
                          <div className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="#"
                              aria-expanded="false"
                              className=""
                            >
                              <i className="ti-more-alt " />
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
                      <div className=" d-flex justify-content-between align-items-center">
                        <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                          <div className="d-flex justify-content-between align-items-center">
                            <img
                              src="../images/avatar/avatar-13.png"
                              className="me-10 avatar-lg bg-light rounded-circle"
                              alt=""
                            />
                            <div>
                              <p className="m-0 fs-16 fw-600 hover-blue	">
                                Brittni Lando
                              </p>
                              <p className="m-0 fs-12 text-mute">Female, 32</p>
                            </div>
                          </div>
                          <div className="dropdown">
                            <a
                              data-bs-toggle="dropdown"
                              href="#"
                              aria-expanded="false"
                              className=""
                            >
                              <i className="ti-more-alt " />
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
                <div className="col-xxxl-12 col-xl-6 col-lg-6">
                  <div className="box box-body px-35 py-30">
                    <div className="d-flex justify-content-between align-items-center pb-35 ">
                      <h3 className="m-0 fw-500">Patient File</h3>
                      <span className="float-end ">
                        <a
                          className="btn btn-rounded  btn-light fw-500 w-90"
                          href="patient_details.html"
                        >
                          View all
                        </a>
                      </span>
                    </div>
                    <div className="mb-35 d-flex justify-content-between align-items-center">
                      <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                        <div className="d-flex justify-content-between align-items-center">
                          <img
                            src="../images/pdf.png"
                            className="me-10 avatar"
                            alt=""
                          />
                          <div>
                            <p className="m-0 fs-18 fw-600 hover-blue">
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
                    <div className="mb-35 d-flex justify-content-between align-items-center">
                      <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                        <div className="d-flex justify-content-between align-items-center">
                          <img
                            src="../images/pdf.png"
                            className="me-10 avatar"
                            alt=""
                          />
                          <div>
                            <p className="m-0 fs-18 fw-600 hover-blue">
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
                    <div className="mb-35 d-flex justify-content-between align-items-center">
                      <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                        <div className="d-flex justify-content-between align-items-center">
                          <img
                            src="../images/pdf.png"
                            className="me-10 avatar"
                            alt=""
                          />
                          <div>
                            <p className="m-0 fs-18 fw-600 hover-blue">
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
                    <div className="mb-15 d-flex justify-content-between align-items-center">
                      <div className="w-p100 rounded10 justify-content-between align-items-center d-flex">
                        <div className="d-flex justify-content-between align-items-center">
                          <img
                            src="../images/pdf.png"
                            className="me-10 avatar"
                            alt=""
                          />
                          <div>
                            <p className="m-0 fs-18 fw-600 hover-blue">
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
                    {/* <div class="mb-20 d-flex justify-content-between align-items-center">
									<div class="w-p100 rounded10 justify-content-between align-items-center d-flex">
										<div class="d-flex justify-content-between align-items-center">
											<img src="../images/pdf.png" class="me-10 avatar" alt="">
											<div>
												<p class="m-0 fs-18 fw-600 hover-blue">Medical Checkup.pdf</p>
											</div>
										</div>
										<div class="dropdown">
											<a href="#"><i class="fa fa-download bg-light rounded p-5 me-5 text-dark" aria-hidden="true"></i></a>
											<a data-bs-toggle="dropdown" href="#" aria-expanded="false" class=""><i class="ti-more-alt rotate-90"></i></a>
											<div class="dropdown-menu dropdown-menu-end" style="">
												<a class="dropdown-item" href="#"><i class="ti-import"></i> Details</a>
												<a class="dropdown-item" href="#"><i class="ti-export"></i> Lab Reports</a>
											</div>
										</div>
									</div>								
								</div> */}
                    {/* <div class="mb-25 justify-content-between align-items-center pdf-file">
									<div class="w-p100 rounded10 justify-content-between align-items-center d-flex">
										<div class="d-flex justify-content-between align-items-center">
											<img src="../images/pdf.png" class="me-10 avatar" alt="">
											<div>
												<p class="m-0 fs-18 fw-600 hover-blue">Sugar Checkup.pdf</p>
											</div>
										</div>
										<div class="dropdown">
											<a href="#"><i class="fa fa-download bg-light rounded p-5 me-5 text-dark" aria-hidden="true"></i></a>
											<a data-bs-toggle="dropdown" href="#" aria-expanded="false" class=""><i class="ti-more-alt rotate-90"></i></a>
											<div class="dropdown-menu dropdown-menu-end" style="">
												<a class="dropdown-item" href="#"><i class="ti-import"></i> Details</a>
												<a class="dropdown-item" href="#"><i class="ti-export"></i> Lab Reports</a>
											</div>
										</div>
									</div>								
								</div>
								<div class=" d-flex justify-content-between align-items-center">
									<div class="w-p100 rounded10 justify-content-between align-items-center d-flex">
										<div class="d-flex justify-content-between align-items-center">
											<img src="../images/pdf.png" class="me-10 avatar" alt="">
											<div>
												<p class="m-0 fs-18 fw-600 hover-blue">Bone Scan.pdf</p>
											</div>
										</div>
										<div class="dropdown">
											<a href="#"><i class="fa fa-download bg-light rounded p-5 me-5 text-dark" aria-hidden="true"></i></a>
											<a data-bs-toggle="dropdown" href="#" aria-expanded="false" class=""><i class="ti-more-alt rotate-90"></i></a>
											<div class="dropdown-menu dropdown-menu-end" style="">
												<a class="dropdown-item" href="#"><i class="ti-import"></i> Details</a>
												<a class="dropdown-item" href="#"><i class="ti-export"></i> Lab Reports</a>
											</div>
										</div>
									</div>								
								</div> */}
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
