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
      skills: ["JavaScript", "React", "Redux", "Vue", "HTML", "CSS"],
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
        description: `AlliesPro is a gig search and payment company. Founded by former 
        freelancers who wanted to keep more of their payments and get more clients. What 
        started off as a simple chat to send and receive money has evolved into a payment 
        system that allows freelancers and clients to match, collaborate, and securely make 
        money transactions Freelancers can apply to gigs around their area and get paid on
         time. Furthermore, freelance seekers can post jobs and send money. All of this is
          brought together in one easy-to-use and beautifully designed website– all of this
           while making these process more fun and less awkward.`,
        url: "https://www.alliespro.com",
        duration: "2 years",
        languages:
          "HTML, CSS, JavaScript, Vue, Nuxt.js, Node.js, Firebase and other third-party APIs.",
        status:
          "The software is continuously evolving. I'm planning on adding new features soon."
      },
      {
        title: "Momapp",
        description: "Helps users write faster records for their clients.",
        url: "https://pacific-springs-18263.herokuapp.com",
        duration: "4 days",
        languages: "HTML, CSS, JavaScript and Vue.",
        status: "Finished"
      },
      {
        title: "Sam's Portfolio",
        description: "Website designed to showcase my work and potential",
        url: window.location.hostname,
        duration: "1 day",
        languages: "HTML, CSS, JavaScript and React.",
        status: "Finished"
      },
      {
        title: "Giphy Clone",
        description: "Web App that displays gifs from Giphy servers.",
        url: "https://rocky-sierra-20177.herokuapp.com/",
        duration: "1 day",
        languages: "HTML, CSS, JavaScript and React.",
        status: "Finished"
      },
      {
        title: "AlliesPro Mobile App",
        description:
          "Mobile version of AlliesPro, now more accessible to users.",
        url: "",
        duration: "2 weeks",
        languages: "HTML, CSS, JavaScript, React, Webpack and React Native.",
        status: "Currently under development"
      },
      {
        title: "Fither (Game)",
        description: `The Office on Women’s Health (OWH) is seeking new ways to get
           health messages out to women and girls. According to the CDC, 
           two out of every three women in the United States are overweight
            or obese1. This extra weight can lead to many diseases, such as 
            heart disease, diabetes, and many cancers. Obesity results from 
            a combination of causes and contributing factors, including individual 
            factors such as behavior and genetics. Some examples of behaviors that 
            affect weight include diet, physical activity, inactivity, and stress. 
            Improving behaviors in these areas can help women and girls maintain a 
            healthy weight. Video games are a unique medium to boost knowledge and 
            skills and can lead to behavior change through exploration of cause and
             effect in a virtual environment.`,
        url: "",
        duration: "3 months",
        languages: "JavaScript and Unity.",
        status: "Currently under development"
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
