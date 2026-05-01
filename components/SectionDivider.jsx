"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-8">
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100px", opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
      />
    </div>
  );
}
