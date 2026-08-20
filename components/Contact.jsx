"use client";

import { memo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiCheckCircle, HiExclamationCircle } from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Container from "./Container";
import { PUBLIC_LINKS } from "@/lib/constants";

const Contact = memo(() => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "" // Honeypot field for spam prevention
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    const handlePrefill = (e) => {
      if (e.detail) {
        setFormData((prev) => ({
          ...prev,
          name: e.detail.name || prev.name,
          email: e.detail.email || prev.email,
          subject: e.detail.subject || prev.subject,
          message: e.detail.message || prev.message,
        }));
      }
    };
    window.addEventListener("prefill-contact", handlePrefill);
    return () => window.removeEventListener("prefill-contact", handlePrefill);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "submitting") return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setResponseMessage(data.message || "Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", subject: "", message: "", website: "" });

        // Reset status back to idle after 5 seconds
        setTimeout(() => {
          setStatus("idle");
          setResponseMessage("");
        }, 5000);
      } else {
        setStatus("error");
        setResponseMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setResponseMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left will-change-transform"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 glass rounded-full text-cyan-400 text-[10px] uppercase tracking-[0.3em] font-black mb-6"
            >
              Get In Touch
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-8 leading-tight tracking-tight">
              Let's Create Something <br className="hidden sm:block" />
              <span className="text-gradient">Exceptional</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-12 max-w-xl mx-auto lg:mx-0 leading-7 font-medium">
              Have a visionary project in mind or just want to say hello? I'm always 
              open to discussing new opportunities and creative collaborations.
            </p>
            
            <div className="space-y-6 sm:space-y-8">
              {[
                { icon: HiOutlineMail, label: "Email", val: "tahaimage8@gmail.com", color: "text-cyan-400" },
                { icon: HiOutlinePhone, label: "Phone", val: "014********", color: "text-purple-400" },
                { icon: HiOutlineLocationMarker, label: "Location", val: "Dhaka, Bangladesh", color: "text-blue-400" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[20px] sm:rounded-[24px] glass flex items-center justify-center text-gray-400 group-hover:bg-white/5 transition-all duration-500 border border-white/5 shrink-0">
                    <item.icon size={24} className={`sm:hidden ${item.color}`} />
                    <item.icon size={28} className={`hidden sm:block ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black mb-1">{item.label}</h4>
                    <p className="text-lg sm:text-xl font-black text-white group-hover:text-cyan-400 transition-colors">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="mt-12 sm:mt-16 flex justify-center lg:justify-start gap-4 sm:gap-5">
              {[
                { icon: FaGithub, href: PUBLIC_LINKS.GITHUB, label: "GitHub" },
                { icon: FaLinkedin, href: PUBLIC_LINKS.LINKEDIN, label: "LinkedIn" },
                { icon: FaFacebook, href: PUBLIC_LINKS.FACEBOOK, label: "Facebook" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 glass rounded-[20px] sm:rounded-[24px] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-500 border border-white/5"
                  title={social.label}
                >
                  <social.icon size={20} className="sm:hidden" />
                  <social.icon size={24} className="hidden sm:block" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[32px] sm:rounded-[50px] blur opacity-10 pointer-events-none" />
            <div className="relative glass p-8 sm:p-12 lg:p-16 rounded-[32px] sm:rounded-[50px] border border-white/5">
              
              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 flex items-center gap-3 text-sm font-bold"
                  >
                    <HiCheckCircle size={24} className="shrink-0 text-cyan-400" />
                    <span>{responseMessage}</span>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-center gap-3 text-sm font-bold"
                  >
                    <HiExclamationCircle size={24} className="shrink-0 text-rose-400" />
                    <span>{responseMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit} noValidate>
                {/* Honeypot Spam Prevention Field */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    value={formData.website}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black ml-2 block">
                      Name
                    </label>
                    <input 
                      id="contact-name"
                      name="name"
                      type="text" 
                      placeholder="Ibtesam Taha"
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`w-full bg-white/5 border rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all font-bold placeholder:text-gray-700 text-sm sm:text-base ${
                        errors.name ? "border-rose-500/60" : "border-white/10"
                      }`}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-rose-400 font-bold ml-2 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black ml-2 block">
                      Email
                    </label>
                    <input 
                      id="contact-email"
                      name="email"
                      type="email" 
                      placeholder="taha@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`w-full bg-white/5 border rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all font-bold placeholder:text-gray-700 text-sm sm:text-base ${
                        errors.email ? "border-rose-500/60" : "border-white/10"
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-rose-400 font-bold ml-2 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black ml-2 block">
                    Subject
                  </label>
                  <input 
                    id="contact-subject"
                    name="subject"
                    type="text" 
                    placeholder="Project Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    aria-invalid={errors.subject ? "true" : "false"}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    className={`w-full bg-white/5 border rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all font-bold placeholder:text-gray-700 text-sm sm:text-base ${
                      errors.subject ? "border-rose-500/60" : "border-white/10"
                    }`}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-xs text-rose-400 font-bold ml-2 mt-1">{errors.subject}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black ml-2 block">
                    Message
                  </label>
                  <textarea 
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your amazing project..."
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full bg-white/5 border rounded-[24px] px-6 py-5 text-white focus:outline-none focus:border-cyan-500/50 transition-all font-bold placeholder:text-gray-700 resize-none text-sm sm:text-base ${
                      errors.message ? "border-rose-500/60" : "border-white/10"
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" className="text-xs text-rose-400 font-bold ml-2 mt-1">{errors.message}</p>
                  )}
                </div>
                
                <motion.button
                  type="submit"
                  disabled={status === "submitting"}
                  whileHover={status !== "submitting" ? { scale: 1.02 } : {}}
                  whileTap={status !== "submitting" ? { scale: 0.98 } : {}}
                  className={`w-full py-5 font-black rounded-2xl flex items-center justify-center gap-3 shadow-2xl transition-all text-sm sm:text-base ${
                    status === "success"
                      ? "bg-cyan-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                      : status === "submitting"
                      ? "bg-gray-300 text-gray-700 cursor-not-allowed opacity-80"
                      : "bg-white text-dark btn-shine"
                  }`}
                >
                  {status === "submitting" ? (
                    <>
                      <span className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : status === "success" ? (
                    <>
                      <HiCheckCircle size={22} className="text-black" />
                      <span>✓ Message Sent</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <FiSend size={20} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
    </section>
  );
});

Contact.displayName = "Contact";
export default Contact;
