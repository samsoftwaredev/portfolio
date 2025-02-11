import { scroller } from "react-scroll";
import { Email } from "@mui/icons-material";
import { Button, Typography, Box, colors } from "@mui/material";
import { Section, SocialMedia } from "@/components";
import { programming } from "@/public/backgrounds";
import { OWNER } from "@/constants/variables/owner";
import { css } from "@/utils";
import styles from "./hero.module.scss";

const Hero = () => {
  const currentYear = new Date().getFullYear();

  const yearsOfExp = () => currentYear - OWNER.careerStartedYear;

  const scrollToElm = (element: string) => {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 50,
      smooth: "easeInOutQuint",
    });
  };

  return (
    <Section
      bgImage={programming}
      imageAlt="A programmer from heaven"
      isBottomShadowEnabled
      isOverlay
      bgColor={colors.grey[900]}
      addAnimation={false}
    >
      <Box className={styles.container}>
        <h1 className={css("primaryText", styles.title)}>
          <small className="subPrimaryText">
            {OWNER.firstName}&apos;s Portfolio
          </small>
          {OWNER.job}
          <small className="subPrimaryText">
            + {yearsOfExp()} years experience
          </small>
        </h1>
        <Box className={styles.biographyContainer}>
          <Typography
            variant="h5"
            gutterBottom
            className={css("secondaryText", styles.biography)}
          >
            {OWNER.description}
          </Typography>
          <Box className={styles.cta}>
            <Button
              onClick={() => scrollToElm("contact")}
              variant="contained"
              startIcon={<Email />}
              color="error"
            >
              Contact Me
            </Button>
            {/* <Button
              onClick={() => scrollToElm("contact")}
              variant="outlined"
              startIcon={<Email />}
              color="error"
            >
              Services
            </Button> */}
          </Box>
        </Box>
      </Box>
      <div
        onClick={() => scrollToElm("projects")}
        className={styles.scrollDown}
      />
    </Section>
  );
};

export default Hero;
