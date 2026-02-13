import { Code2, Database, Wrench, Star } from "lucide-react"

export const skillCategories = [
    {
        title: "Frontend Development",
        icon: Code2,
        color: "text-accent",
        bgColor: "bg-accent/10",
        skills: [
            { name: "React", level: "Expert", years: "3y+" },
            { name: "Next.js", level: "Expert", years: "3y+" },
            { name: "TypeScript", level: "Advanced", years: "2y+" },
            { name: "JavaScript", level: "Expert", years: "4y+" },
            { name: "Tailwind CSS", level: "Expert", years: "3y+" },
            { name: "HTML/CSS", level: "Expert", years: "5y+" },
        ],
    },
    {
        title: "Backend Development",
        icon: Database,
        color: "text-secondary",
        bgColor: "bg-secondary/10",
        skills: [
            { name: "Node.js", level: "Advanced", years: "3y+" },
            { name: "C#", level: "Advanced", years: "4y+" },
            { name: "Java", level: "Advanced", years: "3y+" },
            { name: "PHP", level: "Intermediate", years: "2y+" },
            { name: "SQL", level: "Intermediate", years: "2y+" },
            { name: "MongoDB", level: "Intermediate", years: "1y+" },
        ],
    },
    {
        title: "Tools & DevOps",
        icon: Wrench,
        color: "text-primary",
        bgColor: "bg-primary/10",
        skills: [
            { name: "Git/GitHub", level: "Expert", years: "4y+" },
            { name: "Linux", level: "Advanced", years: "3y+" },
            { name: "Figma", level: "Intermediate", years: "2y+" },
            { name: "Cloudflare", level: "Intermediate", years: "1y+" },
            { name: "Gradle", level: "Intermediate", years: "2y+" },
            { name: "JUnit Testing", level: "Intermediate", years: "2y+" },
        ],
    },
]

export const otherSkills = [
    "REST APIs",
    "JWT Tokens",
    "C",
    "SceneBuilder",
]

export const learningSkills = [
    // Open for future learning
]
