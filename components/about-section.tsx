import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Users, Zap, Coffee, BookOpen } from "lucide-react"

export function AboutSection() {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
                            <Coffee className="h-4 w-4" />
                            Get to know me
                        </div>
                        <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4">About Me</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Passionate developer with a love for technology.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-8 mb-12">
                        <div className="lg:col-span-3 space-y-6">
                            <div className="relative">
                                <div className="absolute -left-4 top-0 w-1 h-16 bg-accent rounded-full"></div>
                                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">My Journey</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    What started as curiosity about "how Minecraft mods worked" has evolved into a deep passion for crafting
                                    digital experiences that make a difference. I believe great code is like poetry—elegant, purposeful,
                                    and impactful.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Beyond the screen, I'm an avid reader of tech blogs, a Minecraft player, and someone who genuinely enjoys
                                    debugging (yes, really!). I find inspiration in everything from minimalist design to complex
                                    algorithms.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 pt-4">
                                <div className="flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                                    <BookOpen className="h-3 w-3" />
                                    Tech Blogger
                                </div>
                                <div className="flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">
                                    <Code className="h-3 w-3" />
                                    Open Source
                                </div>
                                <div className="flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                                    <Users className="h-3 w-3" />
                                    Mentoring
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 space-y-4">
                            <Card className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                <CardContent className="p-0 flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Code className="h-6 w-6 text-accent" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary mb-2">Craft & Quality</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Every line of code matters. I write with future maintainers in mind.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ml-6">
                                <CardContent className="p-0 flex items-start gap-4">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Lightbulb className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary mb-2">Innovation</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Always exploring new technologies and pushing boundaries.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                <CardContent className="p-0 flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Users className="h-6 w-6 text-accent" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary mb-2">Collaboration</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Great products are built by great teams working together.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ml-6">
                                <CardContent className="p-0 flex items-start gap-4">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Zap className="h-6 w-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary mb-2">Performance</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Speed and efficiency are not optional—they're essential.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
