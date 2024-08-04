import React, { useState } from "react";
import TopSection from "../../TopSection/TopSection";
import "./Faq.css";

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
  // const [height, setHeight] = useState("58px");
  // const [background, setBackground] = useState("var(--second-main-color)");
  console.log(id);
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
    return id === true ? "257px" : "58px";
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
  );
};

export default Faq;
