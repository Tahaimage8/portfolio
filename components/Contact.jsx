"use client";

import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Container from "./Container";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 glass rounded-full text-cyan-400 text-[10px] uppercase tracking-[0.3em] font-black mb-6"
            >
              Get In Touch
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 leading-tight tracking-tight">
              Let's Create Something <br className="hidden sm:block" />
              <span className="text-gradient">Exceptional</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-12 max-w-xl mx-auto lg:mx-0 leading-7 font-medium">
              Have a visionary project in mind or just want to say hello? I'm always 
              open to discussing new opportunities and creative collaborations.
            </p>
            
            <div className="space-y-6 sm:space-y-8">
              {[
                { icon: HiOutlineMail, label: "Email", val: "tahaimage8@gmail.com", color: "text-cyan-400" },
                { icon: HiOutlinePhone, label: "Phone", val: "01406718710", color: "text-purple-400" },
                { icon: HiOutlineLocationMarker, label: "Location", val: "Dhaka, Bangladesh", color: "text-blue-400" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[20px] sm:rounded-[24px] glass flex items-center justify-center text-gray-400 group-hover:bg-white/5 transition-all duration-500 border border-white/5 shrink-0">
                    <item.icon size={24} className={`sm:hidden ${item.color}`} />
                    <item.icon size={28} className={`hidden sm:block ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black mb-1">{item.label}</h4>
                    <p className="text-lg sm:text-xl font-black text-white group-hover:text-cyan-400 transition-colors">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="mt-12 sm:mt-16 flex justify-center lg:justify-start gap-4 sm:gap-5">
              {[
                { icon: FaGithub, href: "https://github.com/tahaimage8", label: "GitHub" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/ibtesam-taha/", label: "LinkedIn" },
                { icon: FaFacebook, href: "https://www.facebook.com/ibtesamtaha1", label: "Facebook" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 glass rounded-[20px] sm:rounded-[24px] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-500 border border-white/5"
                  title={social.label}
                >
                  <social.icon size={20} className="sm:hidden" />
                  <social.icon size={24} className="hidden sm:block" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[32px] sm:rounded-[50px] blur opacity-10 pointer-events-none" />
            <div className="relative glass p-8 sm:p-12 lg:p-16 rounded-[32px] sm:rounded-[50px] border border-white/5">
              <form className="space-y-6 sm:space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black ml-2">Name</label>
                    <input 
                      type="text" 
                      placeholder="Ibtesam Taha"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all font-bold placeholder:text-gray-700 text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black ml-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="taha@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all font-bold placeholder:text-gray-700 text-sm sm:text-base"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black ml-2">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Project Collaboration"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all font-bold placeholder:text-gray-700 text-sm sm:text-base"
                  />
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black ml-2">Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell me about your amazing project..."
                    className="w-full bg-white/5 border border-white/10 rounded-[24px] px-6 py-5 text-white focus:outline-none focus:border-cyan-500/50 transition-all font-bold placeholder:text-gray-700 resize-none text-sm sm:text-base"
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-white text-dark font-black rounded-2xl flex items-center justify-center gap-3 shadow-2xl transition-transform btn-shine text-sm sm:text-base"
                >
                  SEND MESSAGE <FiSend size={20} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
    </section>
  );
}

