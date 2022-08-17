import { ReactNode } from "react";
import { Box } from "@mui/material";
import styles from "./hero.module.scss";

interface Props {
  children: ReactNode;
}

const Hero = ({ children }: Props) => {
  return <Box className={styles.container}>{children}</Box>;
};

export default Hero;
