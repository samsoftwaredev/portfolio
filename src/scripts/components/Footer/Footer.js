import React from "react";
import classes from "./Footer.css";
import Logo from "../Logo/Logo";

const footer = props => {
  let date = new Date().toLocaleDateString();
  let year = new Date().getFullYear();
  return (
    <footer className={[classes.Footer, "wrapper"].join(" ")}>
      <div className="row-container row-contianer-center-space">
        <div className="row-md-6 row-sm-6 row-xs-12 row-center">
          <p>Add me on:</p>
          <ul className={classes.FooterList}>
            {props.socialMedia.map(media => {
              return (
                <li key={media.name} className={classes.FooterListItem}>
                  <a
                    className={classes.FooterListLink}
                    target="_blank"
                    href={media.url}
                  >
                    {media.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={[
            classes.Logo,
            "row-md-6 row-sm-6 row-xs-12 row-center"
          ].join(" ")}
        >
          <Logo />
          <p>Last update: {date}</p>
          <p>
            &copy; {year} {props.name}
          </p>
        </div>
      </div>
    </footer>
  );
};
export default footer;
