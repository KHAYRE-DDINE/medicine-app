import React, { useState, createContext, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Home.css";
import Latest from "../../LatestNews/LatestNews";
import Testimonials from "../../Testimonials/Testimonials";
import AboutInfo from "../../AboutInfo/AboutInfo";
import Booking from "../Booking/Booking";
import doctors7 from "../../../images/doctors7.jpg";
import doctors6 from "../../../images/doctors6.jpg";
import doctors from "../../../images/doctors8.jpg";
import doctors10 from "../../../images/doctors10.jpg";
import without from "../../../images/without.png";
import teleBook from "../../../images/tele-book.jpg";
import check from "../../../images/check.jpg";
import location from "../../../images/location.jpg";
import ServicesBoxes from "../../ServicesBoxes/ServicesBoxes";
import { motion } from "framer-motion";

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
  const [info, setInfo] = useState([
    {
      image: doctors,
      name: "john deo",
      date: "17 april 2016",
      purpose: "in this hospital there are special surgeon",
      button: "Contact us",
    },
    {
      image: doctors10,
      name: "Michael",
      date: "17 april 2016",
      purpose: "Why is skin Surgeon Considered Underrated",
      button: "Contact us",
    },
    {
      image: doctors6,
      name: "Peter Packer",
      date: "17 april 2016",
      purpose: "Can you get a diflucan prescription online?",
      button: "Contact us",
    },
    {
      image: doctors7,
      name: "Kalina",
      date: "17 april 2016",
      purpose: "in this hospital there are special surgeon",
      button: "Contact us",
    },
  ]);

  return (
    <div className="home">
      <motion.div
        className="top-section"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="information">
          <h3 className="small-title">We Provide All Health Care Solution</h3>
          <h1 className="big-title">
            Protect Your Health And Take Care To Of Your Health
          </h1>
          <button className="btn">
            <Link to="/About">read more</Link>
          </button>
        </div>
        <div className="back">
          <div className="image">
            <img src={without} alt="Doctor" />
          </div>
        </div>
      </motion.div>
      <AboutInfo />
      <motion.div className="working-process">
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
            <h2>Take Treatment</h2>
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
            <h2>Registration</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of.
            </p>
            <NavLink to="/Booking">
              view more <i className="bi bi-caret-right-fill"></i>
            </NavLink>
          </div>
        </div>
      </motion.div>
      <motion.div className="booking">
        <Booking />
        <div className="image">
          <img src={check} alt="Check" />
          <img src={location} alt="Location" />
          <img src={teleBook} alt="Booking Image" />
        </div>
      </motion.div>
      <motion.div className="services row align-items-center m-0">
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
      </motion.div>
      <Testimonials />
      <Latest info={info} />
    </div>
  );
}

export default Home;
