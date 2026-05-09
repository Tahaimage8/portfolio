"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiOutlineCheckCircle, HiArrowRight } from "react-icons/hi";
import { useEffect } from "react";

export default function ServiceModal({ isOpen, onClose, service }) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!service) return null;

  const handleCTAClick = (e) => {
    e.preventDefault();
    onClose();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden glass rounded-[32px] md:rounded-[40px] border border-white/10 shadow-2xl flex flex-col will-change-transform"
          >
            {/* Header */}
            <div className="p-8 pb-4 flex justify-between items-start">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
                  {service.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full glass border-white/5 text-gray-400 hover:text-white transition-colors"
              >
                <HiX size={24} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 pt-4 custom-scrollbar">
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 font-medium">
                {service.desc}
              </p>

              <div className="space-y-6 mb-10">
                <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-4">Detailed Offerings</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-3 text-gray-300 group"
                    >
                      <HiOutlineCheckCircle className="text-cyan-500 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                      <span className="text-sm md:text-base font-bold tracking-tight">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer / CTA */}
            <div className="p-8 pt-4 border-t border-white/5">
              <button
                onClick={handleCTAClick}
                className="w-full py-5 bg-white text-dark font-black rounded-2xl flex items-center justify-center gap-3 transition-all hover:bg-cyan-500 hover:text-white group"
              >
                Let’s Discuss <HiArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Decorative Gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl -mr-16 -mt-16 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 blur-3xl -ml-16 -mb-16 pointer-events-none" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
