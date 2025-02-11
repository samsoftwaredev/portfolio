import { Element } from "react-scroll";
import { Typography, Box } from "@mui/material";
import { OwnerSkills } from "@/components";
import { SKILL1, SKILL2, SKILL3 } from "@/constants/variables/owner";
import styles from "./skills.module.scss";

const allSkills = [SKILL2, SKILL3, SKILL1];

const Skills = () => {
  return (
    <Element name="skills">
      <Box className={styles.skillsList}>
        {allSkills.map(({ title, list }) => (
          <Box key={title} p={2} minWidth={300}>
            <Typography
              fontWeight={900}
              variant="h5"
              gutterBottom
              className="secondaryText"
            >
              {title}
            </Typography>
            <OwnerSkills skills={list} />
          </Box>
        ))}
      </Box>
    </Element>
  );
};

export default Skills;
