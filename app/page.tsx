import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import dynamic from 'next/dynamic';
import { supabase } from "@/lib/supabase"
import { Project, Experience, Skill, SkillCategory, Testimonial } from "@/types"

const DynamicAboutSection = dynamic(() => import('@/components/about-section').then(mod => mod.AboutSection));
const DynamicProjectsSection = dynamic(() => import('@/components/projects-section').then(mod => mod.ProjectsSection));
const DynamicTestimonialsSection = dynamic(() => import('@/components/testimonials-section').then(mod => mod.TestimonialsSection));
const DynamicSkillsSection = dynamic(() => import('@/components/skills-section').then(mod => mod.SkillsSection));
const DynamicContactSection = dynamic(() => import('@/components/contact-section').then(mod => mod.ContactSection));
const DynamicFooter = dynamic(() => import('@/components/footer').then(mod => mod.Footer));

// Data fetching configuration
export const revalidate = 60 // Revalidate every 60 seconds (ISR)

async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('id', { ascending: true })

  if (error) {
    console.error('Error fetching projects:', error)
    return []
  }
  return data as Project[]
}

async function getExperience(): Promise<Experience[]> {
  const { data, error } = await supabase
    .from('experience')
    .select('*')
    .order('id', { ascending: true }) // Using ID for simplicity, could use start_date if standardized

  if (error) {
    console.error('Error fetching experience:', error)
    return []
  }
  return data as Experience[]
}

async function getSkills(): Promise<SkillCategory[]> {
  const { data: skillsData, error } = await supabase
    .from('skills')
    .select('*')

  if (error) {
    console.error('Error fetching skills:', error)
    return []
  }

  const skills = skillsData as Skill[]

  // Transformation map
  const categoryConfig: Record<string, Omit<SkillCategory, 'skills' | 'title'>> = {
    'Frontend Development': {
      iconName: 'Code2',
      iconColor: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
      progressColor: "bg-blue-600 dark:bg-blue-500",
    },
    'Backend Development': {
      iconName: 'Database',
      iconColor: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-100 dark:bg-emerald-900/20",
      progressColor: "bg-emerald-600 dark:bg-emerald-500",
    },
    'Tools & DevOps': {
      iconName: 'Wrench',
      iconColor: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
      progressColor: "bg-purple-600 dark:bg-purple-500",
    },
  }

  // Group skills by category
  const categories: SkillCategory[] = []

  // Define order
  const order = ['Frontend Development', 'Backend Development', 'Tools & DevOps']

  order.forEach(catName => {
    const catSkills = skills.filter(s => s.category === catName)
    if (catSkills.length > 0) {
      const config = categoryConfig[catName] || {
        iconName: 'Code2',
        iconColor: "text-gray-600",
        bgColor: "bg-gray-100",
        progressColor: "bg-gray-600"
      }

      categories.push({
        title: catName,
        ...config,
        skills: catSkills.map(s => ({
          name: s.name,
          level: s.level,
          years: s.years
        }))
      })
    }
  })

  return categories
}

async function getSimpleSkills(category: string): Promise<string[]> {
  const { data, error } = await supabase
    .from('skills')
    .select('name')
    .eq('category', category)

  if (error) {
    console.error(`Error fetching ${category}:`, error)
    return []
  }

  return data.map((s: { name: string }) => s.name)
}

async function getTestimonials(): Promise<Testimonial[]> {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
  return data as Testimonial[]
}

export default async function HomePage() {
  const projects = await getProjects()
  const experience = await getExperience()
  const skillCategories = await getSkills()
  const otherSkills = await getSimpleSkills('Additional Tools')
  const learningSkills = await getSimpleSkills('Current Learning')
  const testimonials = await getTestimonials()

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <DynamicAboutSection experience={experience} />
      <DynamicProjectsSection projects={projects} />
      <DynamicTestimonialsSection testimonials={testimonials} />
      <DynamicSkillsSection
        skillCategories={skillCategories}
        otherSkills={otherSkills}
        learningSkills={learningSkills}
      />
      <DynamicContactSection />
      <DynamicFooter />
    </main>
  )
}
