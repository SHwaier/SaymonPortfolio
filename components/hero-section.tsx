"use client"

import { useAnalytics } from "@/components/analytics-provider"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function HeroSection() {
  const { trackEvent } = useAnalytics()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={containerRef} className="min-h-[85vh] flex items-end px-4 pb-24 relative border-b border-border overflow-hidden bg-background mt-16">
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

      <div className="container mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4">
        <motion.div 
          style={{ y, opacity }}
          className="md:col-span-10 md:col-start-1"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-[8rem] lg:text-[10rem] font-bold leading-[0.85] tracking-tighter text-foreground mb-8"
          >
            SAYMON<br />HWAIER
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid md:grid-cols-2 gap-8 items-end"
          >
            <p className="text-lg text-muted-foreground font-medium max-w-sm">
              Software Engineer specializing in full-stack architecture and high-performance digital experiences.
            </p>
            <div className="flex gap-6 md:justify-end pb-2">
              <a 
                href="#projects" 
                onClick={() => trackEvent('hero_click_view_work')}
                className="group flex items-center text-sm font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors"
              >
                View Work <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </a>
              <a 
                href="/assets/resume.pdf" 
                download="Saymon_Hwaier_Resume.pdf"
                onClick={() => trackEvent('hero_click_view_resume')}
                className="group flex items-center text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                Resume
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
