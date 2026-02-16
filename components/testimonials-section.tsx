"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Quote, Star, User } from "lucide-react"
import { motion } from "framer-motion"
import { Testimonial } from "@/types"

interface TestimonialsSectionProps {
    testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
    if (!testimonials || testimonials.length === 0) return null

    return (
        <section id="testimonials" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4"
                    >
                        <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 rounded-full">
                            <Quote className="h-4 w-4 mr-2" />
                            Social Proof
                        </Badge>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4"
                    >
                        What People Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Feedback from colleagues and clients I've had the pleasure of working with.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-colors">
                                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                                    <Avatar className="h-12 w-12 border-2 border-primary/10">
                                        <AvatarImage src={testimonial.avatar_url || ""} alt={testimonial.name} />
                                        <AvatarFallback className="bg-primary/5 text-primary">
                                            {testimonial.name.slice(0, 2).toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                                        <p className="text-sm text-muted-foreground">{testimonial.role} {testimonial.company ? `@ ${testimonial.company}` : ''}</p>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="mb-4 flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-4 w-4 ${i < (testimonial.rating || 5)
                                                    ? "text-yellow-500 fill-yellow-500"
                                                    : "text-muted-foreground/20"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed italic">
                                        "{testimonial.content}"
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
