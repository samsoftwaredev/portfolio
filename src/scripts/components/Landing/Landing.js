import React from "react";
import classes from "./Landing.css";
import CodingVideoMP4 from "../../../assets/videos/coding.mp4";
import CodingVideoOGG from "../../../assets/videos/coding.ogg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const landing = props => {
  return (
    <div className={classes.LandingContainer}>
      <video className={classes.LandingVideoContainer} autoPlay loop>
        <source
          className={classes.LandingVideo}
          src={CodingVideoMP4}
          type="video/mp4"
        />
        <source
          className={classes.LandingVideo}
          src={CodingVideoOGG}
          type="video/ogv"
        />
        Your browser does not support HTML5 video.
      </video>
      <div className={classes.LandingTextContainer}>
        <h1 className={classes.LandingTitle}>
          Welcome!
          <br />I have been expecting you
        </h1>
        <p className={classes.LandingSubTitle}>
          Take a look around while I keep coding
        </p>
        <div className={classes.LandingBtnAction}>
          <AnchorLink className={classes.LandingBtn} href="#projects">
            View {props.nickname}'s Projects
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};
export default landing;
