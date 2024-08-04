import React from "react";
import "./ServicesBoxes.css";
import { Link } from "react-router-dom";

function ServicesBoxes() {
  return (
    <div className="services-boxes row  justify-content-center ">
      <div className="service pb-5 col-10 col-md-4 col-lg-4">
        <div className="icon">
          <i className="bi bi-truck"></i>
        </div>
        <h2 className="ps-4 pe-4 fw-bold">Diagnostics</h2>
        <p className="ps-4 pe-5 fs-7 mt-2 mb-4 lh-lg">
          Phasellus venenatis porta rhoncus. Integer et viverra felis.
        </p>
        <Link className="ms-4 me-4 text-decoration-none" to="/serviceDetail">
          View more
        </Link>
      </div>
      <div className="service pb-5 col-10 col-md-4 col-lg-4">
        <div className="icon">
          <i className="bi bi-truck"></i>
        </div>
        <h2 className="ps-4 pe-4 fw-bold">Diagnostics</h2>
        <p className="ps-4 pe-5 fs-7 mt-2 mb-4 lh-lg">
          Phasellus venenatis porta rhoncus. Integer et viverra felis.
        </p>
        <Link className="ms-4 me-4 text-decoration-none" to="/serviceDetail">
          View more
        </Link>
      </div>
      <div className="service pb-5 col-10 col-md-4 col-lg-4">
        <div className="icon">
          <i className="bi bi-truck"></i>
        </div>
        <h2 className="ps-4 pe-4 fw-bold">Diagnostics</h2>
        <p className="ps-4 pe-5 fs-7 mt-2 mb-4 lh-lg">
          Phasellus venenatis porta rhoncus. Integer et viverra felis.
        </p>
        <Link className="ms-4 me-4 text-decoration-none" to="/serviceDetail">
          View more
        </Link>
      </div>
      <div className="service pb-5 col-10 col-md-4 col-lg-4">
        <div className="icon">
          <i className="bi bi-truck"></i>
        </div>
        <h2 className="ps-4 pe-4 fw-bold">Diagnostics</h2>
        <p className="ps-4 pe-5 fs-7 mt-2 mb-4 lh-lg">
          Phasellus venenatis porta rhoncus. Integer et viverra felis.
        </p>
        <Link className="ms-4 me-4 text-decoration-none" to="/serviceDetail">
          View more
        </Link>
      </div>
      <div className="service pb-5 col-10 col-md-4 col-lg-4">
        <div className="icon">
          <i className="bi bi-truck"></i>
        </div>
        <h2 className="ps-4 pe-4 fw-bold">Diagnostics</h2>
        <p className="ps-4 pe-5 fs-7 mt-2 mb-4 lh-lg">
          Phasellus venenatis porta rhoncus. Integer et viverra felis.
        </p>
        <Link className="ms-4 me-4 text-decoration-none" to="/serviceDetail">
          View more
        </Link>
      </div>
      <div className="service pb-5 col-10 col-md-4 col-lg-4">
        <div className="icon">
          <i className="bi bi-truck"></i>
        </div>
        <h2 className="ps-4 pe-4 fw-bold">Diagnostics</h2>
        <p className="ps-4 pe-5 fs-7 mt-2 mb-4 lh-lg">
          Phasellus venenatis porta rhoncus. Integer et viverra felis.
        </p>
        <Link className="ms-4 me-4 text-decoration-none" to="/serviceDetail">
          View more
        </Link>
      </div>
    </div>
  );
}

export default ServicesBoxes;