"use client";

import { motion } from "framer-motion";
import { HiOutlineBookOpen, HiOutlineLightningBolt, HiOutlineAcademicCap } from "react-icons/hi";
import { FaBullseye } from "react-icons/fa";
import Container from "./Container";

const aboutCards = [
  {
    icon: HiOutlineLightningBolt,
    title: "3+ Projects",
    description: "Built real-world applications including Artiva AI.",
    color: "text-cyan-400"
  },
  {
    icon: HiOutlineAcademicCap,
    title: "MERN Stack",
    description: "Expertise in React, Next.js, Node.js, and MongoDB.",
    color: "text-purple-400"
  },
  {
    icon: FaBullseye,
    title: "Remote Ready",
    description: "Prepared for freelance and startup environments.",
    color: "text-blue-400"
  }
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          {/* Left - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 glass p-6 sm:p-10 rounded-[40px] sm:rounded-[60px] overflow-hidden border border-white/5">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
                  <div className="w-16 h-16 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-cyan-500/20 shrink-0">
                    <HiOutlineBookOpen size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tight">Continuous Learning</h3>
                    <p className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-widest mt-1">Evolving with Technology</p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  {[
                    { label: "Frontend Architecture", val: "92%", color: "bg-cyan-500", shadow: "shadow-cyan-500/20" },
                    { label: "MERN Stack Expertise", val: "85%", color: "bg-purple-500", shadow: "shadow-purple-500/20" },
                    { label: "UI/UX & Animations", val: "88%", color: "bg-blue-500", shadow: "shadow-blue-500/20" }
                  ].map((skill, i) => (
                    <div key={i} className="space-y-3">
                      <div className="flex justify-between items-end">
                        <span className="text-gray-300 font-bold tracking-tight text-sm sm:text-base">{skill.label}</span>
                        <span className="text-white font-black text-base sm:text-lg">{skill.val}</span>
                      </div>
                      <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden p-[2px]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.val }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.2 }}
                          className={`h-full ${skill.color} rounded-full ${skill.shadow}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-6 sm:p-8 glass-card rounded-[32px] border-l-4 border-cyan-500 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-150 transition-transform duration-1000 pointer-events-none">
                    <HiOutlineBookOpen size={100} />
                  </div>
                  <p className="text-gray-300 italic text-base sm:text-lg leading-relaxed relative z-10 font-medium text-center sm:text-left">
                    "I believe that the best way to predict the future is to create it. Coding is my tool for creation."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-500/10 blur-[120px] animate-pulse pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/10 blur-[120px] animate-pulse pointer-events-none" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left mt-8 lg:mt-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 glass rounded-full text-cyan-400 text-[10px] uppercase tracking-[0.3em] font-black mb-6"
            >
              Who I Am
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight tracking-tight">
              Dedicated to <br className="hidden sm:block" />
              <span className="text-gradient">Clean Development</span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-8 lg:text-left text-center"
            >
              AI-Assisted Development • Modern Web Apps • MERN Stack
            </motion.p>
            
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
              }}
              className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0 mb-12 text-center lg:text-left"
            >
              <motion.p variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                I am a passionate <span className="text-white font-bold">Full Stack Developer (MERN)</span> focused on building clean, responsive, and user-friendly web applications.
              </motion.p>
              <motion.p variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                As a self-taught developer, I continuously improve my skills by building real-world projects using React, Next.js, Node.js, Express.js, and MongoDB. I also leverage modern AI tools to enhance my development workflow, improve productivity, and build smarter user experiences.
              </motion.p>
              <motion.p variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                I have built 3+ projects, including <span className="text-cyan-400 font-bold">Artiva</span> — an AI-powered image application. My strengths include clean UI design, problem-solving, and the ability to learn and adapt quickly.
              </motion.p>
              <motion.p variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                I am a focused and disciplined learner, aiming to become a production-level developer. My goal is to work on real-world products, collaborate with teams, and grow through remote opportunities, freelancing, and startup environments.
              </motion.p>
            </motion.div>
            
            {/* 3 Minimal Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
              {aboutCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center text-center gap-4 p-6 glass-card rounded-[24px] hover:shadow-[0_10px_30px_-10px_rgba(6,182,212,0.15)] hover:border-white/10 transition-all duration-300 group"
                >
                  <div className={`p-4 rounded-2xl glass border-white/5 transition-colors group-hover:bg-white/10 ${card.color}`}>
                    <card.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-black text-white mb-2 tracking-tight">{card.title}</h4>
                    <p className="text-gray-500 leading-relaxed font-medium text-xs sm:text-sm">{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

