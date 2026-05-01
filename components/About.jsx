"use client";

import { motion } from "framer-motion";
import { HiOutlineBookOpen, HiOutlineLightningBolt, HiOutlineAcademicCap } from "react-icons/hi";
import { FaBullseye } from "react-icons/fa";
import Container from "./Container";

const aboutCards = [
  {
    icon: HiOutlineAcademicCap,
    title: "Learning Path",
    description: "Currently completing the Programming Hero Web Development Course with a focus on MERN.",
    color: "text-cyan-400"
  },
  {
    icon: HiOutlineLightningBolt,
    title: "Growth Mindset",
    description: "Driven by a passion for solving complex problems and continuously upgrading skills.",
    color: "text-purple-400"
  },
  {
    icon: FaBullseye,
    title: "Future Goal",
    description: "Aiming to become a professional Full-Stack Developer creating impactful solutions.",
    color: "text-blue-400"
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
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
                    { label: "MERN Stack Progress", val: "85%", color: "bg-purple-500", shadow: "shadow-purple-500/20" },
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 leading-tight tracking-tight">
              Passionate About <br className="hidden sm:block" />
              <span className="text-gradient">Problem Solving</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-12 leading-7 font-medium max-w-2xl mx-auto lg:mx-0">
              Based in Bangladesh, I am a dedicated developer learning through 
              <span className="text-white font-bold mx-1">Programming Hero</span>. 
              My journey is fueled by a curiosity for crafting high-performance 
              digital experiences using the latest web technologies.
            </p>
            
            <div className="grid gap-6">
              {aboutCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 sm:gap-8 p-6 sm:p-8 glass-card rounded-[32px] hover:translate-x-0 lg:hover:translate-x-3 transition-all duration-500 group"
                >
                  <div className={`p-4 rounded-2xl glass border-white/5 transition-colors group-hover:bg-white/5 ${card.color} shrink-0`}>
                    <card.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-black text-white mb-2 tracking-tight">{card.title}</h4>
                    <p className="text-gray-500 leading-relaxed font-medium text-sm sm:text-base">{card.description}</p>
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

