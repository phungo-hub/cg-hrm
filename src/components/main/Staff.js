import React from "react";
import Navbar from "../common/Navbar";
import Table from "../common/Table";

function Staff() {
  return (
    <div className="main-content">
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-6 col-xl">
            <span>Tổng 20 nhân sự</span>
          </div>

          <div className="col-auto">
            <button className="btn btn-danger">Thêm nhân sự</button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <Table />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-xl-5">
            <div className="card card-fill">
              <div className="card-header">
                <h4 className="card-header-title">Recent Activity</h4>

                <a className="small" href="#!">
                  View all
                </a>
              </div>
              <div className="card-body">
                <div className="list-group list-group-flush list-group-activity my-n3">
                  <div className="list-group-item">
                    <div className="row">
                      <div className="col-auto">
                        <div className="avatar avatar-sm avatar-online">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatars/profiles/avatar-1.jpg"
                            alt="..."
                          />
                        </div>
                      </div>
                      <div className="col ml-n2">
                        <h5 className="mb-1">Dianna Smiley</h5>

                        <p className="small text-gray-700 mb-0">
                          Uploaded the files "Launchday Logo" and "New Design".
                        </p>

                        <small className="text-muted">2m ago</small>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <div className="row">
                      <div className="col-auto">
                        <div className="avatar avatar-sm avatar-online">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatars/profiles/avatar-2.jpg"
                            alt="..."
                          />
                        </div>
                      </div>
                      <div className="col ml-n2">
                        <h5 className="mb-1">Ab Hadley</h5>

                        <p className="small text-gray-700 mb-0">
                          Shared the "Why Dashkit?" post with 124 subscribers.
                        </p>

                        <small className="text-muted">1h ago</small>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item">
                    <div className="row">
                      <div className="col-auto">
                        <div className="avatar avatar-sm avatar-offline">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatars/profiles/avatar-3.jpg"
                            alt="..."
                          />
                        </div>
                      </div>
                      <div className="col ml-n2">
                        <h5 className="mb-1">Adolfo Hess</h5>

                        <p className="small text-gray-700 mb-0">
                          Exported sales data from Launchday's subscriber data.
                        </p>

                        <small className="text-muted">3h ago</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-7">
            <div className="card">
              <div className="card-header">
                <h4 className="card-header-title">Scratchpad Checklist</h4>

                <span className="badge badge-soft-secondary">23 Archived</span>
              </div>
              <div className="card-body">
                <div className="checklist">
                  <div className="custom-control custom-checkbox checklist-control">
                    <input
                      className="custom-control-input"
                      id="checklistOne"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="checklistOne"
                    ></label>
                    <span className="custom-control-caption">
                      Delete the old mess in functions files.
                    </span>
                  </div>
                  <div className="custom-control custom-checkbox checklist-control">
                    <input
                      className="custom-control-input"
                      id="checklistTwo"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="checklistTwo"
                    ></label>
                    <span className="custom-control-caption">
                      Refactor the core social sharing modules
                    </span>
                  </div>
                  <div className="custom-control custom-checkbox checklist-control">
                    <input
                      className="custom-control-input"
                      id="checklistThree"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="checklistThree"
                    ></label>
                    <span className="custom-control-caption">
                      Create the release notes for the new pages so customers
                      get psyched.
                    </span>
                  </div>
                  <div className="custom-control custom-checkbox checklist-control">
                    <input
                      className="custom-control-input"
                      id="checklistFour"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="checklistFour"
                    ></label>
                    <span className="custom-control-caption">
                      Send Dianna those meeting notes
                    </span>
                  </div>
                  <div className="custom-control custom-checkbox checklist-control">
                    <input
                      className="custom-control-input"
                      id="checklistFive"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="checklistFive"
                    ></label>
                    <span className="custom-control-caption">
                      Share the documentation for the new unified API
                    </span>
                  </div>
                  <div className="custom-control custom-checkbox checklist-control">
                    <input
                      className="custom-control-input"
                      id="checklistSix"
                      type="checkbox"
                      defaultChecked
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="checklistSix"
                    ></label>
                    <span className="custom-control-caption">
                      Clean up the Figma file with all of the avatars, buttons,
                      and other components.
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="row align-items-center">
                  <div className="col">
                    <textarea
                      className="form-control form-control-flush form-control-auto"
                      data-toggle="autosize"
                      rows="1"
                      placeholder="Create a task"
                    ></textarea>
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-sm btn-primary">Add</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staff;
