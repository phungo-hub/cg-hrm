import React from 'react'

function Card() {
  return (
    <div className="card">
    <div className="card-body">
        <div className="row align-items-center">
        <div className="col">

            <h6 className="text-uppercase text-muted mb-2">
            Value
            </h6>

            <span className="h2 mb-0">
            $24,500
            </span>

            <span className="badge badge-soft-success mt-n1">
            +3.5%
            </span>
        </div>
        <div className="col-auto">

            <span className="h2 fe fe-dollar-sign text-muted mb-0"></span>

        </div>
        </div>
    </div>
    </div>
  )
}

export default Card