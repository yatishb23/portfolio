'use client'

import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "ScaleUp",
    description:
      "ScaleUp is a web application built with Next.js and TypeScript that provides detailed feedback on resumes. It evaluates formatting, grammar, skills, and ATS compatibility while offering an interactive dashboard, chatbot support, and curated resume examples to help users improve their resumes efficiently.",
    liveLink: "https://resume-analyzer-rust.vercel.app/",
    githubLink: "https://github.com/yatishb23/resumeAnalyzer"
  },

  {
    title: "Localite Maps",
    description:
      "A customizable map application where users can rename locations and color-code areas based on population density. Built with React, Vite, Prisma, and Tailwind CSS for a seamless and interactive experience.",
    liveLink: "",
    githubLink: "https://github.com/yatishb23/myPov-map"
  },

  {
    title: "Expense Tracker",
    description:
      "Expense Tracker - A full-stack web application for tracking expenses, featuring user authentication, a dynamic dashboard, and a simple UI. Built with React (Vite) for the frontend and Node.js with Express for the backend.",
    liveLink: "https://donezo-theta.vercel.app/",
    githubLink: "https://github.com/UmangAgarwal257/Donezo"
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto mt-12 bg-white dark:bg-neutral-950 rounded-[2.5rem] border border-neutral-100 dark:border-neutral-900 p-8 shadow-sm">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-2xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 flex items-center gap-2">
          Projects<span className="text-neutral-300 dark:text-neutral-700">.</span>
        </h2>
        {projects.length > 3 && (
            <button
            onClick={() => setShowAll(!showAll)}
            className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all"
            >
            {showAll ? "Show Less" : `View All ${projects.length}`}
            </button>
        )}
      </div>

      <div className="grid gap-1 bg-neutral-100 dark:bg-neutral-900 overflow-hidden rounded-3xl border border-neutral-100 dark:border-neutral-900">
        {displayedProjects.map((project, index) => (
          <div key={index} className="group relative bg-white dark:bg-neutral-950 p-8 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                    <span className="text-4xl font-black text-neutral-100 dark:text-neutral-800 transition-colors group-hover:text-neutral-200 dark:group-hover:text-neutral-700">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black tracking-tight text-neutral-800 dark:text-neutral-200">
                        {project.title}
                    </h3>
                </div>
                <p className="text-md font-medium text-neutral-500 dark:text-neutral-400 line-clamp-2 max-w-2xl leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Link 
                    href={project.githubLink} 
                    target="_blank" 
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white transition-all hover:scale-110 active:scale-95"
                >
                    <FaGithub className="h-5 w-5" />
                </Link>
                {project.liveLink && (
                    <Link 
                        href={project.liveLink} 
                        target="_blank" 
                        className="flex items-center gap-3 px-6 h-12 rounded-2xl bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-black uppercase text-[10px] tracking-[0.2em] transition-all hover:scale-[1.03] active:scale-95 shadow-xl"
                    >
                        Live Preview
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;