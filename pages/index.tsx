import { createTheme, ThemeProvider } from "@mui/material";
import type { NextPage } from "next";
import {
  MainLayout,
  Hero,
  Skills,
  Projects,
  About,
  Contact,
} from "../components";

const theme = createTheme();

theme.typography.h1 = {
  fontSize: "6rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "4rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.5rem",
  },
};

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </MainLayout>
    </ThemeProvider>
  );
};

export default Home;
