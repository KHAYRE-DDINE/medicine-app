import React from "react";
import "./DoctorsComponent.css";
import Icons from "../socialMedia/socialMediaLinks";
import Doctors from "../../images/doctors.png";
import Doctors2 from "../../images/doctors2.png";
import Doctors3 from "../../images/doctors3.png";

export default function doctors() {
  return (
    <div className="our-doctors">
      <h3 className="small-title">our doctors</h3>
      <h1 className="big-title">Meet Best Doctors</h1>
      <div className="doctors text-center">
        <div className="doctor ">
          <div className="picture">
            <div className="line"></div>
            <div className="line"></div>
            <img src={Doctors} alt="Doctor" />
          </div>
          <h3 className="name">Dr. David Benjamin</h3>
          <span className="role">cardiologist</span>
          <Icons />
        </div>
        <div className="doctor  ">
          <div className="picture">
            <img src={Doctors2} alt="Doctor" />
          </div>
          <h3 className="name">Dr. David Benjamin</h3>
          <span className="role">cardiologist</span>
          <Icons />
        </div>
        <div className="doctor  ">
          <div className="picture">
            <img src={Doctors3} alt="Doctor" />
          </div>
          <h3 className="name">Dr. David Benjamin</h3>
          <span className="role">cardiologist</span>
          <Icons />
        </div>
      </div>
    </div>
  );
}
