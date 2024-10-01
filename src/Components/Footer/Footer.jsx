import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "./Footer.css";
import logo from "../../images/nav-bar-logo.jpg";
import circularShape from "../../images/circular shape.jpg";
import linesShape from "../../images/lines shape.jpg";
import plusShape from "../../images/plus shape.jpg";
import Icons from "../socialMedia/socialMediaLinks";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-top">
          <div className="summary">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <p>
              Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
              smod tempor incididunt ut labore et.
            </p>
            <div className="contact-us">
              <div className="icon">
                <i className="bi bi-telephone"></i>
              </div>
              <img className="circle" src={circularShape} alt="circularShape" />
              <div className="contact-info-num">
                <h3>contact us</h3>
                <h4 className="number">234-53-64-32-4</h4>
              </div>
            </div>
          </div>
          <div className="quick-links">
            <h1 className="title">quick links</h1>
            <div className="links">
              <Link to="/About">about us</Link>
              <Link to="/Team">our team</Link>
              <Link to="/Faq">FAQ's</Link>
              <Link to="/Booking">booking</Link>
              <Link to="/Service">services</Link>
              <Link to="/Blog">Blogs</Link>
            </div>
          </div>
          <div className="service">
            <h1 className="title">our service</h1>
            <div className="links">
              <Link to="/About">Dental Care</Link>
              <Link to="/About">Cardiac Clinic</Link>
              <Link to="/Faq">Massege Therapy</Link>
              <Link to="/Booking">Cardiology</Link>
              <Link to="/Error">Precise Diagnosis</Link>
              <Link to="/LoginRegister">Abmbulance Services</Link>
            </div>
          </div>
          <div className="subscribe">
            <h1 className="title">subscribe now</h1>
            <form>
              <input type="text" placeholder="Email Address" />
              <input type="submit" />
            </form>
            <Icons />
          </div>
        </div>
        <img className="lines" src={linesShape} alt="linesShape" />
        <img className="plus" src={plusShape} alt="plusShape" />
        <div className="footer-bottom">
          <p>
            Copyright © 2024 Developed by
            <strong> Khayreddine Aharrar</strong>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
