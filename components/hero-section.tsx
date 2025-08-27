import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Code2, Zap, Heart } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl text-accent/10 font-mono rotate-12">{"<>"}</div>
        <div className="absolute top-40 right-20 text-4xl text-secondary/10 font-mono -rotate-12">{"{ }"}</div>
        <div className="absolute bottom-32 left-1/4 text-5xl text-accent/10 font-mono rotate-45">{"</>"}</div>
        <div className="absolute top-1/3 right-10 text-3xl text-secondary/10 font-mono -rotate-6">{"( )"}</div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap className="h-4 w-4" />
              Available for new opportunities
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-2 leading-tight">
              Saymon Hwaier
            </h1>
            <div className="text-2xl md:text-3xl text-accent font-medium mb-4">Software Engineer</div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            I build digital experiences that matter. From elegant interfaces to robust backends, I craft solutions that
            users <Heart className="inline h-5 w-5 text-red-500" /> and businesses trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-full border-2 hover:bg-accent/5 transition-all duration-300 bg-transparent"
              asChild
            >
              <a href="/resume" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4 items-center">
              {/* Side accent cards */}
              <div className="hidden md:block space-y-4">
                <div className="bg-card border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Code2 className="h-8 w-8 text-accent mb-2" />
                  <div className="text-sm font-medium">Clean Code</div>
                  <div className="text-xs text-muted-foreground">Maintainable & Scalable</div>
                </div>
                <div className="bg-card border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow ml-8">
                  <Zap className="h-8 w-8 text-secondary mb-2" />
                  <div className="text-sm font-medium">Fast Performance</div>
                  <div className="text-xs text-muted-foreground">Optimized Solutions</div>
                </div>
              </div>

              {/* Main image */}
              <div className="relative">
                <div className="aspect-square bg-card rounded-2xl border shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/mockup.jpg"
                    alt="Code Editor Workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-secondary rounded-full animate-pulse delay-1000"></div>
              </div>

              {/* Side stats */}
              <div className="hidden md:block space-y-4">
                <div className="bg-card border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow mr-8">
                  <div className="text-2xl font-bold text-accent">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="bg-card border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-2xl font-bold text-secondary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-10 w-11/12 h-12 mt-4 rounded-t-2xl border-t border-x justify-self-center bg-background"></div>
    </section>
  )
}
