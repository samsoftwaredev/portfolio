import React from "react";
import CodingVideo from "../../../assets/videos/coding.mp4";

const landing = () => {
  let style = {
    container: {
      margin: 0,
      padding: 0,
      position: "relative",
      minWidth: "100%",
      minHeight: "100vh",
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    videoContainer: {
      position: "absolute",
      right: 0,
      bottom: 0,
      minWidth: "100%",
      minHeight: "100%",
      zIndex: -1
    },
    textContainer: {
      color: "#fff",
      alignItems: "center"
    },
    title: {
      textAlign: "center",
      margin: 0,
      padding: 0,
      fontSize: "3.5em"
    },
    subTitle: {
      textAlign: "center",
      fontSize: "2em"
    },
    btnAction: {
      textAlign: "center"
    },
    btn: {
      margin: "1em"
    },
    arrow: {}
  };
  return (
    <div style={style.container}>
      <video style={style.videoContainer} autoPlay loop>
        <source src={CodingVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div style={style.textContainer}>
        <h1 style={style.title} className="Landing_primary-font">
          Welcome!
        </h1>
        <h1 style={style.title} className="Landing_primary-font">
          I have been expecting you.
        </h1>
        <p style={style.subTitle} className="Landing_secondary-font">
          Take a look around while I keep coding.
        </p>
        <div style={style.btnAction}>
          <button style={style.btn} className="Button Button_danger">
            View Sam's Projects
          </button>
          <button style={style.btn} className="Button Button_info">
            Contact Sam
          </button>
        </div>
        <div>
          <span />
        </div>
      </div>
    </div>
  );
};
export default landing;
