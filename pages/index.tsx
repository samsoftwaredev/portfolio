import type { NextPage } from "next";
import { scroller, Element } from "react-scroll";
import Image from "next/image";
import {
  MainLayout,
  SocialMedia,
  Section,
  OwnerProjects,
  OwnerSkills,
} from "../components";
import { Button, Typography, Box, colors } from "@mui/material";
import { attack, heaven, maria, mary } from "../public/backgrounds";
import {
  OWNER,
  SKILL1,
  SKILL2,
  SKILL3,
  PROJECTS,
} from "../constants/variables/owner";

const Home: NextPage = () => {
  const getRandomImage = () => {
    const bgs = [mary, heaven, maria];
    const count = 1;
    return bgs[count];
  };

  const yearsOfExp = () => new Date().getFullYear() - 2019;

  const scrollToElm = (element: string) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: "easeInOutQuint",
    });
  };

  return (
    <MainLayout>
      <Section
        bgImage={getRandomImage()}
        imageAlt="A Programmer from heaven"
        isBottomShadowEnabled
        isOverlay
      >
        <Box
          sx={{
            paddingTop: "4em",
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "flex-end",
            justifyContent: "space-around",
          }}
        >
          <Typography
            maxWidth={700}
            variant="h1"
            gutterBottom
            className="primaryText"
          >
            <small className="subPrimaryText">A Very Skilled</small>
            {OWNER.job}
            <small className="subPrimaryText">
              + {yearsOfExp()} years experience
            </small>
          </Typography>
          <Box maxWidth={300}>
            <Typography variant="h5" gutterBottom className="secondaryText">
              I&apos;m a Web Developer. I have worked in multiple startups and I
              have had the opportunity to build my own startup. I have worked as
              a front-end developer for a couple of years now and I have seen it
              all.
            </Typography>
            <Button
              onClick={() => scrollToElm("contact")}
              color="secondary"
              variant="contained"
            >
              Contact Me
            </Button>
          </Box>
        </Box>
      </Section>

      <Section topNav isTopShadowEnabled bgColor={colors.pink[900]}>
        <Element name="about">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h1" gutterBottom className="primaryText">
              <small className="subPrimaryText">Hello there! I&apos;m</small>
              {OWNER.firstName} {OWNER.lastName}
            </Typography>
            <Box px={5}>
              <Image
                className="circle"
                alt={`${OWNER.firstName} ${OWNER.lastName}`}
                src={OWNER.picture}
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
        </Element>
      </Section>

      <Section bgColor={colors.pink[900]}>
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
        <Element name="skills">
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
              <OwnerSkills skills={SKILL1} />
            </Box>
            <Box p={2} minWidth={300}>
              <Typography variant="h5" gutterBottom className="secondaryText">
                Front-End Languages
              </Typography>
              <OwnerSkills skills={SKILL2} />
            </Box>
            <Box p={2} minWidth={300}>
              <Typography variant="h5" gutterBottom className="secondaryText">
                Back-End Languages
              </Typography>
              <OwnerSkills skills={SKILL3} />
            </Box>
          </Box>
        </Element>
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
            I&apos;m constantly working and improving these projects
          </small>
        </Typography>
        <Element name="projects">
          <OwnerProjects projects={PROJECTS} />
        </Element>
      </Section>

      <Section
        isTopShadowEnabled
        bgImage={attack}
        isOverlay
        bgColor={colors.grey[900]}
      >
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
        <Element name="contact">
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Box p={2} minWidth={300}>
              {/* Contact me */}
            </Box>
          </Box>
        </Element>
      </Section>
    </MainLayout>
  );
};

export default Home;
