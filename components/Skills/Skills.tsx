import { Element } from "react-scroll";
import { Section, OwnerSkills } from "@/components";
import { Typography, Box, colors } from "@mui/material";
import { SKILL1, SKILL2, SKILL3 } from "@/constants/variables/owner";

const Skills = () => {
  return (
    <Section bgColor={colors.pink[900]}>
      <Typography
        color="white"
        variant="h3"
        gutterBottom
        className="primaryText"
        px={20}
      >
        My Skills
        <small className="subPrimaryText">
          This is just an overview, I know a lot more!
        </small>
      </Typography>
      <Element name="skills">
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
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
