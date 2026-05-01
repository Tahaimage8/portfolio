"use client";

import { motion } from "framer-motion";
import { HiOutlineDesktopComputer, HiOutlineTemplate, HiOutlineDeviceMobile, HiOutlineCheckCircle } from "react-icons/hi";
import Container from "./Container";

const services = [
  {
    icon: HiOutlineDesktopComputer,
    title: "Frontend Engineering",
    desc: "Building fast, responsive, and accessible user interfaces using modern frameworks like React and Next.js.",
    features: ["Component-based Architecture", "SEO Optimization", "Performance Tuning"]
  },
  {
    icon: HiOutlineTemplate,
    title: "UI/UX Translation",
    desc: "Translating complex designs into pixel-perfect code while ensuring a smooth, intuitive user experience.",
    features: ["Responsive Layouts", "Interactive Prototypes", "Modern Aesthetics"]
  },
  {
    icon: HiOutlineDeviceMobile,
    title: "Responsive Solutions",
    desc: "Ensuring your digital product looks great and functions perfectly on all devices, from mobile to desktop.",
    features: ["Mobile-first Approach", "Cross-browser Support", "Adaptive Design"]
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden">
      <Container>
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 glass rounded-full text-cyan-400 text-[10px] uppercase tracking-[0.3em] font-black mb-6"
          >
            My Offerings
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
            What I <span className="text-gradient">Deliver</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-7 font-medium">
            I provide high-quality development services tailored to modern business 
            needs and user expectations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              <div className="glass p-8 sm:p-10 rounded-[32px] sm:rounded-[40px] h-full border border-white/5 transition-all duration-700 hover:border-white/10 flex flex-col">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[20px] sm:rounded-3xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white mb-8 shadow-2xl shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-500 shrink-0">
                  <service.icon size={32} className="sm:hidden" />
                  <service.icon size={40} className="hidden sm:block" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-gray-400 text-base md:text-lg leading-7 mb-8 flex-grow font-medium">{service.desc}</p>
                
                <ul className="space-y-3 pt-6 border-t border-white/5 mt-auto">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-500 font-bold tracking-tight text-sm sm:text-base">
                      <HiOutlineCheckCircle size={20} className="text-cyan-500 shrink-0" /> 
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Work With Me */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-32 glass p-8 sm:p-12 lg:p-20 rounded-[40px] lg:rounded-[60px] relative overflow-hidden border border-white/5 shadow-2xl"
        >
          <div className="relative z-10 grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="inline-block px-4 py-1.5 glass rounded-full text-purple-400 text-[10px] uppercase tracking-[0.3em] font-black mb-6"
              >
                The Difference
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 leading-tight tracking-tight">Why <span className="text-gradient">Work With Me?</span></h2>
              <div className="space-y-6 sm:space-y-8">
                {[
                  { title: "Rapid Adaptation", desc: "Successfully mastering the MERN stack with a results-oriented mindset." },
                  { title: "Precision Focus", desc: "Every pixel and every line of code is scrutinized for quality and performance." },
                  { title: "Client Centric", desc: "Translating business goals into functional, beautiful digital solutions." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6">
                    <div className="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mt-1 flex-shrink-0">
                      <HiOutlineCheckCircle size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-black text-white mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-7 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-full flex items-center justify-center min-h-[300px]">
              <div className="absolute w-60 h-60 sm:w-80 sm:h-80 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
              <div className="grid grid-cols-2 gap-4 sm:gap-8 relative z-10 w-full">
                {[
                  { val: "100%", label: "Dedication" },
                  { val: "24/7", label: "Availability" },
                  { val: "High", label: "Quality" },
                  { val: "Clean", label: "Architecture" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-6 sm:p-10 glass rounded-[24px] sm:rounded-[40px] text-center border border-white/5 transition-all duration-500"
                  >
                    <div className="text-2xl sm:text-4xl font-black text-white tracking-tighter mb-2">{stat.val}</div>
                    <div className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-widest font-black">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Decorative Gradients */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-cyan-500/5 to-transparent pointer-events-none" />
        </motion.div>
      </Container>
    </section>
  );
}

