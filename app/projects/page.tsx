import { projects } from '@/data/projects'
import ProjectsListClient from '@/components/ProjectListClient'

export const metadata = {
  title: 'Projects | Yatish Badgujar',
  description: 'Showcase of my projects and work',
}

export default function ProjectsPage() {
  return <ProjectsListClient projects={projects} />
}