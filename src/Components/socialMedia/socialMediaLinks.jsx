import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./socialMediaLinks";

class socialMediaLinks extends Component {
  render() {
    return (
      <div className="social-media-links">
        <Link to="https://www.facebook.com/m.ms.ih/">
          <i className="bi bi-facebook facebook"></i>
        </Link>
        <Link to="https://www.instagram.com/khayreddine04/">
          <i className="bi bi-instagram instagram"></i>
        </Link>
        <Link to="https://in.linkedin.com/in/khayreddine-aharrar/">
          <i className="bi bi-linkedin linkedin"></i>
        </Link>
        <Link>
          <i className="bi bi-twitter twitter"></i>
        </Link>
      </div>
    );
  }
}

export default socialMediaLinks;
