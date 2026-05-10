import React, { FC } from "react";
import { BlogPost } from "@/type/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Image from "next/image";

interface BlogContentProps {
  blog: BlogPost;
}

export const BlogContent: FC<BlogContentProps> = ({ blog }) => {
  return (
    <article className="max-w-[680px] mx-auto py-8">
      <header className="mb-12 border-b border-zinc-800 pb-8">
        <h1 className="text-[22px] font-medium text-zinc-100 mb-6 leading-[1.3]">
          {blog.title}
        </h1>

        {blog.coverImage && (
          <div className="relative aspect-[21/9] mb-8 rounded-[6px] overflow-hidden border border-zinc-800 bg-zinc-900">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover opacity-80"
              priority
            />
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4 text-zinc-600 mb-6 font-mono text-[10px] uppercase tracking-widest">
          <div className="flex items-center gap-1.5">
            <span className="text-zinc-500">Published</span>
            <span className="text-zinc-300">{blog.date}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-zinc-800" />
          <div className="flex items-center gap-1.5">
            <span className="text-zinc-500">Read</span>
            <span className="text-zinc-300">{blog.readTime}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-zinc-800" />
          <div className="flex items-center gap-1.5">
            <span className="text-zinc-500">Author</span>
            <span className="text-zinc-300">{blog.author}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-transparent border border-zinc-800 text-zinc-500 rounded-[3px] text-[9px] font-mono uppercase tracking-[0.1em] hover:text-zinc-300 hover:border-zinc-600 transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="font-sans text-[13px] text-zinc-400 leading-relaxed mb-6">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
          components={{
            p: ({ children }) => {
              if (
                React.Children.toArray(children).some(
                  (child) =>
                    React.isValidElement(child) &&
                    (child.type === "div" ||
                      (child.type as any).name === "img"),
                )
              ) {
                return <>{children}</>;
              }
              return <p className="mb-5">{children}</p>;
            },
            h1: ({ children }) => (
              <h1 className="text-[18px] font-medium text-zinc-200 mt-10 mb-4">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-[16px] font-medium text-zinc-200 mt-8 mb-4">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-[14px] font-medium text-zinc-200 mt-6 mb-3">
                {children}
              </h3>
            ),
            ul: ({ children }) => (
              <ul className="list-disc pl-5 mb-5 space-y-1 text-zinc-400 marker:text-zinc-700">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal pl-5 mb-5 space-y-1 text-zinc-400 marker:text-zinc-700">
                {children}
              </ol>
            ),
            li: ({ children }) => <li>{children}</li>,
            code: ({ className, children }) => {
              if (!className) {
                return (
                  <code className="px-1.5 py-0.5 rounded-[4px] bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300">
                    {children}
                  </code>
                );
              }
              const combinedClassName = `hljs ${className} text-[11px] font-mono`;
              return (
                <div className="my-6">
                  <pre className="overflow-x-auto rounded-[6px] border border-zinc-800 bg-[#0c0c0e] p-5 scrollbar-hide">
                    <code className={combinedClassName}>{children}</code>
                  </pre>
                </div>
              );
            },
            table: ({ children }) => (
              <div className="my-6 overflow-x-auto border border-zinc-800 rounded-[6px]">
                <table className="w-full border-collapse text-left text-[12px] whitespace-nowrap">
                  {children}
                </table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="bg-zinc-900 text-zinc-400 border-b border-zinc-800">
                {children}
              </thead>
            ),
            tbody: ({ children }) => (
              <tbody className="divide-y divide-zinc-800">{children}</tbody>
            ),
            tr: ({ children }) => (
              <tr className="hover:bg-zinc-900/50 transition-colors">
                {children}
              </tr>
            ),
            img: ({ src, alt }) => (
              <div className="my-8 rounded-[6px] overflow-hidden border border-zinc-800 bg-zinc-900">
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-auto object-cover opacity-90"
                />
              </div>
            ),
            th: ({ children }) => (
              <th className="px-4 py-3 font-medium uppercase tracking-wider text-[10px] text-zinc-500">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="px-4 py-3 text-zinc-400">{children}</td>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                className="text-zinc-300 hover:text-zinc-100 underline decoration-zinc-700 hover:decoration-zinc-500 underline-offset-4 transition-colors"
              >
                {children}
              </a>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-2 border-zinc-700 pl-4 py-1 my-5 text-zinc-500 italic">
                {children}
              </blockquote>
            ),
          }}
        >
          {blog.content}
        </ReactMarkdown>
      </div>
    </article>
  );
};
