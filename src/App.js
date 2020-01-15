import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Menu from "./hoc/Menu/Menu";
import Home from "./containers/Home/Home";
import Gallery from "./containers/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import BookNow from "./containers/BookNow/BookNow";
import BookToggle from "./containers/BookNow/BookToggle/BookToggle";
import BookingModal from "./components/Booking/BookingModal/BookingModal";
import MenuList from "./containers/MenuList/MenuList";
import About from "./components/About/About";

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  state = { booking: false };
  handleScroll = () => {
    setTimeout(() => {
      this.myRef.current.scrollIntoView({ behavior: "smooth" });
    }, 250);
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handlePos);
  };
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handlePos);
  }

  handlePos = () => {
    const position = ReactDOM.findDOMNode(this).getBoundingClientRect();
    this.setState({ position });
  };

  bookingEndedHandler = () => {
    this.setState({ booking: false });
  };

  bookingStarted = () => {
    this.setState({ booking: true });
  };

  render() {
    let booking = (
      <BookNow
        clicked={this.bookingEndedHandler}
        bookingStarted={this.bookingStartedHandler}
        bookingEnded={this.bookingEndedHandler}
      />
    );
    let routes = (
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/menu" exact component={MenuList} />
        <Route path="/about" exact component={About} />
        <Redirect to="/home" />
      </Switch>
    );
    return (
      <div ref={this.myRef}>
        <Menu pos={this.state.position}>
          <BookToggle clicked={this.bookingStarted} />
          <BookingModal
            show={this.state.booking}
            BookingModalClosed={this.bookingEndedHandler}
          >
            {booking}
          </BookingModal>
          {routes}
          <Footer scroll={this.handleScroll} />
        </Menu>
      </div>
    );
  }
}

export default withRouter(App);
