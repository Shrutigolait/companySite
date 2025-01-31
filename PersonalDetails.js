import React from "react";
import "../index.css";

const PersonalDetails = () => {
  return (
    <section className="personal-details-container">
      <h2 className="section-title">Personal Details</h2>
      <div className="input-container">
        <div className="input-box">
          <label htmlFor="name">Enter Your Name</label>
          <input type="text" id="name" placeholder="Your Name" />
        </div>
        <div className="input-box">
          <label htmlFor="mobile">Enter Your Mobile Number</label>
          <input type="tel" id="mobile" placeholder="Your Mobile Number" />
        </div>
        <div className="input-box">
          <label htmlFor="email">Enter Your Email ID</label>
          <input type="email" id="email" placeholder="Your Email ID" />
        </div>
      </div>
    </section>
  );
};    

export default PersonalDetails;
