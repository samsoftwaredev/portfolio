import type { NextPage } from "next";
import {
  Hero,
  MainLayout,
  SocialMedia,
  Section,
  OwnerName,
  OwnerProjects,
  OwnerSkills,
} from "../components";
import { Button, Typography } from "@mui/material";
import { venusFlytrap01 } from "../public/backgrounds";

const Home: NextPage = () => {
  const owner = {
    firstName: "Samuel",
    lastName: "Ruiz",
  };

  const skills = [
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

  const feLanguages = [
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

  const beLanguages = [
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

  const projects = [
    {
      image: venusFlytrap01,
      imageAlt: "Website",
      title: "AlliesPro",
      description: "Helping Freelancers get paid on time",
    },
    {
      image: venusFlytrap01,
      imageAlt: "Website",
      title: "Giphy Clone",
      description: "Helping Freelancers get paid on time",
    },
    {
      image: venusFlytrap01,
      imageAlt: "Website",
      title: "Luisa's Garden",
      description: "Helping Freelancers get paid on time",
    },
    {
      image: venusFlytrap01,
      imageAlt: "Website",
      title: "Finmily",
      description: "Helping Freelancers get paid on time",
    },
    {
      image: venusFlytrap01,
      imageAlt: "Website",
      title: "Portfolio",
      description: "Helping Freelancers get paid on time",
    },
  ];

  return (
    <MainLayout>
      <Section topNav>
        <Hero>
          <OwnerName firstName={owner.firstName} lastName={owner.lastName} />
          <Typography variant="h5" gutterBottom>
            Front-End Developer | Back-End Developer
          </Typography>
          <Button variant="contained">More About Me</Button>
          <SocialMedia />
        </Hero>
      </Section>

      <Section>
        <Hero>
          <Typography variant="h5" gutterBottom>
            About Me
          </Typography>
          picture and bio
        </Hero>
      </Section>

      <Section>
        <Hero>
          <Typography variant="h5" gutterBottom>
            My Skills
          </Typography>
          <OwnerSkills skills={skills} />
          <Typography variant="h5" gutterBottom>
            Front-End Languages
          </Typography>
          <OwnerSkills skills={feLanguages} />
          <Typography variant="h5" gutterBottom>
            Back-End Languages
          </Typography>
          <OwnerSkills skills={beLanguages} />
        </Hero>
      </Section>

      <Section>
        <Hero>
          <Typography variant="h5" gutterBottom>
            My Projects
          </Typography>
          <OwnerProjects projects={projects} />
        </Hero>
      </Section>

      <Section>
        <Hero>
          <Typography variant="h5" gutterBottom>
            Contact Me
          </Typography>
        </Hero>
      </Section>
    </MainLayout>
  );
};

export default Home;
