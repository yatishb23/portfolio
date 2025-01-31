"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import FloatingShapes from "@/components/FloatingShapes";
import ProjectCard from "@/components/ProjectCard";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import LeetCodeHeatmap from "@/components/Heatmap";
import UserProfile from "@/components/Profiles";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <main className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          className="pt-40 pb-20"
        >
          <motion.section
            variants={containerVariants}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            {/* Hero Section */}
            <motion.div variants={itemVariants}>
              <motion.h1
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-100"
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
                className="text-3xl sm:text-4xl font-semibold text-zinc-500/30"
              >
                Welcome to my site
              </motion.h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed px-4">
              I&apos;m a senior frontend developer and blogger, aiming to leave
              a lasting impression and drive innovation in the ever-evolving
              world of software development.
            </motion.p>

            {/* Social Links */}
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
                    className="text-zinc-400 hover:text-zinc-100 transition-colors"
                  >
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            variants={containerVariants}
            className="mt-20 w-full max-w-5xl mx-auto px-4"
          >
            <div className="w-full overflow-x-auto">
              <UserProfile/>
            </div>
          </motion.section>
          <motion.section
            variants={containerVariants}
            className="mt-20 w-full max-w-5xl mx-auto px-4"
          >
            <div className="w-full overflow-x-auto">
              <LeetCodeHeatmap username="yatish_23" />
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
}