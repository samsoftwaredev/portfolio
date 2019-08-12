import React, { Component } from "react";
import Normalize from "react-normalize";
import SamuelPicture from "../../assets/images/me.jpg";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import About from "../components/About/About";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import LandingPage from "../components/Landing/Landing";
import Action from "../components/Action/Action";

class App extends Component {
  state = {
    person: {
      name: "Samuel Ruiz",
      description:
        "To offer a valuable grasp of technologies with years of strong academic performance and hands-on programming experience for the success of any entity with the use of OOP, data structures, programming patterns, intuitive design, and efficient algorithms.",
      profession: "Front End Web Developer / Software Engineer",
      skills: "",
      img: SamuelPicture
    },
    form: {
      valid: false,
      fields: {
        name: "",
        email: "",
        body: "",
        phone: "",
        linkedInURL: ""
      }
    }
  };

  sendDataHandler = event => {
    event.preventDefault();
    console.log("sending.. ");
  };

  render() {
    return (
      <div>
        <Normalize />
        <Nav />
        <LandingPage />
        <div>
          <About person={this.state.person} />
          <Contact form={this.state.form.fields} send={this.sendDataHandler} />
          <Projects />
          <Action />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
