import { scroller } from "react-scroll";
import { Section } from "../../components";
import { Button, Typography, Box, colors } from "@mui/material";
import { heaven, maria, mary } from "../../public/backgrounds";
import { OWNER } from "../../constants/variables/owner";

const Hero = () => {
  const getRandomImage = () => {
    const bgs = [mary, heaven, maria];
    const count = 1;
    return bgs[count];
  };

  const yearsOfExp = () => new Date().getFullYear() - 2019;

  const scrollToElm = (element: string) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: "easeInOutQuint",
    });
  };

  return (
    <Section
      bgImage={getRandomImage()}
      imageAlt="A programmer from heaven"
      isBottomShadowEnabled
      isOverlay
    >
      <Box
        sx={{
          paddingTop: "10em",
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "flex-end",
          justifyContent: "space-around",
        }}
      >
        <Typography
          maxWidth={700}
          variant="h1"
          gutterBottom
          className="primaryText"
        >
          <small className="subPrimaryText">A Very Skilled</small>
          {OWNER.job}
          <small className="subPrimaryText">
            + {yearsOfExp()} years experience
          </small>
        </Typography>
        <Box maxWidth={300}>
          <Typography variant="h5" gutterBottom className="secondaryText">
            I&apos;m a Web Developer. I have worked in multiple startups and I
            have had the opportunity to build my own startup. I have worked as a
            front-end developer for a couple of years now and I have seen it
            all.
          </Typography>
          <Button
            onClick={() => scrollToElm("contact")}
            color="secondary"
            variant="contained"
          >
            Contact Me
          </Button>
        </Box>
      </Box>
    </Section>
  );
};

export default Hero;
