import React, { Fragment } from "react";
import classes from "./Menu.css";
const menu = props => {
  return (
    <Fragment>
      <div onClick={props.clicked}>
        <div className={classes.Line} />
        <div className={classes.Line} />
        <div className={classes.Line} />
      </div>
    </Fragment>
  );
};
export default menu;
