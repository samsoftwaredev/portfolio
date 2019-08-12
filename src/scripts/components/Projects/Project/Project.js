import React from "react";

const project = props => {
  return (
    <div className="Project">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>Status: {props.status}</p>
      <p>Duration: {props.duration}</p>
      <p>Languages: {props.languages}</p>
      <button className="Button Button_info" onClick={props.goToAppHandler}>
        View
      </button>
    </div>
  );
};

export default project;
