import React, { Component, useState } from "react";
import TopSection from "../../TopSection/TopSection";
import "./ServiceDetail.css";
import doctor from "../../../images/doctors.jpg";

function ServiceDetail() {
  const [faqs, setFaqs] = useState([
    {
      id: 0,
      question: "how doctor can ease you pain",
      answer: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.`,
    },
    {
      id: 1,
      question: "how doctor can ease you pain",
      answer: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.`,
    },
    {
      id: 2,
      question: "how doctor can ease you pain",
      answer: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.`,
    },
    {
      id: 4,
      question: "how doctor can ease you pain",
      answer: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.`,
    },
    {
      id: 5,
      question: "how doctor can ease you pain",
      answer: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.`,
    },
    {
      id: 3,
      question: "how doctor can ease you pain",
      answer: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.`,
    },
  ]);
  const itIs = (idx) => {
    setId(!id);
    show(idx);
  };
  const [id, setId] = useState(false);
  const show = (idx) => {
    let btn = document.querySelectorAll(".faq .question");
    faqs.map((el) => {
      return idx === el.id
        ? ((btn[idx].style.backgroundColor = changeBackground()),
          (btn[idx].parentElement.style.height = changeHeight()))
        : "";
    });
  };
  const changeHeight = () => {
    return id === true ? "257px" : "70px";
  };

  const changeBackground = () => {
    return id === true ? "var(--secondary-color)" : "var(--second-main-color)";
  };
  return (
    <>
      {" "}
      <div className="middle-section">
        <TopSection sectionTitle="Service Details" />{" "}
      </div>
      <div className="background">
        <div className="main-content">
          <div className="left">
            <div className="image">
              <img src={doctor} alt={doctor} />
            </div>
            <div className="title">
              <h1>Why Medical Had Been So Popular Till</h1>
            </div>
            <div className="paragraph">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
            <div className="percentage">
              <div className="texts">
                <p>
                  {/* <FontAwesomeIcon icon={faCheck} /> */}
                  Then along come two they
                </p>
                <p>
                  {/* <FontAwesomeIcon icon={faCheck} /> */}
                  That’s just a little bit more than
                </p>
                <p>
                  {/* <FontAwesomeIcon icon={faCheck} /> */}
                  Standard dummy text ever since
                </p>
                <p>
                  {/* <FontAwesomeIcon icon={faCheck} /> */}
                  Simply dummy text of the printing
                </p>
                <p>
                  {/* <FontAwesomeIcon icon={faCheck} /> */}
                  Make a type specimen book
                </p>
              </div>
              <div className="progress-bars">
                <div className="prog">
                  <h3>Advanced Technology</h3>
                  <div className="outer" data-per="90%">
                    <div className="inside" style={{ width: "90%" }}>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className="prog">
                  <h3>Certified Engineers</h3>
                  <div className="outer" data-per="65%">
                    <div className="inside" style={{ width: "65%" }}>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className="prog">
                  <h3>6 years Experience</h3>
                  <div className="outer" data-per="50%">
                    <div className="inside" style={{ width: "50%" }}>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="questions">
              <div className="title">
                <h1>Popular Questions</h1>
              </div>
              <div className="paragraph">
                <p>
                  Standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
              <div className="faqs">
                <div className="all-faqs">
                  {faqs.map((e, idx) => (
                    <div key={idx} className="faq">
                      <button onClick={() => itIs(idx)} className="question">
                        <h2>
                          {e.question}
                          <i className="bi bi-caret-down-fill"></i>
                        </h2>
                      </button>
                      <p className="answer">{e.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="wrapper">
              <div className="list">
                <li>Engine Diagnostics</li>
                <li>Lube Oil and Filters</li>
                <li>Belts and Hoses</li>
                <li>Air Conditioning</li>
                <li>Brake Repair</li>
                <li>Tire and Wheel Services</li>
              </div>
            </div>
            <div className="wrapper top">
              <div className="title">
                <h1>download</h1>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceDetail;
