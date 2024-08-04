import React, { Component } from "react";
import TopSection from "../../TopSection/TopSection";
import "./ServiceDetail.css";
import doctor from "../../../images/doctors.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ServiceDetail extends Component {
  render() {
    return (
      <div className="middle-section">
        <TopSection sectionTitle="Service Details" />
        <div className="background">
          <div className="main-content">
            <div className="left">
              <div className="image">
                <img src={doctor} alt={doctor} />
              </div>
              <div className="title">
                <h1>Why Medical Had Been So Popular Till</h1>
              </div>
              <div className="paragraph">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
              <div className="percentage">
                <div className="texts">
                  <p>
                    {/* <FontAwesomeIcon icon={faCheck} /> */}
                    Then along come two they
                  </p>
                  <p>
                    {/* <FontAwesomeIcon icon={faCheck} /> */}
                    That’s just a little bit more than
                  </p>
                  <p>
                    {/* <FontAwesomeIcon icon={faCheck} /> */}
                    Standard dummy text ever since
                  </p>
                  <p>
                    {/* <FontAwesomeIcon icon={faCheck} /> */}
                    Simply dummy text of the printing
                  </p>
                  <p>
                    {/* <FontAwesomeIcon icon={faCheck} /> */}
                    Make a type specimen book
                  </p>
                </div>
                <div className="progress-bars">
                  <div className="prog">
                    <h3>Advanced Technology</h3>
                    <div className="outer">
                      <div className="inside">
                        <span></span>
                      </div>
                    </div>
                  </div>
                  <div className="prog">
                    <h3>Certified Engineers</h3>
                    <div className="outer">
                      <div className="inside">
                        <span></span>
                      </div>
                    </div>
                  </div>
                  <div className="prog">
                    <h3>6 years Experience</h3>
                    <div className="outer">
                      <div className="inside">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="questions">
                <div className="title">
                  <h1>Why Medical Had Been So Popular Till</h1>
                </div>
                <div className="paragraph">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                </div>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceDetail;
