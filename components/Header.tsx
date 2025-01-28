"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-white shadow-md"
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.1 }} className="text-2xl font-bold text-gray-800">
          My Portfolio
        </motion.div>
        <ul className="flex space-x-4">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }}>
              <Link href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-gray-800">
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header

