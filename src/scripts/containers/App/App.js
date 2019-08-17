import React, { Component } from "react";
import Normalize from "react-normalize";
import SamuelPicture from "../../../assets/images/me.jpg";
import Projects from "../../components/Projects/Projects";
import Contact from "../Contact/Contact";
import About from "../../components/About/About";
import Toolbar from "../../components/Nav/Toolbar/Toolbar";
import Footer from "../../components/Footer/Footer";
import LandingPage from "../../components/Landing/Landing";
import Sidebar from "../../components/Nav/Sidebar/Sidebar";

class App extends Component {
  state = {
    person: {
      name: "Samuel Ruiz",
      nickname: "Sam",
      description:
        "To offer a valuable grasp of technologies with years of strong academic performance and hands-on programming experience for the success of any entity with the use of OOP, data structures, programming patterns, intuitive design, and efficient algorithms.",
      profession: "Front End Web Developer / Software Engineer",
      img: SamuelPicture,
      skills: ["JavaScript", "React", "Redux", "Vue.js", "HTML", "CSS"],
      socialMedia: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/samuel-ruiz-839895142/"
        },
        {
          name: "GitHub",
          url: "https://github.com/samsoftwaredev"
        }
      ]
    },
    projects: [
      {
        title: "AlliesPro",
        description: "Helping freelancers get paid on time.",
        url: "https://www.alliespro.com",
        duration: "2 years",
        languages:
          "HTML, CSS, Javascript, Vue.js, Nuxt.js, Node.js, Firebase and other third party APIs",
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
        url: window.location.hostname,
        duration: "1 day",
        languages: "HTML, CSS, Javascript, React.js and Redux",
        status: "finish"
      },
      {
        title: "AlliesPro Mobile App",
        description: "Helping freelancers getting paid more conveniently.",
        url: "",
        duration: "2 weeks",
        languages: "HTML, CSS, Javascript, React.js, React Native",
        status: "Working Progress"
      },
      {
        title: "Obesity Game",
        description:
          "Game that helps girls change their life style behaviors such as eating and execersing",
        url: "",
        duration: "3 months",
        languages: "JavaScript, Unity",
        status: "Working Progress"
      }
    ],
    nav: {
      sidebar: false
    }
  };

  sidebarToggleHandler = () => {
    console.log("clicked");
    this.setState({
      nav: {
        sidebar: !this.state.nav.sidebar
      }
    });
  };

  render() {
    return (
      <div>
        <Normalize />
        <Toolbar clicked={this.sidebarToggleHandler} />
        <Sidebar
          open={this.state.nav.sidebar}
          clicked={this.sidebarToggleHandler}
        />
        <LandingPage nickname={this.state.person.nickname} />
        <div>
          <section id="about">
            <About person={this.state.person} />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <section id="projects">
            <Projects
              nickname={this.state.person.nickname}
              projects={this.state.projects}
            />
          </section>
        </div>
        <Footer
          name={this.state.person.name}
          socialMedia={this.state.person.socialMedia}
        />
      </div>
    );
  }
}

export default App;
