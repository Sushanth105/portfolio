// src/components/home/personalization-form.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles } from "lucide-react"; // Changed icon from Send to Sparkles
import { useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";

interface PersonalizationFormProps {
  formAction: (payload: FormData) => void;
  error?: string | null;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? "Personalizing..." : "Personalize Intro"}
      {!pending && <Sparkles className="ml-2 h-4 w-4" />}
    </Button>
  );
}

export function PersonalizationForm({ formAction, error }: PersonalizationFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  // Example of how you might reset the form or handle focus on error, though not strictly needed here
  // useEffect(() => {
  // if (error) {
  // // Focus logic or formRef.current?.reset(); if desired
  // }
  // }, [error]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <div>
        <Label htmlFor="visitorProfession" className="sr-only">Your Profession or Interest</Label>
        <Input
          id="visitorProfession"
          name="visitorProfession"
          type="text"
          placeholder="E.g., Software Engineer, Recruiter, Artist"
          required
          aria-describedby="profession-error"
          className="text-base py-6"
        />
        {error && (
          <p id="profession-error" className="mt-2 text-sm text-destructive">
            {error}
          </p>
        )}
      </div>
      <SubmitButton />
    </form>
  );
}
