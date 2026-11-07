import type { Project } from '../data/projects'

interface ProjectArtworkProps {
  project: Project
  large?: boolean
}

export function ProjectArtwork({ project, large = false }: ProjectArtworkProps) {
  return (
    <div
      className={`text-project-artwork artwork-${project.slug}${large ? ' text-project-artwork-large' : ''}`}
      aria-hidden="true"
    >
      <span className="text-artwork-kicker">PROJETO DE PORTFÓLIO · SEM CAPTURA PÚBLICA</span>
      <span className="text-artwork-index">{project.category}</span>
      <span className="text-artwork-title">{project.name}</span>
      <span className="text-artwork-description">{project.cardDescription}</span>
      <span className="text-artwork-note">
        Ilustração editorial · não representa uma tela implementada
      </span>
    </div>
  )
}
