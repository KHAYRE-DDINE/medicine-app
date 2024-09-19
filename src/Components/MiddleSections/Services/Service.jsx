import React, { useState } from "react";

import "./Service.css";
import TopSection from "../../TopSection/TopSection";
import LatestNews from "../../LatestNews/LatestNews";
import DoctorsComponent from "../../DoctorsComponent/DoctorsComponent";
import Statistics from "../../Statistics/Statistics";
import ServicesBoxes from "../../ServicesBoxes/ServicesBoxes";
import Doctors from "../../../images/doctors.jpg";
import Doctors1 from "../../../images/doctors.jpg";
import Doctors2 from "../../../images/doctors.jpg";
import Doctors3 from "../../../images/doctors.jpg";
import Doctors4 from "../../../images/doctors.jpg";
import Doctors5 from "../../../images/doctors.jpg";

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
      image: Doctors,
      name: "john deo",
      date: "17 april 2016",
      purpose: "in this hospital there are special surgeon",
      button: "Read more",
    },
    {
      image: Doctors,
      name: "john deo",
      date: "17 april 2016",
      purpose: "in this hospital there are special surgeon",
      button: "Read more",
    },
    {
      image: Doctors,
      name: "john deo",
      date: "17 april 2016",
      purpose: "in this hospital there are special surgeon",
      button: "Read more",
    },
    {
      image: Doctors,
      name: "john deo",
      date: "17 april 2016",
      purpose: "in this hospital there are special surgeon",
      button: "Read more",
    },
    {
      image: Doctors,
      name: "john deo",
      date: "17 april 2016",
      purpose: "in this hospital there are special surgeon",
      button: "Read more",
    },
    {
      image: Doctors,
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
