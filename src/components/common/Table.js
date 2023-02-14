import React from "react";
import Search from "./Search";

function Table() {
  return (
    <>
      <Search />

      <div
        className="table-responsive mb-0"
        data-list='{"valueNames": ["goal-project", "goal-status", "goal-progress", "goal-date"]}'
      >
        <table className="table table-sm table-nowrap card-table">
          <thead>
            <tr>
              <th>
                <a
                  href="#"
                  className="text-muted list-sort"
                  data-sort="goal-project"
                >
                  Công việc
                </a>
              </th>
              <th>
                <a
                  href="#"
                  className="text-muted list-sort"
                  data-sort="goal-status"
                >
                  Trạng thái
                </a>
              </th>
              <th>
                <a
                  href="#"
                  className="text-muted list-sort"
                  data-sort="goal-progress"
                >
                  Tiến độ
                </a>
              </th>
              <th>
                <a
                  href="#"
                  className="text-muted list-sort"
                  data-sort="goal-date"
                >
                  Hết hạn
                </a>
              </th>
              <th className="text-right">Đội nhóm</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="list">
            <tr>
              <td className="goal-project">Cập nhật API</td>
              <td className="goal-status">
                <span className="text-warning">●</span> Đang làm
              </td>
              <td className="goal-progress">55%</td>
              <td className="goal-date">
                <time dateTime="2018-10-24">07/24/18</time>
              </td>
              <td className="text-right">
                <div className="avatar-group">
                  <a
                    href="profile-posts.html"
                    className="avatar avatar-xs"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Dianna Smiley"
                  >
                    <img
                      src="assets/img/avatars/profiles/avatar-1.jpg"
                      className="avatar-img rounded-circle"
                      alt="..."
                    />
                  </a>
                  <a
                    href="profile-posts.html"
                    className="avatar avatar-xs"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Ab Hadley"
                  >
                    <img
                      src="assets/img/avatars/profiles/avatar-2.jpg"
                      className="avatar-img rounded-circle"
                      alt="..."
                    />
                  </a>
                  <a
                    href="profile-posts.html"
                    className="avatar avatar-xs"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Adolfo Hess"
                  >
                    <img
                      src="assets/img/avatars/profiles/avatar-3.jpg"
                      className="avatar-img rounded-circle"
                      alt="..."
                    />
                  </a>
                  <a
                    href="profile-posts.html"
                    className="avatar avatar-xs"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Daniela Dewitt"
                  >
                    <img
                      src="assets/img/avatars/profiles/avatar-4.jpg"
                      className="avatar-img rounded-circle"
                      alt="..."
                    />
                  </a>
                </div>
              </td>
              <td className="text-right">
                <div className="dropdown">
                  <a
                    href="#"
                    className="dropdown-ellipses dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fe fe-more-vertical"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a href="#!" className="dropdown-item">
                      Action
                    </a>
                    <a href="#!" className="dropdown-item">
                      Another action
                    </a>
                    <a href="#!" className="dropdown-item">
                      Something else here
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="goal-project">Release v1.2-Beta</td>
              <td className="goal-status">
                <span className="text-warning">●</span> In progress
              </td>
              <td className="goal-progress">25%</td>
              <td className="goal-date">
                <time dateTime="2018-10-24">08/26/18</time>
              </td>
              <td className="text-right">
                <div className="avatar-group justify-content-end">
                  <a
                    href="#!"
                    className="avatar avatar-xs"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Dianna Smiley"
                  >
                    <img
                      src="assets/img/avatars/profiles/avatar-1.jpg"
                      className="avatar-img rounded-circle"
                      alt="..."
                    />
                  </a>
                  <a
                    href="#!"
                    className="avatar avatar-xs"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Ab Hadley"
                  >
                    <img
                      src="assets/img/avatars/profiles/avatar-2.jpg"
                      className="avatar-img rounded-circle"
                      alt="..."
                    />
                  </a>
                  <a
                    href="#!"
                    className="avatar avatar-xs"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Adolfo Hess"
                  >
                    <img
                      src="assets/img/avatars/profiles/avatar-3.jpg"
                      className="avatar-img rounded-circle"
                      alt="..."
                    />
                  </a>
                </div>
              </td>
              <td className="text-right">
                <div className="dropdown">
                  <a
                    href="#"
                    className="dropdown-ellipses dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fe fe-more-vertical"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a href="#!" className="dropdown-item">
                      Action
                    </a>
                    <a href="#!" className="dropdown-item">
                      Another action
                    </a>
                    <a href="#!" className="dropdown-item">
                      Something else here
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="goal-project">GDPR Compliance</td>
              <td className="goal-status">
                <span className="text-success">●</span> Completed
              </td>
              <td className="goal-progress">100%</td>
              <td className="goal-date">
                <time dateTime="2018-10-24">06/19/18</time>
              </td>
              <td className="text-right">
                <div className="avatar-group justify-content-end">
                  <a
                    href="#!"
                    className="avatar avatar-xs"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Dianna Smiley"
                  >
                    <img
                      src="assets/img/avatars/profiles/avatar-1.jpg"
                      className="avatar-img rounded-circle"
                      alt="..."
                    />
                  </a>
                  <a
                    href="#!"
                    className="avatar avatar-xs"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Ab Hadley"
                  >
                    <img
                      src="assets/img/avatars/profiles/avatar-2.jpg"
                      className="avatar-img rounded-circle"
                      alt="..."
                    />
                  </a>
                  <a
                    href="#!"
                    className="avatar avatar-xs"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Adolfo Hess"
                  >
                    <img
                      src="assets/img/avatars/profiles/avatar-3.jpg"
                      className="avatar-img rounded-circle"
                      alt="..."
                    />
                  </a>
                </div>
              </td>
              <td className="text-right">
                <div className="dropdown">
                  <a
                    href="#"
                    className="dropdown-ellipses dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fe fe-more-vertical"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a href="#!" className="dropdown-item">
                      Action
                    </a>
                    <a href="#!" className="dropdown-item">
                      Another action
                    </a>
                    <a href="#!" className="dropdown-item">
                      Something else here
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="goal-project">v1.2 Documentation</td>
              <td className="goal-status">
                <span className="text-danger">●</span> Cancelled
              </td>
              <td className="goal-progress">0%</td>
              <td className="goal-date">
                <time dateTime="2018-10-24">06/25/18</time>
              </td>
              <td className="text-right">
                <div className="avatar-group justify-content-end">
                  <a
                    href="#!"
                    className="avatar avatar-xs"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Dianna Smiley"
                  >
                    <img
                      src="assets/img/avatars/profiles/avatar-1.jpg"
                      className="avatar-img rounded-circle"
                      alt="..."
                    />
                  </a>
                  <a
                    href="#!"
                    className="avatar avatar-xs"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Ab Hadley"
                  >
                    <img
                      src="assets/img/avatars/profiles/avatar-2.jpg"
                      className="avatar-img rounded-circle"
                      alt="..."
                    />
                  </a>
                </div>
              </td>
              <td className="text-right">
                <div className="dropdown">
                  <a
                    href="#"
                    className="dropdown-ellipses dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="fe fe-more-vertical"></span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a href="#!" className="dropdown-item">
                      Action
                    </a>
                    <a href="#!" className="dropdown-item">
                      Another action
                    </a>
                    <a href="#!" className="dropdown-item">
                      Something else here
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="goal-project">Plan design offsite</td>
              <td className="goal-status">
                <span className="text-success">●</span> Completed
              </td>
              <td className="goal-progress">100%</td>
              <td className="goal-date">
                <time dateTime="2018-10-24">06/30/18</time>
              </td>
              <td className="text-right">
                <div className="avatar-group justify-content-end">
                  <a
                    href="#!"
                    className="avatar avatar-xs"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Dianna Smiley"
                  >
                    <img
                      src="assets/img/avatars/profiles/avatar-1.jpg"
                      className="avatar-img rounded-circle"
                      alt="..."
                    />
                  </a>
                  <a
                    href="#!"
                    className="avatar avatar-xs"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Ab Hadley"
                  >
                    <img
                      src="assets/img/avatars/profiles/avatar-2.jpg"
                      className="avatar-img rounded-circle"
                      alt="..."
                    />
                  </a>
                  <a
                    href="#!"
                    className="avatar avatar-xs"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Adolfo Hess"
                  >
                    <img
                      src="assets/img/avatars/profiles/avatar-3.jpg"
                      className="avatar-img rounded-circle"
                      alt="..."
                    />
                  </a>
                  <a
                    href="#!"
                    className="avatar avatar-xs"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Daniela Dewitt"
                  >
                    <img
                      src="assets/img/avatars/profiles/avatar-4.jpg"
                      className="avatar-img rounded-circle"
                      alt="..."
                    />
                  </a>
                </div>
              </td>
              <td className="text-right">
                <div className="dropdown">
                  <a
                    href="#"
                    className="dropdown-ellipses dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fe fe-more-vertical"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a href="#!" className="dropdown-item">
                      Action
                    </a>
                    <a href="#!" className="dropdown-item">
                      Another action
                    </a>
                    <a href="#!" className="dropdown-item">
                      Something else here
                    </a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
