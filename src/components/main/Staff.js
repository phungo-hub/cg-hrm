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
                <h4 className="card-header-title">Hoạt động gần đầy</h4>

                <a className="small" href="#!">
                  Xem tất cả
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
                        <h5 className="mb-1">Dung Nguyễn</h5>

                        <p className="small text-gray-700 mb-0">
                          Đã tải lên các file "CG Logo" và "Thiết kế mới".
                        </p>

                        <small className="text-muted">2 phút trước</small>
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
                        <h5 className="mb-1">An Nguyễn</h5>

                        <p className="small text-gray-700 mb-0">
                          Đã chia sẻ bài viết "Tại sao dùng Dashkit?" với 124
                          người đã đăng ký.
                        </p>

                        <small className="text-muted">1 giờ trước</small>
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
                        <h5 className="mb-1">Hùng Lê</h5>

                        <p className="small text-gray-700 mb-0">
                          Đã xuất các dữ liệu bán hàng từ dữ liệu của người đăng
                          ký tên Lan
                        </p>

                        <small className="text-muted">3 giờ trước</small>
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
                <h4 className="card-header-title">Danh sách các đầu việc</h4>

                <span className="badge badge-soft-secondary">23 công việc</span>
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
                      Xóa các tin nhắn cũ trong các tập tin chức năng giao diện.
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
                      Tái cấu trúc các mô đun cốt lõi đã chia sẻ trên mạng xã
                      hội.
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
                      Tạo bản phát hành các ghi chú cho các trang mới để khách
                      hàng có thể được nhắc nhở tốt hơn.
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
                      Gửi thông tin các buổi họp cho Đan Nguyễn
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
                      Chia sẻ tài liệu của các API mới được phát triển
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
                      Dọn dẹp các tập tin Figma với tất cả các ảnh đại diện, nút
                      bấm, và các thành phần khác.
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
                      placeholder="Tạo một công việc"
                    ></textarea>
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-sm btn-primary">Thêm</button>
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
