import { getProjectById } from "@/data/projects";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";

type Props = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Yatish Badgujar`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
    },
  };
}

const Cross = ({ pos }: { pos: string }) => (
  <div
    className={`absolute w-3 h-3 ${pos} -translate-x-1/2 -translate-y-1/2 pointer-events-none`}
  >
    <div className="absolute h-px w-full bg-zinc-700" />
    <div className="absolute w-px h-full bg-zinc-700" />
  </div>
);

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#09090b]">
      <div className="md:max-w-3xl mx-auto border-x border-neutral-200 dark:border-zinc-800 min-h-screen relative">
        {/* ── Banner ── */}
        <div className="relative border-b border-zinc-800 py-5">
          <Cross pos="top-0 left-0" />
          <Cross pos="top-0 right-0" />
          <div
            className="h-[50px] w-full opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        {/* ── Back nav ── */}
        <div className="px-7 py-6 border-b border-zinc-800">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-zinc-600 hover:text-zinc-300 transition-colors group"
          >
            <svg
              className="w-3 h-3 transition-transform group-hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to projects
          </Link>
        </div>

        {/* ── Project meta header ── */}
        <div className="px-7 py-8 border-b border-zinc-800">
          <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-zinc-600 mb-3">
            / projects / {id}
          </p>
          <h1 className="font-mono text-3xl font-medium tracking-[-0.04em] text-zinc-100 leading-tight">
            {project.title}
          </h1>
        </div>

        {/* ── Project content ── */}
        <div className="px-7 py-8 border-b border-zinc-800">
          <ProjectCard project={project} isDetailed />
        </div>

        {/* ── Footer ── */}
        <div className="px-7 py-4 flex items-center justify-between">
          <span className="font-mono text-[10px] text-zinc-700 tracking-[0.15em]">
            YB · Projects
          </span>
          <Link
            href="/projects"
            className="font-mono text-[10px] text-zinc-700 hover:text-zinc-400 transition-colors"
          >
            ← All projects
          </Link>
        </div>
      </div>
    </div>
  );
}
