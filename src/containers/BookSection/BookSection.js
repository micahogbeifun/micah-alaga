import React, { Component } from "react";
import ReactDOM from "react-dom";
import CSSTransition from "react-transition-group/CSSTransition";

import "./BookSection.css";

class BookSection extends Component {
  state = { arrived: false };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const position = ReactDOM.findDOMNode(this).getBoundingClientRect();
    const arrived = position.y <= position.height / 2;
    this.setState({ arrived });
  };

  render() {
    const { form, changed, submit } = this.props;
    const formElementsArray = [];
    for (let key in form) {
      formElementsArray.push({
        id: key,
        name: form[key].className,
        value: form[key].value,
        config: form[key].config
      });
    }
    return (
      <section className="book-container">
        <div className="booking-back">
          <div className="booking-form">
            <h1>Reserve Your table</h1>
            <p>best of dining experience</p>
            <form className="form" onSubmit={submit}>
              <div className="details">
                {formElementsArray.map((element, index) =>
                  index === 6 ? null : (
                    <input
                      key={element.id}
                      className={"details-input " + element.name}
                      {...element.config}
                      value={element.value}
                      onChange={event => changed(event, element.id)}
                      required={true}
                    />
                  )
                )}
              </div>
              <textarea
                className="textarea"
                type="text"
                placeholder="Message and special request"
                value={formElementsArray[6].value}
                onChange={event => changed(event, formElementsArray[6].id)}
              />
              <div className="form-button" onClick={submit}>
                make a reservation
              </div>
            </form>
          </div>
        </div>
        <CSSTransition
          in={this.state.arrived}
          mountOnEnter
          unmountOnExit
          classNames={{
            enter: "",
            enterActive: "booking-image-animation-in",
            exit: "",
            exitActive: "booking-image-animation-out"
          }}
          timeout={1000}
        >
          <div className="booking-image">
            <img src={"/assets/images/book/rsvp.png"} alt="rsvp" />
          </div>
        </CSSTransition>
      </section>
    );
  }
}

export default BookSection;
