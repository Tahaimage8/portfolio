"use client";

import { motion } from "framer-motion";
import Container from "./Container";

const timelineEvents = [
  {
    year: "2024 - Present",
    title: "MERN Stack Specialist",
    org: "Programming Hero",
    desc: "Intensive training on MongoDB, Express.js, React, and Node.js. Architecting complex full-stack applications with modern best practices."
  },
  {
    year: "2023",
    title: "Frontend Engineering",
    org: "Self-Driven Learning",
    desc: "Mastering the core of web development. Focused on semantic HTML, modern CSS (Tailwind), and deep-diving into JavaScript ES6+."
  },
  {
    year: "2022",
    title: "Creative Discovery",
    org: "The Spark",
    desc: "Discovered a passion for digital creation. Started exploring the intersection of design and code through basic web projects."
  }
];

export default function Timeline() {
  return (
    <section id="journey" className="relative overflow-hidden py-20 md:py-28">
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Learning <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto font-medium">
            A chronological look at my evolution as a developer and the milestones 
            that shaped my technical expertise.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />
          
          <div className="space-y-16 md:space-y-24">
            {timelineEvents.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-cyan-500 border-4 border-dark -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(6,182,212,0.5)] mt-6 md:mt-0" />
                
                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:pl-16 pl-12" : "md:pr-16 pl-12 md:text-right"}`}>
                  <div className="glass p-8 sm:p-10 rounded-[32px] sm:rounded-[40px] border border-white/5 hover:border-white/10 transition-all duration-500 group">
                    <span className="text-cyan-400 font-black text-xs uppercase tracking-[0.3em] block mb-4">{event.year}</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight group-hover:text-cyan-400 transition-colors">{event.title}</h3>
                    <h4 className="text-gray-400 font-bold mb-6 text-xs sm:text-sm uppercase tracking-widest">{event.org}</h4>
                    <p className="text-gray-500 text-base md:text-lg leading-7 font-medium">{event.desc}</p>
                  </div>
                </div>
                
                {/* Date on opposite side for desktop */}
                <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? "pr-16 text-right" : "pl-16 text-left"}`}>
                  <span className="text-white/5 text-8xl font-black select-none pointer-events-none">{event.year.split(' ')[0]}</span>
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

