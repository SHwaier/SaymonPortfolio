"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Menu, Github, Linkedin, Mail, X } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  // Close on Esc
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
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
              <div className="h-6 w-px bg-border mx-2" />
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
            </div>

            <Button className="hidden md:flex bg-foreground text-background hover:bg-foreground/90 rounded-full px-6" asChild>
              <a href="#contact">
                Get In Touch
              </a>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative z-50"
              onClick={toggle}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="text-4xl font-serif font-bold hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
                className="mt-12 flex items-center gap-6"
            >
                <a href="https://github.com/SHwaier" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
                    <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/saymon-hwaier/" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
                    <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:saymon.hwaier@gmail.com" className="p-3 bg-muted rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
                    <Mail className="h-6 w-6" />
                </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
