import { Box, colors, Icon, Link } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import styles from "./socialMedia.module.scss";

const SocialMedia = () => {
  const medias = [
    {
      name: "LinkedIn",
      icon: LinkedIn,
      url: "https://www.linkedin.com/in/samuel-ruiz-839895142/",
    },
    {
      name: "GitHub",
      icon: GitHub,
      url: "https://github.com/samsoftwaredev/",
    },
  ];

  return (
    <Box component="section">
      <ul className={styles.linkList}>
        {medias.map(({ name, icon, url }) => (
          <li key={name}>
            <Link href={url} color={colors.grey[200]}>
              <Icon component={icon} fontSize="large" />
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default SocialMedia;
