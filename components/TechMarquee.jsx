"use client";

import { memo } from "react";
import { 
  SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiNestjs, SiPython, SiFastapi,
  SiMongodb, SiPostgresql, SiPrisma, SiDocker, SiNginx,
  SiGit, SiGithub, SiVercel
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const techIcons = [
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#E2E8F0" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Prisma ORM", icon: SiPrisma, color: "#E2E8F0" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Nginx", icon: SiNginx, color: "#009639" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" }
];

const TechMarquee = memo(() => {
  return (
    <div className="py-12 relative z-10 overflow-hidden border-y border-white/5 bg-white/[0.02]">
      <div className="flex animate-marquee whitespace-nowrap items-center will-change-transform" style={{ animationDuration: '30s' }}>
        {[...techIcons, ...techIcons].map((tech, i) => (
          <div key={`${tech.name}-${i}`} className="flex items-center gap-4 md:gap-5 mx-6 md:mx-10 text-gray-600 transition-all duration-500 group cursor-default">
            <tech.icon 
              className="text-[24px] md:text-[32px] transition-transform duration-500 group-hover:scale-110"
              style={{ color: tech.color }}
            />
            <span className="text-base md:text-xl font-black uppercase tracking-[0.2em] transition-colors duration-500 group-hover:text-white">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
      
      {/* Side Fades */}
      <div className="absolute top-0 left-0 w-24 md:w-32 h-full bg-gradient-to-r from-dark to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 md:w-32 h-full bg-gradient-to-l from-dark to-transparent z-20 pointer-events-none" />
    </div>
  );
});

TechMarquee.displayName = "TechMarquee";
export default TechMarquee;

