"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
                  Transforming Ideas
                </h1>
                <h2 className="text-4xl md:text-6xl font-bold">Into Reality</h2>
              </div>
              <p className="text-gray-400 text-lg">
                const developer = {"{"}
                <br />
                &nbsp;&nbsp;name: "Your Name",
                <br />
                &nbsp;&nbsp;role: "Full Stack Developer",
                <br />
                &nbsp;&nbsp;location: "Earth",
                <br />
                {"};"}
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Let&apos;s Talk
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-600/10"
                >
                  View Projects
                </Button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-purple-500/20 absolute -inset-4 blur-3xl" />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CKsTIdRNnB6nAtDZvrO5SKjDnxnfNE.png"
              alt="Developer Illustration"
              className="relative z-10 w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

