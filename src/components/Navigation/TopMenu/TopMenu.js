import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./TopMenu.css";
import Logo from "../../Logo/Logo";
import NavComponents from "../NavComponents/NavComponents";
import SideToggle from "../SideMenu/SideToggle/SideToggle";

const TopMenu = props => {
  let show = null;
  if (props.pos) show = props.pos.y === 120 || props.pos.y <= -480;
  return (
    <CSSTransition
      in={show}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: "Enter",
        exit: "",
        exitActive: "Leave"
      }}
      timeout={400}
    >
      <header className="TopMenu">
        <SideToggle clicked={props.drawerToggleClicked} />
        <div className="Logo">
          <div className="Logo-Div">
            <Logo />
            <div className="Logo-label">
              <span>ALAGA</span>
              <p>cuisines</p>
            </div>
          </div>
        </div>
        <nav className="Desktop">
          <NavComponents topMenu={true} />
        </nav>
      </header>
    </CSSTransition>
  );
};

export default TopMenu;
