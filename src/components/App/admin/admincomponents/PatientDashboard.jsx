import React, { Component } from 'react'

export default class PatientDashboard extends Component {
  render() {
    return (
      <>
        <div className="col-xxxl-9 col-xl-8 col-12">
          <div className="mb-20 d-flex justify-content-between align-items-center">
            <h1 className="my-md-0 mb-10">Johen doe</h1>
            <button
              type="button"
              className="waves-effect waves-light btn btn-primary"
            >
              <i className="mdi mdi-plus me-15" />
              Add Record
            </button>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-12">
              <div className="box bg-primary">
                <div className="box-body">
                  <div className="mb-15 d-flex justify-content-between align-items-center">
                    <h4 className="my-0">Heart Rate</h4>
                    <i className="fs-18 mdi mdi-heart-outline" />
                  </div>
                  <div>
                    <h5 className="fw-400 my-0">75/118</h5>
                  </div>
                </div>
                <div className="box-body pt-0 ps-0">
                  <div id="heartrate" />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-12">
              <div className="box">
                <div className="box-body">
                  <div className="mb-15 d-flex justify-content-between align-items-center">
                    <h4 className="my-0">Fever</h4>
                    <i className="text-primary fs-18 mdi mdi-heart-outline" />
                  </div>
                  <div>
                    <h5 className="fw-400 my-0">
                      100.8<small>°F</small>
                    </h5>
                  </div>
                </div>
                <div className="box-body pt-0 ps-0">
                  <div id="fever" />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-12">
              <div className="box">
                <div className="box-body">
                  <div className="mb-15 d-flex justify-content-between align-items-center">
                    <h4 className="my-0">Blood Pre..</h4>
                    <i className="text-primary fs-18 mdi mdi-heart-pulse" />
                  </div>
                  <div className="mb-10 d-flex justify-content-between align-items-center">
                    <h4 className="fw-400 my-0">75</h4>
                    <p className="my-0">Upper</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="fw-400 my-0">124</h4>
                    <p className="my-0">Lower</p>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="box-body">
                  <div className="mb-5 pb-1 d-flex justify-content-between align-items-center">
                    <h4 className="my-0">Bill Due</h4>
                    <i className="text-primary fs-18 mdi mdi-wallet" />
                  </div>
                  <div>
                    <h5 className="fw-300 my-0">$214.86</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-12">
              <div className="box overflow-hidden">
                <div className="box-body">
                  <div>
                    <h4 className="mt-0 mb-5">Fever History</h4>
                    <select className="form-select no-border ps-0 w-auto">
                      <option>1 to 10 Jan '21</option>
                      <option>11 to 31 Jan 21</option>
                      <option>1 to 15 Feb '21</option>
                      <option>16 to 18 Feb '21</option>
                    </select>
                  </div>
                  <div className="mt-10 text-center d-flex align-items-center justify-content-between">
                    <div className="d-flex justify-content-center align-items-start">
                      <h5 className="text-danger fs-24 fw-600 my-0">99</h5>
                      <small className="fs-14 text-danger fw-600 my-0">
                        +12%
                      </small>
                    </div>
                    <p className="mb-0 text-center">Yesterday</p>
                  </div>
                </div>
              </div>
              <a href="#" className="box">
                <div className="box-body">
                  <div className="text-center d-flex align-items-center justify-content-between">
                    <i className="text-primary fs-24 fa fa-user-md" />
                    <div className="fw-600 fs-18">Johen Mark</div>
                  </div>
                  <div className="text-fade text-end fs-16 pb-1">My Doctor</div>
                </div>
              </a>
            </div>
            <div className="col-xxxl-8 col-xl-7 col-12">
              <div className="box">
                <div className="box-header no-border pb-0">
                  <h4 className="box-title">Heart ECG</h4>
                </div>
                <div className="box-body pt-5 pb-0">
                  <div className="mb-15 d-flex justify-content-between align-items-center">
                    <select className="form-select no-border ps-0 w-auto">
                      <option>1 to 10 Jan 2021</option>
                      <option>11 to 31 Jan 2021</option>
                      <option>1 to 15 Feb 2021</option>
                      <option>16 to 18 Feb 2021</option>
                    </select>
                    <div className="bg-lightest p-10 rounded10">
                      <p className="mb-0">
                        <span className="text-primary pe-10">72 bmp</span>
                        Average
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box-body py-0">
                  <canvas id="ecg" className="h-250 w-p100" />
                </div>
              </div>
            </div>
            <div className="col-xxxl-4 col-xl-5 col-12">
              <div className="box">
                <div className="box-body px-0 bb-1 text-center">
                  <div className="avatar avatar-lg status-success">
                    <img
                      src="/images/avatar/avatar-13.png"
                      className="rounded-circle bg-primary"
                      alt=""
                    />
                  </div>
                  <h4 className="mt-20 mb-15">Dr. Poul doe</h4>
                  <p className="mb-0">Heart Specialist</p>
                </div>
                <div className="box-body">
                  <div className="row">
                    <div className="col-6 be-1">
                      <div className="d-flex align-items-center">
                        <img
                          src="/images/health-1-color.png"
                          className="img-fluid me-10 w-50"
                          alt=""
                        />
                        <div>
                          <h3 className="mb-0">10</h3>
                          <p className="mb-2 text-muted">Operation</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <img
                          src="/images/health-2-color.png"
                          className="img-fluid me-10 w-50"
                          alt=""
                        />
                        <div>
                          <h3 className="mb-0">47</h3>
                          <p className="mb-2 text-muted">Patients</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-body">
                  <button
                    type="button"
                    className="waves-effect waves-light d-block w-p100 btn btn-primary-light"
                  >
                    <i className="me-15 mdi mdi-comment-outline" />
                    Message
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-12">
              <div className="box">
                <div className="box-header">
                  <h4 className="box-title">Current Vitals</h4>
                  <div className="box-controls pull-right">
                    <div className="lookup lookup-circle lookup-right">
                      <input type="text" name="s" placeholder="Patients id" />
                    </div>
                  </div>
                </div>
                <div className="box-body">
                  <div className="flexbox bb-1 mb-15">
                    <div>
                      <p>
                        <span className="text-mute">Patient Name:</span>{" "}
                        <strong>Jonsahn</strong>
                      </p>
                    </div>
                    <div>
                      <p>
                        <span className="text-mute">Patient Id:</span>{" "}
                        <strong>1254896</strong>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="row bb-1 pb-10">
                        <div className="col-4">
                          <img
                            className="img-fluid float-start w-30 mt-10 me-10"
                            src="/images/weight.png"
                            alt=""
                          />
                          <div>
                            <p className="mb-0">
                              <small>Weight</small>
                            </p>
                            <h5 className="mb-0">
                              <span>230 ibs</span>
                            </h5>
                          </div>
                        </div>
                        <div className="col-4 bs-1 be-1">
                          <img
                            className="img-fluid float-start w-30 mt-10 me-10"
                            src="/images/human.png"
                            alt=""
                          />
                          <div>
                            <p className="mb-0">
                              <small>Height</small>
                            </p>
                            <h5 className=" mb-0">
                              <span>6’1</span>
                            </h5>
                          </div>
                        </div>
                        <div className="col-4">
                          <img
                            className="img-fluid float-start w-30 mt-10 me-10"
                            src="/images/bmi.png"
                            alt=""
                          />
                          <div>
                            <p className="mb-0">
                              <small>BMI</small>
                            </p>
                            <h5 className="mb-0">
                              <span>30.34</span>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-body pt-0">
                  <p>
                    <small>Recorded on 25/05/2020</small>
                  </p>
                </div>
                <div className="box-body bg-primary">
                  <img
                    src="/images/smoking.png"
                    alt=""
                    className="float-start me-10"
                  />
                  <p>Smoking Status : current every day smoker</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <a href="#" className="box">
                <div className="box-body">
                  <img
                    src="https://medical-admin-template.multipurposethemes.com/images/glucose-meter.svg"
                    className="w-50 h-50 mb-5"
                    alt=""
                  />
                  <div className="fs-18 mt-5">Glucose Level</div>
                  <div className="fw-400 text-primary fs-22 pb-1">85-95</div>
                </div>
              </a>
              <a href="#" className="box">
                <div className="box-body">
                  <img
                    src="https://medical-admin-template.multipurposethemes.com/images/petri-dish.svg"
                    className="w-50 h-50 mb-5"
                    alt=""
                  />
                  <div className="fs-18 mt-5">Blood Count</div>
                  <div className="fw-400 text-primary fs-22 pb-1">9.456/ml</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xxxl-3 col-xl-4 col-12">
          <a className="box box-body mb-5" href="#">
            <div className="d-flex align-items-center">
              <img
                className="me-15 avatar avatar-lg bg-primary-light rounded-circle"
                src="/images/avatar/avatar-2.png"
                alt="..."
              />
              <div className="text-start">
                <h2 className="text-primary mb-0 fs-26">Dr. Kevin Black</h2>
                <h4>Cardiologists</h4>
              </div>
            </div>
          </a>
          <div className="box b-0 bg-transparent no-shadow">
            <div className="box-body pb-0 px-0">
              <h4 className="mb-0">Scheeduled Appointments</h4>
            </div>
          </div>
          <div className="box">
            <div className="box-body">
              <span className="badge badge-success-light">Routine Checkup</span>
              <h4 className="mt-20 mb-10">Meculam Deo - Standard Consult</h4>
              <div className="d-flex bb-1 mb-15 pb-15">
                <p className="mb-0 text-mute me-20">09:15am - 10:45am</p>
                <p className="mb-0 text-mute">
                  <i className="fa fa-clock-o me-5" />{" "}
                  <span className="text-primary">Starts in 15 m</span>
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    className="me-15 avatar avatar-lg bg-primary-light rounded-circle"
                    src="/images/avatar/avatar-3.png"
                    alt="..."
                  />
                  <div className="text-start">
                    <h4 className="text-primary mb-0">Dr. Meculam</h4>
                    <small>+1 142 536 7890</small>
                  </div>
                </div>
                <div>
                  <span className="badge badge-xl badge-dot badge-primary me-15" />
                  Billed
                </div>
              </div>
            </div>
            <div className="box-footer text-end">
              <button
                type="button"
                className="waves-effect waves-light btn-sm btn btn-secondary"
              >
                <i className="mdi mdi-pencil me-15" />
                Edit Consult
              </button>
            </div>
          </div>
          <div className="box">
            <div className="box-body">
              <span className="badge badge-danger-light">Emegency</span>
              <h4 className="mt-15 mb-10">Maical Deo - Primium Consult</h4>
              <div className="d-flex bb-1 mb-5 pb-15">
                <p className="mb-0 text-mute me-20">09:15am - 10:45am</p>
                <p className="mb-0 text-mute">
                  <i className="fa fa-clock-o me-5" />{" "}
                  <span className="text-primary">Starts in 15 m</span>
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    className="me-15 avatar avatar-lg bg-primary-light rounded-circle"
                    src="/images/avatar/avatar-4.png"
                    alt="..."
                  />
                  <div className="text-start">
                    <h4 className="text-primary mb-0">Dr. Maical Deo</h4>
                    <small>+1 421 563 7458</small>
                  </div>
                </div>
                <div>
                  <span className="badge badge-xl badge-dot badge-dark me-15" />
                  Bulk Billed
                </div>
              </div>
            </div>
            <div className="box-footer text-end">
              <button
                type="button"
                className="waves-effect waves-light btn-sm btn btn-secondary"
              >
                <i className="mdi mdi-pencil me-15" />
                Edit Consult
              </button>
            </div>
          </div>
          <div className="box">
            <div className="box-body">
              <span className="badge badge-info-light">Emegency</span>
              <h4 className="mt-15 mb-10">Jilmil Deo - Neuro Consult</h4>
              <div className="d-flex bb-1 mb-10 pb-20">
                <p className="mb-0 text-mute me-20">09:15am - 10:45am</p>
                <p className="mb-0 text-mute">
                  <i className="fa fa-clock-o me-5" />{" "}
                  <span className="text-primary">Starts in 15 m</span>
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    className="me-15 avatar avatar-lg bg-primary-light rounded-circle"
                    src="/images/avatar/avatar-9.png"
                    alt="..."
                  />
                  <div className="text-start">
                    <h4 className="text-primary mb-0">Dr. Maical Deo</h4>
                    <small>+1 125 412 0215</small>
                  </div>
                </div>
                <div>
                  <span className="badge badge-xl badge-dot badge-dark me-15" />
                  Bulk Billed
                </div>
              </div>
            </div>
            <div className="box-footer text-end">
              <button
                type="button"
                className="waves-effect waves-light btn-sm btn btn-secondary"
              >
                <i className="mdi mdi-pencil me-15" />
                Edit Consult
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}


// import React, { Component } from "react";

// export default class PatientDashboard extends Component {
//   render() {
//     const vitals = [
//       {
//         title: "Heart Rate",
//         value: "75/118",
//         icon: "mdi-heart-outline",
//         bgColor: "bg-primary",
//         chartId: "heartrate",
//       },
//       {
//         title: "Fever",
//         value: "100.8°F",
//         icon: "mdi-thermometer",
//         bgColor: "bg-warning",
//         chartId: "fever",
//       },
//       {
//         title: "Blood Pressure",
//         value: "75/124",
//         icon: "mdi-heart-pulse",
//         bgColor: "bg-danger",
//       },
//       {
//         title: "Bill Due",
//         value: "$214.86",
//         icon: "mdi-wallet",
//         bgColor: "bg-success",
//       },
//     ];

//     const appointments = [
//       {
//         type: "Routine Checkup",
//         title: "Meculam Deo - Standard Consult",
//         time: "09:15am - 10:45am",
//         doctor: "Dr. Meculam",
//         contact: "+1 142 536 7890",
//         status: "Billed",
//         statusColor: "badge-primary",
//         avatar: "/images/avatar/avatar-3.png",
//       },
//       {
//         type: "Emergency",
//         title: "Maical Deo - Premium Consult",
//         time: "09:15am - 10:45am",
//         doctor: "Dr. Maical Deo",
//         contact: "+1 421 563 7458",
//         status: "Bulk Billed",
//         statusColor: "badge-dark",
//         avatar: "/images/avatar/avatar-4.png",
//       },
//       {
//         type: "Emergency",
//         title: "Jilmil Deo - Neuro Consult",
//         time: "09:15am - 10:45am",
//         doctor: "Dr. Jilmil Deo",
//         contact: "+1 125 412 0215",
//         status: "Bulk Billed",
//         statusColor: "badge-dark",
//         avatar: "/images/avatar/avatar-9.png",
//       },
//     ];

//     return (
//       <>
//         <div className="col-xxxl-9 col-xl-8 col-12">
//           <div className="mb-20 d-flex justify-content-between align-items-center">
//             <h1 className="my-md-0 mb-10">Johen Doe</h1>
//             <button
//               type="button"
//               className="waves-effect waves-light btn btn-primary"
//             >
//               <i className="mdi mdi-plus me-15" />
//               Add Record
//             </button>
//           </div>

//           {/* Vitals Section */}
//           <div className="row">
//             {vitals.map((vital, index) => (
//               <div className="col-xl-3 col-lg-6 col-12" key={index}>
//                 <div className={`box ${vital.bgColor}`}>
//                   <div className="box-body">
//                     <div className="mb-15 d-flex justify-content-between align-items-center">
//                       <h4 className="my-0">{vital.title}</h4>
//                       <i className={`fs-18 mdi ${vital.icon}`} />
//                     </div>
//                     <div>
//                       <h5 className="fw-400 my-0">{vital.value}</h5>
//                     </div>
//                   </div>
//                   {vital.chartId && (
//                     <div className="box-body pt-0 ps-0">
//                       <div id={vital.chartId} />
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Appointments Section */}
//           <div className="col-xxxl-3 col-xl-4 col-12">
//             <h4 className="mb-10">Scheduled Appointments</h4>
//             {appointments.map((appointment, index) => (
//               <div className="box" key={index}>
//                 <div className="box-body">
//                   <span
//                     className={`badge badge-${appointment.statusColor}-light`}
//                   >
//                     {appointment.type}
//                   </span>
//                   <h4 className="mt-15 mb-10">{appointment.title}</h4>
//                   <div className="d-flex bb-1 mb-15 pb-15">
//                     <p className="mb-0 text-mute me-20">{appointment.time}</p>
//                     <p className="mb-0 text-mute">
//                       <i className="fa fa-clock-o me-5" />
//                       <span className="text-primary">Starts in 15 m</span>
//                     </p>
//                   </div>
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div className="d-flex align-items-center">
//                       <img
//                         className="me-15 avatar avatar-lg bg-primary-light rounded-circle"
//                         src={appointment.avatar}
//                         alt="..."
//                       />
//                       <div className="text-start">
//                         <h4 className="text-primary mb-0">
//                           {appointment.doctor}
//                         </h4>
//                         <small>{appointment.contact}</small>
//                       </div>
//                     </div>
//                     <div>
//                       <span
//                         className={`badge badge-xl badge-dot ${appointment.statusColor} me-15`}
//                       />
//                       {appointment.status}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="box-footer text-end">
//                   <button
//                     type="button"
//                     className="waves-effect waves-light btn-sm btn btn-secondary"
//                   >
//                     <i className="mdi mdi-pencil me-15" />
//                     Edit Consult
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </>
//     );
//   }
// }
