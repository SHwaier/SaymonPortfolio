import { Header } from "@/components/header"

export default function TestHero2() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      <Header />
      
      <main className="flex-grow flex flex-col relative pt-20">
        <section className="min-h-[85vh] flex items-end px-4 pb-24 relative border-b border-border">
          {/* Faint Architectural Grid Lines */}
          <div className="absolute inset-0 pointer-events-none grid grid-cols-4 md:grid-cols-12 gap-4 px-4">
            <div className="col-span-1 border-l border-border/30 h-full"></div>
            <div className="col-span-1 border-l border-border/30 h-full hidden md:block"></div>
            <div className="col-span-1 border-l border-border/30 h-full hidden md:block"></div>
            <div className="col-span-1 border-l border-border/30 h-full hidden md:block"></div>
            <div className="col-span-1 border-l border-border/30 h-full hidden md:block"></div>
            <div className="col-span-1 border-l border-border/30 h-full hidden md:block"></div>
            <div className="col-span-1 border-l border-border/30 h-full hidden md:block"></div>
            <div className="col-span-1 border-l border-border/30 h-full hidden md:block"></div>
            <div className="col-span-1 border-l border-border/30 h-full hidden md:block"></div>
            <div className="col-span-1 border-l border-border/30 h-full hidden md:block"></div>
            <div className="col-span-1 border-l border-border/30 h-full hidden md:block"></div>
            <div className="col-span-1 border-l border-border/30 h-full hidden md:block"></div>
          </div>

          <div className="container mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-10 md:col-start-1">
              <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-bold leading-[0.85] tracking-tighter text-foreground mb-8">
                SAYMON<br />HWAIER
              </h1>
              <div className="grid md:grid-cols-2 gap-8 items-end">
                <p className="text-lg text-muted-foreground font-medium max-w-sm">
                  Software Engineer specializing in full-stack architecture and high-performance digital experiences.
                </p>
                <div className="flex gap-6 md:justify-end pb-2">
                  <a href="#" className="group flex items-center text-sm font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors">
                    View Work <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                  </a>
                  <a href="/assets/resume.pdf" className="group flex items-center text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
