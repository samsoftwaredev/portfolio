import type { NextPage } from "next";
import {
  MainLayout,
  Hero,
  Skills,
  Projects,
  About,
  Contact,
} from "@/components";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
});

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
