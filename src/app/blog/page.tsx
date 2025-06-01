// src/app/blog/page.tsx
import { BlogPostList } from "@/components/blog/blog-post-list";
import { Rss } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
         <Rss className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Thoughts & Insights</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A collection of articles on technology, design, personal reflections, and experiences in the tech world.
        </p>
      </section>

      <section>
        <BlogPostList />
      </section>
    </div>
  );
}
