"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import Reach from "@/components/Contact";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/common/Reveal";
import About from "@/components/Sections/LandingPages/About";
import Container from "@/components/common/Container";
import TechSkills from "@/components/Sections/LandingPages/Skills";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.2,
//     },
//   },
// };

// const clashDisplay = localFont({
//   src: "../fonts/ClashDisplay-Semibold.woff2",
// });

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/coding-profiles");
  };

  return (
    <div>
      <div className="flex min-h-screen items-start justify-start">
        <Container className="min-h-full p-4 md:pt-20 md:pb-10">
          <About />
          <div className="pt-10 border-b border-neutral-600"></div>

            <div className="w-full pt-10">
              <button
                onClick={handleClick}
                className="border dark:bg-neutral-800/30 dark:text-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-700/50 bg-neutral-100 text-neutral-800 border-neutral-300 hover:bg-neutral-200 p-2 text-lg md:text-lg font-medium mb-4 flex gap-2"
              >
                Coding Profiles
              </button>
            </div>

          <div className="pt-10 border-b border-neutral-600"></div>

          <TechSkills />

          <div className="pt-6 border-b border-neutral-600"></div>

          <Reveal delay={200}>
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
          </Reveal>

          <div className="pt-6 border-b border-neutral-600"></div>

          <Reveal delay={200}>
            <div className="w-full pt-10">
              <h2 className="text-xl md:text-2xl font-medium mb-4">Contact</h2>
              <Reach />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="w-full pt-10">
              <Footer />
            </div>
          </Reveal>
        </Container>
      </div>
    </div>
  );
}
