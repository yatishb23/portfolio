'use client'

import { BlogContent } from './BlogContent'
import Link from 'next/link'
import { BlogPost } from '@/type/blog'

interface BlogPostClientProps {
  blog: BlogPost
}

export default function BlogPostClient({ blog }: BlogPostClientProps) {
  return (
    <div className="min-h-screen bg-inherit pt-16">
      <div className="flex flex-col items-start px-6 md:px-12 lg:ml-100 pt-4 md:pt-6 space-y-8 md:space-y-12 max-w-3xl mx-auto">
        <div className="w-full">
          <Link 
            href="/blog" 
            className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 inline-flex items-center hover:underline transition-colors"
          >
            <span className="mr-2">←</span>
            <span>Back to blogs</span>
          </Link>
          <BlogContent blog={blog} />
        </div>
      </div>
    </div>
  )
}