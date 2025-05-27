'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ModeToggle } from './theme-toggle'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-black/10 backdrop-blur-sm">
      <nav className="flex justify-evenly gap-40 py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Avatar className="h-12 w-12 border dark:border-none border-black">
            <AvatarImage src="yatish2.png" alt="Profile" />
            <AvatarFallback>YN</AvatarFallback>
          </Avatar>
        </motion.div>

        {/* Desktop Nav */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex bg-gray-100 dark:bg-zinc-900/90 border border-gray-300 dark:border-zinc-700 rounded-full px-6 py-4"
        >
          <div className="flex items-center gap-5">
            {['About', 'Blog', 'Creating', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-semi-lg font-semibold text-gray-900 dark:text-white hover:text-black dark:hover:text-gray-200 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Right side: Toggle + Menu */}
        <div className="flex items-center space-x-4">
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="focus:outline-none text-gray-900 dark:text-white"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ModeToggle />
          </motion.div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-100 dark:bg-zinc-900/90 border-t border-gray-300 dark:border-black/20 rounded-b-2xl shadow-lg overflow-hidden"
          >
            <div className="container flex flex-col items-center py-4">
              {['About', 'Blog', 'Creating', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-semi-lg font-semibold text-gray-900 dark:text-white hover:text-black dark:hover:text-gray-200 transition-colors py-2"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
