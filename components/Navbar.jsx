"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import Container from "./Container";

import { PUBLIC_LINKS } from "@/lib/constants";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: FaGithub, href: PUBLIC_LINKS.GITHUB, label: "GitHub" },
  { icon: FaLinkedin, href: PUBLIC_LINKS.LINKEDIN, label: "LinkedIn" },
  { icon: FaFacebook, href: PUBLIC_LINKS.FACEBOOK, label: "Facebook" },
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
              return rect.top <= 180 && rect.bottom >= 180;
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
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 w-full z-100 transition-all duration-500 ${
          scrolled ? "py-3 glass border-b border-white/5 shadow-2xl" : "py-6 bg-transparent"
        }`}
      >
        <Container className="flex justify-between items-center">
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black text-gradient tracking-tighter"
          >
            IBTASAM.
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-2 p-1.5 glass rounded-full border border-white/5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.name.toLowerCase();
                return (
                  <li key={link.name} className="relative">
                    <a
                      href={link.href}
                      className={`relative z-10 block px-4 py-2 text-[12px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                        isActive ? "text-white" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </a>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 z-0 rounded-full bg-cyan-500/15 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
            
            <div className="flex items-center gap-4 border-l border-white/10 pl-6">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -2, scale: 1.1 }}
                  className="text-gray-400 hover:text-cyan-400 transition-colors p-2"
                  title={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
              <motion.a
                href={PUBLIC_LINKS.RESUME}
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
            aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white focus:outline-none"
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
              className="fixed inset-0 z-40 lg:hidden glass-card backdrop-blur-2xl bg-dark/95 flex flex-col items-center justify-center p-10"
            >
              <ul className="flex flex-col items-center gap-8">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-3xl font-black uppercase tracking-tight transition-all ${
                        activeSection === link.name.toLowerCase()
                          ? "text-cyan-400 scale-105"
                          : "text-gray-400 hover:text-white"
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
                transition={{ delay: 0.4 }}
                className="mt-10 flex flex-col items-center gap-6 w-full px-8"
              >
                <a
                  href={PUBLIC_LINKS.RESUME}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 glass border-white/10 text-cyan-400 font-black rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-all text-lg"
                >
                  Download CV <FiDownload size={20} />
                </a>

                <div className="flex gap-6">
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-cyan-400"
                    >
                      <social.icon size={22} />
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
