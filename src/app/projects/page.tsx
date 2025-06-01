// src/app/projects/page.tsx
import { ProjectList } from "@/components/projects/project-list";
import { Layers } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
         <Layers className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A collection of my work, demonstrating my skills in design, development, and problem-solving.
        </p>
      </section>

      <section>
        <ProjectList />
      </section>
    </div>
  );
}
