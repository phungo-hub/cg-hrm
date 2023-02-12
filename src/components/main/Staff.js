import React from 'react'
import Card from '../common/Card';
import Navbar from '../common/Navbar';
import Table from '../common/Table';

function Staff() {
  return (
    <div className="main-content">
        
        <Navbar/>

        <div className="container-fluid">
            <div className="row">
            <div className="col-12 col-lg-6 col-xl">

               <Card/>

            </div>
            <div className="col-12 col-lg-6 col-xl">

                <div className="card">
                <div className="card-body">
                    <div className="row align-items-center">
                    <div className="col">

                        <h6 className="text-uppercase text-muted mb-2">
                        Total hours
                        </h6>

                        <span className="h2 mb-0">
                        763.5
                        </span>

                    </div>
                    <div className="col-auto">

                        <span className="h2 fe fe-briefcase text-muted mb-0"></span>

                    </div>
                    </div>
                </div>
                </div>

            </div>
            <div className="col-12 col-lg-6 col-xl">

                <div className="card">
                <div className="card-body">
                    <div className="row align-items-center">
                    <div className="col">

                        <h6 className="text-uppercase text-muted mb-2">
                        Exit %
                        </h6>

                        <span className="h2 mb-0">
                        35.5%
                        </span>

                    </div>
                    <div className="col-auto">

                        <div className="chart chart-sparkline">
                        <canvas className="chart-canvas" id="sparklineChart"></canvas>
                        </div>

                    </div>
                    </div>
                </div>
                </div>

            </div>
            <div className="col-12 col-lg-6 col-xl">
                <div className="card">
                <div className="card-body">
                    <div className="row align-items-center">
                    <div className="col">

                        <h6 className="text-uppercase text-muted mb-2">
                        Avg. Time
                        </h6>

                        <span className="h2 mb-0">
                        2:37
                        </span>

                    </div>
                    <div className="col-auto">
                        <span className="h2 fe fe-clock text-muted mb-0"></span>

                    </div>
                    </div>
                </div>
                </div>

            </div>
            </div>
            <div className="row">
            <div className="col-12 col-xl-8">

                <div className="card">
                <div className="card-header">

                    <h4 className="card-header-title">
                    Conversions
                    </h4>

                    <span className="text-muted mr-3">
                    Last year comparision:
                    </span>

                    <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="cardToggle" data-toggle="chart" data-target="#conversionsChart" data-trigger="change" data-action="add" data-dataset="1" />
                    <label className="custom-control-label" htmlFor="cardToggle"></label>
                    </div>

                </div>
                <div className="card-body">

                    <div className="chart">
                    <canvas id="conversionsChart" className="chart-canvas"></canvas>
                    </div>

                </div>
                </div>
            </div>
            <div className="col-12 col-xl-4">

                <div className="card">
                <div className="card-header">

                    <h4 className="card-header-title">
                    Traffic Channels
                    </h4>

                    <ul className="nav nav-tabs nav-tabs-sm card-header-tabs">
                    <li className="nav-item" data-toggle="chart" data-target="#trafficChart" data-trigger="click" data-action="toggle" data-dataset="0">
                        <a href="#" className="nav-link active" data-toggle="tab">
                        All
                        </a>
                    </li>
                    <li className="nav-item" data-toggle="chart" data-target="#trafficChart" data-trigger="click" data-action="toggle" data-dataset="1">
                        <a href="#" className="nav-link" data-toggle="tab">
                        Direct
                        </a>
                    </li>
                    </ul>

                </div>
                <div className="card-body">
                    <div className="chart chart-appended">
                    <canvas id="trafficChart" className="chart-canvas" data-toggle="legend" data-target="#trafficChartLegend"></canvas>
                    </div>

                    <div id="trafficChartLegend" className="chart-legend"></div>

                </div>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-12 col-xl-4">

                <div className="card card-fill">
                <div className="card-header">

                    <h4 className="card-header-title">
                    Projects
                    </h4>

                    <a href="project-overview.html" className="small">View all</a>

                </div>
                <div className="card-body">

                    <div className="list-group list-group-flush my-n3">
                    <div className="list-group-item">
                        <div className="row align-items-center">
                        <div className="col-auto">

                            <a href="project-overview.html" className="avatar avatar-4by3">
                            <img src="assets/img/avatars/projects/project-1.jpg" alt="..." className="avatar-img rounded"/>
                            </a>

                        </div>
                        <div className="col ml-n2">

                            <h4 className="mb-1">
                            <a href="project-overview.html">Homepage Redesign</a>
                            </h4>

                            <p className="card-text small text-muted">
                            <time dateTime="2018-05-24">Updated 4hr ago</time>
                            </p>

                        </div>
                        <div className="col-auto">

                            <div className="dropdown">
                            <a href="#" className="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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

                        </div>
                        </div>
                    </div>
                    <div className="list-group-item">
                        <div className="row align-items-center">
                        <div className="col-auto">

                            <a href="project-overview.html" className="avatar avatar-4by3">
                            <img src="assets/img/avatars/projects/project-2.jpg" alt="..." className="avatar-img rounded"/>
                            </a>

                        </div>
                        <div className="col ml-n2">

                            <h4 className="mb-1">
                            <a href="project-overview.html">Travels & Time</a>
                            </h4>

                            <p className="card-text small text-muted">
                            <time dateTime="2018-05-24">Updated 4hr ago</time>
                            </p>

                        </div>
                        <div className="col-auto">

                            <div className="dropdown">
                            <a href="#" className="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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

                        </div>
                        </div>
                    </div>
                    <div className="list-group-item">
                        <div className="row align-items-center">
                        <div className="col-auto">

                            <a href="project-overview.html" className="avatar avatar-4by3">
                            <img src="assets/img/avatars/projects/project-3.jpg" alt="..." className="avatar-img rounded"/>
                            </a>

                        </div>
                        <div className="col ml-n2">

                            <h4 className="mb-1">
                            <a href="project-overview.html">Safari Exploration</a>
                            </h4>

                            <p className="card-text small text-muted">
                            <time dateTime="2018-05-24">Updated 4hr ago</time>
                            </p>

                        </div>
                        <div className="col-auto">

                            <div className="dropdown">
                            <a href="#" className="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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

                        </div>
                        </div>
                    </div>
                    <div className="list-group-item">
                        <div className="row align-items-center">
                        <div className="col-auto">

                            <a href="project-overview.html" className="avatar avatar-4by3">
                            <img src="assets/img/avatars/projects/project-5.jpg" alt="..." className="avatar-img rounded"/>
                            </a>

                        </div>
                        <div className="col ml-n2">

                            <h4 className="mb-1">
                            <a href="project-overview.html">Personal Site</a>
                            </h4>

                            <p className="card-text small text-muted">
                            <time dateTime="2018-05-24">Updated 4hr ago</time>
                            </p>

                        </div>
                        <div className="col-auto">

                            <div className="dropdown">
                            <a href="#" className="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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

                    <h4 className="card-header-title">
                    Sales
                    </h4>

                    <ul className="nav nav-tabs nav-tabs-sm card-header-tabs">
                    <li className="nav-item" data-toggle="chart" data-target="#salesChart" data-trigger="click" data-action="toggle" data-dataset="0">
                        <a className="nav-link active" href="#" data-toggle="tab">
                        All
                        </a>
                    </li>
                    <li className="nav-item" data-toggle="chart" data-target="#salesChart" data-trigger="click" data-action="toggle" data-dataset="1">
                        <a className="nav-link" href="#" data-toggle="tab">
                        Direct
                        </a>
                    </li>
                    <li className="nav-item" data-toggle="chart" data-target="#salesChart" data-trigger="click" data-action="toggle" data-dataset="2">
                        <a className="nav-link" href="#" data-toggle="tab">
                        Organic
                        </a>
                    </li>
                    </ul>

                </div>
                <div className="card-body">

                    <div className="chart">
                    <canvas id="salesChart" className="chart-canvas"></canvas>
                    </div>

                </div>
                </div>

            </div>
            </div>
            <div className="row">
            <div className="col-12">

                <div className="card">
                <div className="card-header">
                    <div className="row align-items-center">
                    <div className="col">

                        <h4 className="card-header-title">
                        Goals
                        </h4>

                    </div>
                    <div className="col-auto">

                        <a href="#!" className="btn btn-sm btn-white">
                        Export
                        </a>

                    </div>
                    </div>
                </div>
                
                <Table/>
                </div>

            </div>
            </div>
            <div className="row">
            <div className="col-12 col-xl-5">

                <div className="card card-fill">
                <div className="card-header">

                    <h4 className="card-header-title">
                    Recent Activity
                    </h4>

                    <a className="small" href="#!">View all</a>

                </div>
                <div className="card-body">

                    <div className="list-group list-group-flush list-group-activity my-n3">
                    <div className="list-group-item">
                        <div className="row">
                        <div className="col-auto">

                            <div className="avatar avatar-sm avatar-online">
                            <img className="avatar-img rounded-circle" src="assets/img/avatars/profiles/avatar-1.jpg" alt="..." />
                            </div>

                        </div>
                        <div className="col ml-n2">

                            <h5 className="mb-1">
                            Dianna Smiley
                            </h5>

                            <p className="small text-gray-700 mb-0">
                            Uploaded the files "Launchday Logo" and "New Design".
                            </p>

                            <small className="text-muted">
                            2m ago
                            </small>

                        </div>
                        </div>
                    </div>
                    <div className="list-group-item">
                        <div className="row">
                        <div className="col-auto">

                            <div className="avatar avatar-sm avatar-online">
                            <img className="avatar-img rounded-circle" src="assets/img/avatars/profiles/avatar-2.jpg" alt="..." />
                            </div>

                        </div>
                        <div className="col ml-n2">

                            <h5 className="mb-1">
                            Ab Hadley
                            </h5>

                            <p className="small text-gray-700 mb-0">
                            Shared the "Why Dashkit?" post with 124 subscribers.
                            </p>

                            <small className="text-muted">
                            1h ago
                            </small>

                        </div>
                        </div>
                    </div>
                    <div className="list-group-item">
                        <div className="row">
                        <div className="col-auto">

                            <div className="avatar avatar-sm avatar-offline">
                            <img className="avatar-img rounded-circle" src="assets/img/avatars/profiles/avatar-3.jpg" alt="..." />
                            </div>

                        </div>
                        <div className="col ml-n2">

                            <h5 className="mb-1">
                            Adolfo Hess
                            </h5>

                            <p className="small text-gray-700 mb-0">
                            Exported sales data from Launchday's subscriber data.
                            </p>

                            <small className="text-muted">
                            3h ago
                            </small>

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

                    <h4 className="card-header-title">
                    Scratchpad Checklist
                    </h4>

                    <span className="badge badge-soft-secondary">
                    23 Archived
                    </span>

                </div>
                <div className="card-body">

                    <div className="checklist">
                    <div className="custom-control custom-checkbox checklist-control">
                        <input className="custom-control-input" id="checklistOne" type="checkbox" />
                        <label className="custom-control-label" htmlFor="checklistOne"></label>
                        <span className="custom-control-caption">
                        Delete the old mess in functions files.
                        </span>
                    </div>
                    <div className="custom-control custom-checkbox checklist-control">
                        <input className="custom-control-input" id="checklistTwo" type="checkbox" />
                        <label className="custom-control-label" htmlFor="checklistTwo"></label>
                        <span className="custom-control-caption">
                        Refactor the core social sharing modules
                        </span>
                    </div>
                    <div className="custom-control custom-checkbox checklist-control">
                        <input className="custom-control-input" id="checklistThree" type="checkbox" />
                        <label className="custom-control-label" htmlFor="checklistThree"></label>
                        <span className="custom-control-caption">
                        Create the release notes for the new pages so customers get psyched.
                        </span>
                    </div>
                    <div className="custom-control custom-checkbox checklist-control">
                        <input className="custom-control-input" id="checklistFour" type="checkbox" />
                        <label className="custom-control-label" htmlFor="checklistFour"></label>
                        <span className="custom-control-caption">
                        Send Dianna those meeting notes
                        </span>
                    </div>
                    <div className="custom-control custom-checkbox checklist-control">
                        <input className="custom-control-input" id="checklistFive" type="checkbox" />
                        <label className="custom-control-label" htmlFor="checklistFive"></label>
                        <span className="custom-control-caption">
                        Share the documentation for the new unified API
                        </span>
                    </div>
                    <div className="custom-control custom-checkbox checklist-control">
                        <input className="custom-control-input" id="checklistSix" type="checkbox" defaultChecked />
                        <label className="custom-control-label" htmlFor="checklistSix"></label>
                        <span className="custom-control-caption">
                        Clean up the Figma file with all of the avatars, buttons, and other
                        components.
                        </span>
                    </div>
                    </div>

                </div>
                <div className="card-footer">
                    <div className="row align-items-center">
                    <div className="col">

                        <textarea className="form-control form-control-flush form-control-auto" data-toggle="autosize" rows="1" placeholder="Create a task"></textarea>

                    </div>
                    <div className="col-auto">

                        <button className="btn btn-sm btn-primary">
                        Add
                        </button>

                    </div>
                    </div>
                </div>
                </div>

            </div>
            </div>
        </div>

    </div>
  )
}

export default Staff;