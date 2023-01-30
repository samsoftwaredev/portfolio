import { Element } from "react-scroll";
import { Section, OwnerSkills } from "@/components";
import { Typography, Box, colors } from "@mui/material";
import { SKILL1, SKILL2, SKILL3 } from "@/constants/variables/owner";
import { css } from "@/utils";
import styles from "./skills.module.scss";

const Skills = () => {
  return (
    <Section isBottomShadowEnabled centered bgColor={colors.pink[900]}>
      <Typography
        color="white"
        variant="h3"
        gutterBottom
        className={css("primaryText", styles.title)}
      >
        <small className={css(styles.subTitle, "subPrimaryText")}>
          This is just an overview of my...
        </small>
        My Skills
        <small className={css(styles.subTitle, "subPrimaryText")}>
          I know a lot more!
        </small>
      </Typography>
      <Element name="skills">
        <Box className={styles.skillsList}>
          <Box p={2} minWidth={300}>
            <Typography variant="h5" gutterBottom className="secondaryText">
              {SKILL1.title}
            </Typography>
            <OwnerSkills skills={SKILL1.list} />
          </Box>
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
        </Box>
      </Element>
    </Section>
  );
};

export default Skills;
