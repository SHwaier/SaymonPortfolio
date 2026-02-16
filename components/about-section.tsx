"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Lightbulb, Users, Zap, Coffee, BookOpen, Briefcase, Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { Experience } from "@/types"

import { Separator } from "@/components/ui/separator"

interface AboutSectionProps {
    experience: Experience[]
}

export function AboutSection({ experience }: AboutSectionProps) {
    return (
        <section id="about" className="py-20 bg-background relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-24 bg-gradient-to-b from-muted/50 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-4"
                        >
                            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-secondary/10 text-secondary hover:bg-secondary/20 border-secondary/20 rounded-full">
                                <Coffee className="h-4 w-4 mr-2" />
                                Get to know me
                            </Badge>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4"
                        >
                            About Me
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-muted-foreground max-w-2xl mx-auto"
                        >
                            Passionate developer with a love for technology, crafting digital experiences that make a difference.
                        </motion.p>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-12 mb-24">
                        {/* Bio Content */}
                        {/* Bio Content & Education */}
                        <div className="lg:col-span-3 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative pl-6 border-l-2 border-accent/20"
                            >
                                <h3 className="font-serif text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-accent" />
                                    Education
                                </h3>
                                <div className="mb-6">
                                    <h4 className="text-lg font-bold text-foreground">B.Sc. Honours Computer Science with Software Engineering</h4>
                                    <p className="text-muted-foreground">University of Windsor • Sep 2022 - Present</p>
                                    <p className="text-sm text-muted-foreground mt-1">Certificate: Applied Information Technology</p>
                                    <p className="text-sm text-muted-foreground mt-1">Dean's Entrance Scholarship ($10,000)</p>
                                </div>

                                <h3 className="font-serif text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
                                    <Code className="w-5 h-5 text-accent" /> {/* Changed icon to generic Code or keep generic */}
                                    My Journey
                                </h3>
                                <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                                    What started as curiosity has evolved into a deep passion for crafting digital experiences.
                                    I am currently a Computer Science student at the University of Windsor, balancing academic excellence with real-world software development.
                                </p>
                            </motion.div>

                            <div className="flex flex-wrap gap-3">
                                {[
                                    { icon: Code, label: "Full Stack Dev", className: "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400" },
                                    { icon: Users, label: "Mentoring", className: "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400" },
                                    { icon: Zap, label: "Open Source", className: "bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400" },
                                ].map((tag, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + (i * 0.1) }}
                                    >
                                        <Badge
                                            variant="secondary"
                                            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium ${tag.className} border-0`}
                                        >
                                            <tag.icon className="h-4 w-4" />
                                            {tag.label}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Personality Cards */}
                        <div className="lg:col-span-2 space-y-4">
                            {[
                                { title: "Craft & Quality", desc: "Every line of code matters. I write with future maintainers in mind.", icon: Code, className: "bg-accent/10 text-accent dark:bg-accent/20 dark:text-accent-foreground" },
                                { title: "Innovation", desc: "Always exploring new technologies and pushing boundaries.", icon: Lightbulb, className: "bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary-foreground" },
                                { title: "Performance", desc: "Speed and efficiency are not optional—they're essential.", icon: Zap, className: "bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400" }
                            ].map((card, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                >
                                    <Card className="p-4 hover:shadow-md transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                                        <div className="flex items-start gap-4">
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${card.className}`}>
                                                <card.icon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-foreground mb-1">{card.title}</h4>
                                                <p className="text-sm text-muted-foreground leading-snug">{card.desc}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline Section */}
                    <div className="relative">
                        <div className="text-center mb-12">
                            <motion.h3
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="font-serif text-2xl font-bold text-foreground flex items-center justify-center gap-2"
                            >
                                <Briefcase className="w-6 h-6 text-primary" />
                                Professional Journey
                            </motion.h3>
                        </div>

                        {/* Vertical Line */}
                        <Separator
                            orientation="vertical"
                            className="absolute left-4 md:left-1/2 top-16 bottom-0 w-0.5 md:-translate-x-1/2 bg-border h-auto"
                        />

                        <div className="space-y-12">
                            {experience.map((exp, index) => (
                                <div key={exp.id || index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Timeline Dot */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        className="absolute left-4 md:left-1/2 w-4 h-4 bg-background border-4 border-primary rounded-full transform -translate-x-1/2 mt-1.5 z-10"
                                    />

                                    {/* Content Card */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className="ml-12 md:ml-0 md:w-1/2 px-4"
                                    >
                                        <Card className="p-6 border-border/40 hover:border-border transition-all duration-300 relative group overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-lg">
                                            <div className={`absolute top-0 w-1 h-full ${index % 2 === 0 ? 'right-0 bg-primary/20' : 'left-0 bg-secondary/20'} transition-all group-hover:bg-primary`} />

                                            <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                                                <div>
                                                    <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{exp.title}</h4>
                                                    <div className="text-base font-medium text-muted-foreground flex items-center gap-2">
                                                        <Briefcase className="w-3 h-3" />
                                                        {exp.company}
                                                    </div>
                                                </div>
                                                <Badge variant="outline" className="font-mono text-xs bg-background/50 backdrop-blur-sm">
                                                    {exp.start_date} - {exp.end_date}
                                                </Badge>
                                            </div>

                                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="w-3 h-3" /> {exp.location}
                                                </span>
                                            </div>

                                            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                                                {exp.description}
                                            </p>

                                            {exp.technologies && (
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.technologies.map((tech, i) => (
                                                        <Badge
                                                            key={i}
                                                            variant="secondary"
                                                            className="text-xs px-2.5 py-0.5 bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground border-accent/20 transition-colors"
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            )}
                                        </Card>
                                    </motion.div>

                                    {/* Empty Space for layout balance */}
                                    <div className="hidden md:block md:w-1/2" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
