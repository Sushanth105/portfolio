// src/components/projects/project-list.tsx
import type { Project } from "@/types";
import { ProjectCard } from "./project-card";

// Mock data for projects
const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform 'ShopSphere'",
    description: "A full-featured e-commerce website with admin panel and payment integration.",
    longDescription: "ShopSphere is a modern e-commerce platform built with Next.js, Firebase, and Stripe. It offers a seamless shopping experience for users and a powerful dashboard for administrators to manage products, orders, and customers.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "e-commerce website",
    technologies: ["Next.js", "TypeScript", "Firebase", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
    date: "July 2023"
  },
  {
    id: "2",
    title: "Task Management App 'TaskFlow'",
    description: "A collaborative task management tool with real-time updates.",
    longDescription: "TaskFlow helps teams organize their work efficiently. Features include customizable boards, real-time collaboration, and progress tracking. Built using React, Node.js, and WebSockets.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "task manager app",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    liveUrl: "#",
    repoUrl: "#",
    date: "January 2023"
  },
  {
    id: "3",
    title: "Personal Portfolio Website (This one!)",
    description: "My personal space on the web, showcasing my skills and projects.",
    longDescription: "This portfolio itself is a project! Built with Next.js App Router, TypeScript, and Tailwind CSS, featuring AI-driven personalization and a clean, modern design.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "portfolio website code",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Genkit AI"],
    liveUrl: "/",
    repoUrl: "#",
    date: "Ongoing"
  },
   {
    id: "4",
    title: "AI Recipe Generator 'CulinaryAI'",
    description: "An application that generates recipes based on user-provided ingredients using AI.",
    longDescription: "CulinaryAI leverages generative AI to create unique recipes. Users can input available ingredients, dietary restrictions, and cuisine preferences to get customized cooking instructions. Built with Python (Flask/Django) and a modern frontend.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "recipe app food",
    technologies: ["Python", "Flask", "React", "OpenAI API", "Docker"],
    liveUrl: "#",
    repoUrl: "#",
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
