import { StaticImageData } from "next/image";
import { scroller } from "react-scroll";
import { useEffect, useState } from "react";
import { Email } from "@mui/icons-material";
import { Button, Typography, Box, colors } from "@mui/material";
import { Section } from "@/components";
import { programming, matrix } from "@/public/backgrounds";
import { OWNER } from "@/constants/variables/owner";
import { css } from "@/utils";
import styles from "./hero.module.scss";

const bgs = [programming, matrix];

const Hero = () => {
  const currentYear = new Date().getFullYear();
  const startIndex = 0;
  const [bgImage, setBgImage]: [StaticImageData, Function] = useState(
    bgs[startIndex]
  );

  const yearsOfExp = () => currentYear - OWNER.careerStartedYear;

  const scrollToElm = (element: string) => {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 50,
      smooth: "easeInOutQuint",
    });
  };

  useEffect(() => {
    let count = startIndex;
    const getRandomImage = (count = 0): StaticImageData => bgs[count];
    const interval = setInterval(() => {
      setBgImage(getRandomImage(count));
      count += 1;
      count = count % bgs.length;
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section
      bgImage={bgImage}
      imageAlt="A programmer from heaven"
      isBottomShadowEnabled
      isOverlay
      bgColor={colors.grey[900]}
    >
      <Box className={styles.container}>
        <h1 className={css("primaryText", styles.title)}>
          <small className="subPrimaryText">Hi I&apos;m {OWNER.fullName}</small>
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
            >
              Contact Me
            </Button>
          </Box>
        </Box>
      </Box>
      <div onClick={() => scrollToElm("about")} className={styles.scrollDown} />
    </Section>
  );
};

export default Hero;
