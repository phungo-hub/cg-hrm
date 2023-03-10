import React, { useEffect, useState } from "react";
import Navbar from "../common/Navbar";
import Table from "../common/Table";
import { retrieveData } from "../../services/airtable.service";
import { tableConfig } from "../../utils/airtable";
import Modal from "../common/Modal";
import { useSelector } from "react-redux";
import { selectSuccess } from "../../features/staffSlice";
import Loading from "../common/Loading";

function Staff() {
  const [staffList, setStaffList] = useState([]);
  const [departmentList, setDepartmentList] = useState([]);
  const [statusList, setStatusList] = useState([]);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const staffConfig = tableConfig("staff");
  const departmentConfig = tableConfig("department");
  const statusConfig = tableConfig("status");
  const success = useSelector(selectSuccess);

  const fetchStaffData = async () => {
    retrieveData({}, "staff", staffConfig).then((result) => {
      setStaffList(result);
      console.log("staff data: ", result)
    });
  };
  const fetchDepartmentData = async () => {
    retrieveData({}, "department", departmentConfig).then((result) => {
      setDepartmentList(result);
      console.log();
    });
  };
  const fetchStatusData = async () => {
    retrieveData({}, "status", statusConfig).then((result) => {
      setStatusList(result);
    });
  };
  useEffect(() => {
    fetchStaffData();
    fetchDepartmentData();
    fetchStatusData();
  }, [success]);

  const handleOpenModal = () => {
    setIsModalOpened(true);
  };

  const handleCloseModal = () => {
    setIsModalOpened(false);
  };

  const handleDropdownSort = (value) => {
    // check option value, if value = 1 => sort list by ID descending
    // continue for case -1, 0
    const sortedIdList = staffList.slice();
    switch (value) {
      case -1:
        break;
      case 0:
        sortedIdList.sort((a, b) => a.fields.id > b.fields.id ? -1 : 1)
        setStaffList(sortedIdList)
        console.log("List: ",sortedIdList)
        // list = sortedIdList;
        break;
      case 1:
        sortedIdList.sort((a, b) => a.fields.id < b.fields.id ? -1 : 1)
        setStaffList(sortedIdList)
        // list = sortedIdList;
        break;
      default:
        break;
    }
  };

  return (
    <div className="main-content">
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-6 col-xl">
            <span>T???ng {staffList.length} nh??n s???</span>
          </div>
          <div className="col-auto">
            <Modal
              isModalOpened={isModalOpened}
              handleCloseModal={handleCloseModal}
              departmentList={departmentList}
              statusList={statusList}
              title="Th??m nh??n s???"
              type="create"
            />
            {/* T???o common component button */}
            <button className="btn btn-danger" onClick={handleOpenModal}>
              Th??m m???i
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            {staffList ? (
              <Table
                list={staffList}
                departmentList={departmentList}
                statusList={statusList}
                handleDropdownSort={handleDropdownSort}
              />
            ) : (
              <Loading />
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-xl-5">
            <div className="card card-fill">
              <div className="card-header">
                <h4 className="card-header-title">Ho???t ?????ng g???n ?????y</h4>

                <a className="small" href="#!">
                  Xem t???t c???
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
                        <h5 className="mb-1">Dung Nguy???n</h5>

                        <p className="small text-gray-700 mb-0">
                          ???? t???i l??n c??c file "CG Logo" v?? "Thi???t k??? m???i".
                        </p>

                        <small className="text-muted">2 ph??t tr?????c</small>
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
                        <h5 className="mb-1">An Nguy???n</h5>

                        <p className="small text-gray-700 mb-0">
                          ???? chia s??? b??i vi???t "T???i sao d??ng Dashkit?" v???i 124
                          ng?????i ???? ????ng k??.
                        </p>

                        <small className="text-muted">1 gi??? tr?????c</small>
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
                        <h5 className="mb-1">H??ng L??</h5>

                        <p className="small text-gray-700 mb-0">
                          ???? xu???t c??c d??? li???u b??n h??ng t??? d??? li???u c???a ng?????i ????ng
                          k?? t??n Lan
                        </p>

                        <small className="text-muted">3 gi??? tr?????c</small>
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
                <h4 className="card-header-title">Danh s??ch c??c ?????u vi???c</h4>

                <span className="badge badge-soft-secondary">23 c??ng vi???c</span>
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
                      X??a c??c tin nh???n c?? trong c??c t???p tin ch???c n??ng giao di???n.
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
                      T??i c???u tr??c c??c m?? ??un c???t l??i ???? chia s??? tr??n m???ng x??
                      h???i.
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
                      T???o b???n ph??t h??nh c??c ghi ch?? cho c??c trang m???i ????? kh??ch
                      h??ng c?? th??? ???????c nh???c nh??? t???t h??n.
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
                      G???i th??ng tin c??c bu???i h???p cho ??an Nguy???n
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
                      Chia s??? t??i li???u c???a c??c API m???i ???????c ph??t tri???n
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
                      D???n d???p c??c t???p tin Figma v???i t???t c??? c??c ???nh ?????i di???n, n??t
                      b???m, v?? c??c th??nh ph???n kh??c.
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
                      placeholder="T???o m???t c??ng vi???c"
                    ></textarea>
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-sm btn-primary">Th??m</button>
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
