import React, { Component } from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./IntroRow.css";
class IntroRow extends Component {
  state = {
    showOne: false,
    showTwo: false
  };
  setShow = (action, caption) => {
    let showOne, showTwo;
    if (caption === 1) {
      showOne = action === "enter" ? true : false;
    } else {
      showTwo = action === "enter" ? true : false;
    }
    this.setState({ showOne, showTwo });
  };
  render() {
    const { showOne, showTwo } = this.state;

    return (
      <section className="welcome">
        <div className="container container-1">
          <div className="note center">
            <h1>welcome</h1>
            <h2>to ALAGA</h2>
            <p className="p-note">
              <strong>Established in 2020</strong>
            </p>
            <p>
              Alaga Restaurant serves a modern selection of most popular and
              most loved dishes of Exotic Spanish cuisine as well as the mouth
              watering desserts. We serve not only healthy but also nutritious
              food for you and your family.
            </p>
            <p>
              All servings are prepared and cooked by our well-experienced and
              passionate chefs in our kitchen here at Alaga.
            </p>
          </div>
        </div>
        <div className="container container-2">
          <div className="image-flex flex-1">
            <div className="image-flex-wrapper">
              <img
                className="delivery"
                src={`/assets/images/welcome/free-delivery.jpg`}
                alt="delivery"
              />
            </div>
            <div
              className="image-flex-wrapper"
              onMouseOver={() => this.setShow("enter", 1)}
              onMouseLeave={() => this.setShow("leave", 1)}
            >
              <img
                className="lunch"
                src={`/assets/images/welcome/lunch-special.jpg`}
                alt="lunch"
              />
              <CSSTransition
                in={showOne}
                mountOnEnter
                unmountOnExit
                classNames={{
                  enter: "",
                  enterActive: "caption-enter",
                  exit: "",
                  exitActive: "caption-leave"
                }}
                timeout={500}
              >
                <div className="caption caption-1">
                  <h2>Lunch Special</h2>
                  <p>Wraps &amp; FF - $12.50</p>
                  <p>Appetizer + Entrée - $15.95</p>
                  <p>Monday to Fridday 11-4pm</p>
                  <p className="details">Click for details</p>
                </div>
              </CSSTransition>
            </div>
          </div>
          <div className="image-flex flex-2">
            <div
              className="image-flex-wrapper"
              onMouseOver={() => this.setShow("enter", 2)}
              onMouseLeave={() => this.setShow("leave", 2)}
            >
              <img
                className="about"
                src={`/assets/images/welcome/about-us.jpg`}
                alt="about"
              />
              <CSSTransition
                in={showTwo}
                mountOnEnter
                unmountOnExit
                classNames={{
                  enter: "",
                  enterActive: "caption-enter",
                  exit: "",
                  exitActive: "caption-leave"
                }}
                timeout={500}
              >
                <div className="caption caption-2">
                  <h2>About Us</h2>
                  <p className="about">
                    LEARN MORE ABOUT GALATA, OUR CUSINE, &amp; OUR MISSION
                  </p>
                </div>
              </CSSTransition>
            </div>

            <div className="image-flex-wrapper">
              <img
                className="bar"
                src={`/assets/images/welcome/bar2.jpg`}
                alt="bar"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default IntroRow;
