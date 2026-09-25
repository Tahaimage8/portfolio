"use client";

import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { FaGithub, FaFire, FaCodeBranch } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function GithubCalendarWidget({ username = "Tahaimage8" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sleek, high-contrast dark neon cyan theme
  const explicitTheme = {
    light: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    dark: ["#161b22", "#083344", "#0e7490", "#06b6d4", "#22d3ee"]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-16 md:mt-20 glass p-6 sm:p-10 rounded-[32px] md:rounded-[40px] border border-white/10 relative overflow-hidden max-w-5xl mx-auto shadow-2xl"
    >
      {/* Background Decorative Blur Orbs */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 relative z-10 border-b border-white/5 pb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <FaGithub size={24} />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              GitHub Coding Consistency <HiOutlineSparkles className="text-cyan-400 text-sm" />
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm font-medium">
              Daily contributions & commit activity for <span className="text-cyan-400 font-bold">@{username}</span>
            </p>
          </div>
        </div>

        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass border-white/10 text-xs font-black uppercase tracking-wider text-gray-300 hover:text-white hover:border-cyan-400/50 transition-all self-start sm:self-auto"
        >
          <FaCodeBranch className="text-cyan-400" />
          <span>View GitHub</span>
        </a>
      </div>

      {/* Calendar Wrapper with SSR Hydration Safety */}
      <div className="flex justify-center items-center overflow-x-auto custom-scrollbar py-2 relative z-10 min-h-[150px]">
        {mounted ? (
          <GitHubCalendar
            username={username}
            blockSize={13}
            blockMargin={4}
            fontSize={12}
            colorScheme="dark"
            theme={explicitTheme}
            labels={{
              totalCount: "{{count}} contributions in the last year",
            }}
          />
        ) : (
          <div className="w-full h-32 flex items-center justify-center text-cyan-400/70 text-xs font-bold animate-pulse">
            Loading contribution graph...
          </div>
        )}
      </div>

      {/* Footer / Status */}
      <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400 font-medium relative z-10">
        <div className="flex items-center gap-2">
          <FaFire className="text-amber-400" />
          <span>Continuous Engineering & Production Commit Rigor</span>
        </div>
        <div className="flex items-center gap-2 text-cyan-400 font-bold">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>Active Repository Growth</span>
        </div>
      </div>
    </motion.div>
  );
}
