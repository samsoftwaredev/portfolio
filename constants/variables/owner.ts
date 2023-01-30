import { ownerPicture } from "../../public/owner";
import { garden, giphy, portfolio, game, finmily } from "../../public/projects";

export const OWNER = {
  firstName: "Samuel",
  lastName: "Ruiz",
  fullName: "Samuel Ruiz",
  job: "Front-End Developer",
  picture: ownerPicture,
  careerStartedYear: 2016,
  description:
    "Front-End Developer with proven experience at AlliesPro and Bond. Passionate about learning and development with a desire to apply skills on a larger development team. Eager to tackle more complex problems and continue to find ways to maximize user experiences.",
};

export const SKILL1 = [
  {
    name: "Problem Solver",
  },
  {
    name: "Creative",
  },
  {
    name: "UI and UX Designer",
  },
  {
    name: "System Architecture Designer",
  },
];

export const SKILL2 = [
  {
    name: "React",
  },
  {
    name: "JavaScript & TypeScript",
  },
  {
    name: "CSS",
  },
  {
    name: "HTML",
  },
];

export const SKILL3 = [
  {
    name: "Node.js with Express",
  },
  {
    name: "No SQL - Firebase",
  },
  {
    name: "SQL - Postgres",
  },
  {
    name: "Terminal/Command Prompt",
  },
];

export const PROJECTS = [
  // {
  //   image: alliespro,
  //   imageAlt: "Website Home Page",
  //   title: "AlliesPro",
  //   description: "Helping Freelancers get paid on time",
  //   repositoryURL: "",
  // },
  {
    image: garden,
    imageAlt: "Cloud Kitchen Clone App Main Page",
    title: "Cloud Kitties",
    description:
      "This application shows how I handled huge amounts of data in a ever-growing table. The table uses React Hooks to simplify the component's interface. This app is a clone of Cloud Kitchen, which is a ghost kitchen and virtual restaurant.",
    websiteURL: "https://cloudkitchen.vercel.app/",
    repositoryURL: "https://github.com/samsoftwaredev/cloudkitchen",
    objective:
      "To display my abilities to using React, React Hooks and React State. I also made use of CSS styles.",
    languages:
      "Next.js, JavaScript, TypeScript, React, CSS, SASS, HTML, Git, Github",
  },
  {
    image: garden,
    imageAlt: "Rosary App Main Page",
    title: "Do It For Jesus",
    description:
      "This app helps Catholics pray the rosary together. This is a social app that shows every user that is currently logged in. Users can listen to the rosary, change settings and submit their prayers.",
    websiteURL: "https://doit4jesus.com/app",
    repositoryURL: "https://github.com/samsoftwaredev/doit4jesus-app",
    objective:
      "To display my abilities to using React, React Hooks and React State. I also made cool animations with CSS.",
    languages:
      "Next.js, JavaScript, TypeScript, React, CSS, Styled-Components, HTML, Git, Github",
  },
  {
    image: finmily,
    imageAlt: "Website",
    title: "Finmily",
    description:
      "Finmily is a web app that helps users track their expenses. Users are able to share their bank account information with their family members as well as send them money. Finance for the entire family.",
    websiteURL: "https://finmily.com/",
    repositoryURL: "https://github.com/samsoftwaredev/expense-tracker-frontend",
    objective: "To help families manage their finance in on single place.",
    languages:
      "Firebase, Next.js, React, JavaScript, TypeScript, CSS, HTML, Node.js, Express.js, Postman, Git",
  },
  {
    image: portfolio,
    imageAlt: "Website",
    title: "Samuel's Portfolio",
    description:
      "Samuel's Portfolio is a website to showcase my work. You can clone this repo and build your own portfolio. The code is easy to read and change.",
    websiteURL: "https://samueldeveloper.com/",
    repositoryURL: "https://github.com/samsoftwaredev/portfolio",
    objective: "To show case my work.",
    languages: "Next.js, React, TypeScript, JavaScript, TypeScript, CSS, HTML",
  },
  // {
  //   image: garden,
  //   imageAlt: "Website",
  //   title: "Luisa's Garden",
  //   description:
  //     "Luisa's Garden is a website that teaches orchid enthusiasts how to grow, reproduce and maintain orchids.",
  //   websiteURL: "",
  //   repositoryURL: "https://github.com/samsoftwaredev/luisa-garden",
  // },
  {
    image: game,
    imageAlt: "Game Website",
    title: "The Wild Warriors - Game",
    description:
      'The Wild Warriors is a comic book. I decided to make a game with it characters similar to "Rock paper scissors."',
    repositoryURL: "https://github.com/samsoftwaredev/super-cute-wars",
    objective: "To build a game with the character of a popular comic book.",
    languages: "Vanilla JavaScript, CSS, HTML",
  },
  {
    image: giphy,
    imageAlt: "Website",
    title: "Giphy Clone",
    description:
      "GIPHY is a search engine that allows users to search for and share animated GIF files.",
    repositoryURL: "https://github.com/samsoftwaredev/giphy-clone",
    languages: "React, JavaScript, CSS, HTML",
  },
];
