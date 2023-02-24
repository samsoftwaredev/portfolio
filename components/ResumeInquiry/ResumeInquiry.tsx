import { scroller } from "react-scroll";
import { colors, Typography } from "@mui/material";
import { css } from "@/utils";
import styles from "./resumeInquiry.module.scss";
import { linkedInProfile } from "@/constants/variables/owner";
import Section from "../Section";

const ResumeInquiry = () => {
  const scrollToElm = (element: string) => {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 50,
      smooth: "easeInOutQuint",
    });
  };
  return (
    <Section bgColor={colors.grey[900]}>
      <Typography
        my={15}
        variant="h3"
        className={css("subPrimaryText", styles.title)}
      >
        For Resume Inquiry&nbsp;
        <a href="#contact-me" onClick={() => scrollToElm("contact")}>
          Contact me
        </a>
        &nbsp;or&nbsp;
        <a
          rel="noreferrer"
          href={linkedInProfile.url}
          target={`_${linkedInProfile.name}`}
        >
          Follow me
        </a>
      </Typography>
    </Section>
  );
};

export default ResumeInquiry;
