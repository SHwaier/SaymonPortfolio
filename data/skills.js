import { Code2, Database, Wrench, Star } from "lucide-react"

export const skillCategories = [
    {
        title: "Frontend Development",
        icon: Code2,
        color: "text-accent",
        bgColor: "bg-accent/10",
        skills: [
            { name: "React/Next.js", level: "Expert", years: "3+" },
            { name: "TypeScript", level: "Advanced", years: "2+" },
            { name: "Tailwind CSS", level: "Expert", years: "3+" },
            { name: "SCSS", level: "Intermediate", years: "1+" },
            { name: "UI/UX (Figma)", level: "Advanced", years: "2+" },
        ],
    },
    {
        title: "Backend Development",
        icon: Database,
        color: "text-secondary",
        bgColor: "bg-secondary/10",
        skills: [
            { name: "Node.js / PHP", level: "Expert", years: "3+" },
            { name: "C# / .NET Framework", level: "Advanced", years: "5+" },
            { name: "Java", level: "Advanced", years: "3+" },
            { name: "SQL / MongoDB", level: "Advanced", years: "1+" },
            { name: "REST APIs", level: "Advanced", years: "2+" },
        ],
    },
    {
        title: "Tools & DevOps",
        icon: Wrench,
        color: "text-primary",
        bgColor: "bg-primary/10",
        skills: [
            { name: "Git/GitHub", level: "Expert", years: "3+" },
            { name: "Linux", level: "Advanced", years: "2+" },
            { name: "Cloudflare", level: "Intermediate", years: "1+" },
            { name: "Gradle", level: "Advanced", years: "2+" },
            { name: "JUnit Testing", level: "Advanced", years: "2+" },
            { name: "CI/CD", level: "Intermediate", years: "1+" },
        ],
    },
]
export const otherSkills = [
    "WordPress",
    "NextAuth (OAuth 2.0)",
    "2FA",
    "JWT Tokens",
    "REST APIs",
]
export const learningSkills = [
    "Graph Theory",
    "Design & Analysis of Computer Algorithms"
]