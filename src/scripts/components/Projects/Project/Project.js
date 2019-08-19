import React from "react";
import classes from "./Project.css";
import Button from "../../UI/Button/Button";

const project = props => {
  return (
    <div className={classes.Project}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>Status: {props.status}</p>
      <p>Duration: {props.duration}</p>
      <p>Languages: {props.languages}</p>
      <Button btnType="ButtonInfo" clicked={props.click} disabled={!props.url}>
        View Project
      </Button>
    </div>
  );
};

export default project;
