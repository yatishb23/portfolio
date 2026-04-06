"use client";

import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";
import { Project } from "@/type/projects";

interface ProjectsListClientProps {
  projects: Project[];
}

export default function ProjectsListClient({
  projects,
}: ProjectsListClientProps) {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-geometry">
      <div className="max-w-4xl mx-auto border-x border-geometry bg-white/50 dark:bg-neutral-950/50 min-h-screen relative z-10">
        <div className="px-6 sm:px-8 lg:px-12 py-20 border-b border-geometry">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50 transition-colors mb-10"
          >
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to home
          </Link>

          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black tracking-[-0.05em] text-neutral-950 dark:text-neutral-50 leading-none">
              Projects
              <span className="text-neutral-200 dark:text-neutral-800">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 font-medium max-w-2xl leading-relaxed">
              A curated collection of digital interfaces, full-stack
              applications, and experimental tools.
            </p>
          </div>
        </div>

        <div className="grid gap-1 bg-inherit overflow-hidden bg-hatch px-6 sm:px-8 lg:px-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-inherit transition-all duration-300 py-16 border-b border-geometry"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
