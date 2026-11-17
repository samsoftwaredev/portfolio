import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { buildStructuredData } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <span id="top" />
        <Hero />
        <Services />
        <Projects />
        <Awards />
        <About />
        <Contact />
      </main>
      <Footer />
      <JsonLd data={buildStructuredData()} />
    </>
  );
}
