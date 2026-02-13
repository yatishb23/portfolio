"use client"

import Link from "next/link"
import { blogs } from "@/data/blogs"

export default function Thoughts(){
    const latestPost = blogs[0];
    return(
        <div className="space-y-16">
            <div className="space-y-2">
              <h2 className="text-4xl font-black tracking-tighter">Recent Thoughts</h2>
              <p className="text-neutral-500 dark:text-neutral-400 font-medium">Writings on engineering, design, and career.</p>
            </div>

            <div className="max-w-3xl">
              <Link href={`/blog/${latestPost.id}`}>
                <article
                  className="group relative p-10 bg-neutral-50/50 dark:bg-neutral-900/30 border border-neutral-100 dark:border-neutral-800 rounded-[3rem] hover:border-neutral-200 dark:hover:border-neutral-700 transition-all duration-500 hover:shadow-2xl hover:shadow-neutral-500/5 cursor-pointer overflow-hidden"
                >
                  <div className="relative z-10 space-y-8">
                    <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                      <span className="px-4 py-1.5 rounded-full bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-900 shadow-sm text-neutral-600 dark:text-neutral-300">
                        {latestPost.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6v6l4 2" />
                        </svg>
                        {latestPost.readTime}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-3xl md:text-4xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 leading-tight group-hover:text-emerald-500 transition-colors duration-500">
                        {latestPost.title}
                      </h3>
                      <p className="text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium line-clamp-2">
                        {latestPost.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {latestPost.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-300 dark:text-neutral-600">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-6 flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-neutral-950 dark:text-neutral-50">
                      <span>Read Full Article</span>
                      <div className="w-12 h-[2px] bg-neutral-950 dark:bg-neutral-50 group-hover:w-20 transition-all duration-500" />
                    </div>
                  </div>

                  {/* Visual flourish */}
                  <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transition-all duration-500 -rotate-12 group-hover:rotate-0 translate-x-4 group-hover:translate-x-0">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </div>
    )
}