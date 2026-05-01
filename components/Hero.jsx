"use client";

import { motion } from "framer-motion";
import { HiArrowRight, HiOutlineCode, HiOutlineDeviceMobile } from "react-icons/hi";
import { FiLayout } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";
import Container from "./Container";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative py-20 md:py-28 overflow-hidden min-h-screen flex items-center">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-300">
                Available for Projects
              </span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-8">
              Building Modern <br />
              <span className="text-gradient">Web Experiences</span> <br />
              With Clean Code
            </h1>
            
            <p className="text-gray-400 text-base md:text-lg leading-7 mb-12 max-w-2xl mx-auto lg:mx-0 font-medium">
              I’m Ibtesam Taha, a frontend-focused developer learning full-stack development through 
              <span className="text-white font-bold ml-1">Programming Hero</span>. 
              I craft responsive and modern web applications with a focus on performance.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-5 mb-16">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-white text-dark font-black rounded-2xl flex items-center gap-3 transition-transform btn-shine shadow-2xl shadow-white/5"
              >
                View Projects <HiArrowRight size={20} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 glass border-white/10 text-white font-black rounded-2xl flex items-center gap-3 transition-all hover:bg-white/5"
              >
                Contact Me
              </motion.a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0 pt-12 border-t border-white/5">
              {[
                { val: "10+", label: "Projects" },
                { val: "95%", label: "Course" },
                { val: "24/7", label: "Learning" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-2xl md:text-3xl font-black text-white tracking-tighter">{stat.val}</span>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Profile Image Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center items-center order-1 lg:order-2"
          >
            {/* Background Glows */}
            <div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full blur-[100px] animate-pulse" />
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-5 p-5 glass rounded-3xl text-cyan-400 z-20 hidden md:block"
            >
              <HiOutlineCode size={40} />
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-5 p-5 glass rounded-3xl text-purple-400 z-20 hidden md:block"
            >
              <FiLayout size={40} />
            </motion.div>

            {/* Profile Frame */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[60px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-[300px] h-[340px] md:w-[420px] md:h-[480px] glass p-4 rounded-[60px] overflow-hidden">
                <div className="relative w-full h-full rounded-[45px] overflow-hidden bg-slate-900/50 flex items-center justify-center border border-white/5">
                  {!imageError ? (
                    <Image
                      src="/images/profile.jpg"
                      alt="Ibtesam Taha"
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      onError={() => setImageError(true)}
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                      <span className="text-9xl font-black text-white/10 tracking-widest">IT</span>
                    </div>
                  )}
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-4"
      >
        <span className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to explore</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent" />
      </motion.div>
    </section>
  );
}

