import { Element } from "react-scroll";
import { Typography, Box } from "@mui/material";
import { OwnerSkills } from "@/components";
import { SKILL1, SKILL2, SKILL3 } from "@/constants/variables/owner";
import styles from "./skills.module.scss";

const Skills = () => {
  return (
    <Element name="skills">
      <Box className={styles.skillsList}>
        <Box p={2} minWidth={300}>
          <Typography variant="h5" gutterBottom className="secondaryText">
            {SKILL2.title}
          </Typography>
          <OwnerSkills skills={SKILL2.list} />
        </Box>
        <Box p={2} minWidth={300}>
          <Typography variant="h5" gutterBottom className="secondaryText">
            {SKILL3.title}
          </Typography>
          <OwnerSkills skills={SKILL3.list} />
        </Box>
        <Box p={2} minWidth={300}>
          <Typography variant="h5" gutterBottom className="secondaryText">
            {SKILL1.title}
          </Typography>
          <OwnerSkills skills={SKILL1.list} />
        </Box>
      </Box>
    </Element>
  );
};

export default Skills;
