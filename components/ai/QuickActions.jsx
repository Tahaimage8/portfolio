import { motion } from 'framer-motion';

export default function QuickActions({ onAction }) {
  const actions = [
    { label: "Explore Projects", type: "navigate", target: "projects" },
    { label: "Check Job Fit", type: "text", text: "I'm hiring a developer. Let's check if Taha is a good fit." },
    { label: "About Taha", type: "navigate", target: "about" },
    { label: "View Resume", type: "action", action: "open_resume" },
    { label: "Contact Taha", type: "navigate", target: "contact" },
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {actions.map((action, idx) => (
        <motion.button
          key={idx}
          onClick={() => onAction(action)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="px-3 py-1.5 text-xs font-bold rounded-full glass border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
        >
          {action.label}
        </motion.button>
      ))}
    </div>
  );
}
