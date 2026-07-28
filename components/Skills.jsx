"use client";

import { motion } from "framer-motion";
import { 
  SiNextdotjs, SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiNestjs, SiPython, SiFastapi,
  SiMongodb, SiPostgresql, SiPrisma,
  SiDocker, SiNginx, SiVercel, SiNetlify, SiGit, SiGithub,
  SiFramer, SiGreensock, SiFigma, SiDaisyui
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscCode, VscServer } from "react-icons/vsc";
import { HiOutlineShieldCheck, HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import Container from "./Container";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "BUILDING MODERN RESPONSIVE INTERFACES",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HeroUI", icon: VscCode, color: "#FFFFFF" }
    ]
  },
  {
    title: "Backend Development",
    description: "BUILDING SECURE AND SCALABLE APIS",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#E2E8F0" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "REST APIs", icon: VscServer, color: "#94A3B8" },
      { name: "Better Auth", icon: HiOutlineShieldCheck, color: "#06B6D4" },
      { name: "Authentication", icon: HiOutlineShieldCheck, color: "#38BDF8" }
    ]
  },
  {
    title: "Database",
    description: "MANAGING RELIABLE APPLICATION DATA",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Prisma ORM", icon: SiPrisma, color: "#E2E8F0" }
    ]
  },
  {
    title: "DevOps & Cloud",
    description: "DEPLOYING MODERN WEB APPLICATIONS",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Visual Studio Code", icon: VscCode, color: "#007ACC" }
    ]
  },
  {
    title: "UI & Motion",
    description: "CREATING POLISHED USER EXPERIENCES",
    skills: [
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "DaisyUI", icon: SiDaisyui, color: "#1FB2A6" },
      { name: "Responsive Design", icon: HiOutlineDevicePhoneMobile, color: "#E2E8F0" },
      { name: "UI Design", icon: VscCode, color: "#E2E8F0" }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden pt-28 pb-20 md:pt-32 md:pb-28">
      {/* Decorative Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[150px] pointer-events-none" />

      <Container>
        <div className="text-center mb-16 md:mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 glass rounded-full text-cyan-400 text-[10px] uppercase tracking-[0.3em] font-black mb-6"
          >
            My Expertise
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
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
            className="text-gray-400 text-base md:text-lg leading-7 max-w-3xl mx-auto font-medium"
          >
            I work with modern frontend, backend, database, and deployment technologies to build clean, scalable, and production-ready web applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6 relative z-10">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-sm p-5 sm:p-6 transition-all duration-300 hover:border-white/20 hover:shadow-[0_10px_30px_-15px_rgba(0,255,255,0.1)] flex flex-col"
            >
              <div className="mb-6">
                <h3 className="text-xl font-black text-white mb-2">{category.title}</h3>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{category.description}</p>
              </div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.05 }
                  }
                }}
                className="grid grid-cols-2 gap-3 mt-auto"
              >
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
                    whileHover={{ y: -2 }}
                    className={`flex flex-col items-center justify-center text-center px-3 py-4 min-h-[92px] rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_0_15px_-5px_rgba(0,255,255,0.15)] group ${
                      category.skills.length % 2 !== 0 && skillIdx === category.skills.length - 1
                        ? "col-span-2 w-[calc(50%-0.375rem)] mx-auto"
                        : ""
                    }`}
                  >
                    <skill.icon 
                      className="text-2xl mb-2 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-tight text-gray-500 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}



