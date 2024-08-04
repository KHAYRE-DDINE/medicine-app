import React from "react";

import "./Service.css";
import TopSection from "../../TopSection/TopSection";
import LatestNews from "../../LatestNews/LatestNews";
import DoctorsComponent from "../../DoctorsComponent/DoctorsComponent";
import Statistics from "../../Statistics/Statistics";
import ServicesBoxes from "../../ServicesBoxes/ServicesBoxes";

function Service() {
  return (
    <div className="services">
      <div className="middle-section">
        <TopSection sectionTitle="service" />
      </div>
      <ServicesBoxes />
      <Statistics />
      <DoctorsComponent />
      <LatestNews />
    </div>
  );
}

export default Service;
