'use client';

import React, { useState } from 'react';
import { useScroll, useMotionValueEvent, motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import ModeToggle from '../theme/theme-toggle';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (currentY) => {
    if (scrolled) console.log('scrolled');
    setScrolled(currentY > 20);
  });

  return (
    <motion.div
      initial={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed top-0 inset-x-0 z-50 pt-2.5 left-0 right-0 bg-white/10 dark:bg-black/10 backdrop-blur-sm"
    >
      <motion.nav
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="rounded-4xl hidden sm:flex mx-auto px-4 pt-2.3 sm:px-6 py-2 max-w-3xl items-center justify-between"
      >
        <DesktopNav />
        <div className="hidden sm:block">
          <ModeToggle variant="polygon" start="center" />
        </div>
      </motion.nav>

      <div className="sm:hidden relative w-full">
        <button
          className="absolute top-4 right-4 z-50 text-2xl text-neutral-900 dark:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {mobileMenuOpen && <MobileNav onClose={() => setMobileMenuOpen(false)} />}
    </motion.div>
  );
}
