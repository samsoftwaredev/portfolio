import React from "react";
import classes from "./Input.css";

const input = props => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "tel":
      inputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "section":
      //   <input
      //     {...props.elementConfig}
      //     value={props.value}
      //     onChange={props.changed}
      //   />;
      break;
    default:
      inputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return (
    <div className={[classes.InputSpace, props.classes].join(" ")}>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};
export default input;
