"use client";

import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";
import { Project } from "@/type/projects";
import { motion } from "framer-motion";

interface ProjectsListClientProps {
  projects: Project[];
}

const Cross = ({ pos }: { pos: string }) => (
  <div
    className={`absolute w-3 h-3 ${pos} -translate-x-1/2 -translate-y-1/2 pointer-events-none`}
  >
    <div className="absolute h-px w-full bg-zinc-700" />
    <div className="absolute w-px h-full bg-zinc-700" />
  </div>
);

export default function ProjectsListClient({
  projects,
}: ProjectsListClientProps) {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#09090b]">
      <div className="md:max-w-3xl mx-auto border-x border-neutral-200 dark:border-zinc-800 min-h-screen relative">
        {/* Banner */}
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

        {/* Hero */}
        <div className="px-7 py-10 border-b border-zinc-800">
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
                d="M10 19l-7-7m0 0l-7 7m-7 7h18"
              />
            </svg>
            Back to home
          </Link>
          <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-zinc-600 mb-4">
            / projects
          </p>
          <h1 className="font-mono text-4xl md:text-5xl font-medium tracking-[-0.04em] text-zinc-100 leading-none mb-5">
            Projects
          </h1>
          <p className="font-mono text-[13px] text-zinc-500 leading-[1.8] max-w-md">
            Digital interfaces, full-stack applications, and experimental tools.
          </p>
        </div>

        {/* Project list */}
        <div className="px-7 py-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="border-b border-zinc-800 py-5 last:border-b-0"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}

          {projects.length === 0 && (
            <div className="py-16 text-center">
              <p className="font-mono text-[11px] text-zinc-700 tracking-[0.15em] uppercase">
                No projects yet
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-7 py-4 border-t border-zinc-800 flex items-center justify-between">
          <span className="font-mono text-[10px] text-zinc-700 tracking-[0.15em]">
            YB · Projects
          </span>
          <span className="font-mono text-[10px] text-zinc-700">
            {projects.length} total
          </span>
        </div>
      </div>
    </div>
  );
}
