import { Typography } from "@mui/material";
import { SocialMedia } from "@/components";
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
