import React from "react";
import Font from "../../../styles/modules/font.css";
import classes from "./Landing.css";
import CodingVideo from "../../../assets/videos/coding.mp4";
import AnchorLink from "react-anchor-link-smooth-scroll";

const landing = props => {
  return (
    <div className={classes.LandingContainer}>
      <video className={classes.LandingVideoContainer} autoPlay loop>
        <source
          className={classes.LandingVideo}
          src={CodingVideo}
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>
      <div className={classes.LandingTextContainer}>
        <h1 className={[classes.LandingTitle, Font.Font_primary].join(" ")}>
          Welcome!
          <br />I have been expecting you
        </h1>
        <p className={[classes.LandingSubTitle, Font.Font_secondary].join(" ")}>
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
