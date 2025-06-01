// src/components/layout/navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, UserCircle, Briefcase, FileText, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: UserCircle },
  { href: "/projects", label: "Projects", icon: Briefcase },
  { href: "/blog", label: "Blog", icon: FileText },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    // Basic skeleton or null to avoid flash of unstyled content / hydration issues
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="h-8 w-32 bg-muted rounded"></div>
            <div className="hidden md:flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-8 w-24 bg-muted rounded"></div>
              ))}
            </div>
            <div className="md:hidden h-8 w-8 bg-muted rounded"></div>
          </div>
        </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
          {/* Using an SVG for "Aura" logo for a more designed feel */}
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-8 w-8 text-primary">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10"/>
            <path d="M30 65C35 55 45 50 50 50C55 50 65 55 70 65" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
            <circle cx="35" cy="35" r="5" fill="currentColor"/>
            <circle cx="65" cy="35" r="5" fill="currentColor"/>
          </svg>
          <span className="font-headline text-2xl font-bold text-primary">Aura</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant={pathname === item.href ? "secondary" : "ghost"}
              asChild
              className={cn(
                "font-medium px-3 py-2",
                pathname === item.href ? "text-primary" : "text-foreground/70 hover:text-foreground hover:bg-accent/50"
              )}
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-0">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b p-4">
                  <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                     <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-7 w-7 text-primary">
                        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="10"/>
                        <path d="M30 65C35 55 45 50 50 50C55 50 65 55 70 65" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
                        <circle cx="35" cy="35" r="5" fill="currentColor"/>
                        <circle cx="65" cy="35" r="5" fill="currentColor"/>
                      </svg>
                    <span className="font-headline text-xl font-bold text-primary">Aura</span>
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-2 p-4">
                  {navItems.map((item) => (
                    <Button
                      key={item.label}
                      variant={pathname === item.href ? "secondary" : "ghost"}
                      asChild
                      className={cn(
                        "w-full justify-start text-base py-3 px-4",
                        pathname === item.href ? "text-primary" : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link href={item.href}>
                        <item.icon className="mr-3 h-5 w-5" />
                        {item.label}
                      </Link>
                    </Button>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
