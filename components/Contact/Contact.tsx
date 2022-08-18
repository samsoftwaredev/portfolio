import { Element } from "react-scroll";
import { Section } from "../../components";
import { Typography, Box, colors } from "@mui/material";
import { attack } from "../../public/backgrounds";

const Contact = () => {
  return (
    <Section
      isTopShadowEnabled
      bgImage={attack}
      imageAlt="Prepare for judgment day"
      isOverlay
      bgColor={colors.grey[900]}
    >
      <Typography
        color="white"
        variant="h1"
        gutterBottom
        className="primaryText"
        maxWidth={600}
        px={20}
      >
        <small className="subPrimaryText">Before you go...</small>
        Let&apos;s Connect
      </Typography>
      <Element name="contact">
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Box p={2} minWidth={300}>
            {/* Contact me */}
          </Box>
        </Box>
      </Element>
    </Section>
  );
};

export default Contact;
