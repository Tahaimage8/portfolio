import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
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
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main className="w-full">
        <Hero />
        <TechMarquee />
        <About />
        <SectionDivider />
        <Education />
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

        {/* Visually Hidden SEO Content */}
        <div className="sr-only">
          <h2>Ibtesam Taha - Professional Web Developer</h2>
          <p>
            Welcome to the official portfolio of <strong>Ibtesam Taha</strong>, also known as <strong>Taha</strong> or <strong>Taha Developer</strong>. I am a passionate <strong>MERN Developer</strong> and <strong>Full Stack Developer</strong> based in Bangladesh. As a dedicated <strong>Bangladesh Developer</strong>, I specialize in creating dynamic, responsive, and user-friendly web applications using modern technologies like React, Next.js, MongoDB, Express, and Node.js. Explore my <strong>Ibtesam portfolio</strong> to see my latest work.
          </p>
          <nav aria-label="Internal Links">
            <ul>
              <li><Link href="/about">About Ibtesam Taha</Link></li>
              <li><Link href="/projects">Full Stack Developer Projects</Link></li>
              <li><Link href="/contact">Contact MERN Developer in Bangladesh</Link></li>
            </ul>
          </nav>
        </div>
      </main>

      <Footer />
    </>
  );
}