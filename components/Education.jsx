"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { HiOutlineAcademicCap, HiOutlineBookOpen } from "react-icons/hi";
import Container from "./Container";

export default function Education() {
  const educationData = useMemo(() => [
    {
      title: "Diploma in Computer Science & Technology",
      institution: "Dr. Mahbubur Rahman Mollah Institute of Science & Technology, Dhaka",
      status: "Ongoing",
      batch: "25-26",
      department: "Computer Science & Technology",
      icon: HiOutlineAcademicCap,
      color: "cyan",
      accent: "bg-cyan-500"
    },
    {
      title: "Secondary School Certificate (SSC)",
      group: "Science",
      board: "Dhaka",
      gpa: "2.94",
      institution: "Secondary Education Board, Dhaka",
      icon: HiOutlineBookOpen,
      color: "purple",
      accent: "bg-purple-500"
    }
  ], []);
  return (
    <section id="education" className="relative overflow-hidden py-20 md:py-28">
      {/* Decorative Gradient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/5 blur-[150px] pointer-events-none" />

      <Container>
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 glass rounded-full text-cyan-400 text-[10px] uppercase tracking-[0.3em] font-black mb-6"
          >
            My Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight"
          >
            Education <span className="text-gradient">Qualifications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto font-medium"
          >
            My academic foundation in computer science and science that fuels my passion 
            for technology and problem-solving.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative will-change-transform"
            >
              <div className="glass p-8 md:p-10 rounded-[32px] h-full border border-white/5 group-hover:border-white/10 transition-all duration-500 flex flex-col relative overflow-hidden">
                {/* Glow Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${item.accent}/10 blur-3xl -mr-16 -mt-16 group-hover:opacity-100 transition-opacity`} />
                
                <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                  <div className={`p-4 rounded-2xl glass border-white/5 ${item.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'} group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon size={32} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl md:text-2xl font-black text-white leading-tight tracking-tight">
                        {item.title}
                      </h3>
                      {item.status && (
                        <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase tracking-widest border border-cyan-500/20">
                          {item.status}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-300 font-bold text-sm md:text-base mb-4 leading-relaxed">
                      {item.institution}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      {item.batch && (
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-[10px] uppercase font-black tracking-widest mb-1">Batch</span>
                          <span className="text-white font-bold">{item.batch}</span>
                        </div>
                      )}
                      {item.department && (
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-[10px] uppercase font-black tracking-widest mb-1">Department
</span>
                          <span className="text-white font-bold">{item.department}</span>
                        </div>
                      )}
                      {item.group && (
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-[10px] uppercase font-black tracking-widest mb-1">Group</span>
                          <span className="text-white font-bold">{item.group}</span>
                        </div>
                      )}
                      {item.board && (
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-[10px] uppercase font-black tracking-widest mb-1">Board</span>
                          <span className="text-white font-bold">{item.board}</span>
                        </div>
                      )}
                      {item.gpa && (
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-[10px] uppercase font-black tracking-widest mb-1">GPA</span>
                          <span className="text-white font-black text-lg">{item.gpa}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Subtle Progress/Status Bar */}
                <div className="mt-8 w-full h-[1px] bg-white/5 relative">
                  <div className={`absolute left-0 top-0 h-full ${item.accent} w-1/4 group-hover:w-full transition-all duration-1000 shadow-[0_0_10px_rgba(6,182,212,0.5)]`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
