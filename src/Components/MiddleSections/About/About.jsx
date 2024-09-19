import React, { useState } from "react";
import "./About.css";
import TopSection from "../../TopSection/TopSection";
import LatestNews from "../../LatestNews/LatestNews";
import DoctorsComponent from "../../DoctorsComponent/DoctorsComponent";
import Statistics from "../../Statistics/Statistics";
import AboutInfo from "../../AboutInfo/AboutInfo";
import Testimonials from "../../Testimonials/Testimonials";
import circularShape from "../../../images/circular shape.png";
import linesShape from "../../../images/lines shape.png";
import plusShape from "../../../images/plus shape.png";
import Doctors from "../../../images/doctors.jpg";

function About() {
  const [info, setInfo] = useState([
    {
      image: Doctors,
      name: "john deo",
      date: "17 april 2016",
      purpose: "in this hospital there are special surgeon",
      button: "Contact us",
    },
    {
      image: Doctors,
      name: "john deo",
      date: "17 april 2016",
      purpose: "in this hospital there are special surgeon",
      button: "Contact us",
    },
    {
      image: Doctors,
      name: "john deo",
      date: "17 april 2016",
      purpose: "in this hospital there are special surgeon",
      button: "Contact us",
    },
    {
      image: Doctors,
      name: "john deo",
      date: "17 april 2016",
      purpose: "in this hospital there are special surgeon",
      button: "Contact us",
    },
    {
      image: Doctors,
      name: "john deo",
      date: "17 april 2016",
      purpose: "in this hospital there are special surgeon",
      button: "Contact us",
    },
  ]);
  return (
    <div className="about">
      <div className="middle-section">
        <img className="lines" src={linesShape} alt="linesShape" />
        <img className="plus" src={plusShape} alt="plusShape" />
        <img className="circle" src={circularShape} alt="circularShape" />
        <TopSection sectionTitle="about us" />
      </div>
      <AboutInfo />
      <Statistics />
      <DoctorsComponent />
      <Testimonials />
      <LatestNews info={info} />
    </div>
  );
}

export default About;
