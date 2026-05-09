"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import Container from "./Container";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/tahaimage8", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/ibtesam-taha/", label: "LinkedIn" },
  { icon: FaFacebook, href: "https://www.facebook.com/ibtesamtaha1", label: "Facebook" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          
          const sections = ["home", "about", "skills", "projects", "contact"];
          const current = sections.find(section => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= 150 && rect.bottom >= 150;
            }
            return false;
          });
          if (current) setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<div className="">
      <nav
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-500 ${
        scrolled ? "py-4 glass border-b border-white/5" : "py-8 bg-transparent"
      }`}
    >
      <Container className="flex justify-between items-center">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black text-gradient tracking-tighter"
        >
          IBTESAM.
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`group relative text-[13px] font-bold uppercase tracking-widest transition-all duration-300 hover:text-white ${
                    activeSection === link.name.toLowerCase()
                      ? "text-white"
                      : "text-gray-500"
                  }`}
                >
                  {link.name}
                  {activeSection === link.name.toLowerCase() ? (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500 will-change-transform"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : (
                    <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-white/30 transition-all duration-300 group-hover:w-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-5 border-l border-white/10 pl-6">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.1 }}
                className="text-gray-500 hover:text-cyan-400 transition-colors"
                title={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
            <motion.a
              href="https://drive.google.com/file/d/1TSFQNjWg_X5xX8HTtjBmC8r7QuGo_9qA/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 glass border-white/10 text-cyan-400 text-[11px] font-black uppercase tracking-widest rounded-xl flex items-center gap-2 hover:bg-cyan-500/10 transition-all"
            >
              CV <FiDownload size={14} />
            </motion.a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden glass-card backdrop-blur-2xl bg-dark/95 flex flex-col items-center justify-center p-10 will-change-transform"
          >
            <ul className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl font-black uppercase tracking-tighter transition-all ${
                      activeSection === link.name.toLowerCase()
                        ? "text-gradient scale-110"
                        : "text-gray-600 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-col items-center gap-8 w-full px-10"
            >
              <a
                href="https://drive.google.com/file/d/1TSFQNjWg_X5xX8HTtjBmC8r7QuGo_9qA/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 glass border-white/10 text-cyan-400 font-black rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-all text-xl"
              >
                Download CV <FiDownload size={24} />
              </a>

              <div className="flex gap-8">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full glass flex items-center justify-center text-gray-400 hover:text-cyan-400"
                  >
                    <social.icon size={28} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
</div>
  );
}

