import { GitHub, LinkedIn } from "@mui/icons-material";
import { ownerPicture } from "../../public/owner";
import {
  giphy,
  portfolio,
  finmily,
  alliespro,
  cloudkitties,
  doit4jesus,
} from "../../public/projects";

export const OWNER = {
  firstName: "Samuel",
  lastName: "Ruiz",
  fullName: "Samuel Ruiz",
  job: "Front-End Developer",
  picture: ownerPicture,
  careerStartedYear: 2016,
  description:
    "Front-End Developer with proven experience at multiple startups. Passionate about coding, learning, and development with a desire to apply skills to larger and complex problems. Eager to improve users' experiences through the use of enhanced UI and UX design.",
  bio: `Front-End Developer with years of proven work, and meaningful contributions.
  With my results-driven mentality, I transformed my team at Bond.tech by seeking, learning, and teaching new, efficient technologies to make aggressive
   deadlines consistently achievable. Passionate about going the extra mile to ensure that the customer is satisfied with the project or service provided.
   With an emphasis on throughput and stability, I look forward to working collaboratively on larger projects.
   I graduated with a B.S. in Computer Science from California State University and during that time I built my own startup called AlliesPro.
   AlliesPro is the world's first Pay Per File System where savvy solo professionals and freelancers get paid on time!
   If you have any questions, feel free to contact me.
    `,
};

export const SKILL1 = {
  title: "Overall",
  list: [
    {
      name: "Problem Solver",
    },
    {
      name: "Creative",
    },
    {
      name: "UI & UX Designer",
    },
    {
      name: "System Architecture Designer",
    },
  ],
};

export const SKILL2 = {
  title: "Front-End Languages",
  list: [
    {
      name: "React",
    },
    {
      name: "JavaScript & TypeScript",
    },
    {
      name: "CSS & HTML",
    },
    {
      name: "GraphQL",
    },
  ],
};

export const SKILL3 = {
  title: "Back-End Languages",
  list: [
    {
      name: "Node.js & Express",
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
  ],
};

export const linkedInProfile = {
  name: "LinkedIn",
  icon: LinkedIn,
  url: "https://www.linkedin.com/in/samuel-ruiz-839895142/",
};

export const SOCIAL_MEDIA = [
  linkedInProfile,
  {
    name: "GitHub",
    icon: GitHub,
    url: "https://github.com/samsoftwaredev/",
  },
];

export const PROJECTS = [
  {
    image: alliespro,
    imageAlt: "Website Home Page",
    title: "AlliesPro",
    description:
      "AlliesPro is a gig search and payment web-app that started off as a simple chat to send and receive money. However, has evolved into a payment system that allows freelancers and clients to match, collaborate, and securely make money transactions. Freelancers can apply to gigs around their area and get paid on-time.",
    objective:
      "Send invoices that hold the client's money for a period of time. After any given date or goal has been reached the money will be deposited into the user's bank account.",
    languages:
      "HTML, CSS, JavaScript, Vue, Nuxt.js, Node.js, Firebase and other third-party APIs.",
    repositoryURL: "",
  },
  {
    image: doit4jesus,
    imageAlt: "Rosary App Main Page",
    title: "DoIt4Jesus",
    description:
      "DoIt4Jesus app helps Catholics pray the rosary together. This is a social app that shows every user that is currently logged in. Users can listen to the rosary, change settings and submit their prayers.",
    websiteURL: "https://doit4jesus.com",
    repositoryURL: "https://github.com/samsoftwaredev/doit4jesus-app",
    objective:
      "Allow users to stay online and send messages while listening to audio at the same time.",
    languages:
      "Next.js, JavaScript, TypeScript, React, CSS, Styled-Components, HTML, Git, Github  and other third-party APIs.",
  },
  {
    image: cloudkitties,
    imageAlt: "Cloud Kitchen Clone App Main Page",
    title: "Cloud Kitties",
    description:
      "Cloud Kitties is a clone of DoorDash's admin panel, a food-sharing service. It handles huge amounts of data in an ever-growing table without diminishing the UX. The table component uses React Hooks to simplify the component's interface. The algorithm used in this app was influenced by an article published by Ying Jiang.",
    websiteURL: "https://cloudkitchen.vercel.app/",
    repositoryURL: "https://github.com/samsoftwaredev/cloudkitchen",
    objective:
      "To have the web application run smoothly while receiving 10k orders of food and display it on a table.",
    languages:
      "Next.js, JavaScript, TypeScript, React, CSS, SASS, HTML, Git, Github, socket.io",
  },
  {
    image: portfolio,
    imageAlt: "Website",
    title: "Samuel's Portfolio",
    description:
      "Samuel's Portfolio is a website to showcase my work, projects and skills. You can clone this repo and build your own portfolio. The code is easy to read and update.",
    websiteURL: "https://samueldeveloper.com/",
    repositoryURL: "https://github.com/samsoftwaredev/portfolio",
    objective: "To show case my work, awards and skills.",
    languages:
      "Next.js, React, TypeScript, JavaScript, Material UI, TypeScript, CSS, HTML, Git, GitHub, Google Forms.",
  },
  // {
  //   image: finmily,
  //   imageAlt: "Website",
  //   title: "Finmily",
  //   description:
  //     "Finmily is a web app that helps families track their expenses. Users are able to share their bank account information with their family members as well as send them money. Finance for the entire family.",
  //   websiteURL: "https://finmily.com/",
  //   repositoryURL: "https://github.com/samsoftwaredev/expense-tracker-frontend",
  //   objective: "To help families manage their finance in on single place.",
  //   languages:
  //     "Firebase, Next.js, React, JavaScript, TypeScript, CSS, HTML, Node.js, Express.js, Git  and other third-party APIs.",
  // },
  // {
  //   image: garden,
  //   imageAlt: "Website",
  //   title: "Luisa's Garden",
  //   description:
  //     "Luisa's Garden is a website that teaches orchid enthusiasts how to grow, reproduce and maintain orchids.",
  //   websiteURL: "",
  //   repositoryURL: "https://github.com/samsoftwaredev/luisa-garden",
  // },
  // {
  //   image: game,
  //   imageAlt: "Game Website",
  //   title: "The Wild Warriors - Game",
  //   description:
  //     'The Wild Warriors is a comic book. This app makes the comic book come to live. The game is similar to "Rock, paper, scissors."',
  //   repositoryURL: "https://github.com/samsoftwaredev/super-cute-wars",
  //   objective: "To build a game with the characters of a popular comic book.",
  //   languages: "Vanilla JavaScript, CSS, HTML",
  // },
  // {
  //   image: giphy,
  //   imageAlt: "Website",
  //   title: "Giphy Clone",
  //   description:
  //     "GIPHY is a search engine that allows users to search for and share animated GIF files. This app allows the user to search for GIFs in an infinite scroll. Although it might seem like a simple project the implementation can be complex for the average developer. ",
  //   repositoryURL: "https://github.com/samsoftwaredev/giphy-clone",
  //   objective:
  //     "To test my knowledge of react and implementation of a third-party API.",
  //   languages: "React, JavaScript, CSS, HTML, and GIPHY API.",
  // },
];
