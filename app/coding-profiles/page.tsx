"use client";

import Profiles from "@/components/Sections/Coding_Section/Profiles";
import Link from "next/link";
import LeetCodeHeatmap from "@/components/Heatmap";
import { motion } from "framer-motion";

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

export default function CodingProfiles() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#09090b]">
      <div className="md:max-w-3xl mx-auto border-x border-neutral-200 dark:border-zinc-800 min-h-screen relative">
        {/* ── Banner ── */}
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

        {/* ── Hero ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-7 py-10 border-b border-zinc-800"
        >
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

          <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-zinc-600 mb-4">
            / coding
          </p>
          <h1 className="font-mono text-4xl md:text-5xl font-medium tracking-[-0.04em] text-zinc-100 leading-none mb-6">
            Coding Profiles
          </h1>
          <p className="font-mono text-[13px] text-zinc-500 leading-[1.8] max-w-md">
            Problem-solving consistency, competitive rankings, and platform
            activity across LeetCode and beyond.
          </p>
        </motion.div>

        {/* ── Heatmap ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-7 py-8 border-b border-zinc-800"
        >
          <SectionHeader label="LeetCode Heatmap" num="01" />
          <LeetCodeHeatmap username="yatish_23" />
        </motion.section>

        {/* ── Profiles ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-7 py-8 border-b border-zinc-800"
        >
          <SectionHeader label="Problem Count" num="02" />
          <Profiles />
        </motion.section>

        {/* ── Footer ── */}
        <div className="px-7 py-4 flex items-center justify-between">
          <span className="font-mono text-[10px] text-zinc-700 tracking-[0.15em]">
            YB · Coding
          </span>
          <span className="font-mono text-[10px] text-zinc-700">yatish_23</span>
        </div>
      </div>
    </div>
  );
}
