import React, { useState } from "react";
import "./Testimonials.css";
import TestimonialBack from "../../images/testimonial-left-back.png";
import Doctors from "../../images/doctors.png";
import Doctors2 from "../../images/doctors2.png";
import Doctors3 from "../../images/doctors3.png";

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
    <div className="testimonial" >
      <h3 className="small-title">testimonial</h3>
      <h1 className="big-title">See What Are The Patients Saying About us</h1>
      <div className="members">
        <div className="mask-images">
          <div className="mask">
            <img src={TestimonialBack} alt="TestimonialBack" />
            <div className="images">
              <img src={Doctors} alt="Doctor" />
              <img src={Doctors2} alt="Doctor" />
              <img src={Doctors3} alt="Doctor" />
              <img src={Doctors} alt="Doctor" />
              <img src={Doctors2} alt="Doctor" />
              <img src={Doctors} alt="Doctor" />
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
