import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Code2 } from "lucide-react"
import { projects } from "@/data/projects"


export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Code2 className="h-4 w-4" />
            Recent Work
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each project tells a story of problem-solving, creativity, and technical excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group ${index === 1 ? "md:mt-8" : ""
                }`}
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-serif group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 justify-between">
                  {project.liveUrl &&
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Live Demo
                      </a>
                    </Button>
                  }
                  {project.githubUrl &&
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 hover:bg-secondary hover:text-secondary-foreground transition-colors bg-transparent"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  }
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-4">
            <div className="text-sm text-muted-foreground">Want to see more?</div>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-full border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 bg-transparent"
              asChild
            >
              <a href="https://github.com/SHwaier" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
