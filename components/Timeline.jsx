"use client";

import { motion, AnimatePresence, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { useRef, useMemo, useState } from "react";
import Container from "./Container";
import { 
  HiOutlineRocketLaunch, 
  HiOutlineChevronDown, 
  HiOutlineChevronUp, 
  HiOutlineSparkles,
  HiOutlineCodeBracket,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineCpuChip,
  HiOutlineLightBulb
} from "react-icons/hi2";

export default function Timeline() {
  const shouldReduceMotion = useReducedMotion();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (idx) => {
    setExpandedIndex(prev => (prev === idx ? null : idx));
  };

  const timelineEvents = useMemo(() => [
    {
      year: "2022",
      bgYear: "2022",
      title: "Web Foundations",
      phase: "FOUNDATION",
      status: "COMPLETED",
      statusType: "completed",
      chips: ["HTML", "CSS", "Responsive"],
      desc: "Started my development journey by learning how websites are structured and styled, building a strong foundation in HTML, CSS and responsive design."
    },
    {
      year: "2023",
      bgYear: "2023",
      title: "JavaScript & Interactive Development",
      phase: "FOUNDATION",
      status: "COMPLETED",
      statusType: "completed",
      chips: ["JavaScript", "DOM", "Logic"],
      desc: "Moved beyond static websites and started learning JavaScript, programming logic, DOM manipulation and interactive web development."
    },
    {
      year: "2024",
      bgYear: "2024",
      title: "Modern Frontend Development",
      phase: "FRONTEND",
      status: "COMPLETED",
      statusType: "completed",
      chips: ["React", "Next.js", "Tailwind", "UI"],
      desc: "Started building modern and responsive interfaces using React and Next.js while improving component architecture and UI development."
    },
    {
      year: "2025",
      bgYear: "2025",
      title: "Backend & Full Stack",
      phase: "FULL STACK",
      status: "COMPLETED",
      statusType: "completed",
      chips: ["Node.js", "Express", "MongoDB", "REST API"],
      desc: "Expanded beyond frontend development into backend systems, APIs, authentication and databases, moving toward complete full-stack application development."
    },
    {
      year: "2026",
      bgYear: "2026",
      title: "Full Stack Development",
      phase: "FULL STACK",
      status: "CURRENT",
      statusType: "current",
      chips: ["TypeScript", "Full Stack", "DineSpot", "Backend", "Database"],
      desc: "Currently focused on building complete full-stack applications across frontend, backend and database layers. Projects like DineSpot represent this stage of my journey, combining TypeScript, modern frontend development, backend APIs, authentication and real application logic."
    },
    {
      year: "2027",
      bgYear: "2027",
      title: "Software Development",
      phase: "SOFTWARE",
      status: "PLANNED • 2027",
      statusType: "planned",
      chips: ["C", "C++", "DSA", "Algorithms", "Python", "OOP", "SQL", "Software Development"],
      desc: "Planning to strengthen my programming and problem-solving foundation, then apply it through Python, object-oriented programming, databases and real-world software development.",
      roadmap: [
        { category: "Programming", items: ["C", "C++", "Programming Logic", "Problem Solving"] },
        { category: "Data Structures & Algorithms", items: ["Arrays", "Linked Lists", "Stack", "Queue", "Trees", "Graphs", "Searching", "Sorting", "BFS", "DFS", "Dynamic Programming", "Algorithms"] },
        { category: "Python", items: ["Python Programming", "Functions", "Modules", "Object-Oriented Programming"] },
        { category: "OOP", items: ["Classes", "Objects", "Inheritance", "Encapsulation", "Polymorphism"] },
        { category: "Databases", items: ["SQL", "Relational Databases", "Database Design", "Queries", "Database Fundamentals"] },
        { category: "Software Development", items: ["Software Development Principles", "Project Structure", "Clean Code", "Debugging", "Testing", "Git & GitHub", "Application Architecture Basics", "Building Real Software Projects"] }
      ]
    },
    {
      year: "Future",
      bgYear: "FUTURE",
      title: "AI & Machine Learning",
      phase: "AI",
      status: "NEXT CHAPTER",
      statusType: "future",
      chips: ["Python", "Data", "Machine Learning", "Deep Learning", "AI"],
      desc: "A future goal focused on understanding data, machine learning and intelligent systems, eventually building AI-powered applications.",
      roadmap: [
        { category: "AI/ML Foundations", items: ["Python", "Mathematics", "Statistics", "Probability", "Linear Algebra"] },
        { category: "Data", items: ["NumPy", "Pandas", "Data Processing", "Data Analysis", "Data Visualization"] },
        { category: "Machine Learning", items: ["Machine Learning Fundamentals", "Supervised Learning", "Unsupervised Learning", "Model Training", "Model Evaluation", "Feature Engineering"] },
        { category: "Advanced Future Learning", items: ["Neural Networks", "Deep Learning", "PyTorch or TensorFlow", "AI-powered Applications"] }
      ]
    }
  ], []);

  const phases = ["FOUNDATION", "FRONTEND", "FULL STACK", "SOFTWARE", "AI"];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const indicatorY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" ref={containerRef} className="relative overflow-hidden py-20 md:py-28">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 blur-[160px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 blur-[160px] pointer-events-none -z-10 animate-pulse" />

      <Container>
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 glass rounded-full text-cyan-400 text-[10px] uppercase tracking-[0.3em] font-black mb-6"
          >
            My Story
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight"
          >
            Developer <span className="text-gradient">Journey</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium mb-10"
          >
            From learning the foundations of the web to building full-stack applications — with software development and AI as the next chapters.
          </motion.p>

          {/* Phase Indicator Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-2 rounded-2xl sm:rounded-full glass border border-white/5 max-w-3xl mx-auto"
          >
            {phases.map((ph, idx) => (
              <div key={ph} className="flex items-center gap-2 sm:gap-3">
                <span className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider transition-colors ${
                  ph === "FULL STACK" 
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" 
                    : ph === "SOFTWARE" || ph === "AI"
                    ? "text-purple-300/70 bg-purple-500/5"
                    : "text-gray-400 bg-white/5"
                }`}>
                  {ph}
                </span>
                {idx < phases.length - 1 && (
                  <span className="text-gray-600 font-bold text-xs">→</span>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Timeline Path Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Base Line */}
          <div className="absolute left-6 md:left-1/2 top-0 h-full w-[2px] bg-white/10 -translate-x-1/2" />
          
          {/* Glowing Animated Progress Line */}
          <motion.div 
            style={{ scaleY: shouldReduceMotion ? 1 : scaleY }}
            className="absolute left-6 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-400 -translate-x-1/2 origin-top shadow-[0_0_15px_rgba(6,182,212,0.6)]"
          />

          {/* Traveling Energy Core */}
          {!shouldReduceMotion && (
            <motion.div
              style={{ top: indicatorY }}
              className="absolute left-6 md:left-1/2 w-8 h-8 -translate-x-1/2 z-30 flex items-center justify-center pointer-events-none will-change-[top]"
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-cyan-400/50 blur-xl rounded-full scale-150 animate-pulse" />
                <div className="w-5 h-5 rounded-full bg-white shadow-[0_0_20px_rgba(6,182,212,1)] flex items-center justify-center">
                  <HiOutlineRocketLaunch className="text-cyan-600 text-[10px] rotate-180" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Timeline Events List */}
          <div className="space-y-16 md:space-y-24">
            {timelineEvents.map((event, i) => {
              const isEven = i % 2 === 0;
              const isExpanded = expandedIndex === i;

              return (
                <div
                  key={event.year}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node Icon/Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 mt-6 md:mt-0">
                    {event.statusType === "current" ? (
                      <div className="relative flex items-center justify-center">
                        <div className="absolute w-8 h-8 rounded-full bg-cyan-500/30 blur-md animate-ping" />
                        <div className="w-6 h-6 rounded-full bg-cyan-400 border-2 border-white shadow-[0_0_20px_rgba(6,182,212,1)] flex items-center justify-center">
                          <HiOutlineSparkles className="text-black text-[10px]" />
                        </div>
                      </div>
                    ) : event.statusType === "future" ? (
                      <div className="w-6 h-6 rounded-full bg-dark border-2 border-purple-400/80 shadow-[0_0_15px_rgba(168,85,247,0.6)] flex items-center justify-center">
                        <HiOutlineCpuChip className="text-purple-300 text-xs" />
                      </div>
                    ) : event.statusType === "planned" ? (
                      <div className="w-5 h-5 rounded-full bg-dark border-2 border-purple-500/60 shadow-[0_0_10px_rgba(168,85,247,0.4)] flex items-center justify-center">
                        <HiOutlineCodeBracket className="text-purple-400 text-[10px]" />
                      </div>
                    ) : (
                      <div className="w-4 h-4 rounded-full bg-dark border-2 border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.4)] flex items-center justify-center">
                        <HiOutlineCheckCircle className="text-cyan-400 text-[9px]" />
                      </div>
                    )}
                  </div>

                  {/* Main Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 40 : -40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-60px" }}
                    className={`w-full md:w-1/2 ${
                      isEven ? "md:pl-16 pl-14" : "md:pr-16 pl-14 md:text-right"
                    }`}
                  >
                    <div className={`p-6 sm:p-8 rounded-[32px] transition-all duration-500 relative overflow-hidden group ${
                      event.statusType === "current"
                        ? "glass border border-cyan-500/40 bg-cyan-950/20 shadow-[0_10px_35px_-10px_rgba(6,182,212,0.25)]"
                        : event.statusType === "future"
                        ? "glass border border-purple-500/30 bg-gradient-to-br from-purple-950/20 via-dark/90 to-cyan-950/20 shadow-[0_10px_35px_-10px_rgba(168,85,247,0.2)]"
                        : event.statusType === "planned"
                        ? "glass border border-dashed border-purple-500/30 bg-purple-950/10 hover:border-purple-400/50"
                        : "glass border border-white/5 hover:border-white/20 shadow-xl"
                    }`}>

                      {/* Futuristic Neural Network Grid Background for Future AI Card */}
                      {event.statusType === "future" && (
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                      )}

                      {/* Status Badge & Year Row */}
                      <div className={`flex flex-wrap items-center gap-3 mb-4 ${isEven ? "md:justify-start" : "md:justify-end"} justify-start`}>
                        <span className="text-cyan-400 font-black text-xs uppercase tracking-[0.25em]">
                          {event.year}
                        </span>

                        {event.statusType === "current" ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400 text-black font-black text-[10px] uppercase tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.6)] animate-pulse">
                            <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
                            {event.status}
                          </span>
                        ) : event.statusType === "future" ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 border border-purple-500/40 text-[10px] font-black uppercase tracking-wider shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                            <HiOutlineSparkles className="text-cyan-400 text-xs" />
                            {event.status}
                          </span>
                        ) : event.statusType === "planned" ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-400/40 text-[10px] font-bold uppercase tracking-wider">
                            <HiOutlineClock className="text-purple-400 text-xs" />
                            {event.status}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-bold uppercase tracking-wider">
                            <HiOutlineCheckCircle className="text-xs" />
                            {event.status}
                          </span>
                        )}
                      </div>

                      {/* Card Title */}
                      <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight group-hover:text-cyan-400 transition-colors relative z-10">
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium mb-6 relative z-10">
                        {event.desc}
                      </p>

                      {/* Compact Technology Chips with Staggered Visual Entrance */}
                      <div className={`flex flex-wrap gap-2 mb-4 ${isEven ? "md:justify-start" : "md:justify-end"} justify-start relative z-10`}>
                        {event.chips.map((chip, chipIdx) => (
                          <motion.span
                            key={chip}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 + chipIdx * 0.04 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -2, scale: 1.05 }}
                            className={`px-3 py-1 rounded-xl text-xs font-bold transition-all duration-300 border ${
                              chip === "DineSpot"
                                ? "bg-cyan-500/20 text-cyan-300 border-cyan-400/50 shadow-[0_0_10px_rgba(6,182,212,0.3)] font-black"
                                : event.statusType === "future"
                                ? "bg-purple-500/10 text-purple-200 border-purple-500/30 hover:border-purple-400"
                                : "bg-white/[0.04] text-gray-300 border-white/10 hover:border-cyan-500/40 hover:text-white"
                            }`}
                          >
                            {chip}
                          </motion.span>
                        ))}
                      </div>

                      {/* Interactive Expandable Detailed Roadmap for Planned/Future cards */}
                      {event.roadmap && (
                        <div className="mt-4 pt-4 border-t border-white/5 relative z-10">
                          <button
                            onClick={() => toggleExpand(i)}
                            className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider py-2 px-4 rounded-xl transition-all ${
                              isExpanded 
                                ? "bg-purple-500/20 text-purple-300 border border-purple-500/40" 
                                : "glass text-gray-300 hover:text-white hover:border-purple-500/30"
                            }`}
                          >
                            <span>{isExpanded ? "Hide Roadmap" : "Explore Roadmap"}</span>
                            {isExpanded ? <HiOutlineChevronUp size={16} /> : <HiOutlineChevronDown size={16} />}
                          </button>

                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="overflow-hidden mt-4 text-left space-y-4"
                              >
                                {event.roadmap.map((section) => (
                                  <div key={section.category} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                                    <h4 className="text-xs font-black uppercase tracking-wider text-purple-300 mb-2 flex items-center gap-2">
                                      <HiOutlineLightBulb className="text-cyan-400" />
                                      {section.category}
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5">
                                      {section.items.map((item) => (
                                        <span key={item} className="px-2.5 py-0.5 rounded-lg bg-white/5 border border-white/5 text-[11px] font-medium text-gray-400">
                                          {item}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* Large Low-Opacity Background Typography */}
                  <div className={`hidden md:block w-1/2 ${
                    isEven ? "pr-16 text-right" : "pl-16 text-left"
                  }`}>
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="text-white/[0.04] text-8xl lg:text-9xl font-black select-none pointer-events-none inline-block tracking-tighter"
                    >
                      {event.bgYear}
                    </motion.span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
