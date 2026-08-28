"use client"

import { motion } from "framer-motion"
import { Testimonial } from "@/types"

interface TestimonialsSectionProps {
    testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
    if (!testimonials || testimonials.length === 0) return null

    return (
        <section id="testimonials" className="py-24 bg-background relative overflow-hidden border-b border-border">
            {/* Faint Architectural Grid Lines */}
            <div className="absolute inset-0 pointer-events-none grid grid-cols-4 md:grid-cols-12 gap-4 px-4 opacity-50">
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

            <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-12 mb-20 text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-[7rem] lg:text-[8rem] font-bold leading-none tracking-tighter text-foreground"
                    >
                        SOCIAL<br />PROOF
                    </motion.h2>
                </div>

                <div className="md:col-span-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border/50">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 border-r border-b border-border/50 bg-background flex flex-col justify-between"
                            >
                                <p className="text-foreground text-lg leading-relaxed mb-12 font-medium">
                                    "{testimonial.content}"
                                </p>
                                <div>
                                    <div className="h-px w-8 bg-foreground mb-4"></div>
                                    <h3 className="font-bold text-foreground uppercase tracking-widest text-sm mb-1">{testimonial.name}</h3>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{testimonial.role} {testimonial.company ? `— ${testimonial.company}` : ''}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
