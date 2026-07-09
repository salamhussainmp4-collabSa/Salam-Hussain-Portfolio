import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Check, MessageSquare, ShieldCheck, Star, Users, PhoneCall, Mail, ChevronDown, Globe, Clock, Calendar, Briefcase, User, Info, DollarSign, MessageCircle } from 'lucide-react';
import { testimonials, contactConfig } from '../data';
// @ts-ignore
import nadirAhmedImg from '../assets/images/nadir_ahmed.jpg';
// @ts-ignore
import syedShahNoorImg from '../assets/images/syed_shah_noor.jpg';
// @ts-ignore
import kaifAliJataniImg from '../assets/images/kaif_ali_jatani.jpg';

export default function Consultation() {
  return (
    <section id="consultation" className="relative py-24 sm:py-32 bg-[#09090B] overflow-hidden">
      {/* Background blur decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#7C3AED]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Testimonials (Client Reviews) section (Point 12) */}
        <div id="testimonials" className="mb-24 border-b border-white/5 pb-24 text-center overflow-hidden">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#06B6D4] uppercase mb-4">
            <Users className="w-4 h-4" />
            Client Reviews
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Reviews From My Work
          </h2>
          <p className="text-sm sm:text-base text-[#B8B8C2] max-w-xl mx-auto mb-16 leading-relaxed">
            What founders, filmmakers, and brands say about working with me to bring their vision to life.
          </p>

          <div className="relative w-full overflow-hidden -mx-6 px-6 sm:-mx-12 sm:px-12">
            <style>{`
              @keyframes testimonial-marquee {
                0% { transform: translate3d(0, 0, 0); }
                100% { transform: translate3d(-25%, 0, 0); }
              }
              .animate-testimonial-marquee {
                animation: testimonial-marquee 40s linear infinite;
              }
              .animate-testimonial-marquee:hover {
                animation-play-state: paused;
              }
            `}</style>

            {/* Fade Gradients for edge blending */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#09090B] via-[#09090B]/60 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#09090B] via-[#09090B]/60 to-transparent z-20 pointer-events-none" />

            {/* Marquee Track */}
            <div className="flex gap-6 w-max animate-testimonial-marquee py-4">
              {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((item, index) => (
                <div
                  key={`${item.id}-testimonial-marquee-${index}`}
                  className="w-[300px] sm:w-[400px] shrink-0 p-6 sm:p-8 rounded-[24px] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-[#06B6D4]/30 hover:shadow-[0_0_25px_rgba(6,182,212,0.08)] transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden group"
                >
                  {/* Subtle hover background glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#06B6D4]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div>
                    {/* Five Star rating */}
                    <div className="flex items-center gap-1.5 mb-5 text-[#06B6D4]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed mb-6 italic">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3.5 pt-4 border-t border-white/5 mt-auto">
                    <img
                      src={
                        item.avatarUrl || 
                        (item.id === 'review-placeholder-2' 
                          ? syedShahNoorImg 
                          : item.id === 'review-placeholder-3' 
                            ? kaifAliJataniImg 
                            : nadirAhmedImg)
                      }
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-white">{item.name}</h4>
                      <p className="text-[10px] sm:text-xs text-[#8A8A96] mt-0.5">
                        {item.name === 'Nadir Ahmed' ? (
                          <span>CEO of <span className="text-[#06B6D4]">Holidays Maker</span></span>
                        ) : item.name === 'Syed Shah Noor' ? (
                          <span>Founder of <span className="text-[#06B6D4]">Vibe & Scale</span></span>
                        ) : item.name === 'Kaif Ali Jatani' ? (
                          <span>Videographer & Photographer</span>
                        ) : (
                          <span>
                            {item.role} at <span className="text-[#06B6D4]">{item.company}</span>
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Consultation Area */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto space-y-12 text-left"
        >
          
          {/* Main Copywriting & CTA Block */}
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#7C3AED] uppercase justify-center">
              <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
              Contact Direct
            </div>
            <h3 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight leading-[1.1] text-center">
              Let’s Discuss Your Project
            </h3>
            <p className="text-sm sm:text-base text-[#B8B8C2] leading-relaxed max-w-2xl mx-auto text-center">
              Choose a date, time, and your time zone that works best for you. I’ll review your request and confirm the meeting via WhatsApp or email within 12 hours.
            </p>

            {/* Large Premium CTA Buttons (Side-by-side on desktop, stacked on mobile) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              
              {/* Button 1: Book a Call (Calendly) */}
              <motion.a
                href={contactConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="group relative inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#06B6D4] text-white shadow-[0_0_12px_rgba(124,58,237,0.12)] hover:shadow-[0_0_25px_rgba(124,58,237,0.3)] border border-white/10 hover:border-transparent cursor-pointer overflow-hidden"
              >
                {/* Micro glow effect inside the button on hover */}
                <span className="absolute inset-0 w-full h-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <span className="text-xs sm:text-sm">📅</span>
                <span>Book a Free Discovery Call</span>
              </motion.a>

              {/* Button 2: Chat on WhatsApp */}
              <motion.a
                href={contactConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="group relative inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#06B6D4] text-white shadow-[0_0_12px_rgba(124,58,237,0.12)] hover:shadow-[0_0_25px_rgba(124,58,237,0.3)] border border-white/10 hover:border-transparent cursor-pointer overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <span className="text-xs sm:text-sm">💬</span>
                <span>Chat on WhatsApp</span>
              </motion.a>

            </div>

            {/* Subtle Guidance Note */}
            <p className="text-xs sm:text-sm font-mono text-[#8A8A96] leading-relaxed max-w-xl mx-auto text-center">
              Not sure which option to choose? Send me a WhatsApp message first, and I’ll guide you.
            </p>
          </div>

          {/* Cards Block: Why Work With Me & Direct Line details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-white/5">
            
            {/* Why Work With Me? card */}
            <div className="p-8 rounded-[24px] border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors duration-300 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/90">Why Work With Me?</h4>
              <ul className="space-y-3.5">
                <li className="flex gap-3 items-start text-sm text-[#B8B8C2]">
                  <Check className="w-4 h-4 text-[#06B6D4] mt-0.5 shrink-0" />
                  <span>Creative content tailored to your brand</span>
                </li>
                <li className="flex gap-3 items-start text-sm text-[#B8B8C2]">
                  <Check className="w-4 h-4 text-[#06B6D4] mt-0.5 shrink-0" />
                  <span>Fast communication</span>
                </li>
                <li className="flex gap-3 items-start text-sm text-[#B8B8C2]">
                  <Check className="w-4 h-4 text-[#06B6D4] mt-0.5 shrink-0" />
                  <span>High-quality editing</span>
                </li>
                <li className="flex gap-3 items-start text-sm text-[#B8B8C2]">
                  <Check className="w-4 h-4 text-[#06B6D4] mt-0.5 shrink-0" />
                  <span>AI-powered creative workflow</span>
                </li>
                <li className="flex gap-3 items-start text-sm text-[#B8B8C2]">
                  <Check className="w-4 h-4 text-[#06B6D4] mt-0.5 shrink-0" />
                  <span>Focus on real business results</span>
                </li>
              </ul>
            </div>

            {/* Direct Line Connection card */}
            <div className="p-8 rounded-[24px] border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors duration-300 flex flex-col justify-center">
              <div className="flex gap-4 items-start">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-[#7C3AED] shrink-0">
                  <ShieldCheck className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Direct Line Connection</h4>
                  <p className="text-xs sm:text-sm text-[#8A8A96] mt-2.5 leading-relaxed">
                    You work directly with me. No middle management or complex agency communication—just pure creative focus on your project.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
