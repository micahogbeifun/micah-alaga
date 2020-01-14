import React from "react";
import classes from "./SideToggle.module.css";

const SideToggle = props => (
  <div className={classes.SideToggle} onClick={props.clicked}>
    <ion-icon name="ios-menu"></ion-icon>
  </div>
);

export default SideToggle;
