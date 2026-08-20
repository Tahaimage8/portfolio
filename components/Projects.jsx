"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink, HiOutlineCode, HiArrowRight, HiX, HiOutlineCheckCircle, HiOutlineSparkles, HiOutlineServer, HiOutlineDesktopComputer, HiOutlineDatabase } from "react-icons/hi";
import { PUBLIC_LINKS } from "@/lib/constants";
import Image from "next/image";
import Container from "./Container";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const projects = useMemo(() => [
     {
      id: "dinespot",
      title: "DineSpot",
      badge: "Full Stack TypeScript Application",
      description: "A comprehensive full-stack restaurant discovery and reservation platform featuring role-based dashboards, authentication, REST APIs, and complete data management.",
      tech: [
        "Full Stack",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Better Auth",
      ],
      github: "https://github.com/Tahaimage8/DineSpot-client",
      githubBackend: "https://github.com/Tahaimage8/DineSpot-server",
      live: "https://dine-spot-client-chi.vercel.app",
      image: "/projects/dinesport.png",
      caseStudy: {
        role: "Full Stack Developer (Frontend, Backend & Database Architecture)",
        overview: "DineSpot is a production-grade restaurant discovery and reservation platform built using TypeScript across both frontend and backend architectures.",
        frontend: [
          "Next.js App Router & React",
          "TypeScript & Tailwind CSS",
          "HeroUI & Motion Animations",
          "Better Auth & Session Management",
          "Responsive Customer, Owner & Admin Dashboards"
        ],
        backend: [
          "Node.js & Express.js REST API",
          "TypeScript & Strict Schema Validation",
          "MongoDB Native Driver Integration",
          "Session-Token Verification & Role-Based Control"
        ],
        features: [
          "Role-based Access Control (Customer, Restaurant Owner, Admin)",
          "Restaurant CRUD, Search & Admin Approval Workflows",
          "Reservation Management & Status Transitions",
          "Review System & Validation Rules",
          "User Management with Block/Unblock Capabilities"
        ],
        highlight: "DineSpot demonstrates complete frontend-to-backend TypeScript integration with session verification, authorization middleware, request validation, and scalable application architecture."
      }
    },
    {
      id: "rolebix",
      title: "Rolebix",
      badge: "Career Marketplace Platform",
      description: "A modern full-stack, role-based career marketplace where job seekers discover opportunities, recruiters manage listings, and admins moderate payments.",
      tech: [
        "Full Stack",
        "Next.js",
        "MongoDB",
        "Better Auth",
        "Stripe"
      ],
      github: "https://github.com/Tahaimage8/Rolebix-client-side",
      live: "https://rolebix-client-side.vercel.app/",
      image: "/projects/rolebix.png",
      caseStudy: {
        role: "Full Stack Developer",
        overview: "Rolebix connects job seekers with recruiters through role-tailored dashboards and secure Stripe monetization.",
        frontend: ["Next.js App Router", "Tailwind CSS", "Framer Motion", "Role Dashboards"],
        backend: ["Node.js & Express API", "MongoDB", "Better Auth", "Stripe API"],
        features: ["Job Posting & Application Tracker", "Recruiter Dashboard", "Admin Listing Approval", "Stripe Payment Gateway"],
        highlight: "Features complete role-based user management and automated Stripe transaction verification."
      }
    },
    {
      id: "raktanex",
      title: "RaktaNex",
      badge: "Blood Donation Platform",
      description: "A full-stack blood donation platform connecting donors, volunteers, and administrators to streamline blood request fulfillment and fundraising.",
      tech: ["Full Stack", "Stripe", "MongoDB", "Next.js", "Better-Auth"],
      github: "https://github.com/Tahaimage8/raktanex-client",
      live: "https://raktanex-client.vercel.app/",
      image: "/projects/raktanex.png",
      caseStudy: {
        role: "Full Stack Developer",
        overview: "RaktaNex streamlines emergency blood requests and connects volunteers with local blood donors.",
        frontend: ["Next.js", "Tailwind CSS", "Donor Search UI"],
        backend: ["Express.js REST API", "MongoDB", "JWT Auth"],
        features: ["Blood Donor Search by Location", "Emergency Request Fulfillment", "Stripe Fundraising Campaign"],
        highlight: "Real-time blood request tracking and location-based donor search."
      }
    },
    {
      id: "sportnest",
      title: "SportNest",
      badge: "Venue Booking Platform",
      description: "Full-stack sports facility booking platform where users explore venue time slots and facility owners manage venues.",
      tech: ["Full Stack", "Next.js", "MongoDB", "Booking System"],
      github: "https://github.com/Tahaimage8/sportnest-client",
      live: "https://sportnest-client-psi.vercel.app/",
      image: "/projects/sportnest.png"
    },
    {
      id: "skillsphere",
      title: "SkillSphere",
      badge: "Learning Management System",
      description: "Comprehensive Online Learning Management System with course categorization, enrollment tracking, and student dashboards.",
      tech: ["React", "Better-Auth", "Tailwind", "DaisyUI"],
      github: "https://github.com/tahaimage8/skill-sphere",
      live: "https://skillsphere-ibtesam.vercel.app/",
      image: "/projects/skillsphere.png"
    },
    {
      id: "artiva",
      title: "Artiva AI",
      badge: "AI Art Generation UI",
      description: "AI-powered Art Generation platform featuring clean prompt processing UI and high-end gallery display.",
      tech: ["React", "Next.js", "AI Integration", "Framer Motion"],
      github: "https://github.com/tahaimage8/artiva-art-gallery",
      live: "https://artiva-ai.vercel.app/",
      image: "/projects/artiva.png"
    }
  ], []);

  return (
    <section id="projects" className="relative overflow-hidden py-20 md:py-28">
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
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto lg:mx-0 font-medium"
            >
              A selection of my production-ready full-stack applications, featuring clean component architecture, REST APIs, and database integrations.
            </motion.p>
          </div>
          <motion.a
            href={PUBLIC_LINKS.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
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
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full w-full"
            >
              <div className={`relative glass rounded-[32px] overflow-hidden border transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)] flex flex-col h-full w-full ${
                project.id === "dinespot"
                  ? "border-cyan-500/40 bg-cyan-950/20 shadow-[0_10px_30px_-10px_rgba(6,182,212,0.2)] hover:border-cyan-400/60"
                  : "border-white/5 hover:border-white/20"
              }`}>

                {/* Project Image Container */}
                <div className="relative h-[240px] md:h-[280px] w-full overflow-hidden shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-1000 group-hover:scale-105 w-full h-full"
                  />
                  {/* Premium Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500" />
                  
                  {/* Tech Badges on Image */}
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-20">
                    {project.tech.slice(0, 3).map((tag, j) => (
                      <span key={j} className="px-3 py-1 glass backdrop-blur-md text-[9px] uppercase tracking-widest text-white font-bold rounded-full border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.id === "dinespot" && (
                    <div className="absolute top-6 right-6 z-20">
                      <span className="px-3 py-1 bg-cyan-400 text-black font-black text-[9px] uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]">
                        Flagship
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow relative z-10">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div>
                      <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      {project.badge && (
                        <p className="text-xs text-cyan-400 font-bold uppercase tracking-wider mt-1">{project.badge}</p>
                      )}
                    </div>

                    <div className="flex gap-2 shrink-0">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub Repository`}
                        className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all hover:scale-110"
                        title="Frontend Source Code"
                      >
                        <FaGithub size={20} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} Live Application`}
                        className="w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all hover:scale-110"
                        title="Live Demo"
                      >
                        <HiOutlineExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 font-medium flex-grow">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                    {project.caseStudy ? (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-cyan-400 hover:text-white transition-colors"
                      >
                        <HiOutlineSparkles size={16} />
                        <span>Case Study</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 text-gray-500 uppercase tracking-[0.2em] text-[9px] font-bold">
                        <HiOutlineCode size={16} className="text-cyan-500" />
                        <span>Production Ready</span>
                      </div>
                    )}

                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-2 text-xs font-black text-white hover:text-cyan-400 transition-colors uppercase tracking-wider"
                    >
                      LIVE DEMO <HiArrowRight size={14} className="text-cyan-500" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center lg:hidden">
          <motion.a
            href={PUBLIC_LINKS.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass rounded-2xl flex items-center gap-3 text-white font-bold text-sm"
          >
            View All GitHub <HiOutlineExternalLink size={20} />
          </motion.a>
        </div>
      </Container>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && selectedProject.caseStudy && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-dark/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 28, stiffness: 350 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden glass rounded-[32px] border border-cyan-500/30 bg-dark/95 shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-6 sm:p-8 pb-4 flex justify-between items-start border-b border-white/5">
                <div>
                  <span className="text-cyan-400 font-black text-[10px] uppercase tracking-[0.3em] block mb-1">Project Case Study</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{selectedProject.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-bold mt-1">{selectedProject.badge}</p>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close Case Study Modal"
                  className="p-2 rounded-full glass border-white/5 text-gray-400 hover:text-white transition-colors"
                >
                  <HiX size={24} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 relative overflow-y-auto p-6 sm:p-8 space-y-8 custom-scrollbar">
                {/* Overview */}
                <div>
                  <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                    <HiOutlineSparkles className="text-cyan-400" size={16} /> Overview
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
                    {selectedProject.caseStudy.overview}
                  </p>
                </div>

                {/* Role */}
                <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs sm:text-sm font-bold">
                  <span className="text-gray-400 uppercase tracking-widest block text-[10px] font-black mb-1">My Role</span>
                  {selectedProject.caseStudy.role}
                </div>

                {/* Architecture Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Frontend */}
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                    <h5 className="text-white font-black text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                      <HiOutlineDesktopComputer className="text-cyan-400" size={18} /> Frontend Architecture
                    </h5>
                    <ul className="space-y-2">
                      {selectedProject.caseStudy.frontend.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                          <HiOutlineCheckCircle className="text-cyan-400 shrink-0" size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Backend */}
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                    <h5 className="text-white font-black text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                      <HiOutlineServer className="text-purple-400" size={18} /> Backend & Database
                    </h5>
                    <ul className="space-y-2">
                      {selectedProject.caseStudy.backend.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                          <HiOutlineCheckCircle className="text-purple-400 shrink-0" size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Core Features */}
                <div>
                  <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                    <HiOutlineDatabase className="text-blue-400" size={16} /> Core Capabilities & Workflows
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedProject.caseStudy.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-300 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Highlight */}
                <div className="p-5 rounded-2xl glass border-l-4 border-cyan-400">
                  <h5 className="text-cyan-400 font-black text-xs uppercase tracking-widest mb-1">Technical Highlight</h5>
                  <p className="text-gray-300 text-xs sm:text-sm font-medium leading-relaxed">
                    {selectedProject.caseStudy.highlight}
                  </p>
                </div>
              </div>

              {/* Footer Links */}
              <div className="p-6 sm:p-8 pt-4 border-t border-white/5 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex flex-wrap gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 glass rounded-xl text-xs font-bold text-white hover:text-cyan-400 flex items-center gap-2 transition-all"
                  >
                    <FaGithub size={16} /> Frontend Source
                  </a>
                  {selectedProject.githubBackend && (
                    <a
                      href={selectedProject.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 glass rounded-xl text-xs font-bold text-white hover:text-purple-400 flex items-center gap-2 transition-all"
                    >
                      <FaGithub size={16} /> Backend Source
                    </a>
                  )}
                </div>

                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-white text-dark font-black rounded-xl text-xs flex items-center gap-2 hover:bg-cyan-400 hover:text-black transition-all"
                >
                  Live Application <HiOutlineExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
