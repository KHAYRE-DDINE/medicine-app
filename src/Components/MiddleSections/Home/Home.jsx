import React, { useState, createContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Home.css";
import Latest from "../../LatestNews/LatestNews";
import Testimonials from "../../Testimonials/Testimonials";
import AboutInfo from "../../AboutInfo/AboutInfo";
import Booking from "../Booking/Booking";
import Doctors4 from "../../../images/doctor-784329_1280.png";
import teleBook from "../../../images/tele-book.png";
import check from "../../../images/check.png";
import location from "../../../images/location.png";
import ServicesBoxes from "../../ServicesBoxes/ServicesBoxes";

export const TakeId = createContext(null);
export const TakeTestimonials = createContext(null);
export const TakeSlide = createContext(null);

function Home() {
  const [id, setId] = useState(0);
  const [testimonials, setTestimonials] = useState([
    {
      id: 0,
      para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.",
      name: "john joe",
      status: "patient",
    },

    {
      id: 1,
      para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.",
      name: "john joe",
      status: "patient",
    },
  ]);
  const slide = () => {
    id === 0 ? setId(1) : setId(0);
    console.log(id);
  };

  return (
    <div className="home">
      <div className="top-section">
        <div className="information">
          <h3 className="small-title">We Provide All Health Care Solution</h3>
          <h1 className="big-title">
            Protect Your Health And Take Care To Of Your Health
          </h1>
          <button className="btn">
            <Link to="/About">read more</Link>
          </button>
        </div>
        <div className="image">
          <img src={Doctors4} alt="Doctor" />
        </div>
      </div>
      <AboutInfo />
      <div className="working-process">
        <h3 className="small-title">working process</h3>
        <h1 className="big-title">how we work ?</h1>
        <div className="boxes">
          <div className="box">
            <span>01</span>
            <h2>make appointment</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of.
            </p>
            <NavLink to="/Booking">
              view more <i className="bi bi-caret-right-fill"></i>
            </NavLink>
          </div>
          <div className="box">
            <span>02</span>
            <h2>make appointment</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of.
            </p>
            <NavLink to="/Booking">
              view more <i className="bi bi-caret-right-fill"></i>
            </NavLink>
          </div>
          <div className="box">
            <span>03</span>
            <h2>make appointment</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of.
            </p>
            <NavLink to="/Booking">
              view more <i className="bi bi-caret-right-fill"></i>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="booking">
        <Booking />
        <div className="image">
          <img src={check} alt="Check" />
          <img src={location} alt="Location" />
          <img src={teleBook} alt="Booking Image" />
        </div>
      </div>
      <div className="services row justify-content-between align-items-center m-0">
        <div className="info col-lg-4">
          <h3 className="small-title">Services</h3>
          <h1 className="big-title">
            We Cover A Big Variety Of Medical Services
          </h1>
          <p>
            We provide the special tips and advice’s of heath care treatment and
            high level of best.
          </p>
          <button className="btn">
            <Link to="/Services">all services</Link>
          </button>
        </div>
        <div className="boxes col-lg-7">
          <ServicesBoxes />
        </div>
      </div>
      <Testimonials />
      <Latest />
    </div>
  );
}

export default Home;