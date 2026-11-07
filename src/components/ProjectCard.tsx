import { ArrowDownRight, MoveUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProjectArtwork } from './ProjectArtwork'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  index: string
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const screenshot = project.screenshots[0]

  return (
    <article className={`project-card project-card-${project.slug}`}>
      <Link
        className="project-card-visual"
        to={`/projetos/${project.slug}`}
        aria-label={`Ver detalhes do projeto ${project.name}`}
      >
        {screenshot ? (
          <img
            src={screenshot.src}
            alt={screenshot.alt}
            loading="lazy"
            decoding="async"
            width="1600"
            height="1000"
          />
        ) : (
          <ProjectArtwork project={project} />
        )}
        <span className="project-card-open" aria-hidden="true">
          <MoveUpRight size={17} />
        </span>
        <span className="project-index">{index}</span>
      </Link>
      <div className="project-card-content">
        <div className="project-card-heading">
          <div>
            <span className="project-category">{project.category}</span>
            <h3>{project.name}</h3>
          </div>
          <span
            className={`project-status status-${project.status === 'Em desenvolvimento' ? 'progress' : project.status === 'Projeto de portfólio' ? 'archive' : 'demo'}`}
          >
            <span />
            {project.status}
          </span>
        </div>
        <p>{project.cardDescription}</p>
        <div className="project-tags">
          {project.technologies.slice(0, 4).map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
          {project.technologies.length > 4 && <span>+{project.technologies.length - 4}</span>}
        </div>
        <Link className="text-link" to={`/projetos/${project.slug}`}>
          Conhecer o projeto <ArrowDownRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
