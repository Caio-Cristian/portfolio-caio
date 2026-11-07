import { PageMeta } from '../components/PageMeta'
import { AboutSection } from '../sections/AboutSection'
import { ContactSection } from '../sections/ContactSection'
import { ExperienceSection } from '../sections/ExperienceSection'
import { HeroSection } from '../sections/HeroSection'
import { ProjectsSection } from '../sections/ProjectsSection'
import { ResumeSection } from '../sections/ResumeSection'
import { SkillsSection } from '../sections/SkillsSection'

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Caio Cristian — Desenvolvedor Front-End"
        description="Portfólio de Caio Cristian: interfaces bem construídas, projetos reais e uma trajetória em tecnologia."
      />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ResumeSection />
      <ContactSection />
    </>
  )
}
