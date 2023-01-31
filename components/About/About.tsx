import { Element } from "react-scroll";
import Image from "next/image";
import { Section, Skills } from "@/components";
import { Typography, Box, colors } from "@mui/material";
import { OWNER } from "@/constants/variables/owner";
import styles from "./about.module.scss";
import { css } from "@/utils";

const About = () => {
  return (
    <Section
      topNav
      isTopShadowEnabled
      isBottomShadowEnabled
      bgColor={colors.pink[900]}
    >
      <Element name="about">
        <Box className={styles.container}>
          <h3 className={css(styles.title, "primaryText")}>
            {OWNER.fullName}
            <small className="subPrimaryText">Biography</small>
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
            {OWNER.bio}
          </Typography>
        </Box>
        <Skills />
      </Element>
    </Section>
  );
};

export default About;
