
// src/app/blog/[id]/page.tsx
import { blogPostsData } from "@/lib/blog-data"; // We'll move blogPosts here
import type { BlogPost } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

// Helper function to get a single blog post
function getPost(id: string): BlogPost | undefined {
  return blogPostsData.find((post) => post.id === id);
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getPost(params.id);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.snippet.substring(0, 160), // Or a dedicated meta description field
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPost(params.id);

  if (!post) {
    notFound(); // Triggers the not-found.js file or a default Next.js 404 page
  }

  // Split the content by newlines to render paragraphs
  const contentParagraphs = post.content.split('\\n\\n');

  return (
    <div className="space-y-10">
      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link href="/blog" className="inline-flex items-center text-sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      <article>
        <Card className="shadow-lg overflow-hidden">
          {post.imageUrl && (
            <div className="relative w-full h-72 md:h-96">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                className="object-cover"
                priority // Good for LCP on individual post pages
              />
            </div>
          )}
          <CardHeader className="border-b">
            <CardTitle className="text-3xl md:text-4xl font-bold font-headline">
              {post.title}
            </CardTitle>
            <div className="flex items-center text-sm text-muted-foreground pt-2">
              <CalendarDays className="h-4 w-4 mr-1.5" />
              <span>{post.date}</span>
            </div>
          </CardHeader>
          <CardContent className="py-6 px-4 md:px-6 prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl dark:prose-invert max-w-none">
            {contentParagraphs.map((paragraph, index) => (
              <p key={index} className="mb-4 last:mb-0 text-foreground/90 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>
      </article>
    </div>
  );
}

// Optional: If you have a small number of blog posts and want to pre-render them at build time
export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    id: post.id,
  }));
}
