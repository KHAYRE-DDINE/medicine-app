import React, { useState } from "react";
import "./Testimonials.css";
import TestimonialBack from "../../images/testimonial-left-back.jpg";
import doctors from "../../images/doctors.png";
import doctors2 from "../../images/doctors2.png";
import doctors3 from "../../images/doctors3.png";
import doctors5 from "../../images/doctors.png";
import doctors6 from "../../images/doctors6.jpg";
import doctors7 from "../../images/doctors7.jpg";

function Testimonials() {
  const [id, setId] = useState(0);
  const [testimonials, setTestimonials] = useState([
    {
      id: 0,
      para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.",
      name: "john joe",
      status: "patient",
    },

    {
      id: 1,
      para: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.",
      name: "john joe",
      status: "patient",
    },
  ]);
  const slide = () => {
    id === 0 ? setId(1) : setId(0);
    console.log(id);
  };
  return (
    <div className="testimonial">
      <h3 className="small-title">testimonial</h3>
      <h1 className="big-title">See What Are The Patients Saying About us</h1>
      <div className="members">
        <div className="mask-images">
          <div className="mask">
            <img src={TestimonialBack} alt="TestimonialBack" />
            <div className="images">
              <img src={doctors} alt="Doctor" />
              <img src={doctors2} alt="Doctor" />
              <img src={doctors3} alt="Doctor" />
              <img src={doctors5} alt="Doctor" />
              <img src={doctors6} alt="Doctor" />
              <img src={doctors7} alt="Doctor" />
            </div>
          </div>
        </div>
        <div className="hidden overflow-hidden">
          <div
            className="opinions"
            style={{ transform: `translateX(${id * -50}%)` }}
          >
            {testimonials.map((element) => (
              <div key={element.id} className="box">
                <p>{element.para}</p>
                <h3>{element.name}</h3>
                <span>{element.status}</span>
              </div>
            ))}
          </div>
          <div className="buttons">
            <div onClick={() => slide()} className="btn">
              <i className="bi bi-arrow-left"></i>
            </div>
            <div onClick={() => slide()} className="btn">
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonials;
