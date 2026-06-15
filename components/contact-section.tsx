"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { useAnalytics } from "@/components/analytics-provider"

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const email = "saymon.hwaier@gmail.com"

  const { trackEvent } = useAnalytics()

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    trackEvent('contact_copy_email')
    setTimeout(() => setCopied(false), 2000)
  }

  const handleMailClick = () => {
    trackEvent('contact_click_mailto')
    window.location.href = `mailto:${email}`
  }

  return (
    <section id="contact" className="py-24 relative bg-background border-b border-border overflow-hidden">
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
        <div className="md:col-span-12 mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-[7rem] lg:text-[8rem] font-bold leading-none tracking-tighter text-foreground"
          >
            LET'S WORK<br />TOGETHER
          </motion.h2>
        </div>

        <div className="md:col-span-8 md:col-start-3">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-l border-r border-border/50 bg-background"
          >
            <div className="p-8 md:p-12 border-b border-border/50 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Direct Inquiry</h3>
                    <p className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">{email}</p>
                    <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-4">Windsor, ON, CA</p>
                </div>
                
                <div className="flex flex-col gap-4 w-full md:w-auto">
                    <button 
                        onClick={handleMailClick}
                        className="group flex items-center justify-center md:justify-end text-sm font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors pb-1 border-b border-foreground hover:border-accent"
                    >
                        Send Message <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                        onClick={handleCopy}
                        className="group flex items-center justify-center md:justify-end text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {copied ? <span className="flex items-center text-green-500"><Check className="mr-2 h-4 w-4" /> Copied</span> : "Copy Address"}
                    </button>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
