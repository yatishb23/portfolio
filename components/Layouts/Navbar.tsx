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
    setScrolled(currentY > 20);
  });

  return (
    <motion.aside
      initial={{ x: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed top-0 left-0 h-screen w-20 sm:w-36 z-50 flex flex-col items-center justify-center py-6 shadow-md"
    >
      {/* Desktop Navbar */}
      <div
        className="hidden sm:flex flex-col items-center space-y-6 w-1/2 
             pt-5 pb-5
             rounded-xl border border-transparent
             hover:border-stone-700 hover:bg-neutral-900
             transition-all duration-300 ease-in-out"
      >
        <DesktopNav />
        <ModeToggle variant="polygon" start="center" />
      </div>



      {/* Mobile Navbar Button */}
      <div className="sm:hidden flex justify-center w-full">
        <button
          className="text-3xl text-neutral-900 dark:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <MobileNav onClose={() => setMobileMenuOpen(false)} />
      )}
    </motion.aside>
  );
}
