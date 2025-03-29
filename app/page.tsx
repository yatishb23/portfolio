"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import LeetCodeHeatmap from "@/components/Heatmap";
import Profiles from "@/components/Profiles";
import { useTheme } from "@/components/theme";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen w-screen bg-gradient-to-br ${
      theme === 'dark' 
        ? 'from-[#0A0A0F] to-[#12121A]' 
        : 'from-zinc-50 to-zinc-100'
    }`}>
      <main className="relative min-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          className=" pt-48 pb-20 space-y-24"
        >
          <motion.section
            variants={containerVariants}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <motion.div variants={itemVariants}>
              <motion.h1
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight ${
                  theme === 'dark' ? 'text-zinc-100' : 'text-zinc-900'
                }`}
              >
                Hey, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Yatish Badgujar
                </span>
                !
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants} className="overflow-hidden">
              <motion.h2
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                className={`text-3xl sm:text-4xl font-semibold ${
                  theme === 'dark' ? 'text-zinc-500/30' : 'text-zinc-400/50'
                }`}
              >
                Welcome to my site
              </motion.h2>
            </motion.div>

            <motion.p 
              variants={itemVariants} 
              className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4 ${
                theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              I&apos;m a senior frontend developer and blogger, aiming to leave
              a lasting impression and drive innovation in the ever-evolving
              world of software development.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="flex items-center justify-center gap-6 px-4"
            >
              {[
                { icon: Instagram, href: "#" },
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={href}
                    className={`transition-colors ${
                      theme === 'dark' 
                        ? 'text-zinc-400 hover:text-zinc-100' 
                        : 'text-zinc-500 hover:text-zinc-900'
                    }`}
                  >
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            variants={containerVariants}
            className="w-full max-w-6xl mx-auto"
          >
            <motion.div 
              variants={itemVariants}
              className={`w-full rounded-3xl backdrop-blur-xl ${
                theme === 'dark' 
                  ? 'bg-white/5 border border-white/10' 
                  : 'bg-black/5 border border-zinc-300'
              }`}
            >
              <Profiles/>
            </motion.div>
          </motion.section>

          <motion.section
            variants={containerVariants}
            className="w-full max-w-6xl mx-auto"
          >
            <motion.div 
              variants={itemVariants}
              className={`p-6 rounded-3xl backdrop-blur-xl overflow-x-auto ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-white/5 to-transparent border border-white/10'
                  : 'bg-gradient-to-br from-zinc-100/50 to-transparent border border-zinc-300'
              }`}
            >
              <LeetCodeHeatmap username="yatish_23" />
            </motion.div>
          </motion.section>
        </motion.div>
      </main>

      <div className="fixed inset-0 -z-10 opacity-20">
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-[url(/grid-dark.svg)]' 
            : 'bg-[url(/grid-light.svg)]'
        } bg-repeat`} />
        <div className={`absolute inset-0 bg-gradient-to-b ${
          theme === 'dark' 
            ? 'from-cyan-500/5 to-transparent' 
            : 'from-blue-500/5 to-transparent'
        }`} />
      </div>
    </div>
  );
}