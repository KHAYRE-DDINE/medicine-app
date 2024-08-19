import React, { useState } from "react";
import "./LatestNews.css";
import { Link } from "react-router-dom";
import Doctors from "../../images/doctors.png";
import Doctors2 from "../../images/doctors2.png";

function LatestNews({ info }) {
  return (
    <div className="our-jobs">
      <h3 className="small-title">Latest News</h3>
      <h1 className="big-title">Our Latest News</h1>
      <div className="jobs">
        {info.map((e, idx) => (
          <div key={idx} className="job">
            <div className="image">
              <img src={e.image} alt="doctors" />
            </div>
            <div className="information">
              <img src={e.image} alt="doctor" />
              <h3 className="name">{e.name}</h3>
              <span className="date">
                <i className="bi bi-calendar"></i>
                {e.date}
              </span>
            </div>
            <Link>
              <h1>{e.purpose}</h1>
            </Link>
            <Link>
              {e.button} <i className="bi bi-caret-right-fill"></i>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestNews;
