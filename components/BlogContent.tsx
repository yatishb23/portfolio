import React, { FC } from 'react'
import { BlogPost } from '@/type/blog'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import Image from 'next/image'

interface BlogContentProps {
  blog: BlogPost
}

export const BlogContent: FC<BlogContentProps> = ({ blog }) => {
  return (
    <article className="prose prose-neutral dark:prose-invert prose-headings:font-black prose-headings:tracking-tight max-w-none">
      <header className="mb-16 not-prose">
        <h1 className="text-4xl md:text-6xl font-black tracking-[-0.04em] text-neutral-950 dark:text-neutral-50 mb-8 leading-[1.1]">
          {blog.title}
        </h1>
        
        {blog.coverImage && (
          <div className="relative aspect-[16/9] mb-12 rounded-[2.5rem] overflow-hidden border border-neutral-100 dark:border-neutral-800">
            <Image 
              src={blog.coverImage} 
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="flex flex-wrap items-center gap-6 text-neutral-400 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Published</span>
            <span className="text-xs font-bold text-neutral-600 dark:text-neutral-300">{blog.date}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-neutral-200 dark:bg-neutral-800" />
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Read Time</span>
            <span className="text-xs font-bold text-neutral-600 dark:text-neutral-300">{blog.readTime}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-neutral-200 dark:bg-neutral-800" />
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Author</span>
            <span className="text-xs font-bold text-neutral-600 dark:text-neutral-300">{blog.author}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {blog.tags.map(tag => (
            <span 
              key={tag} 
              className="px-4 py-1.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-neutral-950 transition-all cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
      
      <div className="content prose-neutral dark:prose-invert prose-lg md:prose-xl prose-p:text-neutral-600 dark:prose-p:text-neutral-400 prose-p:leading-relaxed prose-headings:text-neutral-950 dark:prose-headings:text-neutral-50 font-sans">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          components={{
            p: ({ children }) => {
              if (React.Children.toArray(children).some(child => 
                React.isValidElement(child) && (child.type === 'div' || (child.type as any).name === 'img')
              )) {
                return <>{children}</>
              }
              return <p className="mb-4 leading-relaxed">{children}</p>
            },
            h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
            h2: ({ children }) => <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>,
            h3: ({ children }) => <h3 className="text-xl font-medium mt-4 mb-2">{children}</h3>,
            ul: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
            li: ({ children }) => <li className="mb-1">{children}</li>,
            code: ({ className, children }) => {
              if (!className) {
                return (
                  <code className="px-1.5 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-bold">
                    {children}
                  </code>
                )
              }

              const combinedClassName = `hljs ${className}`

              return (
                <div className="my-10 group relative">
                  <div className="absolute -inset-2 bg-neutral-100 dark:bg-neutral-900 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <pre className="relative overflow-x-auto rounded-[1.5rem] border border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-900/30 p-8 backdrop-blur-sm">
                    <code className={combinedClassName}>{children}</code>
                  </pre>
                </div>
              )
            },
            table: ({ children }) => (
              <div className="my-6 overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  {children}
                </table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="bg-neutral-100/80 dark:bg-neutral-800/60">
                {children}
              </thead>
            ),
            tbody: ({ children }) => (
              <tbody className="divide-y divide-neutral-200/70 dark:divide-neutral-800">
                {children}
              </tbody>
            ),
            tr: ({ children }) => (
              <tr className="align-top">{children}</tr>
            ),
            img: ({ src, alt }) => (
              <div className="my-12 rounded-[2rem] overflow-hidden border border-neutral-100 dark:border-neutral-800">
                <img src={src} alt={alt} className="w-full h-auto object-cover" />
              </div>
            ),
            th: ({ children }) => (
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-300 border border-neutral-200/70 dark:border-neutral-800">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="px-4 py-3 border border-neutral-200/70 dark:border-neutral-800 text-neutral-700 dark:text-neutral-200">
                {children}
              </td>
            ),
          }}
        >
          {blog.content}
        </ReactMarkdown>
      </div>
    </article>
  )
}