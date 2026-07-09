import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Results from './components/Results';
import Consultation from './components/Consultation';
import VideoModal from './components/VideoModal';
import { portfolioItems } from './data';
import { PortfolioItem } from './types';
import { Instagram, Youtube, Linkedin, ArrowUp, ArrowUpRight } from 'lucide-react';
// @ts-ignore
import salamPortrait from './assets/images/salam_portrait_real_1783091485043.png';

export default function App() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Use the first video project for any backup references
  const featuredProject = portfolioItems[0];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-white selection:bg-[#7C3AED]/30 selection:text-[#06B6D4] font-sans antialiased overflow-x-hidden">
      {/* Top Scroll Depth Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] origin-left z-[100] pointer-events-none"
        style={{ scaleX }}
      />

      {/* Premium Floating Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Hero Section - Portrait Placeholder + Option Switcher inside */}
        <Hero onPlayFeatured={setSelectedItem} featuredItem={featuredProject} />

        {/* Dynamic Video Showcase & Photography */}
        <Showcase onSelectItem={setSelectedItem} />

        {/* Stats Milestone & Timeline Workflow */}
        <Results />

        {/* Testimonials & Intake Form */}
        <Consultation />


      </main>

      {/* Luxurious Cinematic Footer */}
      <footer className="relative bg-[#09090B] border-t border-white/5 py-16 sm:py-20 overflow-hidden">
        {/* Soft radial corner glow */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#4F46E5]/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 items-start mb-16">
            
            {/* Logo & Brand statement */}
            <div className="md:col-span-5 text-left space-y-4">
              <a href="#" className="flex items-center gap-2 group mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F46E5] to-[#06B6D4] flex items-center justify-center p-0.5 shadow-[0_0_15px_rgba(79,70,229,0.3)] overflow-hidden">
                  <div className="w-full h-full bg-[#09090B] rounded-[6px] flex items-center justify-center overflow-hidden">
                    <img 
                      src={salamPortrait} 
                      alt="Salam Hussain" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <span className="text-sm font-bold tracking-tight text-white">
                  Salam <span className="text-[#B8B8C2] font-light italic">Hussain</span>
                </span>
              </a>
              <p className="text-sm text-[#8A8A96] leading-relaxed max-w-sm font-sans">
                Helping brands grow through creative videos, photography, AI content, and social media.
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="md:col-span-3 text-left space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white">Creative Portals</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#showcase" className="text-xs text-[#8A8A96] hover:text-white transition-colors duration-300 flex items-center gap-1.5 group font-mono uppercase tracking-wider">
                    My Work
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </li>
                <li>
                  <a href="#results" className="text-xs text-[#8A8A96] hover:text-white transition-colors duration-300 flex items-center gap-1.5 group font-mono uppercase tracking-wider">
                    Results
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </li>
                <li>
                  <a href="#workflow" className="text-xs text-[#8A8A96] hover:text-white transition-colors duration-300 flex items-center gap-1.5 group font-mono uppercase tracking-wider">
                    How I Work
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Social / Contact columns */}
            <div className="md:col-span-4 text-left space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white">My Socials</h4>
              <div className="flex gap-4">
                {/* Instagram */}
                <a
                  href="https://instagram.com/thesalamhussain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-[#B8B8C2] hover:text-[#7C3AED] hover:border-[#7C3AED]/30 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:scale-105 transition-all duration-300 shadow-sm"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@thesalamhussain?si=Zhk_8JfZpZLK08JZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-[#B8B8C2] hover:text-[#7C3AED] hover:border-[#7C3AED]/30 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:scale-105 transition-all duration-300 shadow-sm"
                  aria-label="YouTube Channel"
                >
                  <Youtube className="w-4 h-4" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/salamhussainmp4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-[#B8B8C2] hover:text-[#7C3AED] hover:border-[#7C3AED]/30 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:scale-105 transition-all duration-300 shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs text-[#8A8A96] font-mono">
                Direct Contact: <span className="text-white hover:text-[#06B6D4] cursor-pointer transition-colors">salamhussain.mp4@gmail.com</span>
              </p>
            </div>

          </div>

          {/* Bottom Row */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-xs text-[#8A8A96] font-mono">
              &copy; {new Date().getFullYear()} Salam Hussain. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/5 hover:border-white/20 bg-[#111114]/50 hover:bg-[#111114] text-[#B8B8C2] hover:text-white text-xs font-mono uppercase tracking-wider transition-all duration-300"
            >
              Back To Top
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </footer>

      {/* Fullscreen Video / Photo Player Modal */}
      <VideoModal item={selectedItem} onClose={() => setSelectedItem(null)} onSelectItem={setSelectedItem} />
    </div>
  );
}
