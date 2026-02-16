export interface Project {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    live_url: string | null
    github_url: string | null
    size: string | null
}

export interface Experience {
    id: number
    title: string
    company: string
    location: string
    start_date: string
    end_date: string
    description: string
    technologies: string[]
}

export interface Skill {
    id: number
    category: string
    name: string
    level: string
    years: string
}

// Helper type for the frontend structure
export interface SkillCategory {
    title: string
    iconName: string // Lucide icon name
    iconColor: string
    bgColor: string
    progressColor: string
    skills: SkillData[]
}

export interface SkillData {
    name: string
    level: string
    years: string
}

export interface Testimonial {
    id: number
    name: string
    role: string
    company: string | null
    content: string
    avatar_url: string | null
    rating: number | null
}
