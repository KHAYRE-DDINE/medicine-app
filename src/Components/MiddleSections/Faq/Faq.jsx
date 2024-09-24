import React, { useState } from "react";
import TopSection from "../../TopSection/TopSection";
import "./Faq.css";

export const Accordination = ({ question, answer }) => {
  const [accordinate, setAccordinate] = useState(false);

  return (
    <div
      className="faq"
      style={
        accordinate
          ? {
              height: "100%",
            }
          : {
              height: "58px",
            }
      }
    >
      <button
        onClick={() => setAccordinate(!accordinate)}
        className="question"
        style={
          accordinate
            ? {
                gridTemplateRow: "1fr",
              }
            : {
                gridTemplateRow: 0,
              }
        }
      >
        <h2>
          {question}
          <i className="bi bi-caret-down-fill"></i>
        </h2>
      </button>
      <p className="answer">{answer}</p>
    </div>
  );
};

const Faq = () => {
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
      id: 3,
      question: "how doctor can ease you pain",
      answer: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.`,
    },
  ]);

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
    return id === true ? "260px" : "58px";
  };

  const changeBackground = () => {
    return id === true ? "var(--secondary-color)" : "var(--second-main-color)";
  };

  const itIs = (idx) => {
    setId(!id);
    show(idx);
  };

  return (
    <div className="faqs">
      <div className="middle-section">
        <TopSection sectionTitle="faq's" />
      </div>
      <div className="all-faqs">
        <Accordination
          question="how doctor can ease you pain"
          answer="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book."
        />
        <Accordination
          question="How do I withdraw from a subject?"
          answer="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book."
        />
        <Accordination
          question="Understand Doctor Before You Regret?"
          answer="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book."
        />
        <Accordination
          question="What types of systems do you support?"
          answer="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book."
        />
        <Accordination
          question="How Can I Contact You?"
          answer="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book."
        />
        <Accordination
          question="What’s a payment statement?"
          answer="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book."
        />
        <Accordination
          question="Understand Doctor Before You Regret?"
          answer="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book."
        />
      </div>
    </div>
  );
};

export default Faq;
