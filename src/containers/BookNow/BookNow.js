import React, { Component } from "react";

import Button from "../../components/UI/Button/Button";
import "./BookNow.css";
import Input from "../../components/UI/Input/Input";
import { updateObject, checkValidity } from "../../shared/utility";

export class BookNow extends Component {
  state = {
    bookForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: "",
        valueType: "name",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your E-Mail"
        },
        value: "",
        valueType: "email address",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      number: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Phone Number"
        },
        value: "",
        valueType: "Phone Number",
        validation: {
          required: true,
          minLength: 8,
          maxLength: 8,
          isNumeric: true
        },
        valid: false,
        touched: false
      },
      date: {
        elementType: "input",
        elementConfig: {
          type: "date"
        },
        value: "",
        valueType: "Booking Date",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      message: {
        elementType: "input",
        elementConfig: {
          type: "textarea",
          placeholder: "Special Request"
        },
        value: "",
        valueType: "Booking Date",
        validation: {},
        valid: true,
        touched: false
      }
    },
    formIsValid: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.props.clicked();
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(
      this.state.bookForm[inputIdentifier],
      {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.bookForm[inputIdentifier].validation
        ),
        touched: true
      }
    );

    const updatedbookForm = updateObject(this.state.bookForm, {
      [inputIdentifier]: updatedFormElement
    });
    let formIsValid = true;
    for (let inputIdentifier in updatedbookForm) {
      formIsValid = updatedbookForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ bookForm: updatedbookForm, formIsValid });
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.bookForm) {
      formElementsArray.push({
        id: key,
        config: this.state.bookForm[key]
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            valueType={formElement.config.valueType}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={event => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <div className="ButtonDiv">
          <Button
            btnType="Success"
            disabled={!this.state.formIsValid}
            clicked={this.orderHandler}
          >
            MAKE RESERVATION
          </Button>
        </div>
      </form>
    );
    return (
      <div className="BookNow">
        <h4>Enter Your Booking Details</h4>
        {form}
      </div>
    );
  }
}

export default BookNow;
