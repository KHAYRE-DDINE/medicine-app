import React, { useState } from "react";

import "./Service.css";
import TopSection from "../../TopSection/TopSection";
import LatestNews from "../../LatestNews/LatestNews";
import DoctorsComponent from "../../DoctorsComponent/DoctorsComponent";
import Statistics from "../../Statistics/Statistics";
import ServicesBoxes from "../../ServicesBoxes/ServicesBoxes";
import Doctors from "../../../images/doctors.jpg";
import doctors6 from "../../../images/doctors6.jpg";
import doctors3 from "../../../images/doctors3.png";
import doctors from "../../../images/doctors8.jpg";
import doctors9 from "../../../images/doctors9.jpg";
import doctors11 from "../../../images/doctors11.jpg";
import doctors10 from "../../../images/doctors10.jpg";

function Service() {
  const [info, setInfo] = useState([
    {
      image: Doctors,
      name: "john deo",
      date: "17 april 2016",
      purpose: "in this hospital there are special surgeon",
      button: "Read more",
    },
    {
      image: doctors3,
      name: "john deo",
      date: "17 april 2016",
      purpose: "in this hospital there are special surgeon",
      button: "Read more",
    },
    {
      image: doctors6,
      name: "john deo",
      date: "17 april 2016",
      purpose: "in this hospital there are special surgeon",
      button: "Read more",
    },
    {
      image: doctors9,
      name: "john deo",
      date: "17 april 2016",
      purpose: "in this hospital there are special surgeon",
      button: "Read more",
    },
    {
      image: doctors11,
      name: "john deo",
      date: "17 april 2016",
      purpose: "in this hospital there are special surgeon",
      button: "Read more",
    },
    {
      image: doctors,
      name: "john deo",
      date: "17 april 2016",
      purpose: "in this hospital there are special surgeon",
      button: "Read more",
    },
    {
      image: doctors10,
      name: "john deo",
      date: "17 april 2016",
      purpose: "in this hospital there are special surgeon",
      button: "Read more",
    },
  ]);
  return (
    <div className="services">
      <div className="middle-section">
        <TopSection sectionTitle="service" />
      </div>
      <ServicesBoxes />
      <Statistics />
      <DoctorsComponent />
      <LatestNews info={info} />
    </div>
  );
}

export default Service;
