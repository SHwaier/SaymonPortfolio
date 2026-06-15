"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"
import { Project } from "@/types"
import Image from "next/image"
import { useAnalytics } from "@/components/analytics-provider"

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const { trackEvent } = useAnalytics()

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* ... existing code ... */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-[minmax(300px,auto)]"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id || index}
              variants={itemVariants}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-all",
                project.size === "large" ? "md:col-span-2 md:row-span-2 min-h-[400px]" : "col-span-1 min-h-[300px]"
              )}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ backfaceVisibility: "hidden" }}
              onClick={() => trackEvent('project_click_card', project.title)}
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-300 group-hover:bg-black/50" />
                <Image
                  src={project.image || "/placeholder.svg"}
                  width={500}
                  height={500}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                />
              </div>

              {/* Content Content - Positioned at bottom */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 select-none">
                <div className="transition-transform duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className={cn(
                      "font-serif font-bold text-white mb-1", // Force white text
                      project.size === "large" ? "text-3xl" : "text-xl"
                    )}>
                      {project.title}
                    </h3>
                  </div>

                  <p className={cn(
                    "text-gray-200 mb-4 line-clamp-3 transition-opacity duration-300",
                    project.size === "large" ? "text-lg" : "text-sm"
                  )}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, project.size === "large" ? 6 : 3).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-transparent text-white border-white/40 hover:bg-white/10 transition-colors font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > (project.size === "large" ? 6 : 3) && (
                      <Badge variant="outline" className="text-xs text-white border-white/40 bg-transparent font-normal">+{(project.technologies.length - (project.size === "large" ? 6 : 3))}</Badge>
                    )}
                  </div>

                  <div className="flex gap-3 transition-all duration-300">
                    {project.live_url && (
                      <Button
                        size="sm"
                        className="bg-white text-black hover:bg-gray-200 rounded-md font-medium"
                        asChild
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent card click
                          trackEvent('project_click_live', project.title)
                        }}
                      >
                        <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                        </a>
                      </Button>
                    )}
                    {project.github_url && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-transparent text-white border-white hover:bg-white hover:text-black rounded-md transition-colors"
                        asChild
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent card click
                          trackEvent('project_click_source', project.title)
                        }}
                      >
                        <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" /> Source
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 rounded-md border hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
            asChild
          >
            <a href="https://github.com/SHwaier" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
              <ExternalLink className="ml-2 h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section >
  )
}
