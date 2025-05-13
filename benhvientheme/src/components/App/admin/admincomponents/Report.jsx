import React, { Component } from "react";

import "./Report.css"; 
export default class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedStatus: Array(7).fill(false), // Quản lý trạng thái toggle cho từng hàng
    };
  }

  handleToggle = (index) => {
    this.setState((prevState) => {
      const updatedStatus = [...prevState.signedStatus];
      updatedStatus[index] = !updatedStatus[index];
      return { signedStatus: updatedStatus };
    });
  };

  render() {
    const { signedStatus } = this.state;

    const data = [
      {
        id: 1,
        test: "Blood Count",
        lab: "Microbiology",
        priority: "Low",
        cost: "N500",
        handling: "Johen Doe",
        time: "5.45pm 11/05",
        status: "Result Added",
      },
      {
        id: 2,
        test: "CMS",
        lab: "Microbiology",
        priority: "High",
        cost: "N500",
        handling: "Johen Doe",
        time: "5.45pm 11/05",
        status: "Result Added",
      },
      {
        id: 3,
        test: "Covid",
        lab: "Microbiology",
        priority: "Low",
        cost: "N500",
        handling: "Johen Doe",
        time: "5.45pm 11/05",
        status: "Result Added",
      },
      {
        id: 4,
        test: "Urin",
        lab: "Microbiology",
        priority: "High",
        cost: "N500",
        handling: "Johen Doe",
        time: "5.45pm 11/05",
        status: "Result Added",
      },
      {
        id: 5,
        test: "Blood Count",
        lab: "Microbiology",
        priority: "High",
        cost: "N500",
        handling: "Johen Doe",
        time: "5.45pm 11/05",
        status: "Result Added",
      },
      {
        id: 6,
        test: "HB",
        lab: "Microbiology",
        priority: "Low",
        cost: "N500",
        handling: "Johen Doe",
        time: "5.45pm 11/05",
        status: "Result Added",
      },
      {
        id: 7,
        test: "MD",
        lab: "Microbiology",
        priority: "Low",
        cost: "N500",
        handling: "Johen Doe",
        time: "5.45pm 11/05",
        status: "Result Added",
      },
    ];

    return (
      <>
        <section className="content">
          <div className="row">
            <div className="col-12">
              <div className="box">
                <div className="box-body">
                  <h4 className="box-title">Radiology List</h4>
                  <div className="table-responsive">
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th className="bb-2">No.</th>
                          <th className="bb-2">Test</th>
                          <th className="bb-2">Lab</th>
                          <th className="bb-2">Priority</th>
                          <th className="bb-2">Cost</th>
                          <th className="bb-2">Handling</th>
                          <th className="bb-2">Coll. By</th>
                          <th className="bb-2">Status</th>
                          <th className="bb-2">Result</th>
                          <th className="bb-2">Signed</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.test}</td>
                            <td>{item.lab}</td>
                            <td>
                              <span
                                className={`badge ${
                                  item.priority === "High"
                                    ? "badge-danger"
                                    : "badge-warning"
                                }`}
                              >
                                {item.priority}
                              </span>
                            </td>
                            <td>{item.cost}</td>
                            <td>{item.handling}</td>
                            <td>{item.time}</td>
                            <td>
                              <span className="badge badge-success">
                                {item.status}
                              </span>
                            </td>
                            <td>
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#result"
                                className="text-info"
                              >
                                Result
                              </a>
                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#comment-dialog"
                                className="text-info"
                                style={{ marginLeft: "10px" }}
                              >
                                Comment
                              </a>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-sm btn-toggle"
                                aria-pressed={signedStatus[index]}
                                onClick={() => this.handleToggle(index)}
                              >
                                <span className="handle" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* /.box-body */}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
