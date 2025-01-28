"use client"
import { motion } from "framer-motion"

const profiles = [
  {
    platform: "LeetCode",
    username: "@developer",
    rating: "1800+",
    status: "Top 5%",
  },
  {
    platform: "CodeForces",
    username: "@developer",
    rating: "1400+",
    status: "Specialist",
  },
]

const CodeProfiles = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8 text-center">
          <span className="text-purple-400">const</span> <span className="text-white">codingProfiles</span>{" "}
          <span className="text-purple-400">=</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-purple-400">{profile.platform}</h3>
                  <p className="text-gray-400 text-sm">{profile.username}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">{profile.rating}</div>
                  <div className="text-sm text-purple-400">{profile.status}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CodeProfiles

