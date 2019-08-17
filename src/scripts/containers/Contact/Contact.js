import React, { Component } from "react";
import classes from "./Contact.css";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import axios from "axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import Modal from "../../components/UI/Modal/Modal";

class Contact extends Component {
  state = {
    modal: {
      show: false,
      message: null,
      error: false
    },
    form: {
      isValid: false,
      isLoading: false,
      fields: {
        body: {
          label: "Like what you see?",
          elementType: "textarea",
          elementConfig: {
            placeholder: "Type here..."
          },
          value: "",
          validation: {
            required: true
          },
          classes: "row-md-12 row-sm-12 row-xs-12",
          valid: false,
          touched: false
        },
        name: {
          label: "Full name",
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "Your Name"
          },
          value: "",
          validation: {
            required: true
          },
          classes: "row-md-6 row-sm-12 row-xs-12",
          valid: false,
          touched: false
        },
        email: {
          label: "Email address",
          elementType: "input",
          elementConfig: {
            type: "email",
            placeholder: "example@example.com"
          },
          value: "",
          validation: {
            required: true,
            isEmail: true
          },
          classes: "row-md-6 row-sm-12 row-xs-12",
          valid: false,
          touched: false
        },
        phone: {
          label: "Phone number (optional)",
          elementType: "tel",
          elementConfig: {
            type: "text",
            placeholder: "(555) 555-5555"
          },
          value: "",
          validation: {
            required: false,
            // minLength: 14,
            // maxLength: 14,
            isPhoneNumber: true
          },
          classes: "row-md-6 row-sm-12 row-xs-12",
          valid: true,
          touched: false
        },
        linkedIn: {
          label: "LinkedIn profile URL (optional)",
          elementType: "input",
          elementConfig: {
            type: "url",
            placeholder: "https://www.linkedin.com/in/example/"
          },
          value: "",
          validation: {
            required: false,
            isURL: true
          },
          classes: "row-md-6 row-sm-12 row-xs-12",
          valid: true,
          touched: false
        }
      }
    }
  };
  checkValidity = (fieldValue, validationObj) => {
    let isValid = true;
    //if the field is not required and the user has not typed anything, return true.
    if (!validationObj.required && fieldValue.trim() === "") {
      return true;
    }
    if (validationObj.required) {
      isValid = fieldValue.trim() !== "" && isValid;
    }
    if (validationObj.minLength) {
      isValid = fieldValue.length >= validationObj.minLength && isValid;
    }

    if (validationObj.maxLength) {
      isValid = fieldValue.length <= validationObj.maxLength && isValid;
    }

    if (validationObj.isPhoneNumber) {
      // const pattern = new RegExp("^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-s./0-9]*$");
      // isValid = pattern.test(fieldValue) && isValid;
    }

    if (validationObj.isEmail) {
      const pattern = new RegExp(
        "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
      );
      isValid = pattern.test(fieldValue) && isValid;
    }

    if (validationObj.isNumeric) {
      const pattern = new RegExp("^d+$");
      isValid = pattern.test(fieldValue) && isValid;
    }
    if (validationObj.isURL) {
      const pattern = new RegExp(
        "(https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})"
      );
      isValid = pattern.test(fieldValue) && isValid;
    }
    return isValid;
  };
  helperComplete(fieldValue, validationObj) {
    if (validationObj.isPhoneNumber) {
      var cleaned = ("" + fieldValue).replace(/\D/g, "");
      var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        fieldValue = "(" + match[1] + ") " + match[2] + "-" + match[3];
      }
    }
    return fieldValue;
  }
  inputChangedHandler(event, inputIdentifier) {
    //copy the form into a new variable
    const fieldsCopy = { ...this.state.form.fields };
    //copy the specific input into a new varible
    const fieldCopy = { ...fieldsCopy[inputIdentifier] };
    //add the new value to the new variable
    fieldCopy.value = event.target.value;

    fieldCopy.valid = this.checkValidity(fieldCopy.value, fieldCopy.validation);
    fieldCopy.touched = true;
    fieldCopy.value = this.helperComplete(
      fieldCopy.value,
      fieldCopy.validation
    );
    //store the new value in the new form that was created
    fieldsCopy[inputIdentifier] = fieldCopy;
    //add it to the state
    let formIsValid = true;
    for (let inputIdentifier in fieldsCopy) {
      formIsValid = fieldsCopy[inputIdentifier].valid && formIsValid;
    }
    this.setState({
      form: { fields: fieldsCopy, isValid: formIsValid }
    });
    console.log(this.state.form);
  }
  showLodingIcon = bool => {
    this.setState({
      form: { ...this.state.form, isLoading: bool }
    });
  };
  closeModalHandler = () => {
    this.setState({
      modal: { ...this.state.modal, show: false }
    });
  };
  sendDataHandler = event => {
    event.preventDefault();
    this.setState({
      modal: { ...this.state.modal, show: true }
    });
    this.showLodingIcon(true);
    console.log("sending... ", this.state.form);
    let newObj = {};
    for (let field in this.state.form.fields) {
      if (this.state.form.fields[field].value)
        newObj[field] = this.state.form.fields[field].value;
    }
    console.log(newObj);
    axios
      .post("https://samsportfolio-749ec.firebaseio.com/contact.json", newObj)
      .then(res => {
        console.log(res);
        this.showLodingIcon(false);
        this.setState({
          modal: {
            ...this.state.modal,
            message: `Thank you for your interest in contacting me! I have received your information and I will contact you
        shortly.`
          }
        });
      })
      .catch(err => {
        console.log(err);
        this.showLodingIcon(false);
        this.setState({
          modal: {
            ...this.state.modal,
            message: `Oops! Something went wrong. Please try again.`,
            error: true
          }
        });
      });
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.form.fields) {
      formElementsArray.push({
        id: key,
        config: this.state.form.fields[key]
      });
    }
    let form = (
      <form className="section-content" onSubmit={this.sendDataHandler}>
        <div className="row-container row-container-center-space">
          {formElementsArray.map(formElement => (
            <Input
              classes={formElement.config.classes}
              label={formElement.config.label}
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              changed={event => this.inputChangedHandler(event, formElement.id)}
            />
          ))}
        </div>
        <Button disabled={!this.state.form.isValid} btnType="ButtonSuccess">
          Send
        </Button>
      </form>
    );
    return (
      <div className={classes.ContactBg}>
        <Modal
          closeModal={this.closeModalHandler}
          error={this.state.modal.error}
          show={this.state.modal.show}
        >
          {this.state.form.isLoading ? <Spinner /> : this.state.modal.message}
        </Modal>
        <div className="wrapper-sm">
          <h1 className="section-title">Contact Me</h1>
          {form}
        </div>
      </div>
    );
  }
}

export default Contact;
