"use client"

import { Github } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Project } from "@/types"
import Image from "next/image"
import { useAnalytics } from "@/components/analytics-provider"

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { trackEvent } = useAnalytics()

  return (
    <section id="projects" className="py-24 bg-background border-b border-border relative overflow-hidden">
      {/* Faint Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-4 md:grid-cols-12 gap-4 px-4">
          <div className="col-span-1 border-l border-foreground/10 h-full"></div>
          <div className="col-span-1 border-l border-foreground/10 h-full hidden md:block"></div>
          <div className="col-span-1 border-l border-foreground/10 h-full hidden md:block"></div>
          <div className="col-span-1 border-l border-foreground/10 h-full hidden md:block"></div>
          <div className="col-span-1 border-l border-foreground/10 h-full hidden md:block"></div>
          <div className="col-span-1 border-l border-foreground/10 h-full hidden md:block"></div>
          <div className="col-span-1 border-l border-foreground/10 h-full hidden md:block"></div>
          <div className="col-span-1 border-l border-foreground/10 h-full hidden md:block"></div>
          <div className="col-span-1 border-l border-foreground/10 h-full hidden md:block"></div>
          <div className="col-span-1 border-l border-foreground/10 h-full hidden md:block"></div>
          <div className="col-span-1 border-l border-foreground/10 h-full hidden md:block"></div>
          <div className="col-span-1 border-l border-foreground/10 h-full hidden md:block"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-12 mb-20 text-right">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-[7rem] lg:text-[8rem] font-bold leading-none tracking-tighter text-foreground"
          >
            SELECTED<br />WORKS
          </motion.h2>
        </div>

        <div className="md:col-span-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border/50">
            {projects.map((project, index) => (
              <motion.div
                key={project.id || index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "group relative border-r border-b border-border/50 bg-background overflow-hidden flex flex-col",
                  project.size === "large" ? "md:col-span-2 lg:col-span-2 min-h-[500px]" : "col-span-1 min-h-[400px]"
                )}
                onClick={() => trackEvent('project_click_card', project.title)}
              >
                {/* Image Section - Strict monochrome filter removed on hover */}
                <div className="relative flex-grow overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    fill
                    alt={project.title}
                    className="object-cover grayscale-0 lg:grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Content Section - Sharp Architectural Block */}
                <div className="p-6 bg-background z-20 border-t border-border/50">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.slice(0, project.size === "large" ? 6 : 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 border border-border text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > (project.size === "large" ? 6 : 3) && (
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 border border-border text-muted-foreground">
                        +{(project.technologies.length - (project.size === "large" ? 6 : 3))}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-6 mt-auto">
                    {project.live_url && (
                      <a 
                        href={project.live_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/link flex items-center text-xs font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          trackEvent('project_click_live', project.title)
                        }}
                      >
                        Launch <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                      </a>
                    )}
                    {project.github_url && (
                      <a 
                        href={project.github_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/link flex items-center text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          trackEvent('project_click_source', project.title)
                        }}
                      >
                        Source <Github className="ml-2 h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:col-span-12 text-center mt-16"
        >
          <a 
            href="https://github.com/SHwaier" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors pb-1 border-b border-foreground hover:border-accent"
          >
            <Github className="mr-3 h-5 w-5" />
            View Full Archive <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
