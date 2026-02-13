'use client';

import React, { useState } from 'react';
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import ModeToggle from '../theme/theme-toggle';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (currentY) => {
    setScrolled(currentY > 50);
  });

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 sm:top-6 z-50 mx-auto w-full sm:max-w-2xl lg:max-w-4xl transition-all duration-500`}
    >
      <div 
        className={`flex items-center justify-between gap-8 px-6 py-4 sm:py-2 transition-all duration-500 shadow-sm w-full
          ${scrolled 
            ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b sm:border border-neutral-200 dark:border-neutral-800 shadow-lg' 
            : 'bg-neutral-50/50 dark:bg-neutral-950/50 backdrop-blur-sm border-b sm:border border-transparent'
          }
          rounded-none sm:rounded-2xl
        `}
      >
        {/* Desktop Navbar */}
        <div className="hidden sm:flex flex-1 items-center justify-between">
          <DesktopNav />
          <div className="h-6 w-px bg-neutral-200 dark:bg-neutral-800 mx-4" />
          <ModeToggle variant="polygon" start="center" />
        </div>

        {/* Mobile Header (Brand/Theme toggle always visible) */}
        <div className="sm:hidden flex items-center justify-between w-full">
           <div className="text-sm font-black tracking-tighter text-neutral-900 dark:text-neutral-100 uppercase">YB.</div>
           <div className="flex items-center gap-2">
             <ModeToggle variant="polygon" start="center" />
             <button
               className="p-2 text-2xl text-neutral-900 dark:text-neutral-100 rounded-xl hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition-colors"
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             >
               {mobileMenuOpen ? <HiX /> : <HiMenu />}
             </button>
           </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="sm:hidden absolute top-full left-0 right-0 p-8 bg-white/98 dark:bg-neutral-950/98 backdrop-blur-2xl border-b border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden"
          >
            <MobileNav onClose={() => setMobileMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
