"use client";

import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiFramer, SiGreensock,
  SiVite, SiVercel, SiGit, SiGithub, SiFigma
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import Container from "./Container";

const skillCategories = [
  {
    title: "Frontend Mastery",
    desc: "Crafting pixel-perfect user interfaces",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ]
  },
  {
    title: "Motion & UX",
    desc: "Bringing static designs to life",
    skills: [
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "UI Design", icon: VscCode, color: "#ffffff" },
    ]
  },
  {
    title: "Backend (Focus)",
    desc: "Learning the MERN ecosystem",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ]
  },
  {
    title: "Dev Ecosystem",
    desc: "Tools I use daily",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "VS Code", icon: VscCode, color: "#007ACC" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[150px] pointer-events-none" />

      <Container>
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 glass rounded-full text-purple-400 text-[10px] uppercase tracking-[0.3em] font-black mb-6"
          >
            My Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight"
          >
            My <span className="text-gradient">Technical Arsenal</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto font-medium"
          >
            I combine creative design with robust engineering to build modern web applications 
            that deliver exceptional user experiences.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              <div className="glass p-8 rounded-[32px] h-full border border-white/5 group-hover:border-white/10 transition-all duration-500 flex flex-col">
                <h3 className="text-xl font-black text-white mb-2">{category.title}</h3>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-8">{category.desc}</p>
                
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5 }}
                      className="flex flex-col items-center justify-center p-4 rounded-[20px] glass-card group/item"
                    >
                      <skill.icon 
                        size={32} 
                        style={{ color: skill.color }} 
                        className="mb-3 transition-all duration-500 group-hover/item:scale-110"
                      />
                      <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-tighter text-gray-500 group-hover/item:text-white transition-colors text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}


