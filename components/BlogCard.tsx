import { FC } from 'react'
import Link from 'next/link'
import { BlogPost } from '@/type/blog'

interface BlogCardProps {
  blog: BlogPost
}

export const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.id}`} className="group block">
      <article className="p-8 rounded-[2.5rem] bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800 hover:bg-white dark:hover:bg-neutral-800 hover:border-neutral-200 dark:hover:border-neutral-700 transition-all duration-300 shadow-sm">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-neutral-950 dark:text-neutral-50 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
              {blog.title}
            </h2>
            <div className="flex items-center gap-3 shrink-0">
               <div className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-[10px] font-black uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                 {blog.date}
               </div>
               <div className="px-3 py-1 rounded-full bg-neutral-950 dark:bg-white text-[10px] font-black uppercase tracking-widest text-white dark:text-neutral-950">
                 {blog.readTime}
               </div>
            </div>
          </div>
          
          <p className="text-lg font-medium text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-2 max-w-3xl">
            {blog.description}
          </p>
          
          <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800">
            <div className="flex flex-wrap gap-2">
              {blog.tags.map(tag => (
                <span key={tag} className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-300 dark:text-neutral-600">
                  #{tag}
                </span>
              ))}
            </div>
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 group-hover:bg-neutral-950 dark:group-hover:bg-white transition-all">
                <svg className="w-5 h-5 text-neutral-400 dark:text-neutral-600 group-hover:text-white dark:group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}