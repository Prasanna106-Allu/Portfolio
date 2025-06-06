/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon" />

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                <a
                  href="mailto:ahadali.reach@gmail.com"
                  target="_blank"
                  className="contact__button"
                >
                  alluprasannalakshmi10@gmail.com
                </a>
              </span>
            </div>
           
            <div className="contact__card">
              <i className="uil uil-location-point contact__card-icon" />
              <h3 className="contact__card-title">Location</h3>
              <span className="contact__card-data">Dekalb, United States</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
