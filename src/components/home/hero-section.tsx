// src/components/home/hero-section.tsx
"use client";

import { useEffect, useState } from 'react';

interface HeroSectionProps {
  introText: string;
}

export function HeroSection({ introText }: HeroSectionProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="text-center py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-xl shadow-sm">
        <div className="container mx-auto px-4">
          <div className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent h-16 bg-gray-300/50 rounded animate-pulse w-3/4 mx-auto dark:bg-gray-700/50"></div>
          <div className="text-lg md:text-xl text-transparent max-w-2xl mx-auto h-10 bg-gray-300/50 rounded animate-pulse mt-4 w-1/2 dark:bg-gray-700/50"></div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="text-center py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-xl shadow-sm">
      <div className="container mx-auto px-4">
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
          {introText}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          I craft digital experiences that are intuitive, engaging, and impactful. Dive in to see my work and learn about my journey.
        </p>
      </div>
    </section>
  );
}
