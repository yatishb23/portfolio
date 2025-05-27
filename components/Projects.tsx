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
    <div className="max-w-3xl mx-auto mt-8">
      <div className="space-y-8">
        {displayedProjects.map((project, index) => (
          <div key={index} className="border-b border-neutral-500 pb-6">
            <div className="flex items-center justify-between mb-2">
              <Link href={project.liveLink} target="_blank" className="text-lg md:text-xl hover:underline">
                {project.title}
              </Link>
              <Link href={project.githubLink} target="_blank" className="hover:opacity-70">
                <FaGithub className="size-5 md:size-6" />
              </Link>
            </div>
            <p className="text-sm md:text-lg text-neutral-600 dark:text-neutral-400 mb-3">
              {project.description}
            </p>
          </div>
        ))}
      </div>
      {projects.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-8 text-sm md:text-base hover:underline"
        >
          {showAll ? "Show Less" : "View More"}
        </button>
      )}
    </div>
  );
};

export default Projects;