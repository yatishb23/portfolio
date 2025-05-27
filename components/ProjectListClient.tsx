'use client'

import { ProjectCard } from '@/components/ProjectCard'
import Link from 'next/link'
import { Project } from '@/type/projects'

interface ProjectsListClientProps {
  projects: Project[]
}

export default function ProjectsListClient({ projects }: ProjectsListClientProps) {
  return (
    <div className="min-h-screen pt-20 bg-white text-gray-900 dark:bg-[#121212] dark:text-gray-200">
      <div className="flex flex-col items-start px-6 md:px-12 lg:ml-100 pt-4 md:pt-6 space-y-8 md:space-y-12 max-w-3xl mx-auto">
        <div className="w-full">
          <div className="mb-10">
            <Link
              href="/"
              className="text-sm md:text-base mb-4 inline-block hover:underline text-gray-700 dark:text-gray-400"
            >
              ← Back to home
            </Link>
            <h1 className="text-3xl md:text-4xl font-medium mb-4">Projects</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              A showcase of my work and side projects.
            </p>
          </div>

          <div className="space-y-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
