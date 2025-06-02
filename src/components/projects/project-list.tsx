// src/components/projects/project-list.tsx
import type { Project } from "@/types";
import { ProjectCard } from "./project-card";

// Mock data for projects
const projects: Project[] = [
  {
    id: "1",
    title: "VaultGuard",
    description: "VaultGuard is a secure, modern password manager web application built with Next.js. It helps you generate, store, and manage your credentials safely, with a focus on simplicity and usability.",
    longDescription: "",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "website",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS","MongoDb"],
    liveUrl: "https://vault-guard-lac.vercel.app/",
    repoUrl: "https://github.com/Sushanth105/VaultGuard",
    date: "July 2023"
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates.",
    longDescription: "TaskFlow helps teams organize their work efficiently. Features include customizable boards, real-time collaboration, and progress tracking. Built using React, Node.js, and WebSockets.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "task manager app",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://todowebs.vercel.app/",
    repoUrl: "https://github.com/Sushanth105/WebDev/tree/main/todo",
    date: "January 2023"
  },
  {
    id: "3",
    title: "AgriFlow",
    description:"agricultural management web application",
    longDescription: "This project is a portfolio website showcasing my skills and projects. It features a modern design, responsive layout, and interactive elements to highlight my work effectively.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "website code",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Gemini AI"],
    liveUrl: "/",
    repoUrl: "https://github.com/Sampath252005/AgriFlow",
    date: "March 2024"
  },
];

export function ProjectList() {
  if (projects.length === 0) {
    return <p className="text-center text-muted-foreground">No projects to display yet. Check back soon!</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
