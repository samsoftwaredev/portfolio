import { Element } from "react-scroll";
import { Section, OwnerProjects, Hero } from "@/components";
import { Typography, colors } from "@mui/material";
import { PROJECTS } from "@/constants/variables/owner";
import { css } from "@/utils";
import styles from "./projects.module.scss";

const Projects = () => {
  return (
    <Section centered isBottomShadowEnabled bgColor={colors.pink[900]}>
      <Typography
        color="white"
        variant="h3"
        gutterBottom
        className={css("primaryText", styles.title)}
      >
        <small className={css(styles.subTitle, "subPrimaryText")}>
          I&apos;m constantly improving...
        </small>
        My Projects
      </Typography>
      <Element name="projects">
        <OwnerProjects projects={PROJECTS} />
      </Element>
    </Section>
  );
};

export default Projects;
