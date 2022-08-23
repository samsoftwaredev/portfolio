import { Element } from "react-scroll";
import Image from "next/image";
import { SocialMedia, Section } from "@/components";
import { Typography, Box, colors } from "@mui/material";
import { OWNER } from "@/constants/variables/owner";

const About = () => {
  return (
    <Section topNav isTopShadowEnabled bgColor={colors.pink[900]}>
      <Element name="about">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h1" gutterBottom className="primaryText">
            <small className="subPrimaryText">Hello there! I&apos;m</small>
            {OWNER.firstName} {OWNER.lastName}
          </Typography>
          <Box px={5}>
            <Image
              className="circle"
              alt={`${OWNER.firstName} ${OWNER.lastName}`}
              src={OWNER.picture}
              quality={100}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            maxWidth={800}
            variant="h5"
            gutterBottom
            className="secondaryText"
          >
            With years of strong academic performance and hands-on programming
            experience, my purpose is to make an impact by improving
            people&apos;s lives through the use of tech.
            <SocialMedia />
          </Typography>
        </Box>
      </Element>
    </Section>
  );
};

export default About;
