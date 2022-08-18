import { ownerPicture } from "../../public/owner";
import { garden, giphy, portfolio, game, finmily } from "../../public/projects";

export const OWNER = {
  firstName: "Samuel",
  lastName: "Ruiz",
  job: "Front-End Developer",
  nickname: "sam",
  picture: ownerPicture,
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
    name: "Learning Speed",
    knowledgeAmount: 85,
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
    description: "Giphy Clone that displays gifs",
    websiteURL: "https://rocky-sierra-20177.herokuapp.com/",
    repositoryURL: "https://github.com/samsoftwaredev/giphy-clone",
  },
  {
    image: garden,
    imageAlt: "Website",
    title: "Luisa's Garden",
    description: "One of my hobbies is gardening and I love planting orchids",
    websiteURL: "",
    repositoryURL: "https://github.com/samsoftwaredev/luisa-garden",
  },
  {
    image: finmily,
    imageAlt: "Website",
    title: "Finmily",
    description: "Helping Freelancers get paid on time",
    websiteURL: "https://finmily.herokuapp.com/",
    repositoryURL: "https://github.com/samsoftwaredev/finmily",
  },
  {
    image: portfolio,
    imageAlt: "Website",
    title: "Portfolio",
    description: "Showcase my work",
    websiteURL: "",
    repositoryURL: "https://github.com/samsoftwaredev/portfolio",
  },
  {
    image: game,
    imageAlt: "Game Website",
    title: "Super Cute Wars",
    description: "Game similar like rock, paper and scissor",
    websiteURL: "https://super-cute-wars.herokuapp.com/",
    repositoryURL: "https://github.com/samsoftwaredev/super-cute-wars",
  },
];
