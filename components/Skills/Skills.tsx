import { Element } from "react-scroll";
import { Typography, Box } from "@mui/material";
import { OwnerSkills } from "@/components";
import { SKILL1, SKILL2, SKILL3 } from "@/constants/variables/owner";
import styles from "./skills.module.scss";

const allSkills = {
  SKILL2,
  SKILL3,
  SKILL1,
};

const Skills = () => {
  return (
    <Element name="skills">
      <Box className={styles.skillsList}>
        {Object.keys(allSkills).map((key) => {
          const skill = allSkills[key as keyof typeof allSkills];
          return (
            <Box key={key} p={2} minWidth={300}>
              <Typography variant="h5" gutterBottom className="secondaryText">
                {skill.title}
              </Typography>
              <OwnerSkills skills={skill.list} />
            </Box>
          );
        })}
      </Box>
    </Element>
  );
};

export default Skills;
