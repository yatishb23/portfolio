"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navbarConfig } from "@/data/Navbar";

export default function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <div className=" flex flex-col gap-8">
      {/* Navigation Links */}
      <motion.ul
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 },
          },
        }}
        className="flex flex-col gap-3"
      >
        {navbarConfig.navItems.map((item, idx) => (
          <motion.li
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Link
              href={item.href}
              onClick={onClose}
              className="group flex items-center justify-between p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-white dark:hover:bg-neutral-800 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <span className="text-lg font-bold tracking-tight text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
                  {item.label}
                </span>
              </div>
              <svg className="w-5 h-5 text-neutral-300 dark:text-neutral-700 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800">
         <div className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 mb-4 px-2">
           Digital Presence
         </div>
         <div className="grid grid-cols-2 gap-3 px-2">
            <div className="text-xs font-bold text-neutral-500 dark:text-neutral-400">© 2026 YB.</div>
            <div className="text-[10px] font-medium text-neutral-300 dark:text-neutral-700 uppercase tracking-widest text-right">Portfolio Experiment</div>
         </div>
      </div>
    </div>
  );
}
