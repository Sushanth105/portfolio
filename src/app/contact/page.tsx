// src/app/contact/page.tsx
import { ContactForm } from "@/components/contact/contact-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
         <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
            <Mail className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        <Card className="md:col-span-2 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-3xl">Send a Message</CardTitle>
            <CardDescription className="text-base">
              Fill out the form below, and I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <div className="space-y-6 md:col-span-1">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/90">
              <div className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-primary" />
                <a href="mailto:veenaganiga96@gmail.com" className="hover:text-primary transition-colors">veenaganiga96@gmail.com</a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-primary" />
                <span>+91 7975033992</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-3 h-5 w-5 text-primary" />
                <span>Mangaluru,karnataka,india</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Connect Online</CardTitle>
            </CardHeader>
            <CardContent className="flex space-x-4">
              <Link href="https://github.com/Sushanth105" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"
                className="p-2 rounded-full bg-muted hover:bg-accent/20 text-muted-foreground hover:text-primary transition-all">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/sushanth-ganiga-78447a285/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"
                className="p-2 rounded-full bg-muted hover:bg-accent/20 text-muted-foreground hover:text-primary transition-all">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile"
                className="p-2 rounded-full bg-muted hover:bg-accent/20 text-muted-foreground hover:text-primary transition-all">
                <Twitter className="h-6 w-6" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
