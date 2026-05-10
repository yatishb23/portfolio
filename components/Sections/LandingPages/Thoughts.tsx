"use client";

import Link from "next/link";
import { blogs } from "@/data/blogs";

export default function Thoughts() {
  const latestPost = blogs[0];
  return (
    <div className="flex flex-col gap-6">
      <Link href={`/blog/${latestPost.id}`} className="group block">
        <article className="flex flex-col gap-3">
          <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500 mb-1">
            <span>{latestPost.date}</span>
            <div className="h-px w-4 bg-zinc-800" />
            <span>{latestPost.readTime}</span>
          </div>

          <h3 className="text-[15px] font-medium text-zinc-200 group-hover:text-zinc-50 transition-colors">
            {latestPost.title}
          </h3>
          <p className="text-[12px] text-zinc-400 leading-relaxed max-w-lg line-clamp-2">
            {latestPost.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {latestPost.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[9px] uppercase tracking-[0.1em] text-zinc-600 border border-zinc-800 px-2 py-0.5 rounded-[3px]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">
            <span>Read Article</span>
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>
        </article>
      </Link>
    </div>
  );
}
