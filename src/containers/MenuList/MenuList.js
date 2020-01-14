import React, { Component } from "react";

import "./MenuList.css";
import menu from "./menuData/menu";

class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu
    };
  }
  renderitem = itemConfig => {
    const { headers, prices, mealList, descriptions } = this.state.menu;
    const { getHeaderOne, getHeaderTwo, getDescription, getPrice } = this;
    const { length, index, name, start, soon } = itemConfig;
    const listArray = [];
    for (let i = 1; i < length + 1; i++) {
      listArray.push(i);
    }

    return (
      <div className={`menu-section menu-section-${index + 1}`}>
        <h1>{getHeaderOne(headers[index])}</h1>
        <div className="menu-items">
          {listArray.map(i => (
            <div className="item">
              <img
                src={`/assets/images/menu/meals/${
                  soon && soon.includes(i) ? "soon" : name + i
                }.jpg`}
                alt="soup"
              />
              <div className="menu-flex-1">
                <h2>{getHeaderTwo(mealList[start + i - 1])}</h2>
                <p>{getDescription(descriptions[start + i - 2])}</p>
              </div>
              <p className="menu-flex-2">{getPrice(prices[start + i - 1])}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  getHeaderOne = header => header.substring(24, header.length - 5);
  getHeaderTwo = header => header.substring(4, header.length - 6);
  getDescription = description =>
    description.substring(3, description.length - 4);
  getPrice = price => price.substring(6, price.length - 7);
  render() {
    const { headers, prices, mealList } = this.state.menu;
    const { getHeaderOne, getHeaderTwo, getPrice, renderitem } = this;
    let sectionTwo, sectionThree, sectionFour, sectionFive;
    if (headers) {
      sectionTwo = renderitem({
        length: 4,
        index: 1,
        name: "salad",
        start: 2,
        soon: null
      });
      sectionThree = renderitem({
        length: 9,
        index: 2,
        name: "app",
        start: 6,
        soon: [9]
      });
      sectionFour = renderitem({
        length: 13,
        index: 3,
        name: "hot-app",
        start: 15,
        soon: [12, 13]
      });
      sectionFive = renderitem({
        length: 7,
        index: 4,
        name: "wrap",
        start: 28,
        soon: null
      });
    }
    return (
      <section className="menu-wrapper">
        <div className="menu-banner">
          <div className="container">
            <h1>Our menu</h1>
            <p className="banner-p">EXPERIENCE AUTHENTIC CUISINE</p>
          </div>
        </div>
        <div className="menu-section menu-section-1">
          <h1>{getHeaderOne(headers[0])}</h1>
          <div className="menu-items">
            <div className="item">
              <img src="/assets/images/menu/meals/soup1.jpg" alt="soup" />
              <div className="menu-flex-1">
                <h2>{getHeaderTwo(mealList[0])}</h2>
              </div>
              <p className="menu-flex-2">{getPrice(prices[0])}</p>
            </div>
            <div className="item">
              <img src="/assets/images/menu/meals/soon.jpg" alt="soup" />
              <div className="menu-flex-1">
                <h2>{getHeaderTwo(mealList[1])}</h2>
              </div>
              <p className="menu-flex-2">{getPrice(prices[1])}</p>
            </div>
          </div>
        </div>
        {sectionTwo}
        {sectionThree}
        {sectionFour}
        {sectionFive}
        <div className="bottom-menu">
          <div className="reservation">make a reservation</div>
        </div>
      </section>
    );
  }
}

export default MenuList;
