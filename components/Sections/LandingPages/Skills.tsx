"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  { category: "Backend", items: ["Node.js", "Express", "REST APIs"] },
  { category: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL"] },
  { category: "Programming", items: ["Java", "Python", "JavaScript", "C++"] },
  { category: "Tools", items: ["Git", "Framer Motion", "Docker"] },
];

export default function TechSkills() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mt-2">
      {skills.map((group, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-3 bg-zinc-700 rounded-full" />
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-zinc-600">
              {group.category}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item, j) => (
              <span
                key={j}
                className="font-mono text-[10px] tracking-[0.06em] px-3 py-1.5 border border-zinc-700 rounded-[4px] text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 transition-all cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
