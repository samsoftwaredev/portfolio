import { Element } from "react-scroll";
import { Section, OwnerProjects } from "../../components";
import { Typography, colors } from "@mui/material";
import { PROJECTS } from "../../constants/variables/owner";

const Projects = () => {
  return (
    <Section isBottomShadowEnabled bgColor={colors.pink[900]}>
      <Typography
        color="white"
        variant="h3"
        gutterBottom
        className="primaryText"
        px={20}
      >
        My Projects
        <small className="subPrimaryText">
          I&apos;m constantly working and improving these projects
        </small>
      </Typography>
      <Element name="projects">
        <OwnerProjects projects={PROJECTS} />
      </Element>
    </Section>
  );
};

export default Projects;
