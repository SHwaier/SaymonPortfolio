"use client"

import { motion } from "framer-motion"
import { SkillCategory } from "@/types"
import { useAnalytics } from "@/components/analytics-provider"

interface SkillsSectionProps {
  skillCategories: SkillCategory[]
  otherSkills: string[]
  learningSkills: string[]
}

export function SkillsSection({ skillCategories, otherSkills, learningSkills }: SkillsSectionProps) {
  const { trackEvent } = useAnalytics()

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden border-b border-border">
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
        <div className="md:col-span-12 mb-20 text-right">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-[7rem] lg:text-[8rem] font-bold leading-none tracking-tighter text-foreground"
          >
            TECHNICAL<br />EXPERTISE
          </motion.h2>
        </div>

        <div className="md:col-span-12">
            <div className="grid md:grid-cols-3 gap-0 border-t border-l border-border/50">
            {skillCategories.map((category, index) => (
                <motion.div 
                    key={index} 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 border-r border-b border-border/50 bg-background group cursor-pointer"
                    onClick={() => trackEvent('skills_click_category', category.title)}
                >
                    <h3 className="text-xl font-bold uppercase tracking-widest text-foreground mb-8">
                        {category.title}
                    </h3>
                    <ul className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex justify-between items-end border-b border-border/50 pb-2">
                            <span className="text-sm font-bold text-foreground uppercase tracking-widest">{skill.name}</span>
                            <span className="text-xs text-muted-foreground font-mono">{skill.years}</span>
                        </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
            </div>
        </div>

        <div className="md:col-span-12 mt-12 grid md:grid-cols-2 gap-0 border-t border-l border-border/50">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="p-8 border-r border-b border-border/50 bg-background"
            >
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Additional Tools</h3>
                <div className="flex flex-wrap gap-2">
                {otherSkills.map((tech, index) => (
                    <span
                    key={index}
                    className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 border border-border text-foreground hover:bg-foreground hover:text-background transition-colors"
                    >
                    {tech}
                    </span>
                ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="p-8 border-r border-b border-border/50 bg-background"
            >
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Currently Learning</h3>
                <div className="flex flex-wrap gap-2">
                {learningSkills.map((tech, index) => (
                    <span
                    key={index}
                    className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 border border-border border-dashed text-foreground"
                    >
                    {tech}
                    </span>
                ))}
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
}
