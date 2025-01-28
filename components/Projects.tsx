"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface Project {
    id: number
    title: string
    description: string
  }

const projects = [
  { id: 1, title: "E-commerce Website", description: "A fully functional online store built with Next.js and Stripe." },
  { id: 2, title: "Task Management App", description: "A productivity app built with React and Firebase." },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather app that uses the OpenWeatherMap API to display forecasts.",
  },
]

const ProjectCard = ({ project }: { project: Project }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

