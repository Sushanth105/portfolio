// src/app/page.tsx
"use client";

import { HeroSection } from "@/components/home/hero-section";
import { PersonalizationForm } from "@/components/home/personalization-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, ArrowRight } from "lucide-react";
import { useFormState } from "react-dom";
import { handlePersonalizeIntro } from "@/lib/actions";
import { useEffect, useState } from "react";
import Link from "next/link";

const baseIntroText = "Hello! I'm a passionate developer and designer, excited to share my journey and work with you. Explore my projects and learn more about my skills.";

const initialStateForForm = {
  personalizedIntro: null, 
  error: null,
};

export default function HomePage() {
  const [formState, formAction] = useFormState(handlePersonalizeIntro, initialStateForForm);
  const [heroIntroText, setHeroIntroText] = useState(baseIntroText); 

  useEffect(() => {
    if (formState.personalizedIntro) {
      setHeroIntroText(formState.personalizedIntro);
    } else if (formState.error) {
      // Optionally, inform the user about the error through the hero text or a toast
      setHeroIntroText(baseIntroText); // Revert to base intro on error
      // You might want to use a toast notification for the error instead of altering hero text
      console.error("Personalization error:", formState.error);
    }
  }, [formState]);
  
  return (
    <div className="space-y-12 md:space-y-16">
      <HeroSection 
        currentDisplayIntro={heroIntroText}
        baseIntroText={baseIntroText}
      />

      <section>
        <Card className="shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center mb-2">
              <Lightbulb className="mr-3 h-7 w-7 text-accent" />
              <CardTitle className="font-headline text-2xl md:text-3xl">Make it Yours</CardTitle>
            </div>
            <CardDescription className="text-muted-foreground text-base">
             Tell me your profession or primary interest (e.g., "Software Engineer", "UX Designer", "Tech Enthusiast"), and I'll tailor the introduction just for you!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PersonalizationForm formAction={formAction} error={formState.error} />
            {formState.personalizedIntro && !formState.error && (
              <p className="mt-4 text-sm text-green-600 dark:text-green-400">Introduction updated successfully!</p>
            )}
          </CardContent>
        </Card>
      </section>

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
