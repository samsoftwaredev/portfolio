import { Element } from "react-scroll";
import { Section, OwnerSkills } from "@/components";
import { Typography, Box, colors } from "@mui/material";
import { SKILL1, SKILL2, SKILL3 } from "@/constants/variables/owner";
import { css } from "@/utils";
import styles from "./skills.module.scss";

const Skills = () => {
  return (
    <Section bgColor={colors.pink[900]}>
      <Typography
        color="white"
        variant="h3"
        gutterBottom
        className={css("primaryText", styles.title)}
      >
        <small className="subPrimaryText">
          This is just an overview of my...
        </small>
        My Skills
        <small className="subPrimaryText">I know a lot more!</small>
      </Typography>
      <Element name="skills">
        <Box className={styles.skillsList}>
          <Box p={2} minWidth={300}>
            <Typography variant="h5" gutterBottom className="secondaryText">
              Overall
            </Typography>
            <OwnerSkills skills={SKILL1} />
          </Box>
          <Box p={2} minWidth={300}>
            <Typography variant="h5" gutterBottom className="secondaryText">
              Front-End Languages
            </Typography>
            <OwnerSkills skills={SKILL2} />
          </Box>
          <Box p={2} minWidth={300}>
            <Typography variant="h5" gutterBottom className="secondaryText">
              Back-End Languages
            </Typography>
            <OwnerSkills skills={SKILL3} />
          </Box>
        </Box>
      </Element>
    </Section>
  );
};

export default Skills;
