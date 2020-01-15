import React, { Component, Fragment } from "react";

import classes from "./Menu.module.css";
import TopMenu from "../../components/Navigation/TopMenu/TopMenu";
import SideMenu from "../../components/Navigation/SideMenu/SideMenu";

class Menu extends Component {
  state = { showSideMenu: false };

  SideMenuClosedHandler = () => {
    this.setState({ showSideMenu: false });
  };

  SideMenuToggleHandler = () => {
    this.setState(prevState => {
      return { showSideMenu: !prevState.showSideMenu };
    });
  };

  render() {
    return (
      <Fragment>
        <TopMenu
          pos={this.props.pos}
          drawerToggleClicked={this.SideMenuToggleHandler}
        />
        <SideMenu
          open={this.state.showSideMenu}
          closed={this.SideMenuClosedHandler}
          drawerToggleClicked={this.SideMenuToggleHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Menu;
