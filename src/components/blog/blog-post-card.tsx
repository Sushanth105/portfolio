// src/components/blog/blog-post-card.tsx
import type { BlogPost } from "@/types";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays } from "lucide-react";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-border">
      {post.imageUrl && (
         <div className="relative w-full h-56">
            <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            data-ai-hint={post.imageHint || "blog abstract"}
            />
        </div>
      )}
      <CardHeader className="pb-3">
        <CardTitle className="text-2xl font-bold font-headline leading-tight hover:text-primary transition-colors">
          {post.title}
        </CardTitle>
        <div className="flex items-center text-xs text-muted-foreground pt-1">
            <CalendarDays className="h-4 w-4 mr-1.5" />
            <span>{post.date}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base text-foreground/80 line-clamp-3">{post.snippet}</CardDescription>
      </CardContent>
      <CardFooter className="pt-4 border-t">
        <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80" tabIndex={-1} aria-hidden="true">
            Read More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
