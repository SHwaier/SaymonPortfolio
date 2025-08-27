import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { skillCategories, otherSkills, learningSkills } from "@/data/skills"

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4" />
            Technical Expertise
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with and the depth of experience I bring to each project
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={index}
                className={`p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${index === 1 ? "md:mt-8" : ""
                  }`}
              >
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-12 h-12 ${category.bgColor} rounded-xl flex items-center justify-center`}>
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-xl font-serif">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-medium group-hover:text-accent transition-colors">
                          {skill.name}
                        </span>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">
                            {skill.level}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {skill.years}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-1.5 w-full rounded-full transition-all duration-300 ${i < (skill.level === "Expert" ? 5 : skill.level === "Advanced" ? 4 : skill.level === "Intermediate" ? 3 : 2)
                              ? `${category.color.replace("text-", "bg-")}`
                              : "bg-muted"
                              }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <h3 className="font-serif text-xl font-semibold text-primary mb-6">Also experienced with</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {otherSkills.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-3 py-1 hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center border-2 rounded-2xl p-8 max-w-4xl mx-auto bg-background/50">
          <div className="mb-6">
            <h3 className="font-serif text-xl font-semibold text-primary">Learning</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">Skills I am currently learning, because tech is awesome.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {learningSkills.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-3 py-1 hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
