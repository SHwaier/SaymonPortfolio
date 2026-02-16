"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Code2 } from "lucide-react"
import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"
import { Project } from "@/types"
import Image from "next/image"

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

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-accent/10 text-accent hover:bg-accent/20 border-accent/20 rounded-full">
              <Code2 className="h-4 w-4 mr-2" />
              Recent Projects
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A collection of applications that solve real-world problems with clean code and modern architecture.
          </motion.p>
        </div>

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
                "group relative overflow-hidden rounded-2xl border bg-background/50 shadow-sm hover:shadow-xl", 
                project.size === "large" ? "md:col-span-2 md:row-span-2 min-h-[400px]" : "col-span-1 min-h-[300px]"
              )}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ backfaceVisibility: "hidden" }} 
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent z-10 transition-opacity duration-300 group-hover:via-black/60" />
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                />
              </div>

              {/* Content Content - Positioned at bottom */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 select-none">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className={cn(
                      "font-serif font-bold text-white mb-1 drop-shadow-md", // Force white text
                      project.size === "large" ? "text-3xl" : "text-xl"
                    )}>
                      {project.title}
                    </h3>
                  </div>

                  <p className={cn(
                    "text-gray-200 mb-4 line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 drop-shadow-sm",
                    project.size === "large" ? "text-lg" : "text-sm"
                  )}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, project.size === "large" ? 6 : 3).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-white/20 text-white border-white/10 backdrop-blur-md hover:bg-white/30 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > (project.size === "large" ? 6 : 3) && (
                      <Badge variant="outline" className="text-xs text-white border-white/20 bg-black/20 backdrop-blur-sm">+{(project.technologies.length - (project.size === "large" ? 6 : 3))}</Badge>
                    )}
                  </div>

                  <div className="flex gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                    {project.live_url && (
                      <Button size="sm" className="bg-white text-black hover:bg-white/90 rounded-full font-medium" asChild>
                        <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                        </a>
                      </Button>
                    )}
                    {project.github_url && (
                      <Button size="sm" variant="outline" className="bg-black/50 text-white border-white/20 hover:bg-black/70 hover:text-white rounded-full backdrop-blur-md" asChild>
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
            className="px-8 py-6 rounded-full border-2 hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
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
