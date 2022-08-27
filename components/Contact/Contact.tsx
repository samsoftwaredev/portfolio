import { Element } from "react-scroll";
import { Section, ContactForm } from "@/components";
import { Typography, Box, colors } from "@mui/material";
import { attack } from "@/public/backgrounds";
import styles from "./contact.module.scss";
import { css } from "@/utils";

const Contact = () => {
  const googleFormURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfh2cH27ONfjGIoPsmiqrg5c3p-GqyE8NycH2EHcDtQvol1kA/viewform?embedded=true";

  return (
    <Section
      centered
      isTopShadowEnabled
      bgImage={attack}
      imageAlt="Prepare for judgment day"
      isOverlay
      bgColor={colors.grey[900]}
    >
      <Element name="contact">
        <h2 className={css(styles.title, "primaryText")}>
          <small className="subPrimaryText">Before you go...</small>
          Let&apos;s Connect
        </h2>

        <Box className={styles.formContainer}>
          <iframe
            className={styles.googleForm}
            src={googleFormURL}
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
          >
            Loading…
          </iframe>
        </Box>
      </Element>
    </Section>
  );
};

export default Contact;
