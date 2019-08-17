import React from "react";
import Project from "./Project/Project";
import classes from "./Projects.css";

const project = props => {
  const goToAppHandler = url => {
    console.log("going to app", url);
    window.open(url, "_blank");
  };
  return (
    <div className={classes.ProjectsBg}>
      <div className="wrapper">
        <h1 className="section-title">Projects</h1>
        <p className="section-sub-title">
          All of these projects were programmed by {props.nickname}
        </p>
        <div className="section-content">
          <div className={classes.Projects}>
            {props.projects.map((project, index) => {
              return (
                <Project
                  title={project.title}
                  description={project.description}
                  url={project.url}
                  click={() => goToAppHandler(project.url)}
                  duration={project.duration}
                  languages={project.languages}
                  status={project.status}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default project;
