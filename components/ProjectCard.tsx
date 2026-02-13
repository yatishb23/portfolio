import { Project } from "@/type/projects";
import { FaGithub } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  isDetailed?: boolean;
}

export const ProjectCard = ({
  project,
  isDetailed = false,
}: ProjectCardProps) => {
  if (!isDetailed) {
    return (
      <Link href={`/projects/${project.id}`}>
        <div className="group p-6 rounded-[2rem] bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800 hover:bg-white dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <div className="p-2 rounded-xl bg-neutral-200 dark:bg-neutral-800 text-neutral-500 transition-colors group-hover:bg-neutral-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-neutral-950">
              <FiArrowUpRight className="w-5 h-5" />
            </div>
          </div>
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-2">
            {project.smallDes}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-neutral-300 dark:text-neutral-600">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <article className="prose prose-neutral dark:prose-invert prose-headings:font-medium max-w-none">
      <header className="not-prose mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-4xl font-medium">{project.title}</h1>
          <div className="flex items-center gap-4">
            {project.liveLink && (
              <Link
                href={project.liveLink}
                target="_blank"
                className="bg-neutral-200 dark:bg-neutral-800 p-2 rounded-full hover:opacity-70"
              >
                <FiArrowUpRight className="size-5 md:size-6" />
              </Link>
            )}
            {project.githubLink && (
              <Link
                href={project.githubLink}
                target="_blank"
                className="bg-neutral-200 dark:bg-neutral-800 p-2 rounded-full hover:opacity-70"
              >
                <FaGithub className="size-5 md:size-6" />
              </Link>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {project.video ? (
        <div className="mt-8 mb-8 aspect-video w-full">
          <video
            src={project.video}
            className="w-full h-full rounded-lg object-cover"
            controls
            playsInline
          />
        </div>
      ) : (
        project.image && (
          <div className="mt-8 mb-8 w-full aspect-video relative">
            {" "}
            {/* Changed height to aspect-video */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="rounded-lg object-contain" // Changed to object-contain
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={95}
              priority
            />
          </div>
        )
      )}

      <div className="mb-8">
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {project.description}
          {project.tweetUrl && (
            <>
              {" "}
              <Link
                href={project.tweetUrl}
                target="_blank"
                className="text-cyan-500 dark:text-cyan-600 hover:underline"
              >
                you can view the tweet here
              </Link>
            </>
          )}
        </p>
      </div>

      {project.longDescription && (
        <div className="mt-8 space-y-4">
          {project.longDescription.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </article>
  );
};
