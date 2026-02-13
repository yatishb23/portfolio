import { getProjectById } from '@/data/projects'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { ProjectCard } from '@/components/ProjectCard'

type Props = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const project = getProjectById(id)
  console.log(id);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }
  
  return {
    title: `${project.title} | Yatish Badgujar`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
    }
  }
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params
  const project = getProjectById(id)
  
  if (!project) {
    notFound()
  }
  
  return (
    <div className="min-h-screen py-32 bg-white dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50 transition-colors"
          >
            <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to projects
          </Link>
        </div>
        
        <div className="flex flex-col items-center">
          <ProjectCard project={project} isDetailed />
        </div>
      </div>
    </div>
  )
}