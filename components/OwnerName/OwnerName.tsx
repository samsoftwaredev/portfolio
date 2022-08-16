import { Typography } from "@mui/material";
import styles from "./ownerName.module.scss";

interface Props {
  firstName: string;
  lastName: string;
}

const OwnerName = ({ firstName, lastName }: Props) => {
  return (
    <>
      <Typography variant="h2" gutterBottom className={styles.cyberpunk}>
        I&apos;m
      </Typography>
      <Typography
        variant="h1"
        gutterBottom
        className={[styles.cyberpunk, styles.rtl].join(" ")}
      >
        {firstName}
      </Typography>
      <Typography variant="h1" gutterBottom className={styles.cyberpunk}>
        {lastName}
      </Typography>
    </>
  );
};

export default OwnerName;
