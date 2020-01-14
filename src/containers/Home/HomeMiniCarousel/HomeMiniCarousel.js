import React, { Component } from "react";

import "./HomeMiniCarousel.css";

class HomeMiniCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dir: "right",
      width: window.innerWidth,
      auto: "right",
      currentSlide: null,
      navDisplay: "inline-block"
    };
  }

  componentDidMount() {
    this.scroll = setInterval(
      () =>
        this.state.width >= 500 ? this.moveSlide() : this.moveSlideMobile(),
      5000
    );
  }
  componentWillUnmount() {
    clearInterval(this.scroll);
  }
  moveSlideMobile = direction => {
    const right = direction === "right";
    const left = direction === "left";
    let { dir } = this.state;
    let slide;
    this.setState(prevState => {
      if (right) {
        slide =
          prevState.currentSlide < 1140 ? prevState.currentSlide + 380 : null;
      } else if (left) {
        slide =
          prevState.currentSlide > 0 ? prevState.currentSlide - 380 : null;
      } else {
        if (dir === "right") {
          if (prevState.currentSlide < 1140) {
            slide = prevState.currentSlide + 380;
          } else {
            dir = "left";
            slide = prevState.currentSlide - 380;
          }
        } else {
          if ((slide = prevState.currentSlide > 0)) {
            slide = prevState.currentSlide - 380;
          } else {
            dir = "right";
            slide = prevState.currentSlide + 380;
          }
        }
      }
      return {
        currentSlide: slide,
        dir
      };
    });
  };
  moveSlide = direction => {
    const right = direction === "right";
    const left = direction === "left";
    let slide;
    this.setState(prevState => {
      if (right) {
        slide = prevState.currentSlide === 380 ? null : 380;
      } else if (left) {
        slide = prevState.currentSlide === 0 ? null : 0;
      } else {
        slide =
          prevState.currentSlide === 0 || prevState.currentSlide === null
            ? 380
            : prevState.currentSlide === 380
            ? 0
            : null;
      }
      return {
        currentSlide: slide
      };
    });
  };

  render() {
    const { width } = this.state;

    const mobile = width < 500;

    const imageArray = [
      { name: "chicken shish kebab" },
      { name: "special beyiti" },
      { name: "grilled bronzini" },
      { name: "fresh mozzarella salad" }
    ];

    const { currentSlide } = this.state;
    let gallery = (
      <div className={`Signature-Gallery`}>
        <div
          className="Signature-Image-Gallery"
          style={{ transform: `translateX(-${currentSlide}px)` }}
        >
          {imageArray.map((image, index) => (
            <div key={index} className="dish">
              <div className="Signature-image-card">
                <img
                  key={index}
                  id={`img-${index}`}
                  src={`/assets/images/signature/signature${index + 1}.jpg`}
                  alt="meals"
                />
              </div>
              <h2>{image.name}</h2>
            </div>
          ))}
        </div>
        <div className="nav-div">
          <div
            className="Signature-nav-left"
            style={{ display: this.state.navDisplay }}
            onClick={() =>
              !mobile ? this.moveSlide("left") : this.moveSlideMobile("left")
            }
          >
            <ion-icon name="arrow-back"></ion-icon>
          </div>
          <div
            className="Signature-nav-right"
            style={{ display: this.state.navDisplay }}
            onClick={() =>
              !mobile ? this.moveSlide("right") : this.moveSlideMobile("right")
            }
          >
            <ion-icon name="arrow-forward"></ion-icon>
          </div>
        </div>
      </div>
    );

    return (
      <section className="signature">
        <h1>signature dishes</h1>
        <p>FRESH Mediterranean Cuisine</p>
        {gallery}
      </section>
    );
  }
}

export default HomeMiniCarousel;
