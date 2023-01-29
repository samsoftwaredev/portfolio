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
      <About />
      <Skills />
      <Projects />
      <Awards />
      <Contact />
    </MainLayout>
  );
};

export default Home;
