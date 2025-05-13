import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class AdminSideBar extends Component {
  render() {
    return (
      <aside className="main-sidebar">
        {/* sidebar*/}
        <section className="sidebar position-relative">
          <div className="multinav">
            <div className="multinav-scroll" style={{ height: "100%" }}>
              {/* sidebar menu*/}
              <ul className="sidebar-menu" data-widget="tree">
                <li className="treeview">
                  <a href="#">
                    <i className="icon-Layout-4-blocks">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                    <span>Dashboard</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-right pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="index.html">
                        <i className="icon-Commit">
                          <Link
                            to="/admin"
                            className="hover:bg-gray-700 p-2 rounded"
                          >
                            Patients Dashboard
                          </Link>
                        </i>
                      </a>
                    </li>

                    <li>
                      <a href="index2.html">
                        <i className="icon-Commit">
                          <Link
                            to="/admin/doctor"
                            className="hover:bg-gray-700 p-2 rounded"
                          >
                            Doctors Dashboard
                          </Link>
                        </i>
                      </a>
                    </li>

                    <li>
                      <a href="index3.html">
                        <i className="icon-Commit">
                          <Link
                            to="/admin/hospitaldashboard"
                            className="hover:bg-gray-700 p-2 rounded"
                          >
                            Hospital Dashboard
                          </Link>
                        </i>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="appointments.html">
                    <i className="icon-Barcode-read"></i>
                    <Link
                      to="/admin/appointment"
                      className="hover:bg-gray-700 p-2 rounded"
                    >
                      Appointments
                    </Link>
                  </a>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="icon-Compiling">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                    <span>Patients</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-right pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="patients.html">
                        <i className="icon-Commit">
                          <Link
                            to="/admin/patient"
                            className="hover:bg-gray-700 p-2 rounded"
                          >
                            Patients
                          </Link>
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="patient_details.html">
                        <i className="icon-Commit">
                          <Link
                            to="/admin/patientdetail"
                            className="hover:bg-gray-700 p-2 rounded"
                          >
                            Patient Details
                          </Link>
                        </i>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="reports.html">
                    <i className="icon-Settings-1"></i>
                    <Link
                      to="/admin/report"
                      className="hover:bg-gray-700 p-2 rounded"
                    >
                      Reports
                    </Link>
                  </a>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="icon-Diagnostics">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                    </i>
                    <span>Doctors</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-right pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="doctor_list.html">
                        <i className="icon-Commit">
                          <Link
                            to="/admin/doctorlist"
                            className="hover:bg-gray-700 p-2 rounded"
                          >
                            Doctor list
                          </Link>
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="doctors.html">
                        <i className="icon-Commit">
                          <Link
                            to="/admin/doctordetail"
                            className="hover:bg-gray-700 p-2 rounded"
                          >
                            Doctor Details
                          </Link>
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="doctors.html">
                        <i className="icon-Commit">
                          <Link
                            to="/admin/doctor"
                            className="hover:bg-gray-700 p-2 rounded"
                          >
                            Doctor
                          </Link>
                        </i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="sidebar-widgets">
                <div className="mx-25 mb-30 pb-20 side-bx bg-primary-light rounded20">
                  <div className="text-center">
                    <img
                      src="https://medical-admin-template.multipurposethemes.com/images/svg-icon/color-svg/custom-17.svg"
                      className="sideimg p-5"
                      alt=""
                    />
                    <h4 className="title-bx text-primary">
                      Make an Appointments
                    </h4>
                    <a href="#" className="py-10 fs-14 mb-0 text-primary">
                      Best Helth Care here <i className="mdi mdi-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="copyright text-center m-25">
                  <p>
                    <strong className="d-block">Doclinic Dashboard</strong> ©
                    All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </aside>
    );
  }
}
