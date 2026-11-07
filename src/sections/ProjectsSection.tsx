import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { previousProjects, projects } from '../data/projects'

export function ProjectsSection() {
  return (
    <section className="content-section page-container projects-section" id="projetos">
      <SectionHeading
        index="03"
        eyebrow="Trabalho em foco"
        title="Projetos, sem atalhos."
        description="Produtos e interfaces desenvolvidos para explorar problemas reais de experiência e engenharia."
      />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal key={project.slug}>
            <ProjectCard project={project} index={`0${index + 1}`} />
          </Reveal>
        ))}
      </div>
      <div className="previous-projects">
        <div className="previous-projects-heading">
          <span className="eyebrow">Outros projetos</span>
          <p>Trabalhos anteriores descritos no meu perfil profissional.</p>
        </div>
        <div className="previous-projects-list">
          {previousProjects.map((project, index) => (
            <Link
              className="previous-project-row"
              to={`/projetos/${project.slug}`}
              key={project.slug}
            >
              <span className="previous-project-number">0{index + 4}</span>
              <span className="previous-project-copy">
                <span className="previous-project-category">{project.category}</span>
                <strong>{project.name}</strong>
                <span className="previous-project-description">{project.cardDescription}</span>
              </span>
              <span className="previous-project-tags">
                {project.technologies.slice(0, 3).map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
      <div className="project-footnote">
        <span>O estado de cada projeto está indicado com transparência.</span>
        <Link className="text-link" to="/curriculo">
          Ver trajetória completa <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
