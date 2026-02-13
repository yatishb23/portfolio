"use client";

import Link from "next/link";
import React, { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import { HiHome, HiUser, HiFolder, HiDocumentText, HiMail } from "react-icons/hi";

export default function DesktopNav() {
  const [hover, setHover] = useState<number | null>(null);

  const navItems = [
    { label: "Home", href: "/", icon: <HiHome /> },
    { label: "About", href: "/about", icon: <HiUser /> },
    { label: "Projects", href: "/projects", icon: <HiFolder /> },
    { label: "Blogs", href: "/blog", icon: <HiDocumentText /> },
    { label: "Contact", href: "/contact", icon: <HiMail /> },
  ];

  return (
    <div className="hidden sm:flex items-center gap-2">
      <LayoutGroup>
        {navItems.map((item, idx) => (
          <Link
            href={item.href}
            key={idx}
            onMouseEnter={() => setHover(idx)}
            onMouseLeave={() => setHover(null)}
            
            className="relative flex items-center rounded-xl cursor-pointer select-none px-2"
          >
            {/* Icon */}
            <span
              className={`text-2xl flex-shrink-0 p-2 rounded-xl transition-all duration-300 ${
                hover === idx 
                  ? "text-neutral-900 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 scale-110" 
                  : "text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300"
              }`}
            >
              {item.icon}
            </span>

            <motion.span
              layout
              initial={{ opacity: 0 }}
              animate={{
                opacity: hover === idx ? 1 : 0,
                width: hover === idx ? "auto" : 0,
                marginLeft: hover === idx ? 8 : 0,
              }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="whitespace-nowrap font-black text-[10px] uppercase tracking-widest text-neutral-900 dark:text-neutral-100 overflow-hidden"
            >
              {item.label}
            </motion.span>

            {hover === idx && (
              <motion.div
                layoutId="nav-highlight"
                className="absolute inset-0 bg-green-500/10 rounded-xl"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </LayoutGroup>
    </div>
  );
}
