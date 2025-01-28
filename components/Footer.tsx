"use client"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white py-8"
    >
      <div className="container mx-auto px-6 text-center">
        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          {["Twitter", "GitHub", "LinkedIn"].map((platform) => (
            <motion.a key={platform} href="#" whileHover={{ scale: 1.1 }} className="text-gray-400 hover:text-white">
              {platform}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

