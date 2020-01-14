import React from "react";
import { Link } from "react-router-dom";

import classes from "./Logo.module.css";

import logo from "../../assets/images/logo.png";

const Logo = props => (
  <Link to="/home">
    <div className={classes.Logo} style={{ height: props.height }}>
      <img src={logo} alt="logo"></img>
    </div>
  </Link>
);

export default Logo;
