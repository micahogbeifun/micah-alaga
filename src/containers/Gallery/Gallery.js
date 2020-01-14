import React, { Component } from "react";

import "./Gallery.css";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  handleScroll = () => {
    setTimeout(() => {
      this.myRef.current.scrollIntoView({ behavior: "smooth" });
    }, 250);
  };
  state = { urls: null };

  componentDidMount = () => {
    this.handleScroll();
    const urls = [];
    for (let i = 1; i < 49; i++) {
      urls.push(i);
    }
    this.setState({ urls });
  };
  createGrid = (placement, container, imageNumbers) => {
    let numbers = imageNumbers.map(number =>
      number < 10 ? "00" + number : "0" + number
    );
    const topAlign = placement === "top";
    const indexNumbers = topAlign ? [0, 1, 2, 3] : [3, 0, 1, 2];
    const divOne = (
      <img
        alt="gallery Img"
        className={`singleImage singleImage-1`}
        src={`/assets/images/gallery/venue/${numbers[indexNumbers[0]]}.jpg`}
      />
    );
    const divTwo = (
      <div className="flex-2">
        <div className="flex-2-a">
          <img
            alt="gallery Img"
            className={`singleImage singleImage-2`}
            src={`/assets/images/gallery/venue/${numbers[indexNumbers[1]]}.jpg`}
          />
          <img
            alt="gallery Img"
            className={`singleImage singleImage-3`}
            src={`/assets/images/gallery/venue/${numbers[indexNumbers[2]]}.jpg`}
          />
        </div>
        <img
          alt="gallery Img"
          className={`singleImage singleImage-4`}
          src={`/assets/images/gallery/venue/${numbers[indexNumbers[3]]}.jpg`}
        />
      </div>
    );
    return (
      <div className={"image-container image-container-" + container}>
        {topAlign ? divOne : divTwo}
        {topAlign ? divTwo : divOne}
      </div>
    );
  };
  render() {
    let { urls } = this.state;
    let venueContainerOne,
      venueContainerTwo,
      venueContainerThree,
      venueContainerFour,
      cuisineContainerOne,
      cuisineContainerTwo,
      cuisineContainerThree,
      cuisineContainerFour,
      cuisineContainerFive,
      cuisineContainerSix,
      sweetsContainerOne,
      sweetsContainerTwo;
    if (urls) {
      venueContainerOne = this.createGrid("top", 1, urls.slice(0, 4));
      venueContainerTwo = this.createGrid("bottom", 2, urls.slice(4, 8));
      venueContainerThree = this.createGrid("top", 3, urls.slice(8, 12));
      venueContainerFour = this.createGrid("bottom", 4, urls.slice(12, 16));
      cuisineContainerOne = this.createGrid("top", 1, urls.slice(16, 20));
      cuisineContainerTwo = this.createGrid("bottom", 2, urls.slice(20, 24));
      cuisineContainerThree = this.createGrid("top", 3, urls.slice(24, 28));
      cuisineContainerFour = this.createGrid("bottom", 4, urls.slice(28, 32));
      cuisineContainerFive = this.createGrid("top", 3, urls.slice(32, 36));
      cuisineContainerSix = this.createGrid("bottom", 4, urls.slice(36, 40));
      sweetsContainerOne = this.createGrid("top", 1, urls.slice(40, 44));
      sweetsContainerTwo = this.createGrid("bottom", 2, urls.slice(44, 48));
    }

    return (
      <div ref={this.myRef} className="Gallery">
        <section className="gallery-banner">
          <div className="gallery-container">
            <h1>Our Gallery</h1>
            <p>BROWSE OUR BEAUTIFUL VENUE AND CUISINE</p>
          </div>
        </section>
        <section className="gallery-wrapper">
          <div className="venue">
            <h1 className="venue-h">Venue</h1>
            <p className="venue-p">AMAZING ATMOSPHERE FOR ANY OCCASION</p>

            {venueContainerOne}
            {venueContainerTwo}
            {venueContainerThree}
            {venueContainerFour}
          </div>
          <div className="cuisine">
            <h1 className="cuisine-h">Cuisine</h1>
            <p className="cuisine-p">
              MOUTH WATERING AUTHENTIC TURKISH CUISINE
            </p>

            {cuisineContainerOne}
            {cuisineContainerTwo}
            {cuisineContainerThree}
            {cuisineContainerFour}
            {cuisineContainerFive}
            {cuisineContainerSix}
          </div>
          <div className="sweets">
            <h1 className="sweets-h">Sweets & Coffee</h1>
            <p className="sweets-p">INDULDGE IN OUR TRADITIONAL SWEETS</p>

            {sweetsContainerOne}
            {sweetsContainerTwo}
          </div>
        </section>
      </div>
    );
  }
}

export default Gallery;
