import React, { Fragment } from "react";

import Logo from "../../Logo/Logo";
import NavComponents from "../NavComponents/NavComponents";
import classes from "./SideMenu.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideMenu = props => {
  let attachedClasses = [classes.SideMenu, classes.Closed];
  if (props.open) {
    attachedClasses = [classes.SideMenu, classes.Open];
  }
  const componentsStyle = {
    height: "100%",
    width: "100%",
    margin: "0",
    padding: "14px 14px 14px 0",
    fontSize: "14px",
    textTransform: "uppercase",
    border: "none",
    borderBottom: "0.5px solid #B8EFB8"
  };
  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <div className={classes.Toggle}>
          <ion-icon name="close"></ion-icon>
        </div>
        <nav style={{ padding: "20px" }}>
          <NavComponents style={componentsStyle} sideIdx={true} />
        </nav>
      </div>
    </Fragment>
  );
};
export default SideMenu;
