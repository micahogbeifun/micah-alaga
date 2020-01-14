import React, { Component, Fragment } from "react";

import classes from "./Menu.module.css";
import TopMenu from "../../components/Navigation/TopMenu/TopMenu";
import SideMenu from "../../components/Navigation/SideMenu/SideMenu";

class Menu extends Component {
  state = { showSideMenu: false, scrollPosition: 0 };
  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    this.setState({
      scrollPosition: scrolled
    });
  };
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
          show={this.state.scrollPosition}
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
