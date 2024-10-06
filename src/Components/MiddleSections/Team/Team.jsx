import React, { Component } from "react";
import TopSection from "../../TopSection/TopSection";
import Doctors from "../../../images/doctors.png";
import Doctors2 from "../../../images/doctors2.png";
import Doctors3 from "../../../images/doctors3.png";
import Icons from "../../socialMedia/socialMediaLinks";
import "../About/About.css";
import "./Team.css";

class Team extends Component {
  render() {
    return (
      <div className="team">
        <div className="middle-section">
          <TopSection sectionTitle="our team" />
        </div>
        <div className="our-doctors">
          <div className="doctors text-center">
            <div className="doctor ">
              <div className="picture">
                <div className="line"></div>
                <div className="line"></div>
                <img src={Doctors} alt="" />
              </div>
              <h3 className="name">Dr. David Benjamin</h3>
              <span className="role">cardiologist</span>
              <Icons />
            </div>
            <div className="doctor  ">
              <div className="picture">
                <img src={Doctors2} alt="" />
              </div>
              <h3 className="name">Dr. David Benjamin</h3>
              <span className="role">cardiologist</span>
              <Icons />
            </div>
            <div className="doctor  ">
              <div className="picture">
                <img src={Doctors3} alt="" />
              </div>
              <h3 className="name">Dr. David Benjamin</h3>
              <span className="role">cardiologist</span>
              <Icons />
            </div>
            <div className="doctor  ">
              <div className="picture">
                <img src={Doctors3} alt="" />
              </div>
              <h3 className="name">Dr. David Benjamin</h3>
              <span className="role">cardiologist</span>
              <Icons />
            </div>
            <div className="doctor  ">
              <div className="picture">
                <img src={Doctors3} alt="" />
              </div>
              <h3 className="name">Dr. David Benjamin</h3>
              <span className="role">cardiologist</span>
              <Icons />
            </div>
            <div className="doctor  ">
              <div className="picture">
                <img src={Doctors3} alt="" />
              </div>
              <h3 className="name">Dr. David Benjamin</h3>
              <span className="role">cardiologist</span>
              <Icons />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
