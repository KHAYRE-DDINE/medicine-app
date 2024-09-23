import React, { useState } from "react";
import "./Blog.css";
import TopSection from "../../TopSection/TopSection";
import LatestNews from "../../LatestNews/LatestNews";
import Doctors from "../../../images/doctors.jpg";
import doctors6 from "../../../images/doctors6.jpg";
import doctors7 from "../../../images/doctors7.jpg";
import doctors8 from "../../../images/doctors8.jpg";
import doctors9 from "../../../images/doctors9.jpg";
import doctors10 from "../../../images/doctors10.jpg";
import doctors11 from "../../../images/doctors11.jpg";

function Blog() {
  const [info, setInfo] = useState([
    {
      image: Doctors,
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
      image: doctors7,
      name: "john deo",
      date: "17 april 2016",
      purpose: "in this hospital there are special surgeon",
      button: "Read more",
    },
    {
      image: doctors8,
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
      image: doctors9,
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
    <div className="blog">
      <div className="middle-section">
        <TopSection sectionTitle="Blog" />
      </div>
      <LatestNews info={info} />
      <div className="move">
        <div className="btn">
          <button>prev</button>
        </div>
        <div className="btn">
          <button>1</button>
        </div>
        <div className="btn">
          <button>2</button>
        </div>
        <div className="btn">
          <button>3</button>
        </div>
        <div className="btn">
          <button>next</button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
