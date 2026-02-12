import { FC } from 'react'
import { BlogPost } from '@/type/blog'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

interface BlogContentProps {
  blog: BlogPost
}

export const BlogContent: FC<BlogContentProps> = ({ blog }) => {
  return (
    <article className="bg-inherit prose prose-neutral dark:prose-invert prose-headings:font-medium max-w-none px-4 md:px-0">
      <header className="mb-8 md:mb-12 not-prose">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 md:mb-6 break-words">{blog.title}</h1>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-neutral-500 dark:text-neutral-400 gap-3 md:gap-4">
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <span className="text-xs sm:text-sm md:text-base">{blog.date}</span>
            <span className="text-xs sm:text-sm md:text-base">{blog.readTime}</span>
          </div>
          <span className="text-xs sm:text-sm md:text-base">{blog.author}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-4 md:mt-6">
          {blog.tags.map(tag => (
            <span 
              key={tag} 
              className="px-2 sm:px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-full text-xs whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>
      
      <div className="content prose-sm sm:prose-base md:prose-lg">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          components={{
            p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
            h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
            h2: ({ children }) => <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>,
            h3: ({ children }) => <h3 className="text-xl font-medium mt-4 mb-2">{children}</h3>,
            ul: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
            li: ({ children }) => <li className="mb-1">{children}</li>,
            code: ({ className, children }) => {
              if (!className) {
                return (
                  <code className="px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                    {children}
                  </code>
                )
              }

              const combinedClassName = `hljs ${className}`

              return (
                <pre className="my-6 overflow-x-auto rounded-lg border border-neutral-200/70 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 p-4">
                  <code className={combinedClassName}>{children}</code>
                </pre>
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