import React from "react";

const about = props => {
  let style = {
    title: {
      textAlign: "center",
      color: "white",
      margin: 0,
      padding: "2em 0"
    },
    container: {
      position: "relative"
    },
    containerBackground: {
      background:
        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
    },
    containerContent: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      color: "white"
    },
    textContainer: {
      flexBasis: "40%",
      padding: "30px"
    },
    skillContainer: {
      flexBasis: "20%",
      padding: "30px"
    },
    pictureContainer: {
      flexBasis: "20%"
    },
    picture: {
      height: "200px",
      width: "200px",
      borderRadius: "50%",
      boxShadow: "-7px 9px 8px -3px rgba(0, 0, 0, 0.2)"
    }
  };
  return (
    <div style={style.container}>
      <div style={style.containerBackground}>
        <h1 style={style.title} className="Landing_primary-font">
          {props.person.name}
        </h1>
        <div style={style.containerContent}>
          <div style={style.textContainer}>
            <p>{props.person.profession}</p>
            <p>{props.person.description}</p>
          </div>
          <div style={style.skillContainer}>
            <p>Skills:</p>
            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Vue.js</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div style={style.pictureContainer}>
            <img
              style={style.picture}
              src={props.person.img}
              alt={props.person.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
