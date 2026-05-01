"use client";

import { motion } from "framer-motion";
import { HiOutlineLightBulb, HiOutlinePencilAlt, HiOutlineCode } from "react-icons/hi";
import { FaRocket } from "react-icons/fa";
import Container from "./Container";

const steps = [
  {
    icon: HiOutlineLightBulb,
    title: "Discovery & Ideation",
    desc: "Understanding core requirements and brainstorming creative solutions to solve complex problems.",
    color: "bg-yellow-500/10 text-yellow-500"
  },
  {
    icon: HiOutlinePencilAlt,
    title: "Strategic Design",
    desc: "Creating high-fidelity UI designs with a focus on usability, accessibility, and modern aesthetics.",
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    icon: HiOutlineCode,
    title: "Clean Development",
    desc: "Writing modular, performant code using React, Next.js, and best practices in frontend engineering.",
    color: "bg-cyan-500/10 text-cyan-400"
  },
  {
    icon: FaRocket,
    title: "Launch & Optimize",
    desc: "Rigorous testing, performance tuning, and deploying to high-availability production environments.",
    color: "bg-green-500/10 text-green-500"
  }
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-20 md:py-28">
      <Container>
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 glass rounded-full text-yellow-400 text-[10px] uppercase tracking-[0.3em] font-black mb-6"
          >
            My Workflow
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Project <span className="text-gradient">Process</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-7 max-w-2xl mx-auto font-medium">
            I follow a structured methodology to transform ideas into exceptional 
            digital products that deliver results.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[100px] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15, type: "spring", bounce: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`w-32 h-32 rounded-[40px] ${step.color} flex items-center justify-center mb-8 transition-all duration-700 group-hover:scale-110 group-hover:rotate-[360deg] shadow-2xl border border-white/5 relative`}>
                <step.icon size={48} />
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-xs font-black text-white shadow-xl">
                  0{i + 1}
                </div>
              </div>
              <h3 className="text-xl font-black text-white mb-4 tracking-tight">{step.title}</h3>
              <p className="text-gray-500 text-base md:text-lg leading-7 font-medium px-4">{step.desc}</p>
              
              {/* Progress Indicator */}
              <div className="mt-8 w-full px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-600"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

