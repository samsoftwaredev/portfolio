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
          <Typography
            variant="h1"
            component="h3"
            gutterBottom
            className={css(styles.title, "primaryText")}
          >
            <small className="subPrimaryText">Hello there! I&apos;m</small>
            {OWNER.firstName} {OWNER.lastName}
          </Typography>
          <Box px={5} className={styles.imageContainer}>
            <Image
              className={css(styles.profileImage, "circle")}
              alt={`${OWNER.firstName} ${OWNER.lastName}`}
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
            <SocialMedia />
          </Typography>
        </Box>
      </Element>
    </Section>
  );
};

export default About;
