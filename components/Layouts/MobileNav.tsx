"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import { navbarConfig } from "@/data/Navbar";
import ModeToggle from "../theme/theme-toggle";

export default function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 h-full w-64 z-50 bg-white dark:bg-neutral-950 flex flex-col p-6 shadow-lg"
    >
      {/* Close Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={onClose}
          className="text-3xl text-neutral-900 dark:text-white hover:scale-110 transition-all"
        >
          <HiX />
        </button>
      </div>

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
        className="flex flex-col gap-4"
      >
        <ModeToggle />
        {navbarConfig.navItems.map((item, idx) => (
          <motion.li
            key={idx}
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: { opacity: 1, x: 0 },
            }}
          >
            <Link
              href={item.href}
              onClick={onClose}
              className="block text-lg font-medium text-neutral-900 dark:text-white hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
            >
              {item.label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
