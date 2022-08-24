import { Element } from "react-scroll";
import { Section, ContactForm } from "@/components";
import { Typography, Box, colors } from "@mui/material";
import { attack } from "@/public/backgrounds";
import { useState } from "react";
import styles from "./contact.module.scss";
import { css } from "@/utils";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmitted = () => {
    setSubmitted(true);
    // TODO: send email
  };

  return (
    <Section
      isTopShadowEnabled
      bgImage={attack}
      imageAlt="Prepare for judgment day"
      isOverlay
      bgColor={colors.grey[900]}
    >
      <Element name="contact">
        <Typography
          color="white"
          variant="h1"
          gutterBottom
          className={css(styles.title, "primaryText")}
        >
          <small className="subPrimaryText">Before you go...</small>
          Let&apos;s Connect
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Box p={2} minWidth={500}>
            {submitted ? (
              <>
                <Typography variant="h3" className="secondaryText">
                  <small className="subPrimaryText">May God Bless You</small>
                  Thank you! We will be in contact soon.
                </Typography>
              </>
            ) : (
              <ContactForm onSubmitted={onSubmitted} />
            )}
          </Box>
        </Box>
      </Element>
    </Section>
  );
};

export default Contact;
