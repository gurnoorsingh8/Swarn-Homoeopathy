import React from "react";
import "./ContactUs.css";
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs({ setSelectedOption }) {
  return (
    <>
      <div className="contact-container">
        <div className="contact-section">
          <div className="contact-text">
            <h2>Get in touch with us</h2>
            <p>
              At our clinic, we pride ourselves on being easily approachable
              through multiple channels, ensuring that your journey to wellness
              is as convenient and stress-free as possible.
            </p>
          </div>
          <div className="contact-image">
            <img src="contact-illustration.png" alt="Contact Support" />
          </div>
        </div>

        <div className="phone-section">
          <h3>We're just a phone call away</h3>
          <p>
            <FaPhone /> 9810896707 &nbsp;|&nbsp; <FaPhone /> 9812365432
          </p>
        </div>

        <div className="email-section">
          <h3>Write to us</h3>
          <p>
            <FaEnvelope /> swarnhomoeopathy@gmail.com &nbsp;&nbsp;
            <FaEnvelope /> dr_jaineetkaur@rediffmail.com
          </p>
        </div>

        <div className="visit-section">
          <h3>Give us a visit</h3>
          <p>Walk-ins are welcome except Sundays</p>
          <p>
            <FaClock /> <b>Clinic Hours:</b> <br /> 10:30 a.m - 1:00 p.m <br />
            6:30 p.m - 8:00 p.m
          </p>
          <p>
            <FaMapMarkerAlt /> <b>Address:</b> <br /> 22/16 B, Tilak Nagar, New
            Delhi - 110018
          </p>
        </div>

        <div className="about-section">
          <h3>Learn more about us</h3>
          <button className="about-button" onClick={() => setSelectedOption("About")}>About</button>
        </div>
      </div>
    </>
  );
}
