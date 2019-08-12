import React from "react";
import { prependOnceListener } from "cluster";

const input = props => {
  let inputElement = null;
  switch (porps.inputType) {
    case "input":
      inputElement = <input {...props} />;
      break;
    case "textarea":
      inputElement = <textarea {...props} />;
      break;
    case "section":
      inputElement = <input {...props} />;
      break;
    default:
  }
  return (
    <div>
      <label />
      {inputElement}
    </div>
  );
};
export default input;
