import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
// @ts-ignore
import salamPortrait from '../assets/images/salam_portrait_real_1783091485043.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'My Work', href: '#showcase' },
    { name: 'Results', href: '#results' },
    { name: 'How I Work', href: '#workflow' },
    { name: 'Reviews', href: '#testimonials' },
  ];

  return (
    <>
      <motion.nav
        id="navbar"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 bg-[#09090B]/75 backdrop-blur-xl border-b border-white/5' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F46E5] to-[#06B6D4] flex items-center justify-center p-0.5 shadow-[0_0_15px_rgba(79,70,229,0.3)] group-hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="w-full h-full bg-[#09090B] rounded-[6px] flex items-center justify-center overflow-hidden">
                <img 
                  src={salamPortrait} 
                  alt="Salam Hussain" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <span className="text-sm font-bold tracking-tight text-white group-hover:text-[#06B6D4] transition-colors duration-300">
              Salam <span className="text-[#B8B8C2] font-light italic">Hussain</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono tracking-widest uppercase text-[#B8B8C2] hover:text-white transition-colors duration-300 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Call to Action & Mobile Button */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#B8B8C2] uppercase">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></div>
              <span>Available for Projects</span>
            </div>

            <div className="hidden lg:block h-4 w-[1px] bg-white/10"></div>

            <a
              href="#consultation"
              className="hidden sm:inline-flex items-center gap-1 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-95"
            >
              Inquire
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Mobile Hamburger */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#B8B8C2] hover:text-white md:hidden border border-white/5 hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Backdrop & Sheet */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-30 bg-[#09090B]/90 backdrop-blur-xl md:hidden flex flex-col justify-center px-10"
        >
          <div className="flex flex-col gap-6 text-left">
            <div className="text-xs font-mono text-[#8A8A96] tracking-widest uppercase mb-4">Navigation</div>
            {navLinks.map((link, index) => (
              <motion.a
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-display font-medium text-white hover:text-[#06B6D4] transition-colors"
              >
                {link.name}
              </motion.a>
            ))}

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 pt-8 border-t border-white/5 flex flex-col gap-4"
            >
              <a
                href="#consultation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-4 rounded-[16px] text-xs font-medium tracking-widest uppercase bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-mono"
              >
                Book a Consultation
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
}
