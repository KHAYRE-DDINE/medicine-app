import React from "react";
import "./LatestNews.css";
import { Link } from "react-router-dom";
import Doctors from "../../images/doctors.png";
import Doctors2 from "../../images/doctors2.png";

function LatestNews() {
  return (
    <div className="our-jobs">
      <h3 className="small-title">Latest News</h3>
      <h1 className="big-title">Our Latest News</h1>
      <div className="jobs">
        <div className="job">
          <div className="image">
            <img src={Doctors2} alt="doctors" />
          </div>
          <div className="information">
            <img src={Doctors} alt="doctor" />
            <h3 className="name">john deo</h3>
            <span className="date">
              <i className="bi bi-calendar"></i>
              17 april 2016
            </span>
          </div>
          <Link>
            <h1>in this hospital there are special surgeon</h1>
          </Link>
          <Link>
            Contact us <i className="bi bi-caret-right-fill"></i>
          </Link>
        </div>
        <div className="job">
          <div className="image">
            <img src={Doctors2} alt="doctors" />
          </div>
          <div className="information">
            <img src={Doctors} alt="doctor" />
            <h3 className="name">john deo</h3>
            <span className="date">
              <i className="bi bi-calendar"></i>
              17 april 2016
            </span>
          </div>
          <Link>
            <h1>in this hospital there are special surgeon</h1>
          </Link>
          <Link>
            Contact us <i className="bi bi-caret-right-fill"></i>
          </Link>
        </div>
        <div className="job">
          <div className="image">
            <img src={Doctors2} alt="doctors" />
          </div>
          <div className="information">
            <img src={Doctors} alt="doctor" />
            <h3 className="name">john deo</h3>
            <span className="date">
              <i className="bi bi-calendar"></i>
              17 april 2016
            </span>
          </div>
          <Link>
            <h1>in this hospital there are special surgeon</h1>
          </Link>
          <Link>
            Contact us <i className="bi bi-caret-right-fill"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
