import { FC } from "react";
import Link from "next/link";
import { BlogPost } from "@/type/blog";

interface BlogCardProps { blog: BlogPost; }

export const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.id}`} className="group block py-5">
      <article className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          {/* meta row */}
          <div className="flex items-center gap-3 mb-2.5">
            <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-zinc-700">{blog.date}</span>
            <span className="font-mono text-[9px] text-zinc-800">·</span>
            <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-zinc-700">{blog.readTime}</span>
          </div>

          <h2 className="font-mono text-[13px] font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors leading-snug mb-2">
            {blog.title}
          </h2>

          <p className="font-mono text-[11px] text-zinc-600 leading-relaxed line-clamp-1 mb-3">
            {blog.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {blog.tags.map(tag => (
              <span key={tag} className="font-mono text-[8px] tracking-[0.1em] uppercase text-zinc-700">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* arrow */}
        <div className="shrink-0 flex items-center justify-center w-7 h-7 border border-zinc-800 rounded-[4px] text-zinc-700 group-hover:border-zinc-600 group-hover:text-zinc-300 transition-all mt-1">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </article>
    </Link>
  );
};