import { createTheme, ThemeProvider } from "@mui/material";
import type { NextPage } from "next";
import {
  MainLayout,
  Hero,
  Skills,
  Projects,
  About,
  Contact,
} from "@/components";

const theme = createTheme();

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
