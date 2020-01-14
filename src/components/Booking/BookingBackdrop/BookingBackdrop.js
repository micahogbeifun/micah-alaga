import React from "react";
import classes from "./BookingBackdrop.module.css";

const BookingBackdrop = props => {
  if (props.show) {
    return <div className={classes.Backdrop} onClick={props.clicked}></div>;
  }
  return null;
};

export default BookingBackdrop;
