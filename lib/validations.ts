import { z } from 'zod'

// ─── Shared Helpers ──────────────────────────────────────────────────────────

const MAX_TEXT = 500
const MAX_LONG_TEXT = 5000
const MAX_URL = 2048

const urlOrEmpty = z.string().max(MAX_URL).refine(
    (v) => v === '' || v.startsWith('https://') || v.startsWith('http://') || v.startsWith('/'),
    { message: 'Must be a valid URL or empty' }
)

// ─── Project ─────────────────────────────────────────────────────────────────

export const projectSchema = z.object({
    title: z.string().min(1, 'Title is required').max(MAX_TEXT),
    description: z.string().min(1, 'Description is required').max(MAX_LONG_TEXT),
    image: z.string().max(MAX_URL).optional().default(''),
    technologies: z.array(z.string().max(100)).max(30).optional().default([]),
    live_url: urlOrEmpty.optional().default(''),
    github_url: urlOrEmpty.optional().default(''),
    size: z.enum(['small', 'medium', 'large']).optional().default('medium'),
})

export type ProjectPayload = z.infer<typeof projectSchema>

// ─── Experience ──────────────────────────────────────────────────────────────

export const experienceSchema = z.object({
    title: z.string().min(1, 'Title is required').max(MAX_TEXT),
    company: z.string().min(1, 'Company is required').max(MAX_TEXT),
    location: z.string().min(1, 'Location is required').max(MAX_TEXT),
    start_date: z.string().min(1, 'Start date is required').max(100),
    end_date: z.string().min(1, 'End date is required').max(100),
    description: z.string().min(1, 'Description is required').max(MAX_LONG_TEXT),
    technologies: z.array(z.string().max(100)).max(30).optional().default([]),
})

export type ExperiencePayload = z.infer<typeof experienceSchema>

// ─── Skill ───────────────────────────────────────────────────────────────────

export const skillSchema = z.object({
    name: z.string().min(1, 'Name is required').max(MAX_TEXT),
    category: z.string().min(1, 'Category is required').max(MAX_TEXT),
    level: z.string().min(1, 'Level is required').max(50),
    years: z.string().min(1, 'Years is required').max(50),
})

export type SkillPayload = z.infer<typeof skillSchema>

// ─── Testimonial ─────────────────────────────────────────────────────────────

export const testimonialSchema = z.object({
    name: z.string().min(1, 'Name is required').max(MAX_TEXT),
    role: z.string().min(1, 'Role is required').max(MAX_TEXT),
    company: z.string().max(MAX_TEXT).optional().default(''),
    content: z.string().min(1, 'Content is required').max(MAX_LONG_TEXT),
    avatar_url: urlOrEmpty.optional().default(''),
    rating: z.number().int().min(1).max(5).optional().default(5),
})

export type TestimonialPayload = z.infer<typeof testimonialSchema>

// ─── Password Strength ──────────────────────────────────────────────────────

export interface PasswordStrength {
    score: number      // 0-4
    label: string
    suggestions: string[]
}

export function checkPasswordStrength(password: string): PasswordStrength {
    const suggestions: string[] = []
    let score = 0

    if (password.length >= 8) score++
    else suggestions.push('Use at least 8 characters')

    if (password.length >= 12) score++
    else if (password.length >= 8) suggestions.push('Use 12+ characters for stronger security')

    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++
    else suggestions.push('Mix uppercase and lowercase letters')

    if (/\d/.test(password) && /[^A-Za-z0-9]/.test(password)) score++
    else suggestions.push('Include numbers and special characters')

    const labels = ['Very Weak', 'Weak', 'Fair', 'Strong', 'Very Strong']

    return { score, label: labels[score], suggestions }
}
