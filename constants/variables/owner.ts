import { ownerPicture } from "../../public/owner";
import { garden, giphy, portfolio, game, finmily } from "../../public/projects";

export const OWNER = {
  firstName: "Samuel",
  lastName: "Ruiz",
  job: "Software Developer",
  picture: ownerPicture,
  careerStartedYear: 2019,
  description:
    "Samuel Ruiz Portfolio. I'm a Web Developer. I have worked in multiple startups and I have had the opportunity to build my own startup. I have worked as a front-end developer for a couple of years now and I have seen it all. Everything from optimization to accessibility, to testing and writing efficient algorithms. I have worked in multiple startups and I have had the opportunity to build my own startup.",
};

export const SKILL1 = [
  {
    name: "Problem Solving",
    knowledgeAmount: 90,
  },
  {
    name: "Managing Complexity",
    knowledgeAmount: 75,
  },
  {
    name: "Code Optimization Skills",
    knowledgeAmount: 80,
  },
  {
    name: "Creativity",
    knowledgeAmount: 95,
  },
  {
    name: "UI Designer",
    knowledgeAmount: 65,
  },
  {
    name: "UX Designer",
    knowledgeAmount: 70,
  },
  {
    name: "System Architecture",
    knowledgeAmount: 70,
  },
];

export const SKILL2 = [
  {
    name: "JavaScript",
    knowledgeAmount: 90,
  },
  {
    name: "TypeScript",
    knowledgeAmount: 85,
  },
  {
    name: "CSS",
    knowledgeAmount: 75,
  },
  {
    name: "HTML",
    knowledgeAmount: 85,
  },
  {
    name: "React",
    knowledgeAmount: 85,
  },
];

export const SKILL3 = [
  {
    name: "Node.js",
    knowledgeAmount: 80,
  },
  {
    name: "Express",
    knowledgeAmount: 85,
  },
  {
    name: "SQL",
    knowledgeAmount: 50,
  },
  {
    name: "Terminal/Command Prompt",
    knowledgeAmount: 40,
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
  // {
  //   image: rosaryApp,
  //   imageAlt: "Rosary App",
  //   title: "Rosary Webapp",
  //   description: "User are able to pray the rosary",
  //   repositoryURL: "",
  // },
  {
    image: finmily,
    imageAlt: "Website",
    title: "Finmily",
    description:
      "Finmily is a web app that helps users track their expenses. Users are able to share their bank account information with their family members as well as send them money.",
    websiteURL: "https://finmily.herokuapp.com/",
    repositoryURL: "https://github.com/samsoftwaredev/finmily",
  },
  {
    image: portfolio,
    imageAlt: "Website",
    title: "Samuel's Portfolio",
    description:
      "Samuel's Portfolio is a website to showcase my work. You can clone this repo and build your own portfolio. The code is easy to read and change.",
    websiteURL: "https://samuelruizportfolio.herokuapp.com/",
    repositoryURL: "https://github.com/samsoftwaredev/portfolio",
  },
  {
    image: garden,
    imageAlt: "Website",
    title: "Luisa's Garden",
    description:
      "Luisa's Garden is a website that teaches orchid enthusiasts how to grow, reproduce and maintain orchids.",
    websiteURL: "",
    repositoryURL: "https://github.com/samsoftwaredev/luisa-garden",
  },
  {
    image: game,
    imageAlt: "Game Website",
    title: "The Wild Warriors",
    description:
      'The Wild Warriors is a comic book. I decided to make a game with it characters similar to "Rock paper scissors."',
    websiteURL: "https://super-cute-wars.herokuapp.com/",
    repositoryURL: "https://github.com/samsoftwaredev/super-cute-wars",
  },
  {
    image: giphy,
    imageAlt: "Website",
    title: "Giphy Clone",
    description:
      "GIPHY is a search engine that allows users to search for and share animated GIF files.",
    websiteURL: "https://rocky-sierra-20177.herokuapp.com/",
    repositoryURL: "https://github.com/samsoftwaredev/giphy-clone",
  },
];
