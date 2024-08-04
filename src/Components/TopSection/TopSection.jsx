import React from "react";
import { Link } from "react-router-dom";
import "./TopSection.css";
function TopSection({ sectionTitle }) {
  return (
    <div className="landing-page-contact-top">
      <div className="title">
        <h1>{sectionTitle}</h1>
      </div>
      <div className="box">
        <Link to="/">
          <i className="bi bi-house-door"></i>home
        </Link>
        / &nbsp; {sectionTitle}
      </div>
    </div>
  );
}

export default TopSection;