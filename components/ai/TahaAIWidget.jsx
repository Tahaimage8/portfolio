"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineSparkles, HiX, HiOutlinePaperAirplane, HiOutlineChatAlt2 } from 'react-icons/hi';
import ChatMessage from './ChatMessage';
import QuickActions from './QuickActions';

export default function TahaAIWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'model',
      content: "Hi! I'm Taha AI 👋\nI can help you explore Taha's projects, skills, technical background, and career interests. If you're hiring, I can also compare your role requirements with his verified portfolio.",
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [agentStatus, setAgentStatus] = useState("");
  const messagesEndRef = useRef(null);
  const isRequesting = useRef(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  const handleAction = (action) => {
    if (action.type === 'navigate') {
      const el = document.getElementById(action.target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (action.type === 'open_resume') {
      window.open('https://drive.google.com/file/d/1rpHSwdCkjSCTFdDJhZ6WfVsppqkvfi-h/view?usp=drive_link', '_blank', 'noopener,noreferrer');
    } else if (action.type === 'open_github') {
      window.open('https://github.com/tahaimage8', '_blank', 'noopener,noreferrer');
    } else if (action.type === 'text') {
      handleSendMessage(action.text);
    } else if (action.type === 'show_project') {
      setMessages(prev => {
        const lastMsg = prev[prev.length - 1];
        if (lastMsg && lastMsg.role === 'model') {
          return [
            ...prev.slice(0, -1),
            { ...lastMsg, projectCard: action.project }
          ];
        }
        return prev;
      });
    } else if (action.type === 'prepare_contact') {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(new CustomEvent('prefill-contact', { detail: action.data }));
    } else if (action.type === 'show_contact_cta') {
      setMessages(prev => {
        const lastMsg = prev[prev.length - 1];
        if (lastMsg && lastMsg.role === 'model') {
          return [
            ...prev.slice(0, -1),
            { ...lastMsg, contactCta: true }
          ];
        }
        return prev;
      });
    }
  };

  const handleSendMessage = async (customText = null) => {
    const textToSend = customText || input;
    if (!textToSend.trim() || isLoading || isRequesting.current) return;
    
    isRequesting.current = true;
    setInput("");
    
    const newUserMessage = { role: 'user', content: textToSend };
    const newHistory = [...messages, newUserMessage];
    setMessages(newHistory);
    setIsLoading(true);
    setAgentStatus("Thinking...");

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend, history: messages })
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch response");
      }

      setMessages(prev => [...prev, { role: 'model', content: data.message }]);

      if (data.actions && data.actions.length > 0) {
        data.actions.forEach(action => handleAction(action));
      }

    } catch (err) {
      setMessages(prev => [...prev, { 
        role: 'model', 
        content: err.message || "I'm having trouble connecting right now. Please try again later.",
        contactCta: true
      }]);
    } finally {
      setIsLoading(false);
      setAgentStatus("");
      isRequesting.current = false;
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-cyan-950/80 border border-cyan-500/50 text-cyan-400 font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)] backdrop-blur-md hover:bg-cyan-900/80 transition-all"
            aria-label="Ask Taha AI"
          >
            <HiOutlineSparkles size={20} />
            <span className="hidden sm:inline">Ask Taha AI</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[100] w-[calc(100vw-48px)] sm:w-[400px] h-[600px] max-h-[calc(100vh-100px)] glass rounded-3xl border border-cyan-500/30 shadow-2xl flex flex-col overflow-hidden bg-dark/95"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                  <HiOutlineChatAlt2 className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h3 className="text-white font-black text-sm tracking-wide">Taha AI</h3>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">AI Portfolio Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Close chat"
              >
                <HiX size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 relative overflow-y-auto p-4 custom-scrollbar flex flex-col">
              {messages.map((msg, i) => (
                <ChatMessage key={i} message={msg} />
              ))}
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 mb-4 text-gray-400 text-xs font-bold uppercase tracking-wider"
                >
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </span>
                  {agentStatus}
                </motion.div>
              )}

              {/* Quick Actions (only show if last message is from model and not loading) */}
              {!isLoading && messages[messages.length - 1].role === 'model' && (
                <QuickActions onAction={handleAction} />
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-white/[0.02]">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
                className="flex items-center gap-2 relative"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about my projects, skills, or experience..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all font-medium placeholder:text-gray-600"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-xl bg-cyan-500 text-dark disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cyan-400 transition-colors"
                  aria-label="Send message"
                >
                  <HiOutlinePaperAirplane className="rotate-90" size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
