// src/components/blog/blog-post-list.tsx
import { blogPostsData } from "@/lib/blog-data"; // Import from the new location
import { BlogPostCard } from "./blog-post-card";
import Link from "next/link";

export function BlogPostList() {
  if (blogPostsData.length === 0) {
    return <p className="text-center text-muted-foreground">No blog posts yet. Stay tuned!</p>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPostsData.map((post) => (
        <Link key={post.id} href={`/blog/${post.id}`} passHref legacyBehavior>
          <a className="block h-full"> {/* Added anchor and block styling for full card linkability */}
            <BlogPostCard post={post} />
          </a>
        </Link>
      ))}
    </div>
  );
}
