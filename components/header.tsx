"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Menu, Github, Linkedin, Mail, X } from "lucide-react";

export function Header() {
  const [open, setOpen] = React.useState(false);
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

  // Close when hash changes (e.g., clicking an in-page anchor)
  React.useEffect(() => {
    const onHash = () => close();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-lg">S</span>
          </div>
          <span className="font-serif text-xl font-bold text-primary">
            Saymon Hwaier
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/SHwaier"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/saymon-hwaier/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <a href="#contact">
              <Mail className="h-4 w-4 mr-2" />
              Get In Touch
            </a>
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            id="mobile-menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="mobile-nav"
            aria-expanded={open}
            onClick={toggle}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu (overlay + drawer) */}
      {/* Overlay */}
      <div
        className={`md:hidden fixed inset-0 transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={close}
      />

      {/* Drawer */}
      <div
        id="mobile-nav"
        className={`md:hidden fixed top-16 left-0 right-0 border-b bg-background transition-transform duration-200 ${open ? "translate-y-0" : "-translate-y-4 pointer-events-none opacity-0"
          }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-toggle"
        aria-label="Mobile menu"
      >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col gap-2">
            {[
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "#skills", label: "Skills" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-2 flex items-center gap-2">
              <Button variant="outline" size="icon" asChild className="flex-1">
                <a
                  href="https://github.com/SHwaier"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="flex-1">
                <a
                  href="https://www.linkedin.com/in/saymon-hwaier/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
