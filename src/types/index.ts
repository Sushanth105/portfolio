// src/types/index.ts
import type { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string; 
  imageUrl: string;
  imageHint?: string; // For data-ai-hint on placeholder images
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title:string;
  date: string; 
  snippet: string; // Short summary for list views
  content: string; // Full content for the blog post page
  imageUrl?: string;
  imageHint?: string;
  // slug: string;
}

export interface Skill {
  name: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  Icon?: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>; 
  category: 'Language' | 'Framework/Library' | 'Tool' | 'Database' | 'Other';
}
