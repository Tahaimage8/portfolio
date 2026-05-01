"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink, HiOutlineCode, HiArrowRight } from "react-icons/hi";
import Image from "next/image";
import Container from "./Container";

const projects = [
  {
    title: "SkillSphere",
    description: "A comprehensive Online Learning Management System with course categorization, enrollment tracking, and a modern student dashboard.",
    tech: ["React", "Firebase", "Tailwind", "DaisyUI"],
    github: "https://github.com/tahaimage8/skill-sphere",
    live: "https://tskillsphere-ibtesam.vercel.app/",
    image: "/projects/skillsphere.png"
  },
  {
    title: "Artiva AI",
    description: "An AI-powered Art Generation platform featuring a clean UI for creative prompt processing and high-end gallery display.",
    tech: ["React", "Next.js", "AI Integration", "Framer Motion"],
    github: "https://github.com/tahaimage8/artiva-art-gallery",
    live: "https://artiva-ai.vercel.app/",
    image: "/projects/artiva.png"
  },
  {
    title: "KeenKeeper",
    description: "A professional productivity suite for task management, note-taking, and efficient organization with a focus on UX.",
    tech: ["React", "Tailwind", "Lucide", "Context API"],
    github: "https://github.com/tahaimage8/keen-keeper",
    live: "https://assienment-7-77.vercel.app/",
    image: "/projects/keenkeeper.png"
  },
  {
    title: "BookVibe",
    description: "A social platform for book enthusiasts to discover, review, and organize their personal reading lists.",
    tech: ["React", "Router", "Tailwind", "Local Storage"],
    github: "https://github.com/tahaimage8/book-vibe",
    live: "https://bookvibe1111.netlify.app/",
    image: "/projects/bookvibe.png"
  },
  {
    title: "DigiTools",
    description: "A modern e-commerce marketplace for digital assets with optimized product filtering and cart functionality.",
    tech: ["React", "Tailwind", "State Management"],
    github: "https://github.com/tahaimage8/assienment-6",
    live: "https://digitoolsll.netlify.app/",
    image: "/projects/digitools.png"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 glass rounded-full text-cyan-400 text-[10px] uppercase tracking-[0.3em] font-black mb-6"
            >
              My Portfolio
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight"
            >
              Selected <span className="text-gradient">Masterpieces</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto lg:mx-0 font-medium"
            >
              A collection of my most impactful work, ranging from creative frontend concepts 
              to full-featured web applications.
            </motion.p>
          </div>
          <motion.a
            href="https://github.com/tahaimage8"
            target="_blank"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group hidden lg:flex items-center gap-3 text-white hover:text-cyan-400 font-bold transition-all mb-2"
          >
            <span className="border-b-2 border-white/10 group-hover:border-cyan-400/50 pb-1">View All GitHub</span>
            <HiOutlineExternalLink size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full w-full"
            >
              <div className="relative glass rounded-[32px] overflow-hidden border border-white/5 transition-all duration-700 hover:border-white/10 flex flex-col h-full w-full">
                {/* Project Image Container */}
                <div className="relative h-[240px] md:h-[280px] w-full overflow-hidden shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-1000 group-hover:scale-105 group-hover:rotate-1 w-full h-full"
                  />
                  {/* Premium Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                  
                  {/* Tech Badges on Image */}
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-20">
                    {project.tech.slice(0, 3).map((tag, j) => (
                      <span key={j} className="px-3 py-1 glass backdrop-blur-md text-[9px] uppercase tracking-widest text-white font-bold rounded-full border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow relative">
                  <div className="flex justify-between items-start gap-4 mb-6">
                    <h3 className="text-2xl font-black text-white tracking-tight">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 shrink-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all hover:scale-110"
                        title="Source Code"
                      >
                        <FaGithub size={20} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all hover:scale-110"
                        title="Live Demo"
                      >
                        <HiOutlineExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-base leading-7 mb-8 line-clamp-3 font-medium flex-grow">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                    <div className="flex items-center gap-2 text-gray-500 uppercase tracking-[0.2em] text-[9px] font-bold">
                      <HiOutlineCode size={16} className="text-cyan-500" />
                      <span className="hidden sm:inline">Production Ready</span>
                    </div>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-sm font-black text-white hover:text-cyan-400 transition-colors"
                    >
                      EXPLORE <HiArrowRight size={16} className="text-cyan-500" />
                    </motion.a>
                  </div>
                </div>
                
                {/* Hover Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center lg:hidden">
          <motion.a
            href="https://github.com/tahaimage8"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass rounded-2xl flex items-center gap-3 text-white font-bold"
          >
            View All GitHub <HiOutlineExternalLink size={20} />
          </motion.a>
        </div>
      </Container>
    </section>
  );
}


// Re-import ArrowRight if missing from lucide
// No longer needed since we used HiArrowRight

