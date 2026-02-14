import { Code2, Database, Wrench, Star } from "lucide-react"

export const skillCategories = [
    {
        title: "Frontend Development",
        icon: Code2,
        iconColor: "text-blue-600 dark:text-blue-400",
        bgColor: "bg-blue-100 dark:bg-blue-900/20",
        progressColor: "bg-blue-600 dark:bg-blue-500",
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
        iconColor: "text-emerald-600 dark:text-emerald-400",
        bgColor: "bg-emerald-100 dark:bg-emerald-900/20",
        progressColor: "bg-emerald-600 dark:bg-emerald-500",
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
        iconColor: "text-purple-600 dark:text-purple-400",
        bgColor: "bg-purple-100 dark:bg-purple-900/20",
        progressColor: "bg-purple-600 dark:bg-purple-500",
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
    "Docker",
    "OpenCV",
    "OpenGL",
]
