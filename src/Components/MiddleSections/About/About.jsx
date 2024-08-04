import React from "react";
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

function About() {
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
      <LatestNews />
    </div>
  );
}

export default About;
