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
import { Button, Typography, Box, colors } from "@mui/material";
import {
  garden,
  giphy,
  portfolio,
  game,
  alliespro,
  finmily,
} from "../public/projects";
import { attack, heaven, maria, mary } from "../public/backgrounds";
import { ownerPicture } from "../public/owner";
import Image, { StaticImageData } from "next/image";

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
      image: alliespro,
      imageAlt: "Website",
      title: "AlliesPro",
      description: "Helping Freelancers get paid on time",
      repositoryURL: "",
    },
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

  const getRandomImage = () => {
    const bgs = [mary, heaven, maria];
    const count = 1;
    return bgs[count];
  };

  const yearsOfExp = () => new Date().getFullYear() - 2019;

  return (
    <MainLayout>
      <Section
        bgImage={getRandomImage()}
        imageAlt="A Programmer from heaven"
        topNav
        isBottomShadowEnabled
        isOverlay
      >
        <Hero>
          <Box
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            {/* <OwnerName firstName={owner.firstName} lastName={owner.lastName} /> */}
            <Typography
              maxWidth={700}
              variant="h1"
              gutterBottom
              className="primaryText"
            >
              <small className="subPrimaryText">A Very Creative</small>
              Front-End Developer
              <small className="subPrimaryText">
                + {yearsOfExp()} years experience
              </small>
            </Typography>
            <Box maxWidth={300}>
              <Typography variant="h5" gutterBottom className="secondaryText">
                I&apos;m a Web Developer. I have worked in multiple startups and
                I have had the opportunity to build my own startup. I have
                worked as a front-end developer for a couple of years now and I
                have seen it all.
              </Typography>
              <Button color="secondary" variant="contained">
                Contact Me
              </Button>
            </Box>
          </Box>
        </Hero>
      </Section>

      <Section topNav isTopShadowEnabled bgColor={colors.pink[900]}>
        <Hero>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h1" gutterBottom className="primaryText">
              <small className="subPrimaryText">Hello there! I&apos;m</small>
              Samuel Ruiz
            </Typography>
            <Box px={5}>
              <Image
                className="circle"
                alt={`${owner.firstName} ${owner.lastName}`}
                src={ownerPicture}
                quality={100}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              maxWidth={800}
              variant="h5"
              gutterBottom
              className="secondaryText"
            >
              With years of strong academic performance and hands-on programming
              experience, my purpose is to make an impact by improving
              people&apos;s lives through the use of tech.
              <SocialMedia />
            </Typography>
          </Box>
        </Hero>
      </Section>

      <Section bgColor={colors.pink[900]}>
        <Hero>
          <Typography
            color="white"
            variant="h3"
            gutterBottom
            className="primaryText"
            px={20}
          >
            My Skills
            <small className="subPrimaryText">
              This is just an overview, I know a lot more!
            </small>
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Box p={2} minWidth={300}>
              <Typography variant="h5" gutterBottom className="secondaryText">
                Overall
              </Typography>
              <OwnerSkills skills={skills} />
            </Box>
            <Box p={2} minWidth={300}>
              <Typography variant="h5" gutterBottom className="secondaryText">
                Front-End Languages
              </Typography>
              <OwnerSkills skills={feLanguages} />
            </Box>
            <Box p={2} minWidth={300}>
              <Typography variant="h5" gutterBottom className="secondaryText">
                Back-End Languages
              </Typography>
              <OwnerSkills skills={beLanguages} />
            </Box>
          </Box>
        </Hero>
      </Section>

      <Section isBottomShadowEnabled bgColor={colors.pink[900]}>
        <Typography
          color="white"
          variant="h3"
          gutterBottom
          className="primaryText"
          px={20}
        >
          My Projects
          <small className="subPrimaryText">
            I&apos;m constantly working on these projects
          </small>
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <OwnerProjects projects={projects} />
        </Box>
      </Section>

      <Section
        isTopShadowEnabled
        bgImage={attack}
        isOverlay
        bgColor={colors.grey[900]}
      >
        <Hero>
          <Typography
            color="white"
            variant="h1"
            gutterBottom
            className="primaryText"
            maxWidth={600}
            px={20}
          >
            <small className="subPrimaryText">Before you go...</small>
            Let&apos;s Connect
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Box p={2} minWidth={300}>
              <Typography variant="h5" className="secondaryText" gutterBottom>
                Front-End Languages
              </Typography>
              {/* Contact me */}
            </Box>
          </Box>
        </Hero>
      </Section>
    </MainLayout>
  );
};

export default Home;
