import React, { Component } from "react";
import TopSection from "../../TopSection/TopSection";
import "./Booking.css";

class Booking extends Component {
  render() {
    return (
      <div className="booking">
        <div className="middle-section">
          <TopSection sectionTitle="Booking" />
        </div>
        <div className="book">
          <div className="gather">
            <div className="border border-2"></div>
            <form className="shadow d-flex flex-column justify-content-center w-20">
              <h2>Book Appointment</h2>
              <select id="" className="text-capitalize">
                <option value="Select Department">select department</option>
                <option value="One">one</option>
                <option value="Two">two</option>
                <option value="Three">three</option>
              </select>
              <select id="" className="text-capitalize">
                <option value="Select Doctors">select doctors</option>
                <option value="One">one</option>
                <option value="Two">two</option>
                <option value="Three">three</option>
              </select>
              <input type="text" name="username" placeholder="Your Name" />
              <input type="number" name="phone" placeholder="Your Number" />
              <input type="date" name="calender" />
              <input type="submit" value="Submit now" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Booking;
