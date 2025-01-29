"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "./mode-toggle"
import Link from "next/link"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-sm rounded-2xl border border-black/20 shadow-lg">
      <nav className="container flex items-center justify-evenly py-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Avatar className="h-12 w-12 ">
            <AvatarImage
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ctyJt4duLXrICNtOm60e2PBPWgSTpd.png"
              alt="Profile"
            />
            <AvatarFallback>YN</AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <div className="bg-zinc-900/90 rounded-full px-6 py-4 mx-4">
            <div className="flex items-center gap-5">
              {["About", "Blog", "Creating", "Contact"].map((item, i) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className=" text-semi-lg text-white font-semibold hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
            <ModeToggle />
        </motion.div>
        
      </nav>
    </header>
  )
}

export default Navbar

