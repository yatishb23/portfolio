"use client";

import React, { useState } from "react";
import {
  useScroll,
  useMotionValueEvent,
  motion,
  AnimatePresence,
} from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import ModeToggle from "../theme/theme-toggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (currentY) => {
    setScrolled(currentY > 50);
  });

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 mx-auto w-full transition-all duration-500 border-b border-[var(--color-edge)] bg-neutral-50 dark:bg-[#09090b]`}
    >
      <div
        className={`flex items-center justify-between gap-8 px-6 py-4 sm:py-2 transition-all duration-500 w-full mx-auto md:max-w-3xl border-x border-[var(--color-edge)] bg-neutral-50 dark:bg-[#09090b] font-light
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
          <div className="text-sm font-normal tracking-tighter text-neutral-900 dark:text-neutral-100 uppercase">
            YB.
          </div>
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
