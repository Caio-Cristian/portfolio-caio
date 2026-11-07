import { ArrowUpRight, BriefcaseBusiness, GraduationCap } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { experiences, profile } from '../data/profile'

export function ExperienceSection() {
  return (
    <section className="content-section experience-section" id="experiencia">
      <div className="page-container">
        <SectionHeading
          index="04"
          eyebrow="Experiência e formação"
          title="Uma trajetória em construção."
          description="Experiências que desenvolvi trabalhando com pessoas, informação e tecnologia."
        />
        <div className="experience-layout">
          <div className="timeline">
            <span className="eyebrow">Experiência profissional</span>
            {experiences.map((experience, index) => (
              <Reveal key={experience.company}>
                <article className="timeline-item">
                  <span className="timeline-marker">
                    <BriefcaseBusiness size={15} aria-hidden="true" />
                  </span>
                  <div className="timeline-content">
                    <div className="timeline-meta">
                      <span>{experience.period}</span>
                      <span>0{index + 1}</span>
                    </div>
                    <h3>{experience.role}</h3>
                    <p className="timeline-company">{experience.company}</p>
                    <ul>
                      {experience.activities.map((activity) => (
                        <li key={activity}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="education-column">
            <span className="eyebrow">Formação e curso</span>
            <Reveal>
              <article className="education-card">
                <span className="education-card-icon">
                  <GraduationCap size={19} aria-hidden="true" />
                </span>
                <span className="eyebrow">Formação acadêmica</span>
                <h3>{profile.education.course}</h3>
                <p>{profile.education.institution}</p>
                <span className="education-status">{profile.education.status}</span>
              </article>
            </Reveal>
            <Reveal>
              <article className="education-card course-card">
                <span className="education-card-icon">
                  <ArrowUpRight size={19} aria-hidden="true" />
                </span>
                <span className="eyebrow">Curso</span>
                <h3>{profile.course.name}</h3>
                <p>{profile.course.institution}</p>
                <span className="education-status">{profile.course.status}</span>
              </article>
            </Reveal>
            <p className="education-note">
              Formação e curso apresentados conforme as informações compartilhadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
