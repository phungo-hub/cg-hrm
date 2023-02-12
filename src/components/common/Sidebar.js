import React from 'react'

function Sidebar() {
  return (
    <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light" id="sidebar">
    <div className="container-fluid">

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <a className="navbar-brand" href="./index.html">
        <img src="./assets/img/logo.svg" className="navbar-brand-img mx-auto" alt="..."/>
      </a>

      <div className="navbar-user d-md-none">

        <div className="dropdown">

          <a href="#" id="sidebarIcon" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div className="avatar avatar-sm avatar-online">
              <img src="./assets/img/avatars/profiles/avatar-1.jpg" className="avatar-img rounded-circle" alt="..."/>
            </div>
          </a>

          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="sidebarIcon">
            <a href="./profile-posts.html" className="dropdown-item">Profile</a>
            <a href="./account-general.html" className="dropdown-item">Settings</a>
            <hr className="dropdown-divider"/>
            <a href="./sign-in.html" className="dropdown-item">Logout</a>
          </div>

        </div>

      </div>

      <div className="collapse navbar-collapse" id="sidebarCollapse">

        <form className="mt-4 mb-3 d-md-none">
          <div className="input-group input-group-rounded input-group-merge">
            <input type="search" className="form-control form-control-rounded form-control-prepended" placeholder="Search" aria-label="Search"/>
            <div className="input-group-prepend">
              <div className="input-group-text">
                <span className="fe fe-search"></span>
              </div>
            </div>
          </div>
        </form>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#sidebarDashboards" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="sidebarDashboards">
              <i className="fe fe-home"></i> Dashboards
            </a>
            <div className="collapse show" id="sidebarDashboards">
              <ul className="nav nav-sm flex-column">
                <li className="nav-item">
                  <a href="./index.html" className="nav-link active">
                    Default
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./dashboard-project-management.html" className="nav-link ">
                    Project Management
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./dashboard-ecommerce.html" className="nav-link ">
                    E-Commerce
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sidebarPages" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarPages">
              <i className="fe fe-file"></i> Pages
            </a>
            <div className="collapse " id="sidebarPages">
              <ul className="nav nav-sm flex-column">
                <li className="nav-item">
                  <a href="#sidebarProfile" className="nav-link" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarProfile">
                    Profile
                  </a>
                  <div className="collapse " id="sidebarProfile">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a href="./profile-posts.html" className="nav-link ">
                          Posts
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./profile-groups.html" className="nav-link ">
                          Groups
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./profile-projects.html" className="nav-link ">
                          Projects
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./profile-files.html" className="nav-link ">
                          Files
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./profile-subscribers.html" className="nav-link ">
                          Subscribers
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="#sidebarProject" className="nav-link" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarProject">
                    Project
                  </a>
                  <div className="collapse " id="sidebarProject">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a href="./project-overview.html" className="nav-link ">
                          Overview
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./project-files.html" className="nav-link ">
                          Files
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./project-reports.html" className="nav-link ">
                          Reports
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./project-new.html" className="nav-link ">
                          New project
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="#sidebarTeam" className="nav-link" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarTeam">
                    Team
                  </a>
                  <div className="collapse " id="sidebarTeam">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a href="./team-overview.html" className="nav-link ">
                          Overview
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./team-projects.html" className="nav-link ">
                          Projects
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./team-members.html" className="nav-link ">
                          Members
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./team-new.html" className="nav-link ">
                          New team
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="#sidebarFeed" className="nav-link" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarFeed">
                    Feed
                  </a>
                  <div className="collapse " id="sidebarFeed">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a href="./feed.html" className="nav-link ">
                          Platform
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./social-feed.html" className="nav-link ">
                          Social
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="#sidebarAccount" className="nav-link" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAccount">
                    Account <span className="badge badge-soft-success ml-2">New</span>
                  </a>
                  <div className="collapse " id="sidebarAccount">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a href="./account-general.html" className="nav-link ">
                          General
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./account-billing.html" className="nav-link ">
                          Billing
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./account-members.html" className="nav-link ">
                          Members
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./account-security.html" className="nav-link ">
                          Security
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./account-notifications.html" className="nav-link ">
                          Notifications
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="#sidebarCrm" className="nav-link" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarCrm">
                    CRM <span className="badge badge-soft-success ml-2">New</span>
                  </a>
                  <div className="collapse " id="sidebarCrm">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a href="./crm-contacts.html" className="nav-link ">
                          Contacts
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./crm-companies.html" className="nav-link ">
                          Companies
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./crm-deals.html" className="nav-link ">
                          Deals
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="./wizard.html" className="nav-link ">
                    Wizard
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./kanban.html" className="nav-link ">
                    Kanban
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./orders.html" className="nav-link ">
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./invoice.html" className="nav-link ">
                    Invoice
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./pricing.html" className="nav-link ">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="./widgets.html">
              <i className="fe fe-grid"></i> Widgets
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sidebarAuth" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarAuth">
              <i className="fe fe-user"></i> Authentication
            </a>
            <div className="collapse" id="sidebarAuth">
              <ul className="nav nav-sm flex-column">
                <li className="nav-item">
                  <a href="#sidebarSignIn" className="nav-link" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarSignIn">
                    Sign in
                  </a>
                  <div className="collapse" id="sidebarSignIn">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a href="./sign-in-cover.html" className="nav-link">
                          Cover
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./sign-in-illustration.html" className="nav-link">
                          Illustration
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./sign-in.html" className="nav-link">
                          Basic
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="#sidebarSignUp" className="nav-link" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarSignUp">
                    Sign up
                  </a>
                  <div className="collapse" id="sidebarSignUp">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a href="./sign-up-cover.html" className="nav-link">
                          Cover
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./sign-up-illustration.html" className="nav-link">
                          Illustration
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./sign-up.html" className="nav-link">
                          Basic
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="#sidebarPassword" className="nav-link" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarPassword">
                    Password reset
                  </a>
                  <div className="collapse" id="sidebarPassword">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a href="./password-reset-cover.html" className="nav-link">
                          Cover
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./password-reset-illustration.html" className="nav-link">
                          Illustration
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./password-reset.html" className="nav-link">
                          Basic
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="#sidebarError" className="nav-link" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarError">
                    Error
                  </a>
                  <div className="collapse" id="sidebarError">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a href="./error-illustration.html" className="nav-link">
                          Illustration
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="./error.html" className="nav-link">
                          Basic
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item d-md-none">
            <a className="nav-link" href="#sidebarModalActivity" data-toggle="modal">
              <span className="fe fe-bell"></span> Notifications
            </a>
          </li>
        </ul>

        <hr className="navbar-divider my-3"/>

        <h6 className="navbar-heading">
          Documentation
        </h6>

        <ul className="navbar-nav mb-md-4">
          <li className="nav-item">
            <a className="nav-link" href="#sidebarBasics" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarBasics">
              <i className="fe fe-clipboard"></i> Basics
            </a>
            <div className="collapse " id="sidebarBasics">
              <ul className="nav nav-sm flex-column">
                <li className="nav-item ">
                  <a href="./docs/getting-started.html" className="nav-link">
                    Getting Started
                  </a>
                </li>
                <li className="nav-item ">
                  <a href="./docs/design-file.html" className="nav-link">
                    Design File
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sidebarComponents" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarComponents">
              <i className="fe fe-book-open"></i> Components
            </a>
            <div className="collapse " id="sidebarComponents">
              <ul className="nav nav-sm flex-column">
                <li>
                  <a href="./docs/components.html#alerts" className="nav-link">
                    Alerts
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#autosize" className="nav-link">
                    Autosize
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#avatars" className="nav-link">
                    Avatars
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#badges" className="nav-link">
                    Badges
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#breadcrumb" className="nav-link">
                    Breadcrumb
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#buttons" className="nav-link">
                    Buttons
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#buttonGroup" className="nav-link">
                    Button group
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#cards" className="nav-link">
                    Cards
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#charts" className="nav-link">
                    Charts
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#checklist" className="nav-link">
                    Checklist
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#dropdowns" className="nav-link">
                    Dropdowns
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#forms" className="nav-link">
                    Forms
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#icons" className="nav-link">
                    Icons
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#kanban" className="nav-link">
                    Kanban
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#lists" className="nav-link">
                    Lists
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#map" className="nav-link">
                    Map
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#modals" className="nav-link">
                    Modal
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#navs" className="nav-link">
                    Navs
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#navbarDocs" className="nav-link">
                    Navbar
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#pageHeaders" className="nav-link">
                    Page headers
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#pagination" className="nav-link">
                    Pagination
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#popovers" className="nav-link">
                    Popovers
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#progress" className="nav-link">
                    Progress
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#socialPosts" className="nav-link">
                    Social post
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#spinners" className="nav-link">
                    Spinners
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#tables" className="nav-link">
                    Tables
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#toasts" className="nav-link">
                    Toasts
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#tooltips" className="nav-link">
                    Tooltips
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#typography" className="nav-link">
                    Typography
                  </a>
                </li>
                <li>
                  <a href="./docs/components.html#utilities" className="nav-link">
                    Utilities
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="./docs/changelog.html">
              <i className="fe fe-git-branch"></i> Changelog <span className="badge badge-primary ml-auto">v1.6.0</span>
            </a>
          </li>
        </ul>

        <div className="mt-auto"></div>

        <div className="navbar-user d-none d-md-flex" id="sidebarUser">

          <a href="#sidebarModalActivity" className="navbar-user-link" data-toggle="modal">
            <span className="icon">
              <i className="fe fe-bell"></i>
            </span>
          </a>

          <div className="dropup">

            <a href="#" id="sidebarIconCopy" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div className="avatar avatar-sm avatar-online">
                <img src="./assets/img/avatars/profiles/avatar-1.jpg" className="avatar-img rounded-circle" alt="..."/>
              </div>
            </a>

            <div className="dropdown-menu" aria-labelledby="sidebarIconCopy">
              <a href="./profile-posts.html" className="dropdown-item">Profile</a>
              <a href="./account-general.html" className="dropdown-item">Settings</a>
              <hr className="dropdown-divider"/>
              <a href="./sign-in.html" className="dropdown-item">Logout</a>
            </div>

          </div>

          <a href="#sidebarModalSearch" className="navbar-user-link" data-toggle="modal">
            <span className="icon">
              <i className="fe fe-search"></i>
            </span>
          </a>

        </div>
        

      </div>

    </div>
  </nav>
  )
}

export default Sidebar