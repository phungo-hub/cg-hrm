import React from 'react'

function Header() {
  return (
    <div className="header">
        <div className="container-fluid">

        <div className="header-body">
            <div className="row align-items-end">
            <div className="col">

                <h6 className="header-pretitle">
                Overview
                </h6>

                <h1 className="header-title">
                Dashboard
                </h1>

            </div>
            <div className="col-auto">

                <a href="#!" className="btn btn-primary lift">
                Create Report
                </a>

            </div>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Header