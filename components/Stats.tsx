"use client"
import { motion } from "framer-motion"

const stats = [
  { label: "Years of Experience", value: "+5" },
  { label: "Projects Completed", value: "+30" },
  { label: "Lines of Code", value: "+100K" },
  { label: "GitHub Stars", value: "+1K" },
]

const Stats = () => {
  return (
    <section className="py-20 bg-purple-500/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

