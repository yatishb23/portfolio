"use client"

import { motion } from "framer-motion"

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 bg-gray-200 rounded-lg"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            opacity: 0.3,
          }}
        />
      ))}
    </div>
  )
}

export default FloatingShapes

