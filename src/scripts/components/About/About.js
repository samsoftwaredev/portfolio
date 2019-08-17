import React from "react";
import classes from "./About.css";

const about = props => {
  return (
    <div className={classes.AboutContainer}>
      <div className={classes.AboutContainerBg}>
        <div className="wrapper">
          <h1 className="section-title">{props.person.name}</h1>
          <p className="section-sub-title">A brief overview of my carrer</p>
          <div className="section-content row-container row-container-center-space">
            <div
              className={[
                classes.AboutPictureContainer,
                "row-xs-12 row-md-4 row-center"
              ].join(" ")}
            >
              <img
                className={classes.AboutPicture}
                src={props.person.img}
                alt={props.person.name}
              />
            </div>
            <div
              className={[
                classes.AboutTextContainer,
                "row-xs-12 row-sm-8 row-md-5"
              ].join(" ")}
            >
              <p>{props.person.profession}</p>
              <p>{props.person.description}</p>
            </div>
            <div
              className={[
                "row-xs-12 row-sm-4 row-md-3 row-center",
                classes.AboutSkillsContainer
              ].join(" ")}
            >
              <p>Skills:</p>
              <ul className={classes.AboutSkills}>
                {props.person.skills.map(skill => {
                  return (
                    <li className={classes.AboutSkill} key={skill}>
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
