import React from "react";

import "./Footer.css";

const Footer = props => {
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "satuday",
    "sunday"
  ];
  return (
    <footer style={{ marginBottom: "0" }}>
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-location">
            <h3 className="footer-title">Location</h3>
            <div className="location-iframe-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12090.470159428245!2d-73.9856644!3d40.7484405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sau!4v1578843314587!5m2!1sen!2sau"
                title="location"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: "0" }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="footer-hours">
            <h3 className="footer-title">Business hours</h3>
            <div className="open-times">
              {days.map(day => (
                <p key={day}>
                  <strong>{day}</strong>
                  <span>11:00am - 11:pm</span>
                </p>
              ))}
            </div>
          </div>
          <div className="footer-contact">
            <h3 className="footer-title">contact</h3>
            <div className="footer-contact-details">
              <p>
                <strong>
                  <ion-icon name="pin"></ion-icon>
                </strong>
                <strong className="address">ADDRESS</strong>
              </p>
              <p>
                <span>20 W34th street</span>
              </p>
              <p>
                <span>New York, NY 10001</span>
              </p>
              <p>
                <strong>
                  <ion-icon name="call"></ion-icon>
                </strong>
                <strong className="phone">PHONE :</strong>
                <span className="footer-data">234-498-0096</span>
              </p>
              <p>
                <strong>
                  <ion-icon name="mail"></ion-icon>
                </strong>
                <strong className="email">EMAIL :</strong>
                <span className="footer-data">info@atlagaLA.com</span>
              </p>
              <div className="social-links">
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-instagram"></ion-icon>
                <ion-icon name="logo-googleplus"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © Copyright 2020 | Atlaga Inc. | All Right Reserved | Developed by{" "}
          <strong className="name">MICAH OGBEIFUN</strong>
        </p>
        <div className="back-top" onClick={props.scroll}>
          <ion-icon name="arrow-dropup"></ion-icon>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
