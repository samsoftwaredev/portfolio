import React from "react";
import classes from "./Logo.css";

const logo = () => {
  return (
    <span className={[classes.logo, classes.logo_border].join(" ")}>SR</span>
  );
};
export default logo;
