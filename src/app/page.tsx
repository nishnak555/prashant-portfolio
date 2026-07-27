import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/ui/sections/HeroSection'
import { AboutSection } from '@/components/ui/sections/AboutSection'
import { SkillsSection } from '@/components/ui/sections/SkillsSection'
import { ServicesSection } from '@/components/ui/sections/ServicesSection'
import { ProjectsSection } from '@/components/ui/sections/ProjectsSection'
import { ExperienceSection } from '@/components/ui/sections/ExperienceSection'
import { ResumeSection } from '@/components/ui/sections/ResumeSection'
import { TestimonialsSection } from '@/components/ui/sections/TestimonialsSection'
import { ContactSection } from '@/components/ui/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <ResumeSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  )
}
