import React from "react";

import "./About.css";
import BottomMenu from "../BottomMenu/BottomMenu";

const About = props => {
  return (
    <section className="about">
      <div className="about-banner">
        <div className="about-container">
          <h1>about us</h1>
        </div>
      </div>
      <section className="main-wrapper">
        <div className="story-container">
          <h2>Alaga New York City</h2>
          <p className="header-p">proud to serve MEDITERRANEAN CUISINE</p>
          <p className="about-contents">
            Alaga Restaurant serves a modern selection of most popular and most
            loved dishes of Spanish cuisine as well as the mouth watering
            desserts. We serve not only healthy but also nutritious food for you
            and your family.
            <br />
            <br />
            All servings are prepared and cooked by our well-experienced and
            passionate chefs in our kitchen here at Alaga.
            <br />
            Including the well designed private dining room for 30-40 people for
            your special occasions, such as baby showers, anniversaries and
            birthday parties, we serve up to 100 people with our friendly and
            attentive staff.
            <br />
            <br />
            Having been in the sector actively for 15 years, we await to meet
            and share our favorite dishes and desserts with you.
          </p>
        </div>
        <div className="about-image-container">
          <div className="about-flex-1">
            <img src="/assets/images/about/about-2.jpg" alt="about" />
            <img src="/assets/images/about/about-3.jpg" alt="about" />
          </div>
          <div className="about-flex-2">
            <img src="/assets/images/about/about-1.jpg" alt="about" />
          </div>
        </div>
      </section>
      <section className="about-brief-wrapper">
        <div className="about-brief-contents">
          <h2>we know what you expect from us</h2>
          <p>Mouth Watering, Authentic Spanish Cuisine! </p>
          <div className="brief-button">view our food menu</div>
        </div>
      </section>
      <BottomMenu />
    </section>
  );
};

export default About;
