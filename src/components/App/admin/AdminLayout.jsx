import React, { Component } from "react";
import HeaderAdmin from "./partials/HeaderAdmin";
import AdminSideBar from "./partials/AdminSideBar";
import { Outlet } from "react-router-dom";
 export default class AdminLayout extends Component {
  render() {
    return (
      <div className="wrapper">
        {/* <div id="loader"></div> */}
        <HeaderAdmin />
        <AdminSideBar />

        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          <div className="container-full">
            {/* Main content */}
            <section className="content">
              <div className="row">
                <Outlet />
              </div>
            </section>
            {/* /.content */}
          </div>
        </div>
        {/* /.content-wrapper */}
       
        {/* Control Sidebar */}
        <aside className="control-sidebar">
          <div className="rpanel-title">
            <span
              className="pull-right btn btn-circle btn-danger"
              data-toggle="control-sidebar"
            >
              <i className="ion ion-close text-white" />
            </span>{" "}
          </div>{" "}
          {/* Create the tabs */}
          <ul className="nav nav-tabs control-sidebar-tabs">
            <li className="nav-item">
              <a
                href="#control-sidebar-home-tab"
                data-bs-toggle="tab"
                className="active"
              >
                <i className="mdi mdi-message-text" />
              </a>
            </li>
            <li className="nav-item">
              <a href="#control-sidebar-settings-tab" data-bs-toggle="tab">
                <i className="mdi mdi-playlist-check" />
              </a>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content">
            {/* Home tab content */}
            <div className="tab-pane active" id="control-sidebar-home-tab">
              <div className="flexbox">
                <a href="javascript:void(0)" className="text-grey">
                  <i className="ti-more" />
                </a>
                <p>Users</p>
                <a href="javascript:void(0)" className="text-end text-grey">
                  <i className="ti-plus" />
                </a>
              </div>
              <div className="lookup lookup-sm lookup-right d-none d-lg-block">
                <input
                  type="text"
                  name="s"
                  placeholder="Search"
                  className="w-p100"
                />
              </div>
              <div className="media-list media-list-hover mt-20">
                <div className="media py-10 px-0">
                  <a className="avatar avatar-lg status-success" href="#">
                    <img src="/images/avatar/1.jpg" alt="..." />
                  </a>
                  <div className="media-body">
                    <p className="fs-16">
                      <a className="hover-primary" href="#">
                        <strong>Tyler</strong>
                      </a>
                    </p>
                    <p>Praesent tristique diam...</p>
                    <span>Just now</span>
                  </div>
                </div>
                <div className="media py-10 px-0">
                  <a className="avatar avatar-lg status-danger" href="#">
                    <img src="/images/avatar/2.jpg" alt="..." />
                  </a>
                  <div className="media-body">
                    <p className="fs-16">
                      <a className="hover-primary" href="#">
                        <strong>Luke</strong>
                      </a>
                    </p>
                    <p>Cras tempor diam ...</p>
                    <span>33 min ago</span>
                  </div>
                </div>
                <div className="media py-10 px-0">
                  <a className="avatar avatar-lg status-warning" href="#">
                    <img src="/images/avatar/3.jpg" alt="..." />
                  </a>
                  <div className="media-body">
                    <p className="fs-16">
                      <a className="hover-primary" href="#">
                        <strong>Evan</strong>
                      </a>
                    </p>
                    <p>In posuere tortor vel...</p>
                    <span>42 min ago</span>
                  </div>
                </div>
                <div className="media py-10 px-0">
                  <a className="avatar avatar-lg status-primary" href="#">
                    <img src="/images/avatar/4.jpg" alt="..." />
                  </a>
                  <div className="media-body">
                    <p className="fs-16">
                      <a className="hover-primary" href="#">
                        <strong>Evan</strong>
                      </a>
                    </p>
                    <p>In posuere tortor vel...</p>
                    <span>42 min ago</span>
                  </div>
                </div>
                <div className="media py-10 px-0">
                  <a className="avatar avatar-lg status-success" href="#">
                    <img src="/images/avatar/1.jpg" alt="..." />
                  </a>
                  <div className="media-body">
                    <p className="fs-16">
                      <a className="hover-primary" href="#">
                        <strong>Tyler</strong>
                      </a>
                    </p>
                    <p>Praesent tristique diam...</p>
                    <span>Just now</span>
                  </div>
                </div>
                <div className="media py-10 px-0">
                  <a className="avatar avatar-lg status-danger" href="#">
                    <img src="/images/avatar/2.jpg" alt="..." />
                  </a>
                  <div className="media-body">
                    <p className="fs-16">
                      <a className="hover-primary" href="#">
                        <strong>Luke</strong>
                      </a>
                    </p>
                    <p>Cras tempor diam ...</p>
                    <span>33 min ago</span>
                  </div>
                </div>
                <div className="media py-10 px-0">
                  <a className="avatar avatar-lg status-warning" href="#">
                    <img src="/images/avatar/3.jpg" alt="..." />
                  </a>
                  <div className="media-body">
                    <p className="fs-16">
                      <a className="hover-primary" href="#">
                        <strong>Evan</strong>
                      </a>
                    </p>
                    <p>In posuere tortor vel...</p>
                    <span>42 min ago</span>
                  </div>
                </div>
                <div className="media py-10 px-0">
                  <a className="avatar avatar-lg status-primary" href="#">
                    <img src="/images/avatar/4.jpg" alt="..." />
                  </a>
                  <div className="media-body">
                    <p className="fs-16">
                      <a className="hover-primary" href="#">
                        <strong>Evan</strong>
                      </a>
                    </p>
                    <p>In posuere tortor vel...</p>
                    <span>42 min ago</span>
                  </div>
                </div>
              </div>
            </div>
            {/* /.tab-pane */}
            {/* Settings tab content */}
            <div className="tab-pane" id="control-sidebar-settings-tab">
              <div className="flexbox">
                <a href="javascript:void(0)" className="text-grey">
                  <i className="ti-more" />
                </a>
                <p>Todo List</p>
                <a href="javascript:void(0)" className="text-end text-grey">
                  <i className="ti-plus" />
                </a>
              </div>
              <ul className="todo-list mt-20">
                <li className="py-15 px-5 by-1">
                  {/* checkbox */}
                  <input
                    type="checkbox"
                    id="basic_checkbox_1"
                    className="filled-in"
                  />
                  <label htmlFor="basic_checkbox_1" className="mb-0 h-15" />
                  {/* todo text */}
                  <span className="text-line">Nulla vitae purus</span>
                  {/* Emphasis label */}
                  <small className="badge bg-danger">
                    <i className="fa fa-clock-o" /> 2 mins
                  </small>
                  {/* General tools such as edit or delete*/}
                  <div className="tools">
                    <i className="fa fa-edit" />
                    <i className="fa fa-trash-o" />
                  </div>
                </li>
                <li className="py-15 px-5">
                  {/* checkbox */}
                  <input
                    type="checkbox"
                    id="basic_checkbox_2"
                    className="filled-in"
                  />
                  <label htmlFor="basic_checkbox_2" className="mb-0 h-15" />
                  <span className="text-line">Phasellus interdum</span>
                  <small className="badge bg-info">
                    <i className="fa fa-clock-o" /> 4 hours
                  </small>
                  <div className="tools">
                    <i className="fa fa-edit" />
                    <i className="fa fa-trash-o" />
                  </div>
                </li>
                <li className="py-15 px-5 by-1">
                  {/* checkbox */}
                  <input
                    type="checkbox"
                    id="basic_checkbox_3"
                    className="filled-in"
                  />
                  <label htmlFor="basic_checkbox_3" className="mb-0 h-15" />
                  <span className="text-line">Quisque sodales</span>
                  <small className="badge bg-warning">
                    <i className="fa fa-clock-o" /> 1 day
                  </small>
                  <div className="tools">
                    <i className="fa fa-edit" />
                    <i className="fa fa-trash-o" />
                  </div>
                </li>
                <li className="py-15 px-5">
                  {/* checkbox */}
                  <input
                    type="checkbox"
                    id="basic_checkbox_4"
                    className="filled-in"
                  />
                  <label htmlFor="basic_checkbox_4" className="mb-0 h-15" />
                  <span className="text-line">Proin nec mi porta</span>
                  <small className="badge bg-success">
                    <i className="fa fa-clock-o" /> 3 days
                  </small>
                  <div className="tools">
                    <i className="fa fa-edit" />
                    <i className="fa fa-trash-o" />
                  </div>
                </li>
                <li className="py-15 px-5 by-1">
                  {/* checkbox */}
                  <input
                    type="checkbox"
                    id="basic_checkbox_5"
                    className="filled-in"
                  />
                  <label htmlFor="basic_checkbox_5" className="mb-0 h-15" />
                  <span className="text-line">Maecenas scelerisque</span>
                  <small className="badge bg-primary">
                    <i className="fa fa-clock-o" /> 1 week
                  </small>
                  <div className="tools">
                    <i className="fa fa-edit" />
                    <i className="fa fa-trash-o" />
                  </div>
                </li>
                <li className="py-15 px-5">
                  {/* checkbox */}
                  <input
                    type="checkbox"
                    id="basic_checkbox_6"
                    className="filled-in"
                  />
                  <label htmlFor="basic_checkbox_6" className="mb-0 h-15" />
                  <span className="text-line">Vivamus nec orci</span>
                  <small className="badge bg-info">
                    <i className="fa fa-clock-o" /> 1 month
                  </small>
                  <div className="tools">
                    <i className="fa fa-edit" />
                    <i className="fa fa-trash-o" />
                  </div>
                </li>
                <li className="py-15 px-5 by-1">
                  {/* checkbox */}
                  <input
                    type="checkbox"
                    id="basic_checkbox_7"
                    className="filled-in"
                  />
                  <label htmlFor="basic_checkbox_7" className="mb-0 h-15" />
                  {/* todo text */}
                  <span className="text-line">Nulla vitae purus</span>
                  {/* Emphasis label */}
                  <small className="badge bg-danger">
                    <i className="fa fa-clock-o" /> 2 mins
                  </small>
                  {/* General tools such as edit or delete*/}
                  <div className="tools">
                    <i className="fa fa-edit" />
                    <i className="fa fa-trash-o" />
                  </div>
                </li>
                <li className="py-15 px-5">
                  {/* checkbox */}
                  <input
                    type="checkbox"
                    id="basic_checkbox_8"
                    className="filled-in"
                  />
                  <label htmlFor="basic_checkbox_8" className="mb-0 h-15" />
                  <span className="text-line">Phasellus interdum</span>
                  <small className="badge bg-info">
                    <i className="fa fa-clock-o" /> 4 hours
                  </small>
                  <div className="tools">
                    <i className="fa fa-edit" />
                    <i className="fa fa-trash-o" />
                  </div>
                </li>
                <li className="py-15 px-5 by-1">
                  {/* checkbox */}
                  <input
                    type="checkbox"
                    id="basic_checkbox_9"
                    className="filled-in"
                  />
                  <label htmlFor="basic_checkbox_9" className="mb-0 h-15" />
                  <span className="text-line">Quisque sodales</span>
                  <small className="badge bg-warning">
                    <i className="fa fa-clock-o" /> 1 day
                  </small>
                  <div className="tools">
                    <i className="fa fa-edit" />
                    <i className="fa fa-trash-o" />
                  </div>
                </li>
                <li className="py-15 px-5">
                  {/* checkbox */}
                  <input
                    type="checkbox"
                    id="basic_checkbox_10"
                    className="filled-in"
                  />
                  <label htmlFor="basic_checkbox_10" className="mb-0 h-15" />
                  <span className="text-line">Proin nec mi porta</span>
                  <small className="badge bg-success">
                    <i className="fa fa-clock-o" /> 3 days
                  </small>
                  <div className="tools">
                    <i className="fa fa-edit" />
                    <i className="fa fa-trash-o" />
                  </div>
                </li>
              </ul>
            </div>
            {/* /.tab-pane */}
          </div>
        </aside>
        {/* /.control-sidebar */}
        {/* Add the sidebar's background. This div must be placed immediately after the control sidebar */}
        <div className="control-sidebar-bg" />
      </div>
    );
  }
}
