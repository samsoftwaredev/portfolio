import React from "react";
import classes from "./Logo.css";
import Font from "../../../styles/modules/font.css";

const logo = () => {
  return (
    <span
      className={[classes.logo, classes.logo_border, Font.Font_primary].join(
        " "
      )}
    >
      SR
    </span>
  );
};
export default logo;
