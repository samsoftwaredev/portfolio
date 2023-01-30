import type { NextPage } from "next";
import {
  MainLayout,
  Hero,
  Skills,
  Projects,
  About,
  Contact,
  Awards,
} from "@/components";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Hero />
      <Projects />
      <Awards />
      <About />
      <Skills />
      <Contact />
    </MainLayout>
  );
};

export default Home;
