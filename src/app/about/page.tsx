// src/app/about/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Award, BookOpen, Coffee, Code2, Palette, Users, Zap, Brain, Lightbulb, Briefcase } from "lucide-react";
import type { Skill } from "@/types";

const skills: Skill[] = [
  { name: "JavaScript (ES6+)", Icon: Code2, category: "Language" },
  { name: "TypeScript", Icon: Code2, category: "Language" },
  { name: "React", Icon: Code2, category: "Framework/Library" },
  { name: "Next.js", Icon: Code2, category: "Framework/Library" },
  { name: "Node.js", Icon: Code2, category: "Framework/Library" },
  { name: "HTML5", Icon: Code2, category: "Language" },
  { name: "CSS3 & Tailwind", Icon: Palette, category: "Language" },
  { name: "Python", Icon: Code2, category: "Language" },
  { name: "Git & GitHub", Icon: Briefcase, category: "Tool" },
  { name: "REST APIs", Icon: Code2, category: "Other" },
  { name: "Firebase", Icon: Zap, category: "Database" },
  { name: "UI/UX Design Principles", Icon: Palette, category: "Other" },
];

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A glimpse into my professional journey, technical skills, and what drives my passion for technology and design.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        <Card className="md:col-span-2 shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center">
              <Users className="mr-3 h-8 w-8 text-primary" />
              My Professional Journey
            </CardTitle>
            <CardDescription className="text-base">
              Driven by curiosity and a passion for creating impactful digital solutions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-base leading-relaxed text-foreground/90">
            <p>
              Hello! I'm Sushanth, a dedicated and versatile software developer with a strong foundation in web technologies and a keen eye for user experience. My journey into the world of tech began with a fascination for how software could solve real-world problems and connect people in meaningful ways.
            </p>
            <p>
              Over the years, I've honed my skills in front-end and back-end development, working on diverse projects ranging from dynamic web applications to interactive user interfaces. I thrive in collaborative environments where I can contribute my expertise, learn from others, and push the boundaries of what's possible with code.
            </p>
            <p>
              I believe that the best products are built at the intersection of robust engineering, intuitive design, and a deep understanding of user needs. My approach is to always start with the 'why,' ensuring that every line of code and every design decision serves a clear purpose towards a better user experience.
            </p>
             <p>
              Beyond technical skills, I value clear communication, continuous learning, and a proactive problem-solving mindset. I'm always excited to take on new challenges and explore emerging technologies.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-8 md:col-span-1">
           <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                <Image src="https://placehold.co/150x150.png" alt="Sushanth's Portrait" width={100} height={100} className="rounded-full mr-4 border-2 border-primary p-1" data-ai-hint="professional portrait" />
                 <span>Sushanth Example</span>
                </CardTitle>
                 <CardDescription>Software Developer & Designer</CardDescription>
            </CardHeader>
           </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Coffee className="mr-3 h-7 w-7 text-primary" />
                Interests & Hobbies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-foreground/90">
              <p className="flex items-center"><BookOpen className="mr-2 h-5 w-5 text-accent" /> Exploring new tech trends & AI</p>
              <p className="flex items-center"><Palette className="mr-2 h-5 w-5 text-accent" /> Minimalist design & typography</p>
              <p className="flex items-center"><Zap className="mr-2 h-5 w-5 text-accent" /> Contributing to open-source projects</p>
              <p className="flex items-center"><Coffee className="mr-2 h-5 w-5 text-accent" /> Enjoying a good cup of coffee while coding</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center">
            <Award className="mr-3 h-8 w-8 text-primary" />
            Core Skills & Expertise
          </CardTitle>
          <CardDescription className="text-base">
            A curated list of technologies and tools I work with.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge key={skill.name} variant="secondary" className="px-4 py-2 text-sm rounded-full shadow-sm border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                {skill.Icon && <skill.Icon className="mr-2 h-4 w-4" />}
                {skill.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center">
            <Brain className="mr-3 h-8 w-8 text-primary" />
            My Philosophy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-base leading-relaxed text-foreground/90">
            <div className="flex items-start">
                <Lightbulb className="mr-3 h-6 w-6 text-accent shrink-0 mt-1" />
                <p><strong className="font-semibold">Continuous Learning:</strong> The tech landscape is ever-evolving, and I'm committed to lifelong learning to stay at the forefront of innovation.</p>
            </div>
            <div className="flex items-start">
                <Users className="mr-3 h-6 w-6 text-accent shrink-0 mt-1" />
                <p><strong className="font-semibold">User-Centricity:</strong> I believe in building products that are not just functional but also delightful and intuitive for the end-user.</p>
            </div>
             <div className="flex items-start">
                <Zap className="mr-3 h-6 w-6 text-accent shrink-0 mt-1" />
                <p><strong className="font-semibold">Impactful Solutions:</strong> My goal is to leverage technology to create solutions that solve real problems and deliver tangible value.</p>
            </div>
        </CardContent>
      </Card>

    </div>
  );
}
