"use client";

import { BlogCard } from "./BlogCard";
import Link from "next/link";
import { BlogPost } from "@/type/blog";
import { motion } from "framer-motion";

interface BlogsListClientProps {
  blogs: BlogPost[];
}

const Cross = ({ pos }: { pos: string }) => (
  <div
    className={`absolute w-3 h-3 ${pos} -translate-x-1/2 -translate-y-1/2 pointer-events-none`}
  >
    <div className="absolute h-px w-full bg-zinc-700" />
    <div className="absolute w-px h-full bg-zinc-700" />
  </div>
);

export default function BlogsListClient({ blogs }: BlogsListClientProps) {
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

        {/* Hero */}
        <div className="px-7 py-10 border-b border-zinc-800">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-zinc-600 hover:text-zinc-300 transition-colors mb-10 group"
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
            Back to home
          </Link>
          <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-zinc-600 mb-4">
            / thoughts
          </p>
          <h1 className="font-mono text-4xl md:text-5xl font-medium tracking-[-0.04em] text-zinc-100 leading-none mb-5">
            Thoughts
          </h1>
          <p className="font-mono text-[13px] text-zinc-500 leading-[1.8] max-w-md">
            Technical writings, architectural patterns, and occasional deep
            dives into software development.
          </p>
        </div>

        {/* Blog list */}
        <div className="px-7 py-2">
          {blogs.length > 0 ? (
            blogs.map((blog, i) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="border-b border-zinc-800 last:border-b-0"
              >
                <BlogCard blog={blog} />
              </motion.div>
            ))
          ) : (
            <div className="py-16 flex flex-col items-center gap-4">
              <div className="w-10 h-10 border border-zinc-800 rounded-[5px] flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-zinc-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <p className="font-mono text-[10px] text-zinc-700 tracking-[0.2em] uppercase">
                Writing in progress
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-7 py-4 border-t border-zinc-800 flex items-center justify-between">
          <span className="font-mono text-[10px] text-zinc-700 tracking-[0.15em]">
            YB · Thoughts
          </span>
          <span className="font-mono text-[10px] text-zinc-700">
            {blogs.length} posts
          </span>
        </div>
      </div>
    </div>
  );
}
