"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-sm rounded-2xl border border-black/20 shadow-lg">
      <nav className="flex justify-evenly gap-40 py-4">
        {/* Logo (Avatar) always on the left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Avatar className="h-12 w-12">
            <AvatarImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ctyJt4duLXrICNtOm60e2PBPWgSTpd.png"
              alt="Profile"
            />
            <AvatarFallback>YN</AvatarFallback>
          </Avatar>
        </motion.div>

        {/* Desktop Navigation Links (visible on md and up) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex bg-zinc-900/90 rounded-full px-6 py-4"
        >
          <div className="flex items-center gap-5">
            {["About", "Blog", "Creating", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-semi-lg text-white font-semibold hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Mobile Menu Icon (only on small devices) and Theme Toggle */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Icon for mobile devices */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </motion.button>
          </div>

          {/* Theme Toggle (always visible) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ModeToggle />
          </motion.div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu (only rendered on small devices) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-zinc-900/90 rounded-b-2xl border-t border-black/20 shadow-lg overflow-hidden"
          >
            <div className="container flex flex-col items-center py-4">
              {["About", "Blog", "Creating", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-semi-lg text-white font-semibold hover:text-white transition-colors py-2"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
