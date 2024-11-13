import React, { Component } from "react";
import "./Contact.css";
import Icons from "../../socialMedia/socialMediaLinks";
import TopSection from "../../TopSection/TopSection";

class Contact extends Component {
  navbarBackground = () => {
    console.log(window.innerHeight);
  };

  render() {
    return (
      <div className="contact-section">
        <div className="middle-section">
          <TopSection sectionTitle="contact us" />
        </div>
        <div className="background">
          <div className="contact-form-info">
            <form className="form">
              <input type="text" id="username" placeholder="Your name" />
              <input type="email" id="email" placeholder="Email" />
              <select name="departments">
                <option value="select department">select department</option>
                <option value="one">one</option>
                <option value="two">two</option>
                <option value="three">three</option>
              </select>
              <textarea name="message" placeholder="Type message"></textarea>
              <input type="submit" value="Submit" />
            </form>
            <div className="contact-side-info">
              <div className="back"></div>
              <div className="title">
                <h1>Contact Us For Any Informations</h1>
              </div>
              <div className="contact-me">
                <h4>location</h4>
                <address>
                  2005 Stokes Isle Apt. 896, Venaville 10010, USA
                </address>
              </div>
              <div className="contact-me">
                <h4>phone && email</h4>
                <address>
                  ahrarkhirdin@gmail.com <br /> +542 465-66-097
                </address>
              </div>
              <div className="contact-me">
                <h4>Follow us</h4>
                <div className="icons">
                  <Icons />
                </div>
              </div>
            </div>
          </div>
          <div className="contact-boxes">
            <div style={{ borderColor: "#e2c4ff" }} className="box">
              <div className="icon">
                <i className="bi bi-person-rolodex"></i>
              </div>
              <h2>contact number</h2>
              <p> +542 465-66-097</p>
            </div>
            <div style={{ borderColor: "#ffbdbc" }} className="box">
              <div className="icon">
                <i className="bi bi-envelope-paper"></i>
              </div>
              <h2>email address</h2>
              <p>ahrarkhirdin@gmail.com</p>
            </div>
            <div style={{ borderColor: "#a4fcc4" }} className="box">
              <div className="icon">
                <i className="bi bi-geo-alt"></i>
              </div>
              <h2>address</h2>
              <p>abdel kabir ben hafid al-fihri al-fassi</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
