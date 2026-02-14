"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { skillCategories, otherSkills, learningSkills } from "@/data/skills"
import { motion, Variants } from "framer-motion"

export function SkillsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      },
    },
  }

  return (
    <section id="skills" className="py-24 bg-muted/30 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-background border border-border shadow-sm text-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="h-4 w-4 text-yellow-600 dark:text-yellow-400 fill-yellow-600 dark:fill-yellow-400" />
            <span className="text-muted-foreground">Technical Expertise</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A curated stack of technologies I use to build scalable, high-performance applications.
          </p>
        </motion.div>

        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <Card className="h-full border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300 shadow-sm hover:shadow-md group overflow-hidden">
                    <div className={`absolute top-0 left-0 w-1 h-full ${category.progressColor}/20 group-hover:${category.progressColor} transition-colors duration-300`} />
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`h-6 w-6 ${category.iconColor}`} />
                      </div>
                      <CardTitle className="text-xl font-serif">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="relative">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium group-hover:text-foreground transition-colors">
                            {skill.name}
                          </span>
                           <span className="text-xs text-muted-foreground/70 font-mono">
                              {skill.years}
                           </span>
                        </div>
                        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${(skill.level === "Expert" ? 100 : skill.level === "Advanced" ? 80 : skill.level === "Intermediate" ? 60 : 40)}%` }}
                                transition={{ duration: 1, delay: 0.2 + (skillIndex * 0.1) }}
                                viewport={{ once: true }}
                                className={`h-full rounded-full ${category.progressColor}`}
                            />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center"
             >
                <h3 className="font-serif text-xl font-semibold mb-6 flex items-center justify-center gap-2">
                    <WrenchIcon className="w-5 h-5 text-muted-foreground" />
                    Additional Tools
                </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {otherSkills.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default text-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 text-center"
             >
                <h3 className="font-serif text-xl font-semibold mb-6 flex items-center justify-center gap-2">
                    <BookOpenIcon className="w-5 h-5 text-muted-foreground" />
                    Current Learning
                </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {learningSkills.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="px-3 py-1.5 border-dashed hover:border-solid hover:bg-accent hover:text-accent-foreground transition-all cursor-default text-sm"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
             </motion.div>
        </div>
      </div>
    </section>
  )
}

function WrenchIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  }

  function BookOpenIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    )
  }
