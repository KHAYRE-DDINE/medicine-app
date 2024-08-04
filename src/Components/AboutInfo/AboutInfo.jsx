import React from "react";
import "./AboutInfo.css";
import Doctors from "../../images/doctors.png";
import Doctors2 from "../../images/doctors2.png";
import Doctors3 from "../../images/doctors3.png";

function AboutInfo() {
  return (
    <div className="background">
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
                <i className="bi bi-truck"></i>
              </div>
              <span className="name">Emergency Help</span>
            </div>
            <div className="service">
              <div className="icon">
                <i className="bi bi-truck"></i>
              </div>
              <span className="name">Emergency Help</span>
            </div>
            <div className="service">
              <div className="icon">
                <i className="bi bi-truck"></i>
              </div>
              <span className="name">Emergency Help</span>
            </div>
            <div className="service">
              <div className="icon">
                <i className="bi bi-truck"></i>
              </div>
              <span className="name">Emergency Help</span>
            </div>
          </div>
          <button className="read-more">read more </button>
        </div>
      </div>
    </div>
  );
}

export default AboutInfo;
