// src/components/blog/blog-post-list.tsx
import type { BlogPost } from "@/types";
import { BlogPostCard } from "./blog-post-card";

// Mock data for blog posts
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "understanding he harmony in nature",
    date: "August 15, 2023",
    snippet: "Exploring how artificial intelligence is reshaping the landscape of web development, from automated coding to personalized user experiences.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "AI technology abstract"
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
