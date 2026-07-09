import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Play, Camera, Film, ArrowRight, Sparkles } from 'lucide-react';
import { PortfolioItem } from '../types';
import { portfolioItems } from '../data';

interface ShowcaseProps {
  onSelectItem: (item: PortfolioItem) => void;
}

type CategoryType = 'All' | 'Cinematic Videos' | 'Reels';

function ProjectCard({ 
  item, 
  onSelectItem, 
  isVertical, 
  isLandscape 
}: { 
  key?: string | number;
  item: PortfolioItem; 
  onSelectItem: (item: PortfolioItem) => void; 
  isVertical: boolean; 
  isLandscape: boolean; 
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the card through the viewport
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Map the scroll progress to a subtle y-axis translation for the image
  // Moving from -6% to 6% provides a beautiful subtle parallax shift
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      key={item.id}
      onClick={() => !item.isComingSoon && onSelectItem(item)}
      className={`group relative rounded-[24px] overflow-hidden bg-[#18181C] border border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer shadow-md hover:shadow-premium hover:-translate-y-1.5 flex flex-col justify-between ${
        isVertical ? 'row-span-1 md:row-span-2' : ''
      } ${item.isComingSoon ? 'opacity-85 hover:opacity-100' : ''}`}
    >
      {/* Aspect Ratio Box Wrapper */}
      <div className={`relative overflow-hidden bg-black flex-1 ${
        isVertical ? 'aspect-[9/16]' : isLandscape ? 'aspect-video' : 'aspect-[4/3]'
      }`}>
        {/* Dark gradient shadow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Hover subtle overlay color */}
        <div className="absolute inset-0 bg-[#7C3AED]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

        {/* Image Thumbnail with subtle parallax scroll translation */}
        <motion.img
          src={item.thumbnailUrl}
          alt={item.title}
          style={{ y }}
          className="absolute inset-0 w-full h-[112%] -top-[6%] object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Coming Soon or Category Badge */}
        {item.isComingSoon ? (
          <span className="absolute top-4 right-4 z-20 text-[9px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-md bg-[#7C3AED]/20 border border-[#7C3AED]/30 text-[#06B6D4] backdrop-blur-md">
            Coming Soon
          </span>
        ) : (
          item.duration && (
            <span className="absolute top-4 right-4 z-20 text-[9px] font-mono tracking-wider text-white/70 bg-black/40 px-2 py-0.5 rounded backdrop-blur-md border border-white/5">
              {item.duration}
            </span>
          )
        )}

        {/* Quick Preview Icons Overlay (e.g. Play/Eye) */}
        {!item.isComingSoon && (
          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-4 rounded-full bg-white text-black shadow-lg hover:scale-110 active:scale-90 transition-transform duration-300">
              {item.category === 'Photography' ? (
                <Camera className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6 fill-current ml-0.5" />
              )}
            </div>
          </div>
        )}

        {/* Project Metadata Overlay bottom left */}
        <div className="absolute bottom-6 left-6 z-20 text-left right-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-white">
              {item.category}
            </span>
          </div>
          <h3 className="text-lg font-display font-medium text-white tracking-tight leading-snug group-hover:text-[#06B6D4] transition-colors duration-300">
            {item.title}
          </h3>
        </div>
      </div>

      {/* Subtle info footer inside the card for photography or reels detail */}
      <div className="p-5 bg-[#111114]/90 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs text-[#8A8A96] font-mono">
          {item.client || 'Personal Project'}
        </span>
        {item.isComingSoon ? (
          <span className="text-xs text-[#8A8A96] font-medium font-mono">
            Coming Soon
          </span>
        ) : (
          <span className="text-xs text-[#B8B8C2] font-medium flex items-center gap-1 group-hover:text-white transition-colors">
            View Work
            <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function Showcase({ onSelectItem }: ShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('All');

  const categories: CategoryType[] = [
    'All',
    'Cinematic Videos',
    'Reels'
  ];

  const allowedCategories = ['Cinematic Videos', 'Reels'];

  const filteredItems = activeCategory === 'All'
    ? portfolioItems.filter(item => allowedCategories.includes(item.category))
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="showcase" className="relative py-24 sm:py-32 bg-[#09090B]">
      {/* Background decoration */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-[#4F46E5]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#06B6D4] uppercase mb-4">
              <Film className="w-3.5 h-3.5" />
              Creative Portfolio
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              My Work
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#B8B8C2] max-w-xl leading-relaxed">
              Every project is an uncompromising commitment to pristine lighting, clean editing, and creative storytelling designed to get real results.
            </p>
          </div>

          {/* Minimalist Categories Scroller/List */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 md:pb-0 scrollbar-none max-w-full -mx-6 px-6 md:mx-0 md:px-0">
            <div className="flex gap-2.5">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all duration-300 border ${
                    activeCategory === category
                      ? 'bg-white text-[#09090B] border-white font-medium shadow-[0_4px_15px_rgba(255,255,255,0.1)]'
                      : 'bg-[#111114] text-[#B8B8C2] border-white/5 hover:border-white/10 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid (Desktop & Tablet view) */}
        <motion.div
          layout
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const isVertical = item.aspectRatio === '9:16';
              const isLandscape = item.aspectRatio === '16:9';
              
              return (
                <ProjectCard
                  key={item.id}
                  item={item}
                  onSelectItem={onSelectItem}
                  isVertical={isVertical}
                  isLandscape={isLandscape}
                />
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Separate Marquee Carousels with SubHeadings (Mobile view) */}
        <div className="md:hidden space-y-12 mt-8">
          <style>{`
            @keyframes portfolio-marquee {
              0% { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(-25%, 0, 0); }
            }
            .animate-portfolio-marquee {
              animation: portfolio-marquee 30s linear infinite;
            }
            .animate-portfolio-marquee:hover {
              animation-play-state: paused;
            }
          `}</style>

          {/* Cinematic Videos Marquee Section */}
          {(activeCategory === 'All' || activeCategory === 'Cinematic Videos') && (
            <div>
              <div className="flex items-center gap-2 mb-4 px-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#B8B8C2]">
                  Cinematic Videos
                </h3>
              </div>
              
              <div className="relative w-full overflow-hidden -mx-6 px-6 py-2">
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#09090B] to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#09090B] to-transparent z-20 pointer-events-none" />

                <div className="flex gap-4 w-max animate-portfolio-marquee">
                  {(() => {
                    const items = portfolioItems.filter(item => item.category === 'Cinematic Videos');
                    return [...items, ...items, ...items, ...items].map((item, index) => (
                      <div
                        key={`${item.id}-mobile-cinematic-${index}`}
                        onClick={() => !item.isComingSoon && onSelectItem(item)}
                        className="w-[280px] shrink-0 group relative rounded-[20px] overflow-hidden bg-[#18181C] border border-white/5 hover:border-[#06B6D4]/30 transition-all duration-300 cursor-pointer shadow-md flex flex-col justify-between"
                      >
                        <div className="relative overflow-hidden bg-black aspect-[16/9]">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 opacity-75" />
                          <img
                            src={item.thumbnailUrl}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          {item.isComingSoon ? (
                            <span className="absolute top-3 right-3 z-20 text-[8px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-md bg-[#7C3AED]/20 border border-[#7C3AED]/30 text-[#06B6D4] backdrop-blur-md">
                              Soon
                            </span>
                          ) : (
                            item.duration && (
                              <span className="absolute top-3 right-3 z-20 text-[8px] font-mono tracking-wider text-white/70 bg-black/40 px-1.5 py-0.5 rounded backdrop-blur-md border border-white/5">
                                {item.duration}
                              </span>
                            )
                          )}
                          <div className="absolute bottom-4 left-4 z-20 text-left right-4">
                            <span className="text-[8px] font-mono tracking-widest uppercase px-1.5 py-0.5 rounded bg-white/10 backdrop-blur-md border border-white/10 text-white">
                              {item.category}
                            </span>
                            <h3 className="text-sm font-display font-medium text-white tracking-tight mt-1.5 line-clamp-2">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                        <div className="p-4 bg-[#111114]/90 border-t border-white/5 flex items-center justify-between">
                          <span className="text-[10px] text-[#8A8A96] font-mono truncate max-w-[120px]">
                            {item.client || 'Personal Project'}
                          </span>
                          {item.isComingSoon ? (
                            <span className="text-[10px] text-[#8A8A96] font-mono">Soon</span>
                          ) : (
                            <span className="text-[10px] text-white font-mono flex items-center gap-1 group-hover:text-[#06B6D4] transition-colors">
                              View →
                            </span>
                          )}
                        </div>
                      </div>
                    ));
                  })()}
                </div>
              </div>
            </div>
          )}

          {/* Reels Marquee Section */}
          {(activeCategory === 'All' || activeCategory === 'Reels') && (
            <div>
              <div className="flex items-center gap-2 mb-4 px-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#B8B8C2]">
                  Reels
                </h3>
              </div>
              
              <div className="relative w-full overflow-hidden -mx-6 px-6 py-2">
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#09090B] to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#09090B] to-transparent z-20 pointer-events-none" />

                <div className="flex gap-4 w-max animate-portfolio-marquee">
                  {(() => {
                    const items = portfolioItems.filter(item => item.category === 'Reels');
                    return [...items, ...items, ...items, ...items].map((item, index) => (
                      <div
                        key={`${item.id}-mobile-reel-${index}`}
                        onClick={() => !item.isComingSoon && onSelectItem(item)}
                        className="w-[180px] shrink-0 group relative rounded-[20px] overflow-hidden bg-[#18181C] border border-white/5 hover:border-[#06B6D4]/30 transition-all duration-300 cursor-pointer shadow-md flex flex-col justify-between"
                      >
                        <div className="relative overflow-hidden bg-black aspect-[9/16]">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 opacity-75" />
                          <img
                            src={item.thumbnailUrl}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          {item.isComingSoon ? (
                            <span className="absolute top-3 right-3 z-20 text-[8px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-md bg-[#7C3AED]/20 border border-[#7C3AED]/30 text-[#06B6D4] backdrop-blur-md">
                              Soon
                            </span>
                          ) : (
                            item.duration && (
                              <span className="absolute top-3 right-3 z-20 text-[8px] font-mono tracking-wider text-white/70 bg-black/40 px-1.5 py-0.5 rounded backdrop-blur-md border border-white/5">
                                {item.duration}
                              </span>
                            )
                          )}
                          <div className="absolute bottom-4 left-4 z-20 text-left right-4">
                            <span className="text-[8px] font-mono tracking-widest uppercase px-1.5 py-0.5 rounded bg-white/10 backdrop-blur-md border border-white/10 text-white">
                              {item.category}
                            </span>
                            <h3 className="text-xs font-display font-medium text-white tracking-tight mt-1.5 line-clamp-2">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                        <div className="p-4 bg-[#111114]/90 border-t border-white/5 flex items-center justify-between">
                          <span className="text-[10px] text-[#8A8A96] font-mono truncate max-w-[100px]">
                            {item.client || 'Personal Project'}
                          </span>
                          {item.isComingSoon ? (
                            <span className="text-[10px] text-[#8A8A96] font-mono">Soon</span>
                          ) : (
                            <span className="text-[10px] text-white font-mono flex items-center gap-1 group-hover:text-[#06B6D4] transition-colors">
                              View →
                            </span>
                          )}
                        </div>
                      </div>
                    ));
                  })()}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
