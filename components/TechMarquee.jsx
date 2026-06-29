"use client";

import { memo } from "react";
import { 
  SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiFramer, SiGreensock,
  SiGit, SiGithub, SiVercel, SiFigma
} from "react-icons/si";
import { HiShieldCheck } from "react-icons/hi";

const techIcons = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "GSAP", icon: SiGreensock },
  { name: "Framer", icon: SiFramer },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: SiGit },
  { name: "Vercel", icon: SiVercel },
  { name: "Better Auth", icon: HiShieldCheck },
];

const TechMarquee = memo(() => {
  return (
    <div className="py-16 relative z-10 overflow-hidden border-y border-white/5 bg-white/[0.02]">
      <div className="flex animate-marquee whitespace-nowrap items-center will-change-transform">
        {/* Double the array for seamless infinite scroll */}
        {[...techIcons, ...techIcons].map((tech, i) => (
          <div key={i} className="flex items-center gap-6 mx-16 text-gray-600 hover:text-white transition-all duration-500 group cursor-default">
            <tech.icon size={32} className="transition-all duration-500 group-hover:scale-125 group-hover:text-cyan-400" />
            <span className="text-2xl font-black uppercase tracking-[0.2em]">{tech.name}</span>
          </div>
        ))}
      </div>
      
      {/* Side Fades */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-dark to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-dark to-transparent z-20 pointer-events-none" />
    </div>
  );
});

TechMarquee.displayName = "TechMarquee";
export default TechMarquee;

