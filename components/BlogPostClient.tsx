'use client'

import { BlogContent } from './BlogContent'
import Link from 'next/link'
import { BlogPost } from '@/type/blog'

interface BlogPostClientProps {
  blog: BlogPost
}

export default function BlogPostClient({ blog }: BlogPostClientProps) {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-neutral-950 pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <Link 
            href="/blog" 
            className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-50 transition-colors"
          >
            <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to blogs
          </Link>
        </div>
        <BlogContent blog={blog} />
      </div>
    </div>
  )
}