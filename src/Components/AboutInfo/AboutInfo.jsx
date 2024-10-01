import React from "react";
import "./AboutInfo.css";
import Doctors from "../../images/doctors8.jpg";
import Doctors2 from "../../images/doctors2.jpg";
import Doctors3 from "../../images/doctors3.jpg";
import { FaAmbulance } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaHouseMedicalFlag } from "react-icons/fa6";
import { GiMedicalThermometer } from "react-icons/gi";

function AboutInfo() {
  return (
    <div className="about-info">
      <div className="images-side">
        <img src={Doctors} alt="Doctor" />
        <img src={Doctors2} alt="Doctor" />
        <img src={Doctors3} alt="Doctor" />
        <div className="number">
          <span>22</span>
          <p>Year Experience</p>
        </div>
      </div>
      <div className="info-side">
        <h3 className="small-title">about us</h3>
        <h1 className="big-title">
          The Great Place Of Medical Hospital Center
        </h1>
        <p className="service-description">
          We provide the special tips and advices of heath care treatment and
          high level of best technology involve in the our hospital.
        </p>
        <div className="services">
          <div className="service">
            <div className="icon">
              <FaAmbulance />
            </div>
            <span className="name">Emergency Help</span>
          </div>
          <div className="service">
            <div className="icon">
              <FaHouseMedicalFlag />
            </div>
            <span className="name">Qualified Doctors</span>
          </div>
          <div className="service">
            <div className="icon">
              <FaHandHoldingMedical />
            </div>
            <span className="name">Best Professionals</span>
          </div>
          <div className="service">
            <div className="icon">
              <GiMedicalThermometer />
            </div>
            <span className="name">Medical Treatment</span>
          </div>
        </div>
        <button className="read-more">read more </button>
      </div>
    </div>
  );
}

export default AboutInfo;
