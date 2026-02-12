'use client';

import React, { useState } from 'react';
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import ModeToggle from '../theme/theme-toggle';

export default function Navbar({ activeSection }: { activeSection?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (currentY) => {
    setScrolled(currentY > 20);
  });

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed inset-x-0 z-50 mx-auto max-w-4xl bg-inherit
        backdrop-blur-sm rounded-3xl transition-all duration-300`}
    >
      {/* Desktop Navbar */}
      <motion.nav
        className={`hidden sm:flex items-center justify-between mx-auto p-12 py-4
          ${scrolled ? 'py-2' : 'py-3'} transition-all duration-300`}
      >
        <DesktopNav />
        <ModeToggle variant="polygon" start="center" />
      </motion.nav>

      {/* Mobile Navbar */}
      <div className="sm:hidden relative w-full">
        <button
          className="absolute top-3 right-3 z-50 text-3xl text-neutral-900 dark:text-white p-2 rounded-full
            hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden fixed inset-0 z-40 bg-white dark:bg-black backdrop-blur-lg"
          >
            <MobileNav onClose={() => setMobileMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
