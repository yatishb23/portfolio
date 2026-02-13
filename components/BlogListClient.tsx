'use client'

import { BlogCard } from './BlogCard'
import Link from 'next/link'
import { BlogPost } from '@/type/blog'

interface BlogsListClientProps {
  blogs: BlogPost[]
}

export default function BlogsListClient({ blogs }: BlogsListClientProps) {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-white dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-20">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50 transition-colors mb-10"
          >
            <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </Link>
          
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black tracking-[-0.05em] text-neutral-950 dark:text-neutral-50 leading-none">
              Thoughts<span className="text-neutral-200 dark:text-neutral-800">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 font-medium max-w-2xl leading-relaxed">
              Technical writings, architectural patterns, and occasional deep dives into the world of software development.
            </p>
          </div>
        </div>
        
        {blogs.length > 0 ? (
          <div className="grid gap-1 lg:gap-8">
            {blogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="py-20 rounded-[2.5rem] bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-3xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-neutral-300 dark:text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <p className="text-lg font-bold text-neutral-400 dark:text-neutral-600 uppercase tracking-widest">
              Writing in progress...
            </p>
          </div>
        )}
      </div>
    </div>
  )
}