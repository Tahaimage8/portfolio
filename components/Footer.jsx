"use client";

import { motion } from "framer-motion";
import { HiArrowSmUp } from "react-icons/hi";
import Container from "./Container";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 md:py-16 overflow-hidden border-t border-white/5">
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          
          <div className="text-center md:text-left">
            <motion.a 
              href="#home" 
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-black text-white tracking-[0.2em] mb-4 block"
            >
              IBTESAM<span className="text-cyan-500">.</span>
            </motion.a>
            <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.3em]">
              Creative Frontend Engineer
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="hover:text-white transition-colors">Expertise</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
            
            <p className="text-gray-600 text-[10px] font-bold uppercase tracking-widest text-center">
              © {currentYear} Ibtesam Taha. Crafted with Excellence.
            </p>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-[20px] sm:rounded-[24px] glass flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-500 group border border-white/5"
            title="Scroll to Top"
          >
            <HiArrowSmUp size={24} className="sm:hidden group-hover:animate-bounce" />
            <HiArrowSmUp size={28} className="hidden sm:block group-hover:animate-bounce" />
          </motion.button>
        </div>
      </Container>
      
      {/* Footer Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 bg-cyan-500/5 blur-[100px] pointer-events-none" />
    </footer>
  );
}

