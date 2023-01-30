import { Element } from "react-scroll";
import Image from "next/image";
import { SocialMedia, Section } from "@/components";
import { Typography, Box, colors } from "@mui/material";
import { OWNER } from "@/constants/variables/owner";
import styles from "./about.module.scss";
import { css } from "@/utils";

const About = () => {
  return (
    <Section topNav isTopShadowEnabled bgColor={colors.pink[900]}>
      <Element name="about">
        <Box className={styles.container}>
          <h3 className={css(styles.title, "primaryText")}>
            <small className="subPrimaryText">Hello there! I&apos;m</small>
            {OWNER.firstName} {OWNER.lastName}
          </h3>
          <Box px={5} className={styles.imageContainer}>
            <Image
              className={css(styles.profileImage, "circle")}
              alt={OWNER.fullName}
              src={OWNER.picture}
              quality={100}
            />
          </Box>
        </Box>
        <Box className={styles.bodyContainer}>
          <Typography
            variant="h5"
            gutterBottom
            className={css(styles.body, "secondaryText")}
          >
            With years of strong academic performance and hands-on programming
            experience, my purpose is to make an impact by improving
            people&apos;s lives through the use of tech.
            <br />
            I have worked as a front-end developer for a couple of years now. I
            have seen it all. Everything from optimization to accessibility,
            testing and writing efficient algorithms.
            <br />
            <br />
            I have worked in multiple startups and I have had the opportunity to
            build my own startup. While I was in college, studying Computer
            Science I was also developing AlliesPro, my first startup.
            <br />
            <br />
            AlliesPro is the world&apos;s first Pay Per File System where savvy
            solo professionals and freelancers get paid on time! Thanks to this
            side project, which later became a startup, I was featured in the
            CALIFORNIA (CAL) STATE UNIVERSITY EAST BAY newspaper.
            <br />
            While studying, I also worked full-time on my startup, sacrificing
            weekends and holidays for the success of the company. That&apos;s
            how passionate I&apos;m about building apps that can have a positive
            impact on society.
            <br />
            <br />
            I graduated with a B.S. in Computer Science from California State
            University East Bay in 2019.
            <SocialMedia />
          </Typography>
        </Box>
      </Element>
    </Section>
  );
};

export default About;
