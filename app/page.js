import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import TechMarquee from "@/components/TechMarquee";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Timeline from "@/components/Timeline";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <TechMarquee />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Process />
        <SectionDivider />
        <Timeline />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />
    </>
  );
}