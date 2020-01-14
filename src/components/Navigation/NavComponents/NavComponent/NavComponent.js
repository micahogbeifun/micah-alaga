import React from "react";
import "./NavComponent.css";
import { NavLink } from "react-router-dom";

const NavComponent = props => {
  const style = props.idx || props.sideIdx ? { border: "none" } : null;

  const contact = props.topMenu && props.children === "Contact";

  let contactStyle = {},
    contactDropdown = null,
    contactClass = "";

  if (contact) {
    contactStyle = { position: "relative" };
    contactDropdown = (
      <div className="dropdown-content">
        <NavLink to="/directions">Get directions</NavLink>
      </div>
    );
    contactClass = " directions";
  }

  return (
    <li
      style={{ ...props.style, ...contactStyle }}
      className={"NavComponent" + contactClass}
    >
      <NavLink
        style={style}
        to={props.to}
        exact={props.exact}
        activeClassName={"active"}
      >
        {props.children}
      </NavLink>
      {contactDropdown}
    </li>
  );
};

export default NavComponent;
