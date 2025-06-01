// src/components/blog/blog-post-list.tsx
import type { BlogPost } from "@/types";
import { BlogPostCard } from "./blog-post-card";

// Mock data for blog posts
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development with AI",
    date: "August 15, 2023",
    snippet: "Exploring how artificial intelligence is reshaping the landscape of web development, from automated coding to personalized user experiences.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "AI technology abstract"
  },
  {
    id: "2",
    title: "Mastering State Management in React",
    date: "July 28, 2023",
    snippet: "A deep dive into various state management solutions in React, including Context API, Redux, Zustand, and their use cases.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "code react abstract"
  },
  {
    id: "3",
    title: "Designing for Accessibility: A Developer's Guide",
    date: "June 05, 2023",
    snippet: "Practical tips and best practices for creating web applications that are accessible to everyone, including users with disabilities.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "accessibility design inclusion"
  },
   {
    id: "4",
    title: "Server Components in Next.js 14: A Paradigm Shift",
    date: "September 02, 2023",
    snippet: "Understanding the power and implications of React Server Components in Next.js, and how they improve performance and developer experience.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "server code cloud"
  },
];

export function BlogPostList() {
  if (blogPosts.length === 0) {
    return <p className="text-center text-muted-foreground">No blog posts yet. Stay tuned!</p>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
