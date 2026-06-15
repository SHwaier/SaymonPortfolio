import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"

export default function TestHero1() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      <Header />
      
      <main className="flex-grow flex flex-col justify-center relative">
        <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 pt-20">
          <div className="text-center max-w-5xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
              Software Engineer
            </p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-none mb-8 text-foreground">
              Saymon Hwaier.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light mb-12">
              Building scalable, accessible, and performant web solutions with relentless attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="rounded-full px-8 py-6 text-lg bg-foreground text-background hover:bg-foreground/90 transition-colors">
                View My Work
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg border border-border hover:bg-muted shadow-sm hover:shadow-md transition-all">
                Resume
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
