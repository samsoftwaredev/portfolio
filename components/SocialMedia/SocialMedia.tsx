import { Box, Icon, Link } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import styles from "./socialMedia.module.scss";

const SocialMedia = () => {
  const linkedInURL = "https://www.linkedin.com/in/samuel-ruiz-839895142/";
  const gitHubURL = "https://github.com/samsoftwaredev/";
  return (
    <Box component="section">
      <ul className={styles.linkList}>
        <li>
          <Link href={linkedInURL}>
            <Icon component={LinkedIn} fontSize="large" />
          </Link>
        </li>
        <li>
          <Link href={gitHubURL}>
            <Icon component={GitHub} fontSize="large" />
          </Link>
        </li>
      </ul>
    </Box>
  );
};

export default SocialMedia;
