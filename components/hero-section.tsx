"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Code2, Zap, Terminal } from "lucide-react"
import { sendGTMEvent } from '@next/third-parties/google'
import { motion, useScroll, useTransform, Variants } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8], [1, 1, 0])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
    <section ref={containerRef} className="relative py-20 md:py-32 overflow-hidden min-h-[90vh] flex items-center justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Floating Code Symbols */}
        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 10, y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:block absolute top-20 left-10 text-6xl text-muted-foreground/10 font-mono" aria-hidden="true"
        >
          {"<React />"}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: 10 }}
          animate={{ opacity: 1, rotate: -10, y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="hidden md:block absolute bottom-24 right-10 text-5xl text-muted-foreground/10 font-mono" aria-hidden="true"
        >
          {"{ code }"}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          style={{ y, opacity }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-accent/10 text-accent hover:bg-accent/20 border-accent/20 rounded-full">
                <Zap className="h-4 w-4 mr-2 fill-current" />
                Available for new opportunities
              </Badge>
            </motion.div>

            <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 leading-tight">
              <span className="text-foreground">Saymon </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">Hwaier</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="text-2xl md:text-3xl font-medium mb-6 text-muted-foreground flex justify-center items-center gap-3">
              <Terminal className="w-6 h-6 text-accent" />
              <span className="text-secondary-foreground">Software Engineer</span>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences that merge <span className="text-foreground font-semibold">aesthetics</span> with <span className="text-foreground font-semibold">performance</span>.
              Building the web of tomorrow, one component at a time.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
                asChild
              >
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg rounded-full border-2 hover:bg-muted/50 transition-all duration-300 backdrop-blur-sm"
                asChild
              >
                <a
                  onClick={() => sendGTMEvent({ event: 'Download Resume Button Clicked', value: 'hero_section' })}
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <div className="relative max-w-5xl mx-auto mt-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Left Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="hidden md:block"
              >
                <div className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Code2 className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">Clean Architecture</h3>
                  <p className="text-sm text-muted-foreground">Scalable, maintainable, and robust codebases.</p>
                </div>
              </motion.div>

              {/* Center Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                className="relative z-10"
              >
                <div className="relative aspect-square max-w-[320px] mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] opacity-20 blur-2xl animate-pulse" />
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative bg-card rounded-[2rem] overflow-hidden border-2 border-border/50 shadow-2xl"
                  >
                    <Image
                      src="/assets/img/Saymon_Software_Engineer.jpg"
                      alt="Saymon Hwaier"
                      className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                      width={400}
                      height={400}
                      loading="eager"
                    />
                  </motion.div>

                  {/* Floating Badge */}
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-6 -right-6 bg-background/80 backdrop-blur-md border border-border/50 p-3 rounded-2xl shadow-xl flex items-center gap-3"
                  >
                    <div className="flex -space-x-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-[10px] font-bold">
                          {i === 1 ? 'JS' : i === 2 ? 'TS' : 'RC'}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs font-bold pr-2">
                      Top Tech<br />Stack
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="hidden md:block"
              >
                <div className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">High Performance</h3>
                  <p className="text-sm text-muted-foreground">Optimized for speed, SEO, and user experience.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
