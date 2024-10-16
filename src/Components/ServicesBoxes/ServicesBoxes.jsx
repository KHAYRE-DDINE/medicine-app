import React, { useEffect, useRef, useState } from "react";
import "./ServicesBoxes.css";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { MdMedicalServices } from "react-icons/md";
import { FaClinicMedical } from "react-icons/fa";
import { FaPumpMedical } from "react-icons/fa";
import { FaTruckMedical } from "react-icons/fa6";
import { IoMdMedical } from "react-icons/io";
import { GiMedicalDrip } from "react-icons/gi";

function ServicesBoxes() {
  const location = useLocation();
  const [width, setWidth] = useState(0);
  const refBox = useRef();

  useEffect(() => {
    setWidth(refBox.current.scrollWidth - refBox.current.offsetWidth);
  }, []);

  return (
    <motion.div
      drag={location.pathname === "/" ? "x" : false}
      dragConstraints={{ right: 770, left: -width }}
      ref={refBox}
      className="services-boxes row"
    >
      <div
        className={`service pb-5 col-10 col-md-4 col-lg-4 ${
          location.pathname === "/" ? "yeah" : ""
        }`}
      >
        <div className="icon">
          <FaTruckMedical />
        </div>
        <h2 className="ps-4 pe-4 fw-bold">Diagnostics</h2>
        <p className="ps-4 pe-5 fs-7 mt-2 mb-4 lh-lg">
          Phasellus venenatis porta rhoncus. Integer et viverra felis.
        </p>
        <Link className="ms-4 me-4 text-decoration-none" to="/serviceDetail">
          View more
        </Link>
      </div>
      <div
        className={`service pb-5 col-10 col-md-4 col-lg-4 ${
          location.pathname === "/" ? "yeah" : ""
        }`}
      >
        <div className="icon">
          <FaPumpMedical />
        </div>
        <h2 className="ps-4 pe-4 fw-bold">Treatment</h2>
        <p className="ps-4 pe-5 fs-7 mt-2 mb-4 lh-lg">
          Phasellus venenatis porta rhoncus. Integer et viverra felis.
        </p>
        <Link className="ms-4 me-4 text-decoration-none" to="/serviceDetail">
          View more
        </Link>
      </div>
      <div
        className={`service pb-5 col-10 col-md-4 col-lg-4 ${
          location.pathname === "/" ? "yeah" : ""
        }`}
      >
        <div className="icon">
          <FaClinicMedical />
        </div>
        <h2 className="ps-4 pe-4 fw-bold">Surgery</h2>
        <p className="ps-4 pe-5 fs-7 mt-2 mb-4 lh-lg">
          Phasellus venenatis porta rhoncus. Integer et viverra felis.
        </p>
        <Link className="ms-4 me-4 text-decoration-none" to="/serviceDetail">
          View more
        </Link>
      </div>
      <div
        className={`service pb-5 col-10 col-md-4 col-lg-4 ${
          location.pathname === "/" ? "yeah" : ""
        }`}
      >
        <div className="icon">
          <MdMedicalServices />
        </div>
        <h2 className="ps-4 pe-4 fw-bold">Vaccine</h2>
        <p className="ps-4 pe-5 fs-7 mt-2 mb-4 lh-lg">
          Phasellus venenatis porta rhoncus. Integer et viverra felis.
        </p>
        <Link className="ms-4 me-4 text-decoration-none" to="/serviceDetail">
          View more
        </Link>
      </div>
      <div
        className={`service pb-5 col-10 col-md-4 col-lg-4 ${
          location.pathname === "/" ? "yeah" : ""
        }`}
      >
        <div className="icon">
          <GiMedicalDrip />
        </div>
        <h2 className="ps-4 pe-4 fw-bold">Emergency</h2>
        <p className="ps-4 pe-5 fs-7 mt-2 mb-4 lh-lg">
          Phasellus venenatis porta rhoncus. Integer et viverra felis.
        </p>
        <Link className="ms-4 me-4 text-decoration-none" to="/serviceDetail">
          View more
        </Link>
      </div>
      <div
        className={`service pb-5 col-10 col-md-4 col-lg-4 ${
          location.pathname === "/" ? "yeah" : ""
        }`}
      >
        <div className="icon">
          <IoMdMedical />
        </div>
        <h2 className="ps-4 pe-4 fw-bold">Qualified Doctors</h2>
        <p className="ps-4 pe-5 fs-7 mt-2 mb-4 lh-lg">
          Phasellus venenatis porta rhoncus. Integer et viverra felis.
        </p>
        <Link className="ms-4 me-4 text-decoration-none" to="/serviceDetail">
          View more
        </Link>
      </div>
    </motion.div>
  );
}

export default ServicesBoxes;
