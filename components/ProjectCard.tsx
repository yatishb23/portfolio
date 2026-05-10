import { Project } from "@/type/projects";
import { FaGithub } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps { project: Project; isDetailed?: boolean; }

export const ProjectCard = ({ project, isDetailed = false }: ProjectCardProps) => {
  if (!isDetailed) {
    return (
      <Link href={`/projects/${project.id}`}>
        <div className="group flex items-start justify-between gap-4 px-0 py-2 hover:opacity-100 transition-all">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-mono text-[13px] font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors leading-none">
                {project.title}
              </h3>
              <div className="flex gap-1.5">
                {project.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="font-mono text-[8px] tracking-[0.1em] text-zinc-700 border border-zinc-800 rounded-[3px] px-1.5 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="font-mono text-[11px] text-zinc-600 leading-relaxed line-clamp-1">
              {project.smallDes}
            </p>
          </div>
          <div className="shrink-0 flex items-center justify-center w-7 h-7 border border-zinc-800 rounded-[4px] text-zinc-700 group-hover:border-zinc-600 group-hover:text-zinc-300 transition-all">
            <FiArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <article className="w-full max-w-none font-mono">
      {/* Header */}
      <header className="mb-8 pb-6 border-b border-zinc-800">
        <div className="flex items-start justify-between gap-4 mb-5">
          <h1 className="text-2xl font-medium text-zinc-100 tracking-tight leading-tight">
            {project.title}
          </h1>
          <div className="flex items-center gap-2 shrink-0">
            {project.liveLink && (
              <Link href={project.liveLink} target="_blank"
                className="inline-flex items-center gap-1.5 h-8 px-3 border border-zinc-700 rounded-[4px] text-[10px] text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 transition-all">
                <FiArrowUpRight className="w-3.5 h-3.5" />
                Live
              </Link>
            )}
            {project.githubLink && (
              <Link href={project.githubLink} target="_blank"
                className="inline-flex items-center gap-1.5 h-8 px-3 border border-zinc-700 rounded-[4px] text-[10px] text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 transition-all">
                <FaGithub className="w-3.5 h-3.5" />
                GitHub
              </Link>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-[9px] tracking-[0.12em] uppercase text-zinc-600 border border-zinc-800 rounded-[3px] px-2 py-1">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Media */}
      {project.video ? (
        <div className="mb-8 border border-zinc-800 rounded-[5px] overflow-hidden aspect-video w-full">
          <video src={project.video} className="w-full h-full object-cover" controls playsInline />
        </div>
      ) : project.image && (
        <div className="mb-8 border border-zinc-800 rounded-[5px] overflow-hidden aspect-video w-full relative">
          <Image src={project.image} alt={project.title} fill className="object-contain" sizes="680px" quality={95} priority />
        </div>
      )}

      {/* Description */}
      <div className="mb-6 pb-6 border-b border-zinc-800">
        <p className="text-[13px] text-zinc-500 leading-[1.9]">
          {project.description}
          {project.tweetUrl && (
            <> <Link href={project.tweetUrl} target="_blank" className="text-zinc-400 hover:text-zinc-200 underline underline-offset-4 transition-colors">view the tweet</Link></>
          )}
        </p>
      </div>

      {/* Long description */}
      {project.longDescription && (
        <div className="space-y-4">
          {project.longDescription.split("\n\n").map((para, i) => (
            <p key={i} className="text-[13px] text-zinc-400 leading-[1.9]">{para}</p>
          ))}
        </div>
      )}
    </article>
  );
};