import { Code2, Database, Wrench, Star } from "lucide-react"

export const skillCategories = [
    {
        title: "Frontend Development",
        icon: Code2,
        color: "text-accent",
        bgColor: "bg-accent/10",
        skills: [
            { name: "React/Next.js", level: "Expert", years: "3y+" },
            { name: "TypeScript", level: "Advanced", years: "2y+" },
            { name: "Tailwind CSS", level: "Expert", years: "3y+" },
            { name: "SCSS", level: "Intermediate", years: "1y+" },
            { name: "UI/UX (Figma)", level: "Advanced", years: "2y+" },
        ],
    },
    {
        title: "Backend Development",
        icon: Database,
        color: "text-secondary",
        bgColor: "bg-secondary/10",
        skills: [
            { name: "Node.js / PHP", level: "Expert", years: "3y+" },
            { name: "C# / .NET Framework", level: "Advanced", years: "5y+" },
            { name: "Java", level: "Advanced", years: "3y+" },
            { name: "SQL / MongoDB", level: "Advanced", years: "1y+" },
            { name: "REST APIs", level: "Advanced", years: "2y+" },
        ],
    },
    {
        title: "Tools & DevOps",
        icon: Wrench,
        color: "text-primary",
        bgColor: "bg-primary/10",
        skills: [
            { name: "Git/GitHub", level: "Expert", years: "3y+" },
            { name: "Linux", level: "Advanced", years: "2y+" },
            { name: "Cloudflare", level: "Intermediate", years: "1y+" },
            { name: "Gradle", level: "Advanced", years: "2y+" },
            { name: "JUnit Testing", level: "Advanced", years: "2y+" },
            { name: "CI/CD", level: "Intermediate", years: "1y+" },
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
    "OpenCV",
    "OpenGL",
    "Design & Analysis of Computer Algorithms"
]
