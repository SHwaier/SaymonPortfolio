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
            { name: "NEXT.js", level: "Intermediate", years: "1+" },
        ],
    },
    {
        title: "Backend Development",
        icon: Database,
        color: "text-secondary",
        bgColor: "bg-secondary/10",
        skills: [
            { name: "Node.js", level: "Expert", years: "3+" },
            { name: "Python", level: "Advanced", years: "2+" },
            { name: "PostgreSQL", level: "Advanced", years: "1+" },
            { name: "MongoDB", level: "Intermediate", years: "1+" },
        ],
    },
    {
        title: "Tools & DevOps",
        icon: Wrench,
        color: "text-accent",
        bgColor: "bg-accent/10",
        skills: [
            { name: "Git/GitHub", level: "Expert", years: "3+" },
            { name: "Docker", level: "Advanced", years: "1+" },
            { name: "GCP", level: "Begginer", years: "1+" },
            { name: "CI/CD", level: "Intermediate", years: "1+" },
        ],
    },
]

export const otherSkills = [
    "GraphQL",
    "Redis",
    "Prisma",
    "Supabase",
    "Vercel",
    "Figma",
    "Jest",
    "Cypress",
    "Webpack",
    "Vite",
    "Sass",
    "Framer Motion",
]

export const learningSkills = [
    "Rust",
]