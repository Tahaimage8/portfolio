"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useMemo } from "react";
import Container from "./Container";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

export default function Timeline() {
  const timelineEvents = useMemo(() => [
    {
      year: "2022",
      title: "Started Web Development Basics",
      desc: "Learned HTML, CSS, and basic responsive layout concepts. Discovered a passion for digital creation."
    },
    {
      year: "2023",
      title: "JavaScript & Frontend Foundation",
      desc: "Practiced JavaScript fundamentals, DOM manipulation, and modern UI building with a focus on core engineering."
    },
    {
      year: "2024",
      title: "React & Next.js Development",
      desc: "Started building modern web interfaces using React.js, Next.js, Tailwind CSS, and component-based architecture."
    },
    {
      year: "2025",
      title: "Full Stack Development Journey",
      org: "Future Goal",
      desc: "Improving backend and full stack skills with Node.js, Express.js, MongoDB, Firebase, authentication, and real-world project structure."
    },
    {
      year: "2026",
      title: "Career Growth & Development",
      org: "Future Goal",
      desc: "Focusing on building production-ready web applications, improving clean code, UI/UX quality, and performance optimization."
    },
    {
      year: "Future",
      title: "Advanced Full Stack Learning",
      org: "Future Goal",
      desc: "Planning to improve full stack skills by learning TypeScript, advanced backend architecture, database management, and scalability."
    }
  ], []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Smooth indicator movement
  const indicatorY = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="journey" ref={containerRef} className="relative overflow-hidden py-20 md:py-28">
      <Container>
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 glass rounded-full text-blue-400 text-[10px] uppercase tracking-[0.3em] font-black mb-6"
          >
            My Story
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight"
          >
            Learning <span className="text-gradient">Journey</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto font-medium"
          >
            A chronological look at my evolution as a developer and the milestones 
            that shape my growth towards becoming a full-stack engineer.
          </motion.p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Vertical Line Background */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-white/5 -translate-x-1/2" />
          
          {/* Animated Progress Line */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent -translate-x-1/2 origin-top"
          />

          {/* Traveling Indicator (Progress Dot/Rocket) */}
          <motion.div
            style={{ top: indicatorY }}
            className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-none will-change-[top]"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/40 blur-xl rounded-full scale-150 animate-pulse will-change-transform" />
              <div className="relative w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(6,182,212,1)] flex items-center justify-center will-change-transform">
                <HiOutlineRocketLaunch className="text-cyan-600 text-[10px] rotate-180" />
              </div>
            </div>
          </motion.div>
          
          <div className="space-y-16 md:space-y-24">
            {timelineEvents.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: (i % 3) * 0.1, 
                  ease: [0.21, 0.45, 0.32, 0.9] 
                }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Visual Dot on the line */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i % 3) * 0.1 }}
                  className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-dark border-2 border-white/20 -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(255,255,255,0.1)] mt-6 md:mt-0" 
                />
                
                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:pl-16 pl-12" : "md:pr-16 pl-12 md:text-right"}`}>
                  <div className="glass p-8 sm:p-10 rounded-[32px] sm:rounded-[40px] border border-white/5 hover:border-white/10 transition-all duration-500 group relative overflow-hidden">
                    {/* Hover Gradient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-500" />
                    
                    <span className="text-cyan-400 font-black text-xs uppercase tracking-[0.3em] block mb-4 relative z-10">{event.year}</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight group-hover:text-cyan-400 transition-colors relative z-10">
                      {event.title}
                    </h3>
                    {event.org && (
                      <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-gray-400 font-bold mb-6 text-[10px] uppercase tracking-widest relative z-10">
                        {event.org}
                      </span>
                    )}
                    <p className="text-gray-500 text-base md:text-lg leading-7 font-medium relative z-10">{event.desc}</p>
                  </div>
                </div>
                
                {/* Background Year Label */}
                <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? "pr-16 text-right" : "pl-16 text-left"}`}>
                  <motion.span 
                    initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-white/5 text-8xl lg:text-9xl font-black select-none pointer-events-none inline-block"
                  >
                    {event.year.includes(' ') ? event.year.split(' ')[0] : event.year}
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 blur-[150px] -z-10 pointer-events-none" />
    </section>
  );
}
