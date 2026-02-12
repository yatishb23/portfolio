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
    <div className="hidden sm:flex flex-col items-start space-y-4 w-full px-4">
      <LayoutGroup>
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            onMouseEnter={() => setHover(idx)}
            onMouseLeave={() => setHover(null)}
            className={` relative w-full p-3 flex items-center justify-center rounded-xl text-neutral-200 hover:text-white dark:hover:text-white transition-colors`}
          >
            <span className={` relative  z-10 text-2xl ${hover === idx ? " text-[rgb(34,197,94)]" : "text-neutral-400"
              } transition-colors `}>{item.icon}</span>
          </Link>
        ))}
      </LayoutGroup>
    </div>
  );
}


{/* <a class="break-words focus-visible:ring-primary-500 relative flex h-12 w-12 items-center justify-center rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900" aria-label="Home" tabindex="0" href="/" aria-current="page"><div class="bg-primary-500/10 dark:bg-primary-400/10 absolute inset-0 rounded-xl" style="position: absolute; transform: none; transform-origin: 50% 50% 0px; opacity: 1;"></div><div class="bg-primary-500/5 absolute inset-0 rounded-xl" style="transform: scale(1.04821);"></div><div class="relative z-10"><div class=""><div class="colorize" style="width: 24px; height: 24px; color: rgb(34, 197, 94); aspect-ratio: 1 / 1; flex-direction: row;"></div></div></div></a> */}