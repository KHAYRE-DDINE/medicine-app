import React, { useState } from "react";
import "./About.css";
import TopSection from "../../TopSection/TopSection";
import LatestNews from "../../LatestNews/LatestNews";
import DoctorsComponent from "../../DoctorsComponent/DoctorsComponent";
import Statistics from "../../Statistics/Statistics";
import AboutInfo from "../../AboutInfo/AboutInfo";
import Testimonials from "../../Testimonials/Testimonials";
import circularShape from "../../../images/circular shape.jpg";
import linesShape from "../../../images/lines shape.jpg";
import plusShape from "../../../images/plus shape.jpg";
import doctors6 from "../../../images/doctors6.jpg";
import doctors3 from "../../../images/doctors3.jpg";
import doctors from "../../../images/doctors8.jpg";
import doctors9 from "../../../images/doctors9.jpg";
import doctors11 from "../../../images/doctors11.jpg";

function About() {
  const [info, setInfo] = useState([
    {
      image: doctors,
      name: "john deo",
      date: "17 april 2016",
      purpose: "in this hospital there are special surgeon",
      button: "Contact us",
    },
    {
      image: doctors3,
      name: "john deo",
      date: "17 april 2016",
      purpose: "in this hospital there are special surgeon",
      button: "Contact us",
    },
    {
      image: doctors6,
      name: "john deo",
      date: "17 april 2016",
      purpose: "in this hospital there are special surgeon",
      button: "Contact us",
    },
    {
      image: doctors9,
      name: "john deo",
      date: "17 april 2016",
      purpose: "in this hospital there are special surgeon",
      button: "Contact us",
    },
    {
      image: doctors11,
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
