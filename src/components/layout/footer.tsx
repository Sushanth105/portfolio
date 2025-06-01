// src/components/layout/footer.tsx
import { Github, Linkedin, Twitter, Code } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Code className="h-5 w-5 mr-2 text-primary" />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sushanth Portfolio. Crafted with Next.js & Tailwind CSS.
          </p>
        </div>
        <div className="flex space-x-4">
          <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-primary">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-primary">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground transition-colors hover:text-primary">
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
