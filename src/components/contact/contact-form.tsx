// src/components/contact/contact-form.tsx
"use client";

import { useActionState, useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { handleContactForm } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(50, "Name is too long."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message is too long (max 500 chars)."),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const initialState = {
  message: "",
  errors: null,
  success: false,
};

function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  const { pending } = useFormStatus();
  const isDisabled = pending || isSubmitting;

  return (
    <Button type="submit" disabled={isDisabled} className="w-full sm:w-auto text-base py-6">
      {isDisabled ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
        </>
      ) : (
        <>
          Send Message <Send className="ml-2 h-5 w-5" />
        </>
      )}
    </Button>
  );
}


export function ContactForm() {
  const [state, formAction] = useActionState(handleContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const { control, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  useEffect(() => {
    if (state.success) {
      toast({
        title: "Message Sent!",
        description: state.message,
        variant: "default", // or "success" if you have it
        action: <CheckCircle2 className="text-green-500" />,
      });
      reset(); // Reset react-hook-form fields
      formRef.current?.reset(); // Reset native form fields (ensure consistent reset)
    } else if (state.message && !state.success && state.errors) { // Error from server action validation
      toast({
        title: "Submission Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast, reset]);

  const onSubmit = (data: ContactFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formAction(formData); // Call server action
  };


  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</Label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <Input {...field} id="name" placeholder="John Doe" className="py-3 px-4 text-base" />}
          />
          {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
          {state.errors?.name && <p className="mt-1 text-sm text-destructive">{state.errors.name[0]}</p>}
        </div>
        <div>
          <Label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</Label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input {...field} id="email" type="email" placeholder="you@example.com" className="py-3 px-4 text-base" />}
          />
          {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
           {state.errors?.email && <p className="mt-1 text-sm text-destructive">{state.errors.email[0]}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="message" className="block text-sm font-medium mb-1">Message</Label>
        <Controller
          name="message"
          control={control}
          render={({ field }) => <Textarea {...field} id="message" placeholder="Your message here..." rows={5} className="py-3 px-4 text-base" />}
        />
        {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
        {state.errors?.message && <p className="mt-1 text-sm text-destructive">{state.errors.message[0]}</p>}
      </div>
      
      <SubmitButton isSubmitting={isSubmitting} />
    </form>
  );
}
