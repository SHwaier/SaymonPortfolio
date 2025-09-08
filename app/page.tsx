import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import dynamic from 'next/dynamic';

const DynamicAboutSection = dynamic(() => import('@/components/about-section').then(mod => mod.AboutSection));
const DynamicProjectsSection = dynamic(() => import('@/components/projects-section').then(mod => mod.ProjectsSection));
const DynamicSkillsSection = dynamic(() => import('@/components/skills-section').then(mod => mod.SkillsSection));
const DynamicContactSection = dynamic(() => import('@/components/contact-section').then(mod => mod.ContactSection));
const DynamicFooter = dynamic(() => import('@/components/footer').then(mod => mod.Footer));

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <DynamicAboutSection />
      <DynamicProjectsSection />
      <DynamicSkillsSection />
      <DynamicContactSection />
      <DynamicFooter />
    </main>
  )
}
