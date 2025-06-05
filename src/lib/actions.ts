// src/lib/actions.ts
"use server";

import { z } from "zod";

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
