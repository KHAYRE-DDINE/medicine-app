import React, { Component } from "react";
import TopSection from "../../TopSection/TopSection";
import doctor from "../../../images/doctors.png";
import doctors2 from "../../../images/doctors2.png";
import doctors3 from "../../../images/doctors3.png";
import doctors4 from "../../../images/doctors4.png";
import "./BlogDetail.css";

function BlogDetail() {
  return (
    <div className="blog-details">
      <div className="middle-section">
        <TopSection sectionTitle="Blog Details" />
      </div>
      <div className="background">
        <div className="main-content">
          <div className="left">
            <div className="image">
              <img src={doctor} alt={doctor} />
              <div className="person-info">
                <div className="person">
                  <img src={doctor} alt="doctor" />
                  <h4 className="name">Sonar Moyna</h4>
                </div>
                <div className="date">
                  <span> 19 July 2021</span>
                </div>
              </div>
            </div>
            <div className="title">
              <h1>Precious Tips To Help You Get Better.</h1>
            </div>
            <div className="paragraph">
              <p>
                You just need to enter the keyword and select the keyword type
                to generate a list of 6 title ideas and suggestions. If you’re
                not satisfied with the results, you can always hit the refresh
                button to generate a new list of unique titles.
              </p>
            </div>
            <div className="quote">
              <div className="text">
                <p>
                  Once you’ve gotten all the titles and have chosen the best
                  one, the next thing you need to do is to craft a magnetic
                  content. Great content marketers excel at creating content.
                </p>
              </div>
            </div>
            <div className="paragraph">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="images">
              <img src={doctor} alt="doctor" />
              <img src={doctor} alt="doctor" />
            </div>
            <div className="paragraphs">
              <p>
                You just need to enter the keyword and select the keyword type
                to generate a list of 6 title ideas and suggestions. If you’re
                not satisfied with the results, you can always hit the refresh
                button to generate a new list of unique titles.
              </p>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="right">
            <div className="search-box">
              <input type="search" placeholder="Enter your keywords..." />
              <div className="search-icon"></div>
            </div>
            <div className="wrapper">
              <div className="title">
                <h1>recent posts</h1>
              </div>
              <div className="list">
                <li>
                  <div className="icon"></div>
                  Download our brochures
                </li>
                <li>
                  <div className="icon"></div>
                  Our company details
                </li>
              </div>
            </div>
            <div className="wrapper">
              <div className="title">
                <h1>Our Gallery</h1>
              </div>
              <div className="images">
                <img src={doctors2} alt="doctors2" />
                <img src={doctors3} alt="doctors3" />
                <img src={doctors4} alt="doctors4" />
                <img src={doctor} alt="doctor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
