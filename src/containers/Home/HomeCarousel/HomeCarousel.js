import React, { Component } from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./HomeCarousel.css";

class HomeCarousel extends Component {
  state = {
    currentSlide: 0,
    navDisplay: "none",
    dotDisplay: "none",
    animateItem: {
      one: "Welcome To",
      two: "Alaga",
      three: "Cuisines",
      four: "read more"
    },
    animateItems: [
      { one: "Welcome To", two: "Alaga", three: "Cuisines", four: "read more" },
      {
        one: "Memorable",
        two: "Experience",
        three: "With impeccable service and great food",
        four: "view menu"
      },
      {
        one: "Cooked To",
        two: "Perfection",
        three: "Enjoy authentic turkish cuisines",
        four: "book a table now"
      }
    ]
  };
  componentDidMount() {
    this.scroll = setInterval(() => this.moveSlide("right"), 8000);
  }
  componentWillUnmount() {
    clearInterval(this.scroll);
  }
  moveSlide = direction => {
    const right = direction === "right";
    let slide;
    this.setState(prevState => {
      if (right) {
        slide = prevState.currentSlide >= 2 ? 0 : prevState.currentSlide + 1;
      } else {
        slide = prevState.currentSlide <= 0 ? 2 : prevState.currentSlide - 1;
      }
      return {
        currentSlide: slide,
        animateItem: this.state.animateItems[slide]
      };
    });
  };

  render() {
    const imageArray = [];
    for (let i = 0; i < 3; i++) {
      imageArray.push(i);
    }
    const { currentSlide } = this.state;
    let gallery = (
      <div className="Gallery-div">
        <div
          onMouseOver={() =>
            this.setState({ navDisplay: "block", dotDisplay: "flex" })
          }
          onMouseLeave={() =>
            this.setState({ navDisplay: "none", dotDisplay: "none" })
          }
          className={`Gallery active-image`}
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "black"
          }}
        >
          <div
            className="image-wrapper"
            style={{ transform: `translateX(-${currentSlide}00%)` }}
          >
            {imageArray.map((image, index) => (
              <div key={index} className="image-card">
                <img
                  onClick={image.clicked}
                  id={`img-${index}`}
                  src={`/assets/images/slider/slide${index + 1}.jpg`}
                  alt="Meals"
                />
              </div>
            ))}
          </div>
          <div
            className="nav-left"
            style={{ display: this.state.navDisplay }}
            onClick={() => this.moveSlide("left")}
          >
            <ion-icon name="arrow-dropleft"></ion-icon>
          </div>
          <div
            className="nav-right"
            style={{ display: this.state.navDisplay }}
            onClick={() => this.moveSlide("right")}
          >
            <ion-icon name="arrow-dropright"></ion-icon>
          </div>
          <div className="nav-dots" style={{ display: this.state.dotDisplay }}>
            <div
              className="dot"
              style={{
                background: this.state.currentSlide === 0 ? "#df4a4a" : "#fff"
              }}
            ></div>
            <div
              className="dot"
              style={{
                background: this.state.currentSlide === 1 ? "#df4a4a" : "#fff"
              }}
            ></div>
            <div
              className="dot"
              style={{
                background: this.state.currentSlide === 2 ? "#df4a4a" : "#fff"
              }}
            ></div>
          </div>
          <React.Fragment>
            {this.state.animateItems.map((animateItem, index) => (
              <div key={index} className={`animateDiv animateDiv-${index + 1}`}>
                <CSSTransition
                  in={index === this.state.currentSlide}
                  mountOnEnter
                  unmountOnExit
                  classNames={{
                    enter: "",
                    enterActive: "fade-1-enter",
                    exit: "",
                    exitActive: "fade-1-leave"
                  }}
                  timeout={800}
                >
                  <span className="span span-1">{animateItem.one}</span>
                </CSSTransition>
                <CSSTransition
                  in={index === this.state.currentSlide}
                  mountOnEnter
                  unmountOnExit
                  classNames={{
                    enter: "",
                    enterActive: "fade-2-enter",
                    exit: "",
                    exitActive: "fade-2-leave"
                  }}
                  timeout={1000}
                >
                  <span className="span span-2">{animateItem.two}</span>
                </CSSTransition>
                <CSSTransition
                  in={index === this.state.currentSlide}
                  mountOnEnter
                  unmountOnExit
                  classNames={{
                    enter: "",
                    enterActive: "fade-3-enter",
                    exit: "",
                    exitActive: "fade-3-leave"
                  }}
                  timeout={1200}
                >
                  <span className="span span-3">{animateItem.three}</span>
                </CSSTransition>
                <CSSTransition
                  in={index === this.state.currentSlide}
                  mountOnEnter
                  unmountOnExit
                  classNames={{
                    enter: "",
                    enterActive: "fade-4-enter",
                    exit: "",
                    exitActive: "fade-4-leave"
                  }}
                  timeout={1400}
                >
                  <div className="btn">
                    <span className="span span-4">{animateItem.four}</span>
                  </div>
                </CSSTransition>
              </div>
            ))}
          </React.Fragment>
        </div>
      </div>
    );

    return <React.Fragment>{gallery}</React.Fragment>;
  }
}

export default HomeCarousel;
