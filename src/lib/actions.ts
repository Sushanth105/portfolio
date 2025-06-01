// src/lib/actions.ts
"use server";

import { personalizeIntro as personalizeIntroFlow, type PersonalizeIntroInput } from "@/ai/flows/personalize-intro";
import { z } from "zod";

// Schema for personalization form
const PersonalizationFormSchema = z.object({
  visitorProfession: z.string().min(2, "Profession/interest must be at least 2 characters.").max(100, "Input is too long."),
});

export async function handlePersonalizeIntro(prevState: any, formData: FormData) {
  try {
    const visitorProfession = formData.get("visitorProfession");
    const validatedFields = PersonalizationFormSchema.safeParse({
      visitorProfession: visitorProfession,
    });

    if (!validatedFields.success) {
      return {
        personalizedIntro: null,
        error: "Invalid input: " + validatedFields.error.flatten().fieldErrors.visitorProfession?.join(", "),
      };
    }

    const input: PersonalizeIntroInput = {
      visitorProfession: validatedFields.data.visitorProfession,
      // This base intro text could also be a prop or fetched from a CMS in a real app
      baseIntroText: "Hello! I'm a passionate developer and designer, excited to share my journey and work with you. Explore my projects and learn more about my skills.", 
    };

    const result = await personalizeIntroFlow(input);
    if (result && result.personalizedIntro) {
      return { personalizedIntro: result.personalizedIntro, error: null };
    } else {
      return { personalizedIntro: null, error: "AI personalization failed to generate text."}
    }
    
  } catch (error) {
    console.error("Error personalizing intro:", error);
    return { 
      personalizedIntro: null,
      error: "Failed to personalize introduction. Please try again later." 
    };
  }
}


// Schema for contact form
const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(50, "Name is too long."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message is too long (max 500 chars)."),
});

export async function handleContactForm(prevState: any, formData: FormData) {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check the fields.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  // In a real app, you'd send an email or save to a database here.
  // For this demo, we'll just log it and simulate success.
  console.log("Contact form submitted:", validatedFields.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: "Thank you! Your message has been sent successfully.",
    errors: null,
    success: true,
  };
}
