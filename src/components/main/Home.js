import React from "react";
import Navbar from "../common/Navbar";

function Home() {
  return (
    <>
      <div className="main-content">
        {" "}
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-xl-4">
              <div className="card-adjust-xl">
                <div className="card">
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
                            <div className="avatar avatar-sm">
                              <img
                                src="./assets/img/avatars/profiles/avatar-1.jpg"
                                alt="..."
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="col ml-n2">
                            <div className="small">
                              <strong>Dianna Smiley</strong> shared your post
                              with Ab Hadley, Adolfo Hess, and 3 others.
                            </div>
                            <small className="text-muted">2m ago</small>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="row">
                          <div className="col-auto">
                            <div className="avatar avatar-sm">
                              <img
                                src="./assets/img/avatars/profiles/avatar-2.jpg"
                                alt="..."
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="col ml-n2">
                            <div className="small">
                              <strong>Ab Hadley</strong> reacted to your post
                              with a 😍
                            </div>

                            <small className="text-muted">2m ago</small>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="row">
                          <div className="col-auto">
                            <div className="avatar avatar-sm">
                              <img
                                src="./assets/img/avatars/profiles/avatar-3.jpg"
                                alt="..."
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="col ml-n2">
                            <div className="small">
                              <strong>Adolfo Hess</strong> commented
                              <blockquote className="mb-0">
                                “I don’t think this really makes sense to do
                                without approval from Johnathan since he’s the
                                one...”
                              </blockquote>
                            </div>

                            <small className="text-muted">2m ago</small>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="row">
                          <div className="col-auto">
                            <div className="avatar avatar-sm">
                              <img
                                src="./assets/img/avatars/profiles/avatar-4.jpg"
                                alt="..."
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="col ml-n2">
                            <div className="small">
                              <strong>Daniela Dewitt</strong> subscribed to you.
                            </div>

                            <small className="text-muted">2m ago</small>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="row">
                          <div className="col-auto">
                            <div className="avatar avatar-sm">
                              <img
                                src="./assets/img/avatars/profiles/avatar-5.jpg"
                                alt="..."
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="col ml-n2">
                            <div className="small">
                              <strong>Miyah Myles</strong> shared your post with
                              Ryu Duke, Glen Rouse, and 3 others.
                            </div>

                            <small className="text-muted">2m ago</small>
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="row">
                          <div className="col-auto">
                            <div className="avatar avatar-sm">
                              <img
                                src="./assets/img/avatars/profiles/avatar-6.jpg"
                                alt="..."
                                className="avatar-img rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="col ml-n2">
                            <div className="small">
                              <strong>Ryu Duke</strong> reacted to your post
                              with a 😍
                            </div>

                            <small className="text-muted">2m ago</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-8">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-header-title">Best Selling Products</h4>
                  <a href="#!" className="btn btn-sm btn-white">
                    Export
                  </a>
                </div>
                <div
                  className="table-responsive mb-0"
                  data-list='{"valueNames": ["products-product", "products-stock", "products-price", "products-sales"]}'
                  id="productsList"
                >
                  <table className="table table-sm table-nowrap table-hover card-table">
                    <thead>
                      <tr>
                        <th>
                          <a
                            href="/"
                            className="text-muted list-sort"
                            data-sort="products-product"
                          >
                            Product
                          </a>
                        </th>
                        <th>
                          <a
                            href="/"
                            className="text-muted list-sort"
                            data-sort="products-stock"
                          >
                            Stock
                          </a>
                        </th>
                        <th>
                          <a
                            href="/"
                            className="text-muted list-sort"
                            data-sort="products-price"
                          >
                            Price
                          </a>
                        </th>
                        <th colSpan="2">
                          <a
                            href="/"
                            className="text-muted list-sort"
                            data-sort="products-sales"
                          >
                            Monthly Sales
                          </a>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="list">
                      <tr>
                        <td className="products-product">
                          <div className="d-flex align-items-center">
                            <div className="avatar">
                              <img
                                className="avatar-img rounded mr-3"
                                src="assets/img/avatars/products/product-1.jpg"
                                alt="..."
                              />
                            </div>

                            <div className="ml-3">
                              <h4 className="font-weight-normal mb-1">
                                Sketchpad
                              </h4>
                              <small className="text-muted">3" x 5" Size</small>
                            </div>
                          </div>
                        </td>
                        <td className="products-stock">
                          <span className="badge badge-soft-success">
                            Available
                          </span>
                        </td>
                        <td className="products-price">$14.99</td>
                        <td className="products-sales">$3,145.23</td>
                        <td className="text-right">
                          <div className="dropdown">
                            <a
                              href="/"
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
                        <td className="products-product">
                          <div className="d-flex align-items-center">
                            <div className="avatar">
                              <img
                                className="avatar-img rounded mr-3"
                                src="assets/img/avatars/products/product-2.jpg"
                                alt="..."
                              />
                            </div>

                            <div className="ml-3">
                              <h4 className="font-weight-normal mb-1">
                                Turtleshell Shades
                              </h4>
                              <small className="text-muted">
                                UV + Blue Light
                              </small>
                            </div>
                          </div>
                        </td>
                        <td className="products-stock">
                          <span className="badge badge-soft-warning">
                            Unavailable
                          </span>
                        </td>
                        <td className="products-price">$39.99</td>
                        <td className="products-sales">$2,611.82</td>
                        <td className="text-right">
                          <div className="dropdown">
                            <a
                              href="/"
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
                        <td className="products-product">
                          <div className="d-flex align-items-center">
                            <div className="avatar">
                              <img
                                className="avatar-img rounded mr-3"
                                src="assets/img/avatars/products/product-3.jpg"
                                alt="..."
                              />
                            </div>

                            <div className="ml-3">
                              <h4 className="font-weight-normal mb-1">
                                Nike "Go Bag"
                              </h4>
                              <small className="text-muted">
                                Leather + Gortex
                              </small>
                            </div>
                          </div>
                        </td>
                        <td className="products-stock">
                          <span className="badge badge-soft-success">
                            Available
                          </span>
                        </td>
                        <td className="products-price">$149.99</td>
                        <td className="products-sales">$2,372.19</td>
                        <td className="text-right">
                          <div className="dropdown">
                            <a
                              href="/"
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
                        <td className="products-product">
                          <div className="d-flex align-items-center">
                            <div className="avatar">
                              <img
                                className="avatar-img rounded mr-3"
                                src="assets/img/avatars/products/product-4.jpg"
                                alt="..."
                              />
                            </div>

                            <div className="ml-3">
                              <h4 className="font-weight-normal mb-1">
                                Swell Bottle
                              </h4>
                              <small className="text-muted">
                                Bone Clay White
                              </small>
                            </div>
                          </div>
                        </td>
                        <td className="products-stock">
                          <span className="badge badge-soft-success">
                            Available
                          </span>
                        </td>
                        <td className="products-price">$24.99</td>
                        <td className="products-sales">$1,145.23</td>
                        <td className="text-right">
                          <div className="dropdown">
                            <a
                              href="/"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
