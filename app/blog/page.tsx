import { blogs } from '@/data/blogs'
import BlogsListClient from '@/components/BlogListClient'

export default function BlogsPage() {
  return <BlogsListClient blogs={blogs} />
}