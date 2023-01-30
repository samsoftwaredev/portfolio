import Image from "next/image";
import { Element } from "react-scroll";
import { Typography, colors, Box, Button } from "@mui/material";
import { Section } from "@/components";
import { css } from "@/utils";
import styles from "./awards.module.scss";

const Awards = () => {
  return (
    <Section
      isTopShadowEnabled
      isBottomShadowEnabled
      centered
      bgColor={colors.grey[900]}
    >
      <Typography
        color="white"
        variant="h3"
        gutterBottom
        className={css("primaryText", styles.title)}
      >
        <small className={css(styles.subTitle, "subPrimaryText")}>
          Things I have achieved
        </small>
        Awards/News
      </Typography>
      <Element name="awards" className={css(styles.subTitle, "subPrimaryText")}>
        <Box className={styles.container}>
          <Typography className={css(styles.subTitle, "primaryText")}>
            FITHER - Video Game (2019)
          </Typography>
          <Typography className={styles.content}>
            An Obesity Prevention Game. First-place winner in “Shape of Health-
            An Obesity Prevention Game” by OWH Shape of Health competition, U.S.
            Department of Health and Human Services.
            <Button href="https://www.challenge.gov/challenge/shape-of-health-an-obesity-prevention-game/?utm_medium=email&utm_source=govdelivery">
              Read more...
            </Button>
          </Typography>
          <Box className={styles.imageContainer}>
            <Image
              className={styles.image}
              layout="fill"
              alt="FITHER Game. Girl eating healthy"
              src="https://ogeronimo.github.io/portfolio/images/pic13-1.PNG"
              quality={100}
            />
          </Box>
        </Box>
        <Box className={styles.container}>
          <Typography className={css(styles.subTitle, "primaryText")}>
            THE PIONEER NEWSPAPER (2019)
          </Typography>
          <Typography className={styles.content}>
            East Bay University newsaper coverage. Omar Ruiz Geronimo recognized
            that there was a problem when he failed to collect payment a few
            times as an architectural designer. “I feel like it’s something
            freelancers don&amps;t like to talk about because it is kind of
            embarrassing,” said Omar. Samuel...
            <Button href="https://thepioneeronline.com/38597/campus/csueb-student-develops-gig-finder/">
              Read more...
            </Button>
          </Typography>
          <Box className={styles.imageContainer}>
            <Image
              className={styles.image}
              layout="fill"
              alt="News Paper from CSUEB student develops gig finder"
              src="https://ogeronimo.github.io/portfolio/images/pic13-2.jpg"
              quality={100}
            />
          </Box>
        </Box>
      </Element>
    </Section>
  );
};

export default Awards;
