import { Box, colors, Icon, Link } from "@mui/material";
import { SOCIAL_MEDIA } from "@/constants";
import styles from "./socialMedia.module.scss";

const SocialMedia = () => {
  return (
    <Box component="section">
      <ul className={styles.linkList}>
        {SOCIAL_MEDIA.map(({ name, icon, url }) => (
          <li key={name}>
            <Link className={styles.link} href={url} color={colors.grey[200]}>
              <Icon component={icon} fontSize="large" />
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default SocialMedia;
