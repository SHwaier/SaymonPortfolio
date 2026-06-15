"use client"

import { useAnalytics } from "@/components/analytics-provider"
import { motion } from "framer-motion"
import { Experience } from "@/types"

interface AboutSectionProps {
    experience: Experience[]
}

export function AboutSection({ experience }: AboutSectionProps) {
    const { trackEvent } = useAnalytics()
    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden border-b border-border">
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
                <div className="md:col-span-12 mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-[7rem] lg:text-[8rem] font-bold leading-none tracking-tighter text-foreground"
                    >
                        ABOUT<br />ME
                    </motion.h2>
                </div>

                <div className="md:col-span-4 mb-12 md:mb-0">
                    <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Profile</h3>
                    <p className="text-lg font-medium text-foreground leading-relaxed">
                        Passionate developer with a love for technology, crafting digital experiences that make a difference. Currently balancing academic excellence at the University of Windsor with real-world software development.
                    </p>
                    
                    <div className="mt-12">
                        <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Core Principles</h3>
                        <ul className="space-y-4">
                            <li className="border-b border-border/50 pb-4">
                                <span className="block text-sm font-bold text-foreground">01. Craft & Quality</span>
                                <span className="text-sm text-muted-foreground">Every line of code matters. I write with future maintainers in mind.</span>
                            </li>
                            <li className="border-b border-border/50 pb-4">
                                <span className="block text-sm font-bold text-foreground">02. Innovation</span>
                                <span className="text-sm text-muted-foreground">Always exploring new technologies and pushing boundaries.</span>
                            </li>
                            <li className="border-b border-border/50 pb-4">
                                <span className="block text-sm font-bold text-foreground">03. Performance</span>
                                <span className="text-sm text-muted-foreground">Speed and efficiency are not optional—they're essential.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="md:col-span-7 md:col-start-6">
                    <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Professional Journey</h3>
                    <div className="space-y-12">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={exp.id || index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="border-l border-foreground pl-6 relative group cursor-pointer"
                                onClick={() => trackEvent('about_click_experience', exp.company)}
                            >
                                <div className="absolute top-0 -left-[5px] w-2 h-2 bg-background border-2 border-foreground rounded-full transition-colors group-hover:bg-foreground"></div>
                                
                                <div className="mb-4">
                                    <h4 className="text-2xl font-bold text-foreground leading-none mb-2 group-hover:text-accent transition-colors cursor-pointer">{exp.title}</h4>
                                    <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-muted-foreground">
                                        <span className="uppercase tracking-wider">{exp.company}</span>
                                        <span>—</span>
                                        <span className="font-mono text-xs">{exp.start_date} - {exp.end_date}</span>
                                    </div>
                                    <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{exp.location}</div>
                                </div>
                                
                                <p className="text-foreground/80 mb-6 text-sm leading-relaxed max-w-2xl">
                                    {exp.description}
                                </p>
                                
                                {exp.technologies && (
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 border border-border text-muted-foreground group-hover:border-foreground/30 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        ))}

                        {/* Education block styled exactly like an experience block */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border-l border-foreground pl-6 relative group cursor-pointer"
                            onClick={() => trackEvent('about_click_education', 'B.Sc. Honours CS')}
                        >
                            <div className="absolute top-0 -left-[5px] w-2 h-2 bg-background border-2 border-foreground rounded-full transition-colors group-hover:bg-foreground"></div>
                            
                            <div className="mb-4">
                                <h4 className="text-2xl font-bold text-foreground leading-none mb-2 group-hover:text-accent transition-colors cursor-pointer">B.Sc. Honours Computer Science</h4>
                                <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-muted-foreground">
                                    <span className="uppercase tracking-wider">University of Windsor</span>
                                    <span>—</span>
                                    <span className="font-mono text-xs">Sep 2022 - Present</span>
                                </div>
                            </div>
                            
                            <p className="text-foreground/80 text-sm leading-relaxed max-w-2xl">
                                Specialization in Software Engineering. Dean's Entrance Scholarship recipient ($10,000). Certificate in Applied Information Technology.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
