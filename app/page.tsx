"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import FloatingShapes from "@/components/FloatingShapes";
import ProjectCard from "@/components/ProjectCard";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

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
    <>
      {/* <FloatingShapes /> */}
      <main className="container pt-40 pb-20 bg-black">
        <motion.main
      initial="hidden"
      animate="visible"
      className="container pt-32 bg-black min-h-screen"
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
                className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-100"
              >
                Hey, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Your Name
                </span>
                !
              </motion.h1>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden"
            >
              <motion.h2
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                className="text-4xl font-semibold text-zinc-500/30"
              >
                Welcome to my site
              </motion.h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
            >
              I&apos;m a senior frontend developer and blogger, aiming to leave
              a lasting impression and drive innovation in the ever-evolving
              world of software development.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="flex items-center justify-center gap-6"
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
                    <Icon className="h-8 w-8" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
          </motion.main>

        <section className="max-w-4xl mx-auto space-y-8">
          <ProjectCard
            icon="/placeholder.svg"
            title="Project Name"
            category="CATEGORY"
            year="2024"
            description="Project description goes here. Write about what you did and what technologies you used."
            images={["/placeholder.svg", "/placeholder.svg"]}
          />
        </section>
      </main>
    </>
  );
}
