import React from "react";
import Project from "./Project/Project";

const project = props => {
  const projects = [
    {
      title: "AlliesPro",
      description: "Helping freelancers get paid on time.",
      url: "https://www.alliespro.com",
      duration: "2 years",
      languages:
        "HTML, CSS, Javascript, Vue.js, Node.js, Firebase and third parties APIs",
      status: "currently on development"
    },
    {
      title: "Momapp",
      description: "Helps users writer faster client's records.",
      url: "https://pacific-springs-18263.herokuapp.com",
      duration: "4 days",
      languages: "HTML, CSS, Javascript and Vue.js",
      status: "finish"
    },
    {
      title: "Sam's Portfolio",
      description: "Showcase my work and projects",
      url: "https://pacific-springs-18263.herokuapp.com",
      duration: "1 day",
      languages: "HTML, CSS, Javascript, React.js and Redux",
      status: "finish"
    },
    {
      title: "AlliesPro Mobile App",
      description: "Helping freelancers getting paid more conveniently.",
      url: "https://pacific-springs-18263.herokuapp.com",
      duration: "2 weeks",
      languages: "HTML, CSS, Javascript, React.js, React Native",
      status: "Working Progress"
    },
    {
      title: "Obesity Game",
      description:
        "Game that helps girls change their life style behaviors such as eating and execersing",
      url: "https://pacific-springs-18263.herokuapp.com",
      duration: "3 months",
      languages: "JavaScript, Unity",
      status: "Working Progress"
    }
  ];
  const goToAppHandler = url => {
    console.log("going to app", url);
  };
  return (
    <div className="Projects-bg">
      <h1 className="Landing_primary-font">My Projects</h1>
      <div className="Projects">
        {projects.map((project, index) => {
          return (
            <Project
              title={project.title}
              description={project.description}
              url={project.url}
              goToAppHandler={() => goToAppHandler(project.url)}
              duration={project.duration}
              languages={project.languages}
              status={project.status}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default project;
