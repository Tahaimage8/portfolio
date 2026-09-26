import { motion } from 'framer-motion';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import { PUBLIC_LINKS } from '@/lib/constants';

function formatInlineText(text) {
  if (!text) return null;
  
  // Split by inline backticks `code` first
  const backtickParts = text.split(/(`.*?`)/g);
  
  return backtickParts.map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      const codeContent = part.slice(1, -1);
      return (
        <code 
          key={index} 
          className="px-1.5 py-0.5 my-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono text-[11px] break-all inline-block max-w-full"
        >
          {codeContent}
        </code>
      );
    }
    
    // Process bold text **bold**
    const boldParts = part.split(/(\*\*.*?\*\*)/g);
    return boldParts.map((bPart, bIndex) => {
      if (bPart.startsWith('**') && bPart.endsWith('**') && bPart.length > 4) {
        return <strong key={`${index}-${bIndex}`} className="text-white font-bold">{bPart.slice(2, -2)}</strong>;
      }
      return bPart;
    });
  });
}

function formatText(text) {
  if (!text) return null;

  // Split content by code blocks ```...```
  const codeBlockRegex = /(```[\s\S]*?```)/g;
  const blocks = text.split(codeBlockRegex);

  return blocks.map((block, bIdx) => {
    if (block.startsWith('```') && block.endsWith('```')) {
      const firstLineEnd = block.indexOf('\n');
      let lang = '';
      let code = '';

      if (firstLineEnd !== -1) {
        lang = block.slice(3, firstLineEnd).trim();
        code = block.slice(firstLineEnd + 1, -3);
      } else {
        code = block.slice(3, -3);
      }

      return (
        <div key={bIdx} className="my-2.5 rounded-xl bg-[#070c18] border border-cyan-900/50 overflow-hidden max-w-full">
          {lang && (
            <div className="px-3 py-1 bg-cyan-950/60 border-b border-cyan-900/40 text-[10px] text-cyan-400 font-mono uppercase tracking-wider">
              {lang}
            </div>
          )}
          <div className="p-3 overflow-x-auto custom-scrollbar max-w-full">
            <pre className="text-xs font-mono text-cyan-300 leading-relaxed whitespace-pre font-normal m-0">
              <code>{code.trim()}</code>
            </pre>
          </div>
        </div>
      );
    }

    // Process normal text lines
    const lines = block.split('\n');
    return (
      <div key={bIdx} className="w-full">
        {lines.map((line, i) => {
          if (line.startsWith('* ') || line.startsWith('- ')) {
            return (
              <li key={i} className="ml-4 list-disc text-sm text-gray-200 leading-relaxed my-0.5 break-words [overflow-wrap:anywhere]">
                {formatInlineText(line.slice(2))}
              </li>
            );
          }

          if (line.trim() === '') {
            return <div key={i} className="h-2" />;
          }

          return (
            <p key={i} className="text-sm text-gray-200 leading-relaxed mb-1 break-words [overflow-wrap:anywhere]">
              {formatInlineText(line)}
            </p>
          );
        })}
      </div>
    );
  });
}

export default function ChatMessage({ message }) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex flex-col mb-4 w-full ${isUser ? 'items-end' : 'items-start'}`}
    >
      <div
        className={`max-w-[90%] sm:max-w-[85%] rounded-2xl px-4 py-3 shadow-md overflow-hidden min-w-0 ${
          isUser
            ? 'bg-cyan-500/25 border border-cyan-400/40 text-white rounded-br-none'
            : 'bg-[#131d33] border border-cyan-900/40 text-gray-200 rounded-bl-none'
        }`}
      >
        {!isUser && (
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30 shrink-0">
              <span className="text-[10px] text-cyan-400 font-bold">T</span>
            </div>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Taha AI</span>
          </div>
        )}
        
        <div className="whitespace-pre-wrap font-medium break-words [overflow-wrap:anywhere] min-w-0 max-w-full">
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
          <a href={`mailto:${PUBLIC_LINKS.EMAIL}`} className="px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-bold hover:bg-cyan-500/30 transition-colors">
            Email Taha
          </a>
          <a href={PUBLIC_LINKS.GITHUB} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl glass border border-white/10 text-gray-300 text-xs font-bold hover:text-white transition-colors flex items-center gap-1">
            <FaGithub size={12} /> GitHub
          </a>
        </motion.div>
      )}
    </motion.div>
  );
}
