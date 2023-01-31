import { Element } from "react-scroll";
import { Box, colors } from "@mui/material";
import { Section } from "@/components";
import { css } from "@/utils";
import styles from "./contact.module.scss";

const Contact = () => {
  const googleFormURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfh2cH27ONfjGIoPsmiqrg5c3p-GqyE8NycH2EHcDtQvol1kA/viewform?embedded=true";

  return (
    <Section
      centered
      isTopShadowEnabled
      imageAlt="Prepare for judgment day"
      isOverlay
      bgColor={colors.grey[900]}
    >
      <Element name="contact">
        <h2 className={css(styles.title, "primaryText")}>Let&apos;s Connect</h2>
        <Box className={styles.formContainer}>
          <iframe className={styles.googleForm} src={googleFormURL}>
            Loading…
          </iframe>
        </Box>
      </Element>
    </Section>
  );
};

export default Contact;
