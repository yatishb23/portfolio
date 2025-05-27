"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import Reach from "@/components/Contact";
import Footer from "@/components/Footer";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const clashDisplay = localFont({
  src: "../fonts/ClashDisplay-Semibold.woff2",
});

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/coding-profiles");
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br dark:from-[#0A0A0F] dark:to-[#12121A] dark:text-neutral-200 from-zinc-50 to-zinc-100">
      <div className="relative min-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          className="pt-28 pb-20 space-y-10"
        >
          <motion.section
            variants={containerVariants}
            className="max-w-2xl mx-auto"
          >
            <section>
              <div className="flex items-center gap-6 mb-4 border dark:border-neutral-300 border-neutral-800 p-4">
                <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 relative">
                  <Image
                    src="/yatish2.png" // Add a leading slash for public directory images
                    alt="Yatish Badgujar"
                    className="rounded-full object-cover"
                    width={64} // or 96 for larger
                    height={64}
                  />
                </div>
                <div>
                  <h1
                    className={`text-2xl md:text-4xl dark:text-neutral-200 ${clashDisplay.className}`}
                  >
                    Yatish Badgujar
                  </h1>
                  <div className="flex items-center gap-2 mt-2">
                    <p className="text-sm md:text-md dark:text-neutral-400 text-neutral-600">
                      engineer <span className="mx-1">• developer</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <p className="text-base md:text-lg dark:text-neutral-200 text-neutral-800">
                  <span className="text-cyan-500 dark:text-cyan-400">*</span> i
                  love building{" "}
                  <span className="text-cyan-500 dark:text-cyan-400">
                    products
                  </span>{" "}
                  that solve real problems. crafting{" "}
                  <span className="text-cyan-500 dark:text-cyan-400">
                    websites
                  </span>{" "}
                  and{" "}
                  <span className="text-cyan-500 dark:text-cyan-400">apps</span>{" "}
                  for the past year, with a focus on{" "}
                  <span className="text-cyan-500 dark:text-cyan-400">
                    user experience
                  </span>{" "}
                  and clean code.
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-4 py-2 dark:bg-neutral-800 dark:text-neutral-200 bg-neutral-100 text-neutral-800 rounded-md text-sm md:text-base">
                    full-stack
                  </span>
                  <span className="px-4 py-2 dark:bg-neutral-800 dark:text-neutral-200 bg-neutral-100 text-neutral-800 rounded-md text-sm md:text-base">
                    CP
                  </span>
                  <span className="px-4 py-2 dark:bg-neutral-800 dark:text-neutral-200 bg-neutral-100 text-neutral-800 rounded-md text-sm md:text-base">
                    ui/ux
                  </span>
                </div>

                <a
                  href="https://drive.google.com/file/d/1tMXTPOcGUg_qbLVhwxCV6MDr4O3L41Xa/view?usp=sharing"
                  className="inline-flex items-center justify-center px-3 py-2 dark:bg-neutral-800/30 dark:text-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-700/50 bg-neutral-100 text-neutral-800 border-neutral-300 hover:bg-neutral-200 rounded-md border transition-colors font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center text-sm lg:text-base">
                    <span>View CV</span>
                  </div>
                </a>

                <Link
                  href={"https://cal.com/yatish-badgujar/15min"}
                  target="_blank"
                  className={`pl-4 text-lg md:text-xl hover:underline dark:text-white ${clashDisplay.className}`}
                >
                  book a meet
                </Link>
              </div>
            </section>

            <div className="pt-10 border-b border-neutral-600"></div>

            <div className="w-full pt-10">
              <button
                onClick={handleClick}
                className="border dark:bg-neutral-800/30 dark:text-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-700/50 bg-neutral-100 text-neutral-800 border-neutral-300 hover:bg-neutral-200 p-2 text-lg md:text-lg font-medium mb-4 flex gap-2"
              >
                Coding Profiles
              </button>
            </div>

            <div className="pt-6 border-b border-neutral-600"></div>

            <div className="w-full pt-10">
              <h1 className="text-xl md:text-2xl font-medium mb-4 hover:underline">
                Project
              </h1>
              <div className="space-y-2">
                {projects.slice(0, 3).map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center mt-6 text-base md:text-lg hover:underline"
              >
                View all projects →
              </Link>
            </div>

            <div className="pt-6 border-b border-neutral-600"></div>

            <div className="w-full pt-10">
              <h2 className="text-xl md:text-2xl font-medium mb-4">Contact</h2>
              <Reach />
            </div>

            <div className="w-full pt-10">
              <Footer />
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}
