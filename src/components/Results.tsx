import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, Plus, CheckCircle2, Award, Zap, Sparkles, Instagram, Youtube, Image, ArrowRight } from 'lucide-react';
import { caseStudies, processSteps } from '../data';
// @ts-ignore
import instagramReelStrategyImg from '../assets/images/instagram_reel_strategy.png';
// @ts-ignore
import accountGrowthDriveImg from '../assets/images/account_growth_drive.png';
// @ts-ignore
import reachBefore from '../assets/images/reach_before.png';
// @ts-ignore
import reachAfter from '../assets/images/reach_after.png';
// @ts-ignore
import growthBefore from '../assets/images/growth_before.png';
// @ts-ignore
import growthAfter from '../assets/images/growth_after.png';

export default function Results() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="results" className="relative py-24 sm:py-32 bg-[#111114]">
      {/* Subtle background glow */}
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-[#06B6D4]/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[450px] h-[450px] rounded-full bg-[#7C3AED]/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#7C3AED] uppercase mb-4">
            <Award className="w-4 h-4" />
            My Achievements
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Results I’ve Achieved
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#B8B8C2] leading-relaxed">
            I focus on creating content that doesn't just look pretty, but gets real organic traction and helps your brand grow.
          </p>
        </div>

        {/* Premium Case Studies with Full-Bleed 500x500 Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="glass rounded-[28px] relative overflow-hidden group flex flex-col justify-between border border-white/5 hover:border-white/10 min-h-[580px]"
            >
              <div className="p-6 sm:p-8 pb-4">
                {/* Platform Badge & Title */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-2 mb-6 w-full">
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      {study.platform === 'Instagram' ? (
                        <Instagram className="w-3.5 h-3.5 text-pink-500 shrink-0" />
                      ) : study.platform === 'YouTube' ? (
                        <Youtube className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      ) : (
                        <Sparkles className="w-3.5 h-3.5 text-[#06B6D4] shrink-0" />
                      )}
                      <span className="text-[12px] sm:text-[13px] font-mono tracking-widest uppercase text-white font-black">
                        {study.platform}
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-[#8A8A96] font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                      {study.category}
                    </span>
                  </div>
                  <div className="sm:shrink-0">
                    <span className="inline-block text-[10px] sm:text-xs font-mono font-bold text-[#06B6D4] bg-[#06B6D4]/10 px-2.5 py-1 rounded-md whitespace-nowrap">
                      {study.result}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight mb-3">
                  {study.projectName}
                </h3>
                
                <p className="text-sm text-[#B8B8C2] leading-relaxed font-sans">
                  {study.explanation}
                </p>
              </div>

              {/* Bleeding 500x500 image container that goes flush to the card's borders */}
              <div className="relative mt-auto w-full aspect-square overflow-hidden border-t border-white/5 bg-black/20">
                {/* Luxury glassmorphism overlays and soft blue/purple glows around the image bounds */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#06B6D4]/10 via-transparent to-[#7C3AED]/10 opacity-70 pointer-events-none" />
                
                <img
                  src={study.id === 'case-reel-views' ? instagramReelStrategyImg : accountGrowthDriveImg}
                  alt={study.projectName}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ width: '100%', height: '100%' }}
                  referrerPolicy="no-referrer"
                />
                
                {/* Custom gradient vignette to blend the image border seamlessly */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dedicated Before & After Section (Point 10) */}
        <div className="border-t border-white/5 pt-20 mb-24">
          <div className="text-left max-w-xl mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#06B6D4] uppercase mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              Performance Proof
            </div>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Before & After Growth
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#B8B8C2]">
              Real strategic changes drive clear business growth. Here is a comparison of my work results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Growth Card 1 */}
            <div className="glass rounded-[24px] p-6 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#7C3AED]/5 blur-xl" />
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#8A8A96] mb-4">Instagram Reel Reach</h4>
              
              <div className="flex items-center justify-between py-4 border-b border-white/5">
                <div>
                  <span className="block text-[10px] font-mono text-red-500 uppercase font-bold">Before</span>
                  <span className="text-sm font-semibold text-red-400/70 line-through">Avg. 2K Views</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#7C3AED] rotate-90 md:rotate-0" />
                <div className="text-right">
                  <span className="block text-[10px] font-mono text-[#06B6D4] uppercase font-bold">After</span>
                  <span className="text-lg font-bold text-white font-mono shadow-[0_0_15px_rgba(34,197,94,0.15)] bg-green-500/10 px-2 py-1 rounded">400K+ Views</span>
                </div>
              </div>

              <p className="text-xs text-[#8A8A96] leading-relaxed mt-4 mb-4">
                Organic views achieved by applying custom visual hooks, fast-paced styling, and direct engagement strategies.
              </p>

              {/* 9:16 Before & After Image Comparison */}
              <div className="grid grid-cols-2 gap-3">
                {/* Before Image */}
                <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-black/40 border border-white/5 group-hover:border-white/10 transition-all duration-300">
                  <div className="absolute top-2 left-2 z-10 px-1.5 py-0.5 rounded text-[8px] font-mono tracking-widest uppercase bg-black/60 text-red-500 border border-red-500/20 font-bold">
                    Before
                  </div>
                  <img
                    src={reachBefore}
                    alt="Reach Before"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* After Image */}
                <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-black/40 border border-white/5 group-hover:border-white/10 transition-all duration-300">
                  <div className="absolute top-2 left-2 z-10 px-1.5 py-0.5 rounded text-[8px] font-mono tracking-widest uppercase bg-[#06B6D4]/20 text-[#06B6D4] border border-[#06B6D4]/30 font-bold">
                    After
                  </div>
                  <img
                    src={reachAfter}
                    alt="Reach After"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Growth Card 2 */}
            <div className="glass rounded-[24px] p-6 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-[#06B6D4]/5 blur-xl" />
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#8A8A96] mb-4">Account Growth Rate</h4>
              
              <div className="flex items-center justify-between py-4 border-b border-white/5">
                <div>
                  <span className="block text-[10px] font-mono text-red-500 uppercase font-bold">Before</span>
                  <span className="text-sm font-semibold text-red-400/70">Flat Reach</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#06B6D4] rotate-90 md:rotate-0" />
                <div className="text-right">
                  <span className="block text-[10px] font-mono text-[#06B6D4] uppercase font-bold">After</span>
                  <span className="text-lg font-bold text-white font-mono bg-indigo-500/10 px-2 py-1 rounded">Thousands Daily</span>
                </div>
              </div>

              <p className="text-xs text-[#8A8A96] leading-relaxed mt-4 mb-4">
                Consistent content scheduling and structured series planning to attract regular organic views.
              </p>

              {/* 9:16 Before & After Image Comparison */}
              <div className="grid grid-cols-2 gap-3">
                {/* Before Image */}
                <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-black/40 border border-white/5 group-hover:border-white/10 transition-all duration-300">
                  <div className="absolute top-2 left-2 z-10 px-1.5 py-0.5 rounded text-[8px] font-mono tracking-widest uppercase bg-black/60 text-red-500 border border-red-500/20 font-bold">
                    Before
                  </div>
                  <img
                    src={growthBefore}
                    alt="Growth Before"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* After Image */}
                <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-black/40 border border-white/5 group-hover:border-white/10 transition-all duration-300">
                  <div className="absolute top-2 left-2 z-10 px-1.5 py-0.5 rounded text-[8px] font-mono tracking-widest uppercase bg-[#06B6D4]/20 text-[#06B6D4] border border-[#06B6D4]/30 font-bold">
                    After
                  </div>
                  <img
                    src={growthAfter}
                    alt="Growth After"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Timeline / How I Work Section (Point 11) */}
        <div id="workflow" className="border-t border-white/5 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side timeline header */}
            <div className="lg:col-span-5 text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#06B6D4] uppercase mb-4">
                <Zap className="w-3.5 h-3.5" />
                My Process
              </div>
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight leading-snug">
                How I Work
              </h3>
              <p className="mt-4 text-sm sm:text-base text-[#B8B8C2] leading-relaxed mb-8 font-sans">
                I handle the entire content creation loop myself, ensuring direct communication, fast delivery times, and consistent high-quality results.
              </p>

              {/* Quick mini-benefits block */}
              <div className="space-y-4">
                <svg className="w-0 h-0 absolute pointer-events-none" aria-hidden="true">
                  <defs>
                    <linearGradient id="results-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7C3AED" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4" stroke="url(#results-icon-gradient)" />
                  <span className="text-xs font-mono uppercase tracking-wider text-white">Direct communication with me</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4" stroke="url(#results-icon-gradient)" />
                  <span className="text-xs font-mono uppercase tracking-wider text-white">No middleman or agency delays</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4" stroke="url(#results-icon-gradient)" />
                  <span className="text-xs font-mono uppercase tracking-wider text-white">Consistent visual standards</span>
                </div>
              </div>
            </div>

            {/* Right side interactive timeline accordions */}
            <div className="lg:col-span-7 space-y-4">
              {processSteps.map((step, index) => {
                const isActive = activeStep === index;
                
                return (
                  <div
                    key={step.phase}
                    onClick={() => setActiveStep(activeStep === index ? -1 : index)}
                    className={`text-left rounded-[20px] border transition-all duration-500 cursor-pointer overflow-hidden ${
                      isActive 
                        ? 'bg-[#18181C] border-[#7C3AED]/40 shadow-premium' 
                        : 'bg-[#18181C]/40 border-white/5 hover:border-white/10 hover:bg-[#18181C]/60'
                    }`}
                  >
                    {/* Accordion Trigger Header */}
                    <div className="p-6 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className={`text-sm font-mono tracking-wider font-bold ${
                          isActive ? 'text-[#06B6D4]' : 'text-[#8A8A96]'
                        }`}>
                          {step.phase}
                        </span>
                        <h4 className={`text-base sm:text-lg font-display font-medium transition-colors ${
                          isActive ? 'text-white' : 'text-[#B8B8C2]'
                        }`}>
                          {step.title}
                        </h4>
                      </div>

                      <div className="flex items-center gap-3">
                        <Plus className={`w-4 h-4 text-[#B8B8C2] transition-transform duration-300 ${
                          isActive ? 'rotate-45 text-[#06B6D4]' : ''
                        }`} />
                      </div>
                    </div>

                    {/* Accordion Content Body */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-6 pt-2 border-t border-white/5">
                            <p className="text-xs sm:text-sm text-[#B8B8C2] leading-relaxed mb-6 font-sans">
                              {step.description}
                            </p>

                            {/* Deliverables tags */}
                            <div>
                              <div className="text-[10px] font-mono uppercase tracking-widest text-[#8A8A96] mb-3 flex items-center gap-1.5">
                                <Sparkles className="w-3 h-3 text-[#06B6D4]" />
                                Key Deliverables
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {step.deliverables.map((deliv) => (
                                  <span
                                    key={deliv}
                                    className="text-[10px] sm:text-xs font-mono text-white bg-white/5 px-3 py-1.5 rounded-full border border-white/5 hover:border-white/10 transition-colors"
                                  >
                                    {deliv}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
