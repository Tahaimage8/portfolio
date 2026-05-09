"use client";

import { memo } from "react";
import { motion } from "framer-motion";

const SectionDivider = memo(() => {
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
});

SectionDivider.displayName = "SectionDivider";
export default SectionDivider;
