import React, { Component } from "react";

export default class PatientDetails extends Component {
 
  render() {
   

    return (
      <section className="content">
        <div className="row">
          <div className="col-xl-4 col-12">
            <div className="box">
              <div className="box-body box-profile">
                <div className="row">
                  <div className="col-12">
                    <div>
                      <p>
                        Email:{" "}
                        <span className="text-gray ps-10">David@yahoo.com</span>
                      </p>
                      <p>
                        Phone:{" "}
                        <span className="text-gray ps-10">
                          +11 123 456 7890
                        </span>
                      </p>
                      <p>
                        Address:{" "}
                        <span className="text-gray ps-10">
                          123, Lorem Ipsum, Florida, USA
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="pb-15">
                      <p className="mb-10">Social Profile</p>
                      <div className="user-social-acount">
                        <button className="btn btn-circle btn-social-icon btn-facebook">
                          <i className="fa fa-facebook"></i>
                        </button>
                        <button className="btn btn-circle btn-social-icon btn-twitter">
                          <i className="fa fa-twitter"></i>
                        </button>
                        <button className="btn btn-circle btn-social-icon btn-instagram">
                          <i className="fa fa-instagram"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div>
                      <div className="map-box">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805244.1745767146!2d-86.32675167439648!3d29.383165774894163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C+USA!5e0!3m2!1sen!2sin!4v1501665415329"
                          className="w-p100"
                          height="175"
                          style={{ border: 0 }}
                          allowFullScreen=""
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="box-header border-0 pb-0">
                <h4 className="box-title">Disease History</h4>
              </div>
              <div className="box-body">
                <div className="widget-timeline-icon">
                  <ul>
                    <li>
                      <div className="icon bg-primary fa fa-heart-o"></div>
                      <a className="timeline-panel text-muted" href="#">
                        <h4 className="mb-2 mt-1">Diabetes</h4>
                        <p className="fs-15 mb-0">Mon, 18 Mar 2021, 11:15 AM</p>
                      </a>
                    </li>
                    <li>
                      <div className="icon bg-primary fa fa-heart-o"></div>
                      <a className="timeline-panel text-muted" href="#">
                        <h4 className="mb-2 mt-1">Sleep Problem</h4>
                        <p className="fs-15 mb-0">Tue, 21 Jun 2020, 03:22 PM</p>
                      </a>
                    </li>
                    <li>
                      <div className="icon bg-primary fa fa-heart-o"></div>
                      <a className="timeline-panel text-muted" href="#">
                        <h4 className="mb-2 mt-1">Dental Care</h4>
                        <p className="fs-15 mb-0">Wed, 15 Mar 2020, 02:11 PM</p>
                      </a>
                    </li>
                    <li>
                      <div className="icon bg-primary fa fa-heart-o"></div>
                      <a className="timeline-panel text-muted" href="#">
                        <h4 className="mb-2 mt-1">Diabetes</h4>
                        <p className="fs-15 mb-0">Sun, 11 Jan 2020, 12:24 PM</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="box-header">
                <h4 className="box-title">Assigned Doctor</h4>
              </div>
              <div className="box-body">
                <div className="d-flex align-items-center">
                  <img
                    src="../images/avatar/avatar-10.png"
                    className="w-100 bg-primary-light rounded10 me-15"
                    alt=""
                  />
                  <div>
                    <h4 className="mb-0">Dr. Johen Doe</h4>
                    <p className="text-muted">Physician</p>
                    <div className="d-flex">
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star-half"></i>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-15">
                  <a
                    href="javascript:void(0);"
                    className="btn btn-danger-light me-4"
                  >
                    Unassign
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-success-light"
                  >
                    Check
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-12">
            <div className="d-md-flex align-items-center justify-content-between mb-20">
              <a
                href="javascript:void(0);"
                className="btn btn-primary me-5 mb-md-0 mb-5"
              >
                <i className="fa fa-edit"></i> Edit Profile
              </a>
              <div className="d-flex">
                <a
                  href="javascript:void(0);"
                  className="btn btn-outline btn-danger me-5"
                >
                  <i className="fa fa-times-circle-o"></i> Reject Patient
                </a>
                <a href="javascript:void(0);" className="btn btn-success">
                  <i className="fa fa-check-circle-o"></i> Accept Patient
                </a>
              </div>
            </div>

            <div className="box">
              <div
                className="box-body text-end min-h-150"
                style={{
                  backgroundImage: "url(../images/gallery/landscape14.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="box-body wed-up position-relative">
                <div className="d-md-flex align-items-center">
                  <div className="me-20 text-center text-md-start">
                    <img
                      src="../images/avatar/2.jpg"
                      className="bg-success-light rounded10"
                      alt=""
                    />
                    <div className="text-center my-10">
                      <p className="mb-0">Disease</p>
                      <h4>Cold &amp; Flu</h4>
                    </div>
                  </div>
                  <div className="mt-40">
                    <h4 className="fw-600 mb-5">Mical Doe</h4>
                    <h5 className="fw-500 mb-5">#p-12458796</h5>
                    <p>
                      <i className="fa fa-clock-o"></i> Admin on 15 May 2021,
                      10:00 AM
                    </p>
                  </div>
                </div>
              </div>
              <div className="box-body pt-0">
                <h4>Story About Disease</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
