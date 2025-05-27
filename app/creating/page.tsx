"use client";

import { motion } from "framer-motion";

const Creating = () => {
  const latestProject = {
    title: "Roommate Matcher Portal",
    description: "Web portal to help students find compatible hostel roommates through behavioral and personality analysis.",
    tech: ["Next.js", "TypeScript", "Shadcn UI", "Supabase", "Zod"],
  };

  const currentSkills = [
    "Next.js 14",
    "Server Actions",
    "TypeScript",
    "Database Design",
    "Form Validation",
    "Shadcn UI",
    "PostgreSQL",
    "Zod",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br dark:from-[#0A0A0F] dark:to-[#12121A] dark:text-neutral-200 from-zinc-50 to-zinc-100">
      <div className="container max-w-2xl mx-auto px-4 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl font-light tracking-tight `}>What I&apos;m Creating</h1>
          <div className="w-20 h-px mx-auto mt-6 dark:bg-neutral-600 bg-neutral-300" />
        </motion.div>

        {/* Latest Project */}
        <motion.div
          whileHover={{ y: -2 }}
          className="p-6 mb-12 rounded-md dark:bg-neutral-800/30 bg-neutral-100 border dark:border-neutral-700 border-neutral-300"
        >
          <h2 className={`text-2xl font-medium mb-4 `}>Latest Project</h2>
          <p className="dark:text-neutral-400 text-neutral-600 mb-6">{latestProject.description}</p>
          <div className="flex flex-wrap gap-2">
            {latestProject.tech.map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 rounded-md text-xs dark:bg-neutral-700/50 dark:text-neutral-300 bg-neutral-200 text-neutral-700"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Currently Working On */}
        <motion.div
          whileHover={{ y: -2 }}
          className="p-6 rounded-md dark:bg-neutral-800/30 bg-neutral-100 border dark:border-neutral-700 border-neutral-300"
        >
          <h2 className={`text-2xl font-medium mb-4 `}>Current Focus</h2>
          <p className="dark:text-neutral-400 text-neutral-600 mb-6">
            I&apos;m actively learning and refining these technologies to improve my ability to build robust, modern web applications.
          </p>
          <div className="flex flex-wrap gap-2">
            {currentSkills.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 rounded-md text-xs dark:bg-neutral-700/50 dark:text-neutral-300 bg-neutral-200 text-neutral-700"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Creating;