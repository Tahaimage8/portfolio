import { motion } from 'framer-motion';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

function formatText(text) {
  // Simple markdown-like formatter for bold text and lists
  if (!text) return null;
  
  return text.split('\n').map((line, i) => {
    // Process bold text
    const parts = line.split(/(\*\*.*?\*\*)/g);
    const lineContent = parts.map((part, j) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={j} className="text-white font-bold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });

    if (line.startsWith('* ')) {
      return (
        <li key={i} className="ml-4 list-disc text-sm text-gray-300 leading-relaxed">
          {lineContent.slice(1)} {/* Remove the "* " */}
        </li>
      );
    }
    
    // Empty line
    if (line.trim() === '') {
      return <br key={i} />;
    }

    return (
      <p key={i} className="text-sm text-gray-300 leading-relaxed mb-1">
        {lineContent}
      </p>
    );
  });
}

export default function ChatMessage({ message }) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex flex-col mb-4 ${isUser ? 'items-end' : 'items-start'}`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
          isUser
            ? 'bg-cyan-500/20 border border-cyan-500/30 text-white rounded-br-none'
            : 'glass border border-white/5 text-gray-300 rounded-bl-none'
        }`}
      >
        {!isUser && (
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
              <span className="text-[10px] text-cyan-400 font-bold">T</span>
            </div>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Taha AI</span>
          </div>
        )}
        
        <div className="whitespace-pre-wrap font-medium">
          {formatText(message.content)}
        </div>
      </div>

      {/* Render Project Card if attached */}
      {!isUser && message.projectCard && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-3 w-[85%] glass border border-white/10 rounded-2xl overflow-hidden self-start"
        >
          {message.projectCard.image && (
            <div className="relative h-32 w-full">
              <Image 
                src={message.projectCard.image} 
                alt={message.projectCard.name} 
                fill
                sizes="(max-width: 400px) 100vw, 340px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
            </div>
          )}
          <div className="p-4">
            <h4 className="text-white font-bold mb-1">{message.projectCard.name}</h4>
            <p className="text-xs text-gray-400 line-clamp-2 mb-3">{message.projectCard.description}</p>
            <div className="flex flex-wrap gap-1 mb-4">
              {message.projectCard.tech.slice(0, 3).map((t, i) => (
                <span key={i} className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-cyan-400">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              {message.projectCard.github && (
                <a href={message.projectCard.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors">
                  <FaGithub size={14} />
                </a>
              )}
              {message.projectCard.live && (
                <a href={message.projectCard.live} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-cyan-400 transition-colors">
                  <HiOutlineExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Render Contact CTA if attached */}
      {!isUser && message.contactCta && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-3 flex flex-wrap gap-2 self-start"
        >
          <a href="mailto:tahaimage8@gmail.com" className="px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-bold hover:bg-cyan-500/30 transition-colors">
            Email Taha
          </a>
          <a href="https://github.com/tahaimage8" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl glass border border-white/10 text-gray-300 text-xs font-bold hover:text-white transition-colors flex items-center gap-1">
            <FaGithub size={12} /> GitHub
          </a>
        </motion.div>
      )}
    </motion.div>
  );
}
