"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  { category: "Backend", items: ["Node.js", "Express", "REST APIs"] },
  { category: "Programming", items: ["Java", "Python", "JavaScript", "C++"] },
  { category: "AI / ML", items: ["Machine Learning", "Generative AI", "NLP"] },
  { category: "Tools", items: ["Git", "Arduino", "PLC Programming"] },
];

const roles = [
  { title: "Deputy Marketing Head", org: "GECA MUN Club" },
  { title: "Organizing Team Member", org: "GMC Conference (National)" },
  { title: "GDSC Member", org: "Google Developer Student Clubs" },
  { title: "Workshop Organizer", org: "Cloud Study Jam & GenAI Workshop" },
];

/* ── shared layout tokens ── */
const edge = "border-[var(--color-edge)]";

const SectionHeader = ({ label, num }: { label: string; num: string }) => (
  <div className="flex items-center gap-3 mb-8">
    <span className="text-[9px] tracking-[0.25em] uppercase text-zinc-500 border border-zinc-700 rounded-[3px] px-2 py-1 font-mono">
      {label}
    </span>
    <div className="flex-1 h-px bg-zinc-800" />
    <span className="text-[9px] text-zinc-600 tracking-widest font-mono">
      {num}
    </span>
  </div>
);

const Cross = ({ pos }: { pos: string }) => (
  <div
    className={`absolute w-3 h-3 ${pos} -translate-x-1/2 -translate-y-1/2 pointer-events-none`}
  >
    <div className="absolute h-px w-full bg-zinc-700" />
    <div className="absolute w-px h-full bg-zinc-700" />
  </div>
);

export default function About() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#09090b]">
      <div className="md:max-w-3xl mx-auto border-x border-neutral-200 dark:border-zinc-800 min-h-screen relative">
        {/* ── Top banner ── */}
        <div className="relative border-b border-zinc-800 py-5">
          <Cross pos="top-0 left-0" />
          <Cross pos="top-0 right-0" />
          <div
            className="h-[50px] w-full opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        {/* ── Back + Hero ── */}
        <div className="relative px-7 py-10 border-b border-zinc-800">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-zinc-600 hover:text-zinc-300 transition-colors mb-10 group"
          >
            <svg
              className="w-3 h-3 transition-transform group-hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-zinc-600 mb-4">
              / about
            </p>
            <h1 className="font-mono text-4xl md:text-5xl font-medium tracking-[-0.04em] text-zinc-100 leading-none mb-6">
              Yatish Badgujar
            </h1>
            <p className="font-mono text-[13px] text-zinc-500 leading-[1.8] max-w-lg">
              Final year Computer Engineering student passionate about
              full-stack development, AI/ML, and building efficient, real-world
              tech solutions at the intersection of design and engineering.
            </p>
          </motion.div>
        </div>

        {/* ── Skills ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-7 py-8 border-b border-zinc-800"
        >
          <SectionHeader label="Technical Skills" num="01" />

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((group, i) => (
              <div key={i}>
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
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── Leadership ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-7 py-8 border-b border-zinc-800"
        >
          <SectionHeader label="Leadership" num="02" />

          <div className="grid sm:grid-cols-2 gap-3">
            {roles.map((role, i) => (
              <div
                key={i}
                className="group relative p-5 border border-zinc-800 rounded-[6px] hover:border-zinc-600 transition-all"
              >
                {/* index */}
                <span className="font-mono text-[9px] text-zinc-700 tracking-widest mb-4 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-mono text-[13px] text-zinc-300 font-medium leading-tight mb-1.5">
                  {role.title}
                </p>
                <p className="font-mono text-[10px] tracking-[0.08em] text-zinc-600">
                  {role.org}
                </p>
                {/* corner accent */}
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-zinc-700 rounded-tr-[6px] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── Footer strip ── */}
        <div className="relative px-7 py-4 flex items-center justify-between">
          <span className="font-mono text-[10px] text-zinc-700 tracking-[0.15em]">
            YB · About
          </span>
          <span className="font-mono text-[10px] text-zinc-700">
            Computer Engineering · Final Year
          </span>
        </div>
      </div>
    </div>
  );
}
