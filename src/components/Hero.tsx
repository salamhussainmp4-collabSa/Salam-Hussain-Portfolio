import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Sparkles, User, CheckCircle2 } from 'lucide-react';
import { PortfolioItem } from '../types';
import { contactConfig } from '../data';
// @ts-ignore
import salamPortrait from '../assets/images/salam_portrait_real_1783091485043.png';

interface HeroProps {
  onPlayFeatured: (item: PortfolioItem | null) => void;
  featuredItem?: PortfolioItem;
}

export default function Hero({ onPlayFeatured, featuredItem }: HeroProps) {
  // Static headline as requested by the user
  const headline = "Creative Content That Gets Real Results.";

  // Dynamic image sources list starting with user uploaded filenames
  const [imageIndex, setImageIndex] = React.useState(0);
  const imageSources = [
    "/src/assets/images/salam_portrait.jpg",
    "/src/assets/images/salam_portrait.png",
    "/src/assets/images/salam_portrait.jpeg",
    salamPortrait
  ];

  const handleImageError = () => {
    if (imageIndex < imageSources.length - 1) {
      setImageIndex(prev => prev + 1);
    }
  };

  // WhatsApp Link
  const waNumber = "1234567890"; // Dummy but realistic structure
  const waMessage = encodeURIComponent("Hello Salam! I saw your portfolio and would love to discuss a project with you.");
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#09090B]">
      {/* Cinematic subtle radial gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(17,17,20,0.8)_0%,rgba(9,9,11,1)_100%)] pointer-events-none" />

      {/* Floating Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-[#4F46E5]/10 blur-[130px] animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] rounded-full bg-[#06B6D4]/10 blur-[150px] animate-pulse-slow-reverse" />
        <div className="absolute top-[35%] right-[20%] w-[300px] h-[300px] rounded-full bg-[#7C3AED]/8 blur-[120px] animate-pulse-slow" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copywriting & Content */}
          <div className="lg:col-span-7 text-left space-y-8 flex flex-col justify-center">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-1.5 py-1.5 px-3 sm:px-4 rounded-full border border-white/10 bg-white/5 text-[9px] xs:text-[10px] sm:text-[11px] uppercase tracking-wider xs:tracking-[0.15em] sm:tracking-[0.2em] text-[#8A8A96] self-start whitespace-nowrap"
            >
              <Sparkles className="w-3 h-3 text-[#06B6D4] shrink-0" />
              <span>Filmmaker • Video Editor • Photographer</span>
            </motion.div>

            {/* Title / Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-[1.1]"
              >
                {headline.split(' ').map((word, index, arr) => {
                  // Style specific words with dynamic glowing gradient to feel premium
                  const isLastTwo = index >= arr.length - 2;
                  if (isLastTwo) {
                    return (
                      <span key={index} className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-[#06B6D4] font-extrabold">
                        {word}{' '}
                      </span>
                    );
                  }
                  return word + ' ';
                })}
              </motion.h1>
            </div>

            {/* Simple professional paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base md:text-lg text-[#B8B8C2] leading-relaxed max-w-xl font-sans"
            >
              I help businesses grow through creative videos, photography, AI content, and social media strategies that capture attention and build trust. Whether it’s a viral reel, cinematic photography, or AI-powered content, I create content that helps brands stand out online.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-row flex-wrap items-center justify-center sm:justify-start gap-3 pt-2 w-full"
            >
              <a
                id="cta-book-call"
                href="#consultation"
                className="group relative px-4.5 py-2 rounded-full text-xs font-mono tracking-wider uppercase font-bold transition-all duration-300 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#06B6D4] text-white shadow-[0_0_15px_rgba(124,58,237,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-1.5 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                Let's Discuss
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                id="cta-whatsapp"
                href={contactConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-4.5 py-2 rounded-full text-xs font-mono tracking-wider uppercase font-bold transition-all duration-300 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#06B6D4] text-white shadow-[0_0_15px_rgba(124,58,237,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-1.5 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <MessageSquare className="w-3.5 h-3.5 text-[#06B6D4] group-hover:scale-110 transition-transform" />
                WhatsApp
              </a>
            </motion.div>

            {/* Quick mini-trust points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-x-6 gap-y-2 pt-4 border-t border-white/5"
            >
              <svg className="w-0 h-0 absolute pointer-events-none" aria-hidden="true">
                <defs>
                  <linearGradient id="hero-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex items-center gap-2 text-xs text-[#8A8A96]">
                <CheckCircle2 className="w-3.5 h-3.5" stroke="url(#hero-icon-gradient)" />
                <span>Tailored for your brand</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#8A8A96]">
                <CheckCircle2 className="w-3.5 h-3.5" stroke="url(#hero-icon-gradient)" />
                <span>AI-powered workflow</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#8A8A96]">
                <CheckCircle2 className="w-3.5 h-3.5" stroke="url(#hero-icon-gradient)" />
                <span>Focused on business results</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Premium Glassmorphic Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[360px] rounded-[32px] overflow-hidden border border-white/10 bg-[#0c0c0e]/40 backdrop-blur-3xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),0_24px_50px_rgba(0,0,0,0.8)] flex flex-col items-center p-8 text-center group"
            >
              {/* Subtle moving / pulsing background gradients inside the card */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent z-0 pointer-events-none" />
              
              {/* Premium Glow elements behind card */}
              <div className="absolute top-[10%] left-[10%] w-36 h-36 rounded-full bg-[#7C3AED]/25 blur-[55px] group-hover:scale-110 transition-transform duration-1000 pointer-events-none" />
              <div className="absolute bottom-[20%] right-[10%] w-36 h-36 rounded-full bg-[#06B6D4]/20 blur-[55px] group-hover:scale-110 transition-transform duration-1000 pointer-events-none" />

              {/* Portrait inside circular frame */}
              <div className="relative z-10 w-44 h-44 rounded-full p-[3px] bg-gradient-to-tr from-[#7C3AED] via-indigo-500 to-[#06B6D4] shadow-[0_0_24px_rgba(124,58,237,0.35)] mb-6 transition-all duration-500 group-hover:shadow-[0_0_32px_rgba(6,182,212,0.45)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-black relative">
                  <img
                    src={imageSources[imageIndex]}
                    alt="Salam Hussain"
                    onError={handleImageError}
                    className="w-full h-full object-cover object-[center_15%] group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Text display */}
              <div className="relative z-10 space-y-2 mb-8">
                <h3 className="text-xl font-display font-bold text-white tracking-tight">
                  Salam Hussain
                </h3>
                <p className="text-[10px] font-mono tracking-widest text-[#8A8A96] uppercase whitespace-nowrap">
                  Video Editor • Photographer • Filmmaker
                </p>
              </div>

              {/* Three Premium Badges */}
              <div className="relative z-10 w-full flex flex-col gap-2.5">
                {[
                  "Video Editing",
                  "Photography",
                  "Creative Strategy"
                ].map((badge, idx) => (
                  <div
                    key={badge}
                    className="flex items-center gap-3 px-4.5 py-3 rounded-2xl border border-white/5 bg-white/[0.015] backdrop-blur-md hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group/badge"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#06B6D4] flex items-center justify-center p-[1px] shadow-sm">
                      <div className="w-full h-full rounded-full bg-[#0c0c0e] flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-[#06B6D4]" />
                      </div>
                    </div>
                    <span className="text-xs font-medium text-white/90 tracking-wide group-hover/badge:text-white transition-colors">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
