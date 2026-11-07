import { Braces, Code2, Database } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { skillGroups } from '../data/profile'

const categoryIcons = [Code2, Braces, Database]

export function SkillsSection() {
  return (
    <section className="content-section skills-section" id="habilidades">
      <div className="page-container">
        <SectionHeading
          index="02"
          eyebrow="Ferramentas e fundamentos"
          title="O que uso para construir."
          description="Tecnologias presentes nos projetos e estudos que venho desenvolvendo."
        />
        <div className="skill-grid">
          {skillGroups.map((group, index) => {
            const Icon = categoryIcons[index]
            return (
              <Reveal key={group.title}>
                <article className="skill-card">
                  <div className="skill-card-heading">
                    <span className="skill-icon">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <span className="skill-number">0{index + 1}</span>
                  </div>
                  <h3>{group.title}</h3>
                  <ul className="skill-list">
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
        <p className="skills-note">
          Sem rankings artificiais: cada ferramenta representa algo que venho estudando ou
          aplicando.
        </p>
      </div>
    </section>
  )
}
