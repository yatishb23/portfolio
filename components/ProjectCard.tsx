"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  icon: string
  title: string
  category: string
  year: string
  description: string
  images: string[]
}

const ProjectCard = ({ icon, title, category, year, description, images }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="space-y-6">
        <Image src={icon || "/placeholder.svg"} alt={title} width={40} height={40} className="rounded-lg" />

        <div>
          <h3 className="text-2xl font-medium text-gray-900">{title}</h3>
          <div className="text-sm text-gray-500 mt-1 space-x-2">
            <span>{category}</span>
            <span>•</span>
            <span>{year}</span>
          </div>
        </div>

        <p className="text-gray-600">{description}</p>

        <button className="flex items-center gap-2 text-gray-900 hover:gap-3 transition-all">
          <span>Read More</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-2 gap-4 mt-8">
          {images.map((image, i) => (
            <div key={i} className="relative aspect-[9/16] rounded-3xl overflow-hidden">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${title} preview ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard

