"use client";


import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    },
    { category: "Backend", items: ["Node.js", "Express", "REST APIs"] },
    { category: "Programming", items: ["Java", "Python", "JavaScript", "C++"] },
    { category: "AI/ML", items: ["Machine Learning", "Generative AI", "NLP"] },
    { category: "Tools", items: ["Git", "Arduino", "PLC Programming"] },
  ];

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br dark:from-[#0A0A0F] dark:to-[#12121A] dark:text-neutral-200 from-zinc-50 to-zinc-100">
      <div className="container max-w-2xl mx-auto px-4 pt-32 space-y-10">
        {/* Heading */}
        <Link
          href="/"
          className="text-sm md:text-base inline-block hover:underline"
        >
          ← Back to home
        </Link>
        <div className="space-y-4 border-b border-neutral-600">
          <h1 className="text-4xl font-semibold tracking-tight ">About Me</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg pb-6">
            I’m Yatish, a 3rd-year Computer Engineering student passionate about
            full-stack development, AI/ML, and building efficient, real-world
            tech solutions.
          </p>
        </div>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="border-b border-neutral-600 pb-6">
            <h2 className={`text-xl md:text-2xl font-medium mb-6 `}>
              Technical Skills
            </h2>

            <div className="grid gap-6">
              {skills.map((group, i) => (
                <div key={i} className="space-y-3">
                  <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, j) => (
                      <motion.span
                        key={j}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 rounded-md text-sm dark:bg-neutral-800/50 dark:text-neutral-200 bg-neutral-100 text-neutral-800 border dark:border-neutral-700 border-neutral-300"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full "
        >
          <div className="border-b border-neutral-600 pb-6">
            <h2 className={`text-xl md:text-2xl font-medium mb-6 `}>
              Leadership & Roles
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Deputy Marketing Head", desc: "GECA MUN Club" },
                {
                  title: "Organizing Team Member",
                  desc: "GMC Conference (National)",
                },
                {
                  title: "GDSC Member",
                  desc: "Google Developer Student Clubs",
                },
                {
                  title: "Workshop Organizer",
                  desc: "Cloud Study Jam & GenAI Workshop",
                },
              ].map((role, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2 }}
                  className="p-4 rounded-md dark:bg-neutral-800/30 bg-neutral-100 border dark:border-neutral-700 border-neutral-300"
                >
                  <h3 className="text-lg font-medium dark:text-neutral-200 text-neutral-800">
                    {role.title}
                  </h3>
                  <p className="text-sm dark:text-neutral-400 text-neutral-600 mt-1">
                    {role.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Certifications and Goals */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full mb-10"
        >
          <div className="border-b border-neutral-600 pb-6">
            <h2 className={`text-xl md:text-2xl font-medium mb-6`}>
              Current Focus
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -2 }}
                className="p-5 rounded-md dark:bg-neutral-800/30 bg-neutral-100 border dark:border-neutral-700 border-neutral-300"
              >
                <h3 className="text-lg font-medium dark:text-neutral-200 text-neutral-800 mb-3">
                  Current Goals
                </h3>
                <ul className="space-y-2 text-sm dark:text-neutral-400 text-neutral-600">
                  <li className="flex items-start">
                    <span className="mr-2 dark:text-cyan-400 text-cyan-600">
                      •
                    </span>
                    <span>Seeking SDE and IT internships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 dark:text-cyan-400 text-cyan-600">
                      •
                    </span>
                    <span>Improving coding interview confidence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 dark:text-cyan-400 text-cyan-600">
                      •
                    </span>
                    <span>Mastering clean code and optimization</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <span className="px-3 py-1 rounded-md text-xs dark:bg-neutral-700/50 dark:text-neutral-300 bg-neutral-200 text-neutral-700">
                    600+ DSA Problems Solved
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
