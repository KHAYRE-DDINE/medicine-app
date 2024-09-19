import React, { useState } from "react";
import "./Blog.css";
import TopSection from "../../TopSection/TopSection";
import LatestNews from "../../LatestNews/LatestNews";
import Doctors from "../../../images/doctors.jpg";

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
