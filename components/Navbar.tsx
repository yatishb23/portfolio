"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { useTheme } from "./theme";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const bgColor = theme === "dark" ? "bg-black/10" : "bg-white/10";
  const borderColor = theme === "dark" ? "border-black/20" : "border-gray-300";
  const textColor = theme === "dark" ? "text-white" : "text-gray-900";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${bgColor} backdrop-blur-sm `}
    >
      <nav className="flex justify-evenly gap-40 py-8">
        {/* Logo (Avatar) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Avatar className="h-12 w-12">
            <AvatarImage
              src="avatar.jpg"
              alt="Profile"
            />
            <AvatarFallback>YN</AvatarFallback>
          </Avatar>
        </motion.div>

        {/* Desktop Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`hidden md:flex ${
            theme === "dark" ? "bg-zinc-900/90" : "bg-gray-100 border border-gray-300"
          } rounded-full px-6 py-4`}
        >
          <div className="flex items-center gap-5 ">
            {["About", "Blog", "Creating", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`text-semi-lg font-semibold ${textColor} hover:${
                  theme === "dark" ? "text-white" : "text-gray-900"
                } transition-colors`}
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`focus:outline-none ${textColor}`}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </motion.button>
          </div>

          <ModeToggle />
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden ${
              theme === "dark" ? "bg-zinc-900/90" : "bg-gray-100"
            } rounded-b-2xl border-t ${
              theme === "dark" ? "border-black/20" : "border-gray-300"
            } shadow-lg overflow-hidden`}
          >
            <div className="container flex flex-col items-center py-4">
              {["About", "Blog", "Creating", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-semi-lg font-semibold ${textColor} hover:${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  } transition-colors py-2`}
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