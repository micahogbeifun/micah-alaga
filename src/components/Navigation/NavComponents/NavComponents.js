import React from "react";

import classes from "./NavComponents.module.css";
import NavComponent from "./NavComponent/NavComponent";

const NavComponents = props => {
  const links = [
    {
      name: "Home",
      to: {
        pathname: "/home"
      },
      exact: null
    },
    {
      name: "About Us",
      to: {
        pathname: "/about"
      },
      exact: null
    },
    {
      name: "Menu",
      to: {
        pathname: "/menu"
      },
      exact: null
    },
    {
      name: "Gallery",
      to: {
        pathname: "/gallery"
      },
      exact: null
    },
    {
      name: "Contact",
      to: {
        pathname: "/contact"
      },
      exact: null
    }
  ];

  return (
    <ul className={classes.NavComponents}>
      {links.map((link, index) => {
        const idx = index === links.length - 1 ? index : null;
        return (
          <NavComponent
            style={props.style}
            sideIdx={props.sideIdx}
            to={link.to}
            idx={idx}
            exact
            key={index}
            topMenu={props.topMenu}
          >
            {link.name}
          </NavComponent>
        );
      })}
    </ul>
  );
};

export default NavComponents;
