"use client";

import { BlogContent } from "./BlogContent";
import Link from "next/link";
import { BlogPost } from "@/type/blog";

interface BlogPostClientProps {
  blog: BlogPost;
}

const Cross = ({ pos }: { pos: string }) => (
  <div
    className={`absolute w-3 h-3 ${pos} -translate-x-1/2 -translate-y-1/2 pointer-events-none`}
  >
    <div className="absolute h-px w-full bg-zinc-700" />
    <div className="absolute w-px h-full bg-zinc-700" />
  </div>
);

export default function BlogPostClient({ blog }: BlogPostClientProps) {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#09090b]">
      <div className="md:max-w-3xl mx-auto border-x border-neutral-200 dark:border-zinc-800 min-h-screen relative">
        {/* Banner */}
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

        {/* Back nav */}
        <div className="px-7 py-6 border-b border-zinc-800">
          <Link
            href="/blog"
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
            Back to thoughts
          </Link>
        </div>

        {/* Post meta */}
        <div className="px-7 py-8 border-b border-zinc-800">
          <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-zinc-600 mb-3">
            / thoughts / {blog.id}
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-zinc-700">
              {blog.date}
            </span>
            <span className="text-zinc-800">·</span>
            <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-zinc-700">
              {blog.readTime}
            </span>
            <span className="text-zinc-800">·</span>
            <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-zinc-700">
              {blog.author}
            </span>
          </div>
          <h1 className="font-mono text-2xl md:text-3xl font-medium tracking-[-0.03em] text-zinc-100 leading-tight mb-4">
            {blog.title}
          </h1>
          <div className="flex flex-wrap gap-1.5">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[8px] tracking-[0.1em] uppercase text-zinc-700 border border-zinc-800 rounded-[3px] px-1.5 py-0.5"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-7 py-8 border-b border-zinc-800">
          <BlogContent blog={blog} />
        </div>

        {/* Footer */}
        <div className="px-7 py-4 flex items-center justify-between">
          <span className="font-mono text-[10px] text-zinc-700 tracking-[0.15em]">
            YB · Thoughts
          </span>
          <Link
            href="/blog"
            className="font-mono text-[10px] text-zinc-700 hover:text-zinc-400 transition-colors"
          >
            ← All posts
          </Link>
        </div>
      </div>
    </div>
  );
}
