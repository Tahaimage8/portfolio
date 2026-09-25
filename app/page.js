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
          <h2>Ibtasam Taha - Full Stack Software Engineer</h2>
          <p>
            Welcome to the official portfolio of <strong>Ibtasam Taha</strong>, also known as <strong>Taha</strong> or <strong>Taha Developer</strong>. I am a passionate <strong>Full Stack Software Engineer</strong> building production-grade enterprise applications and AI-powered systems across frontend, backend, databases, and deployment. I specialize in building scalable backends and APIs using TypeScript (Node.js/Next.js) and Python (FastAPI), backed by PostgreSQL, MongoDB, and Prisma ORM. Explore my portfolio to view my projects including DineSpot.
          </p>
          <nav aria-label="Internal Links">
            <ul>
              <li><Link href="/about">About Ibtasam Taha</Link></li>
              <li><Link href="/projects">Full Stack Software Engineer Projects</Link></li>
              <li><Link href="/contact">Contact Full Stack Software Engineer</Link></li>
            </ul>
          </nav>
        </div>
      </main>

      <Footer />
    </>
  );
}