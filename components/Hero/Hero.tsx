import { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import { Section } from "@/components";
import { Button, Typography, Box, colors } from "@mui/material";
import { heaven, maria, mary } from "@/public/backgrounds";
import { OWNER } from "@/constants/variables/owner";
import styles from "./hero.module.scss";
import { StaticImageData } from "next/image";
import { Email } from "@mui/icons-material";
import { css } from "@/utils";

const Hero = () => {
  const currentYear = new Date().getFullYear();
  const bgs = [heaven, mary, maria];
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
  }, [bgs]);

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
          <small className="subPrimaryText">A Very Skilled</small>
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
            I&apos;m a Web Developer. I have worked in multiple startups and I
            have had the opportunity to build my own startup. I have worked as a
            front-end developer for a couple of years now and I have seen it
            all.
          </Typography>
          <Box className={styles.cta}>
            <Button
              onClick={() => scrollToElm("contact")}
              color="secondary"
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
