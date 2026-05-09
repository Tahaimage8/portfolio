"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { 
  HiOutlineDesktopComputer, 
  HiOutlineServer, 
  HiOutlineGlobeAlt,
  HiOutlineCheckCircle,
  HiArrowRight
} from "react-icons/hi";
import Container from "./Container";
import ServiceModal from "./ServiceModal";

export default function Services() {
  const services = useMemo(() => [
    {
      icon: HiOutlineDesktopComputer,
      title: "Frontend Development",
      desc: "Building clean, responsive, and user-friendly interfaces using React.js, Next.js, Tailwind CSS, and modern frontend practices.",
      points: [
        "React & Next.js UI",
        "Responsive Layouts",
        "Clean Component Structure"
      ],
      details: [
        "React.js interface development",
        "Next.js application structure",
        "Tailwind CSS responsive design",
        "Reusable component architecture",
        "Modern UI implementation",
        "Mobile-first responsive layout",
        "UI optimization and clean code practice",
        "Dynamic routing",
        "Smooth animations",
        "Interactive frontend experiences"
      ],
      color: "from-cyan-500 to-blue-600",
      shadow: "shadow-cyan-500/20"
    },
    {
      icon: HiOutlineServer,
      title: "Backend Development",
      desc: "Developing backend APIs and database-connected systems using Node.js, Express.js, MongoDB, and Firebase.",
      points: [
        "REST API Development",
        "MongoDB Integration",
        "Firebase Authentication"
      ],
      details: [
        "Node.js backend development",
        "Express.js REST API development",
        "MongoDB database integration",
        "Firebase authentication system",
        "CRUD functionality",
        "API routing and middleware",
        "Secure backend structure",
        "Backend logic organization",
        "Real-world backend workflow"
      ],
      color: "from-purple-500 to-indigo-600",
      shadow: "shadow-purple-500/20"
    },
    {
      icon: HiOutlineGlobeAlt,
      title: "Full Stack Web Apps",
      desc: "Creating complete web applications with frontend, backend, authentication, database, and deployment-ready architecture.",
      points: [
        "Frontend + Backend Integration",
        "Authentication System",
        "Deployment Ready Apps"
      ],
      details: [
        "Complete frontend + backend integration",
        "Authentication systems",
        "Database-connected applications",
        "API integration",
        "Responsive dashboard/web app structure",
        "Deployment-ready architecture",
        "Full application workflow",
        "Modern stack workflow",
        "End-to-end application development"
      ],
      color: "from-blue-500 to-cyan-600",
      shadow: "shadow-blue-500/20"
    }
  ], []);

  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="relative overflow-hidden py-20 md:py-28">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[150px] pointer-events-none" />

      <Container>
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 glass rounded-full text-cyan-400 text-[10px] uppercase tracking-[0.3em] font-black mb-6"
          >
            Hire Me For
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight"
          >
            My Expert <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-7 font-medium"
          >
            I build modern, responsive, and scalable web solutions for frontend, 
            backend, and full stack development needs.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => openModal(service)}
              className="group cursor-pointer will-change-transform"
            >
              <div className="glass p-8 sm:p-10 rounded-[40px] h-full border border-white/5 transition-all duration-500 group-hover:border-white/20 group-hover:shadow-2xl flex flex-col relative overflow-hidden">
                {/* Glass Reflection Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Service Icon */}
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-8 shadow-2xl ${service.shadow} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shrink-0`}>
                  <service.icon size={36} />
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tight group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow font-medium line-clamp-3">
                  {service.desc}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.points.map((point, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-500 font-bold tracking-tight text-sm">
                      <HiOutlineCheckCircle size={18} className="text-cyan-500 shrink-0" /> 
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-cyan-400 font-black text-sm uppercase tracking-widest pt-4 border-t border-white/5 group-hover:gap-4 transition-all">
                  Learn More <HiArrowRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Work With Me Section */}
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

      {/* Service Modal */}
      <ServiceModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        service={selectedService} 
      />
    </section>
  );
}
