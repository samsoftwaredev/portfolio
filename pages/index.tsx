import type { NextPage } from "next";
import {
  MainLayout,
  Hero,
  Skills,
  Projects,
  About,
  Contact,
  Awards,
  ResumeInquiry,
} from "@/components";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Hero />
      <ResumeInquiry />
      <Projects />
      <Awards />
      <About />
      <Contact />
    </MainLayout>
  );
};

export default Home;
