import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdminSideBar extends Component {
  render() {
    return (
      <aside className="main-sidebar">
        {/* sidebar */}
        <section className="sidebar position-relative">
          <div className="multinav">
            <div className="multinav-scroll" style={{ height: "100%" }}>
              {/* sidebar menu */}
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
                      <Link
                        to="/admin"
                        className="hover:bg-gray-700 p-2 rounded flex items-center"
                      >
                        <i className="icon-Commit mr-2" />
                        Patients Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/doctordashboard"
                        className="hover:bg-gray-700 p-2 rounded flex items-center"
                      >
                        <i className="icon-Commit mr-2" />
                        Doctors Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/hospitaldashboard"
                        className="hover:bg-gray-700 p-2 rounded flex items-center"
                      >
                        <i className="icon-Commit mr-2" />
                        Hospital Dashboard
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link
                    to="/admin/appointment"
                    className="hover:bg-gray-700 p-2 rounded flex items-center"
                  >
                    <i className="icon-Barcode-read mr-2" />
                    Appointments
                  </Link>
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
                      <Link
                        to="/admin/patient"
                        className="hover:bg-gray-700 p-2 rounded flex items-center"
                      >
                        <i className="icon-Commit mr-2" />
                        Patients
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/patientdetail"
                        className="hover:bg-gray-700 p-2 rounded flex items-center"
                      >
                        <i className="icon-Commit mr-2" />
                        Patient Details
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link
                    to="/admin/report"
                    className="hover:bg-gray-700 p-2 rounded flex items-center"
                  >
                    <i className="icon-Settings-1 mr-2" />
                    Reports
                  </Link>
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
                      <Link
                        to="/admin/doctorlist"
                        className="hover:bg-gray-700 p-2 rounded flex items-center"
                      >
                        <i className="icon-Commit mr-2" />
                        Doctor list
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/doctordetail"
                        className="hover:bg-gray-700 p-2 rounded flex items-center"
                      >
                        <i className="icon-Commit mr-2" />
                        Doctor Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/doctor"
                        className="hover:bg-gray-700 p-2 rounded flex items-center"
                      >
                        <i className="icon-Commit mr-2" />
                        Doctor
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* User Module */}
                <li className="treeview">
                  <a href="#">
                    <i className="icon-User">
                      <span className="path1" />
                      <span className="path2" />
                    </i>
                    <span>Users</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-right pull-right" />
                    </span>
                  </a>
                  <ul className="treeview-menu pl-4">
                    <li>
                      <Link
                        to="/admin/user"
                        className="hover:bg-gray-700 p-2 rounded flex items-center"
                      >
                        <i className="icon-Commit mr-2" />
                        List User
                      </Link>
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
