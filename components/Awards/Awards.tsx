import Image from "next/image";
import { Element } from "react-scroll";
import { Typography, colors, Box, Button } from "@mui/material";
import { Section } from "@/components";
import { css } from "@/utils";
import styles from "./awards.module.scss";
import { mediumPost } from "../../public/projects";

const Awards = () => {
  return (
    <Section centered bgColor={colors.grey[900]}>
      <Typography
        color="white"
        variant="h3"
        gutterBottom
        className={css("primaryText", styles.title)}
      >
        Awards & Blogs
      </Typography>
      <Element name="awards">
        <Box className={styles.container}>
          <Typography className={css(styles.subTitle, "subPrimaryText")}>
            Medium Post - Using Micro Front-Ends (MFEs)
          </Typography>
          <Typography className={styles.content}>
            Migrating a monolithic, tangled codebase is never easy, but with
            Micro Frontends and a modular approach, we turned an unmaintainable
            mess into a scalable, developer-friendly system. And the best part?
            No more merge conflict nightmares.
            <Button href="https://medium.com/@samueldeveloper/modernizing-a-mess-how-i-tamed-a-chaotic-codebase-with-micro-frontends-e823276251d2">
              Read more...
            </Button>
          </Typography>
          <Box className={styles.imageContainer}>
            <Image
              className={styles.image}
              layout="fill"
              alt="Spagetti Code Architecture"
              src={mediumPost}
              quality={100}
            />
          </Box>
        </Box>
        <Box className={styles.container}>
          <Typography className={css(styles.subTitle, "subPrimaryText")}>
            FITHER - Video Game
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
        <Box pt={2} className={styles.container}>
          <Typography className={css(styles.subTitle, "subPrimaryText")}>
            THE PIONEER NEWSPAPER
          </Typography>
          <Typography className={styles.content}>
            East Bay University newsaper coverage. Samuel Ruiz Geronimo, an
            undergraduate senior majoring in Computer Science at California
            State University, East Bay launched AlliesPro on April 15.
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
