import React from "react";

import classes from "./BookToggle.module.css";

const BookToggle = props => {
  return (
    <div onClick={props.clicked} className={classes.BookToggle}>
      BOOK NOW
    </div>
  );
};

export default BookToggle;
