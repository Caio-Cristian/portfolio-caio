import { ArrowLeft, Github, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { Reveal } from '../components/Reveal'
import { ResumeDownloadButton } from '../components/ResumeDownloadButton'
import { experiences, profile, skillGroups, summary } from '../data/profile'
import { projects } from '../data/projects'

export function CurriculumPage() {
  return (
    <article className="resume-page page-container">
      <PageMeta
        title="Currículo — Caio Cristian, Desenvolvedor Front-End"
        description="Currículo de Caio Cristian: resumo profissional, competências, experiências, formação e projetos."
      />
      <Link className="back-link" to="/">
        <ArrowLeft size={15} aria-hidden="true" /> Voltar ao portfólio
      </Link>
      <header className="resume-page-header">
        <div>
          <span className="eyebrow">Currículo · {new Date().getFullYear()}</span>
          <h1>Caio Cristian</h1>
          <p className="resume-role">{profile.role}</p>
          <p className="resume-location">{profile.location}</p>
          <p className="resume-summary">{summary}</p>
          <div className="resume-profile-links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={15} aria-hidden="true" /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={15} aria-hidden="true" /> GitHub
            </a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}>{profile.phone}</a>
          </div>
        </div>
        <div className="resume-actions">
          <a
            className="button button-secondary"
            href="/curriculo-caio-cristian.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Visualizar PDF original
          </a>
          <ResumeDownloadButton className="button button-primary resume-download" />
        </div>
      </header>

      <div className="resume-document">
        <Reveal>
          <section className="resume-document-section">
            <h2>Objetivo profissional</h2>
            <p>
              Atuar como Desenvolvedor Front-End Júnior, contribuindo para interfaces acessíveis,
              responsivas e bem estruturadas. Interesse secundário em oportunidades Full Stack.
            </p>
          </section>
        </Reveal>
        <Reveal>
          <section className="resume-document-section">
            <h2>Habilidades técnicas</h2>
            {skillGroups.map((group) => (
              <p key={group.title}>
                <strong>{group.title}:</strong> {group.skills.join(' · ')}
              </p>
            ))}
          </section>
        </Reveal>
        <Reveal>
          <section className="resume-document-section">
            <h2>Experiência profissional</h2>
            {experiences.map((experience) => (
              <article className="resume-entry" key={experience.company}>
                <div className="resume-entry-heading">
                  <div>
                    <h3>{experience.role}</h3>
                    <span>{experience.company}</span>
                  </div>
                  <time>{experience.period}</time>
                </div>
                <ul>
                  {experience.activities.map((activity) => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>
        </Reveal>
        <Reveal>
          <section className="resume-document-section">
            <h2>Formação e cursos</h2>
            <article className="resume-entry">
              <div className="resume-entry-heading">
                <div>
                  <h3>{profile.education.course}</h3>
                  <span>{profile.education.institution}</span>
                </div>
                <span className="education-status">{profile.education.status}</span>
              </div>
            </article>
            <article className="resume-entry">
              <div className="resume-entry-heading">
                <div>
                  <h3>{profile.course.name}</h3>
                  <span>{profile.course.institution}</span>
                </div>
                <span className="education-status">{profile.course.status}</span>
              </div>
            </article>
          </section>
        </Reveal>
        <Reveal>
          <section className="resume-document-section">
            <h2>Projetos relevantes</h2>
            {projects.map((project) => (
              <article className="resume-entry resume-project-entry" key={project.slug}>
                <div className="resume-entry-heading">
                  <div>
                    <h3>{project.name}</h3>
                    <span>
                      {project.category} · {project.status}
                    </span>
                  </div>
                  {project.repository ? (
                    <a href={project.repository} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  ) : (
                    <span>Repositório público não confirmado</span>
                  )}
                </div>
                <p>{project.cardDescription}</p>
                <p>
                  <strong>Tecnologias:</strong> {project.technologies.join(' · ')}
                </p>
              </article>
            ))}
          </section>
        </Reveal>
      </div>
      <div className="resume-download-box" id="download">
        <div>
          <span className="eyebrow">Documento ATS-friendly</span>
          <p>Currículo original em PDF, com texto selecionável e estrutura legível por ATS.</p>
        </div>
        <ResumeDownloadButton />
      </div>
      <p className="resume-caveat">
        Formação e experiência conforme o currículo enviado. O PDF disponibilizado é o documento
        original.
      </p>
    </article>
  )
}
