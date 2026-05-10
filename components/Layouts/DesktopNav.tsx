"use client";

import Link from "next/link";
import React, { useState } from "react";
import { LayoutGroup, motion, AnimatePresence } from "framer-motion";

export default function DesktopNav() {
  const [hover, setHover] = useState<number | null>(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="hidden sm:flex items-center gap-1">
      <LayoutGroup>
        {navItems.map((item, idx) => (
          <Link
            href={item.href}
            key={idx}
            onMouseEnter={() => setHover(idx)}
            onMouseLeave={() => setHover(null)}
            className="relative flex items-center rounded-lg cursor-pointer select-none px-3 py-1.5 transition-colors duration-300"
          >
            {/* Nav Label */}
            <span
              className={`relative z-10 font-mono text-sm font-medium transition-colors duration-300 ${
                hover === idx
                  ? "text-neutral-900 dark:text-neutral-100"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </span>

            {/* Hover Background Effect */}
            <AnimatePresence>
              {hover === idx && (
                <motion.div
                  layoutId="nav-pill"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                  className="absolute inset-0 bg-neutral-100 dark:bg-white/10 rounded-lg z-0"
                />
              )}
            </AnimatePresence>
          </Link>
        ))}
      </LayoutGroup>
    </div>
  );
}