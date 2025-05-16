import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(../images/auth-bg/bg-1.jpg)",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-5 ">
          <div className="container h-p100 mt-5">
            <div className="row align-items-center justify-content-md-center h-p100">
              <div className="col-12">
                <div className="row justify-content-center g-0">
                  <div className="col-lg-5 col-md-5 col-12">
                    <div className="bg-white rounded10 shadow-lg">
                      <div
                        className="content-top-agile p-20 pb-0 "
                        style={{ marginTop: "100px" }}
                      >
                        <h2 className="text-primary">Let's Get Started</h2>
                        <p className="mb-0">Sign in to continue to Doclinic.</p>
                      </div>
                      <div className="p-40">
                        <form
                          // action="https://medical-admin-template.multipurposethemes.com/main/index.html"
                          // method="post"
                        >
                          <div className="form-group mt-5">
                            <div className="input-group mb-3">
                              <span className="input-group-text bg-transparent">
                                <i className="ti-user" />
                              </span>
                              <input
                                type="text"
                                className="form-control ps-15 bg-transparent"
                                placeholder="Username"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group mb-3">
                              <span className="input-group-text  bg-transparent">
                                <i className="ti-lock" />
                              </span>
                              <input
                                type="password"
                                className="form-control ps-15 bg-transparent"
                                placeholder="Password"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-6">
                              <div className="checkbox">
                                <input type="checkbox" id="basic_checkbox_1" />
                                <label htmlFor="basic_checkbox_1">
                                  Remember Me
                                </label>
                              </div>
                            </div>
                            {/* /.col */}
                            <div className="col-6">
                              <div className="fog-pwd text-end">
                                <a
                                  href="javascript:void(0)"
                                  className="hover-warning"
                                >
                                  <i className="ion ion-locked" /> Forgot pwd?
                                </a>
                                <br />
                              </div>
                            </div>
                            {/* /.col */}
                            <div className="col-12 text-center">
                              <button
                                type="submit"
                                className="btn btn-danger mt-10"
                              >
                                <Link
                                  to="/admin"
                                  className="hover:bg-gray-700 p-2 rounded"
                                >
                                  SIGN IN
                                </Link>
                              </button>
                            </div>
                            {/* /.col */}
                          </div>
                        </form>
                        <div className="text-center">
                          <p className="mt-15 mb-0">
                            Don't have an account?{" "}
                            <a
                              href="auth_register.html"
                              className="text-warning ms-5"
                            >
                              Sign Up
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Vendor JS */}
        </div>
      </div>
    );
  }
}
