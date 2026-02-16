"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <TooltipProvider>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          scrolled
            ? "bg-background/80 backdrop-blur-md border-border/50 py-3 shadow-sm"
            : "bg-transparent border-transparent py-5"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Brand */}
          <a href="#" className="flex items-center space-x-2 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
              <span className="text-primary-foreground font-bold text-xl">S</span>
            </div>
            <span className="font-serif text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              Saymon Hwaier
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {link.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-2">
              <ModeToggle />
              <Separator orientation="vertical" className="h-6 mx-2" />

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" asChild className="hover:bg-accent/10 hover:text-accent transition-colors">
                    <a
                      href="https://github.com/SHwaier"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" asChild className="hover:bg-accent/10 hover:text-accent transition-colors">
                    <a
                      href="https://www.linkedin.com/in/saymon-hwaier/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <Button className="hidden md:flex bg-foreground text-background hover:bg-foreground/90 rounded-full px-6" asChild>
              <a href="#contact">
                Get In Touch
              </a>
            </Button>

            {/* Mobile Menu Toggle (Sheet) */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden relative z-50"
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-sm flex flex-col pt-10">
                <SheetHeader className="text-left mb-6">
                  <SheetTitle className="font-serif text-2xl font-bold">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link, i) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-serif font-bold hover:text-accent transition-colors block py-2"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-auto mb-10">
                  <div className="flex items-center gap-4 py-6 border-t">
                    <a href="https://github.com/SHwaier" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/saymon-hwaier/" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="mailto:saymon.hwaier@gmail.com" className="p-3 bg-muted rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>
    </TooltipProvider>
  );
}
