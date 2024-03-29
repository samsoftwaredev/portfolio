import { Element } from "react-scroll";
import { Typography, colors } from "@mui/material";
import { Section, OwnerProjects } from "@/components";
import { PROJECTS } from "@/constants/variables/owner";
import { css } from "@/utils";
import styles from "./projects.module.scss";

const Projects = () => {
  return (
    <Section
      centered
      isTopShadowEnabled
      isBottomShadowEnabled
      bgColor={colors.pink[900]}
    >
      <Typography
        color="white"
        variant="h3"
        gutterBottom
        className={css("primaryText", styles.title)}
      >
        My Projects
      </Typography>
      <Element name="projects">
        <OwnerProjects projects={PROJECTS} />
      </Element>
    </Section>
  );
};

export default Projects;
