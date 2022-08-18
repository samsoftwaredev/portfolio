import { Typography } from "@mui/material";
import Image from "next/image";
import SocialMedia from "../SocialMedia";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* TODO: Date of last update */}
      <Typography variant="h5" className="secondaryText" gutterBottom>
        Follow me:
      </Typography>
      <SocialMedia />
    </footer>
  );
};

export default Footer;
