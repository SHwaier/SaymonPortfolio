'use client';

import { Github, Linkedin, Mail, Heart } from "lucide-react"

import { Separator } from "@/components/ui/separator"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <TooltipProvider>
            <footer className="relative bg-background pt-12 pb-12 overflow-hidden">
                <Separator className="absolute top-0 w-full" />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-background to-primary/5 pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">

                    {/* Bottom Section - Links & Copyright */}
                    <div className="grid md:grid-cols-4 gap-8 md:gap-12">
                        <div className="space-y-4 md:col-span-2">
                            <a href="#" className="flex items-center space-x-2 group w-fit">
                                <div className="h-8 w-8 rounded-lg bg-linear-to-tr from-primary to-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <span className="text-primary-foreground font-bold text-lg">S</span>
                                </div>
                                <span className="font-serif text-xl font-bold">Saymon Hwaier</span>
                            </a>
                            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
                                A full-stack software engineer focused on building scalable, accessible, and performant web solutions.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold text-foreground/80 uppercase tracking-widest mb-6">Navigation</h3>
                            <ul className="space-y-3">
                                {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <a href={`#${item.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center group">
                                            <span className="w-0 group-hover:w-2 h-px bg-accent mr-0 group-hover:mr-2 transition-all duration-300" />
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold text-foreground/80 uppercase tracking-widest mb-6">Connect</h3>
                            <div className="flex flex-col gap-4">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <a href="https://github.com/SHwaier" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group">
                                            <Github className="w-4 h-4 mr-3 group-hover:text-accent transition-colors" />
                                            GitHub
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Check out my code</p>
                                    </TooltipContent>
                                </Tooltip>

                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <a href="https://www.linkedin.com/in/saymon-hwaier/" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group">
                                            <Linkedin className="w-4 h-4 mr-3 group-hover:text-accent transition-colors" />
                                            LinkedIn
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Connect with me</p>
                                    </TooltipContent>
                                </Tooltip>

                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <a href="mailto:saymon.hwaier@gmail.com" className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group">
                                            <Mail className="w-4 h-4 mr-3 group-hover:text-accent transition-colors" />
                                            Email
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Send me a message</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 relative flex flex-col md:flex-row justify-between items-center gap-4">
                        <Separator className="absolute top-0 w-full" />
                        <p className="text-sm text-muted-foreground flex items-center">
                            © {currentYear} Saymon Hwaier.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </TooltipProvider>
    )
}
