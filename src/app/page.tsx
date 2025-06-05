// src/app/page.tsx
"use client";

import { HeroSection } from "@/components/home/hero-section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const introText = "Hello! I'm Sushanth, a passionate developer and designer, excited to share my journey and work with you. Explore my projects and learn more about my skills.";

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <HeroSection 
        introText={introText}
      />

      <section className="text-center py-8 md:py-12">
        <h2 className="font-headline text-3xl md:text-4xl font-semibold mb-6">Discover More</h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Ready to explore further? Check out my innovative projects, read my insightful blog articles, or learn more about my journey.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="outline">
                <Link href="/projects">View Projects <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg">
                <Link href="/about">About Me <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
