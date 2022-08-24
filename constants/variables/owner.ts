import { ownerPicture } from "../../public/owner";
import { garden, giphy, portfolio, game, finmily } from "../../public/projects";

export const OWNER = {
  firstName: "Samuel",
  lastName: "Ruiz",
  job: "Front-End Developer",
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
  //   imageAlt: "Website",
  //   title: "AlliesPro",
  //   description: "Helping Freelancers get paid on time",
  //   repositoryURL: "",
  // },
  {
    image: giphy,
    imageAlt: "Website",
    title: "Giphy Clone",
    description:
      "GIPHY, is a search engine that allows users to search for and share animated GIF files.",
    websiteURL: "https://rocky-sierra-20177.herokuapp.com/",
    repositoryURL: "https://github.com/samsoftwaredev/giphy-clone",
  },
  {
    image: garden,
    imageAlt: "Website",
    title: "Luisa's Garden",
    description:
      "This website will tell you all you need to know about orchids.",
    websiteURL: "",
    repositoryURL: "https://github.com/samsoftwaredev/luisa-garden",
  },
  {
    image: finmily,
    imageAlt: "Website",
    title: "Finmily",
    description:
      "Webapp to help track expenses. Users are able to share their financial information with their family members as well as send money.",
    websiteURL: "https://finmily.herokuapp.com/",
    repositoryURL: "https://github.com/samsoftwaredev/finmily",
  },
  {
    image: portfolio,
    imageAlt: "Website",
    title: "Samuel's Portfolio",
    description:
      "Website to showcase my work. You can clone the repo and built your own website portfolio.",
    websiteURL: "https://samuelruizportfolio.herokuapp.com/",
    repositoryURL: "https://github.com/samsoftwaredev/portfolio",
  },
  {
    image: game,
    imageAlt: "Game Website",
    title: "Super Cute Wars",
    description: "Game similar to rock, paper and scissors",
    websiteURL: "https://super-cute-wars.herokuapp.com/",
    repositoryURL: "https://github.com/samsoftwaredev/super-cute-wars",
  },
];
