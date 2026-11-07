import { ArrowLeft, ArrowRight, ArrowUpRight, Check, CircleHelp, Github } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'
import { ProjectArtwork } from '../components/ProjectArtwork'
import { Reveal } from '../components/Reveal'
import { allProjects } from '../data/projects'

export function ProjectPage() {
  const { slug } = useParams()
  const projectIndex = allProjects.findIndex((item) => item.slug === slug)
  const project = allProjects[projectIndex]

  if (!project) return <Navigate to="/nao-encontrado" replace />

  const previous = allProjects[(projectIndex - 1 + allProjects.length) % allProjects.length]
  const next = allProjects[(projectIndex + 1) % allProjects.length]
  const isInProgress = project.status === 'Em desenvolvimento'

  return (
    <article className="project-detail page-container">
      <PageMeta
        title={`${project.name} — Projetos de Caio Cristian`}
        description={project.description}
      />
      <Link className="back-link" to="/#projetos">
        <ArrowLeft size={15} aria-hidden="true" /> Todos os projetos
      </Link>
      <header className="project-detail-header">
        <div>
          <div className="section-kicker">
            <span className="section-index">{`0${projectIndex + 1}`}</span>
            <span>{project.category}</span>
          </div>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </div>
        <div className="project-detail-actions">
          <span
            className={`project-status status-${isInProgress ? 'progress' : project.status === 'Projeto de portfólio' ? 'archive' : 'demo'}`}
          >
            <span />
            {project.status}
          </span>
          {project.repository ? (
            <a
              className="button button-primary"
              href={project.repository}
              target="_blank"
              rel="noreferrer"
            >
              Ver repositório <Github size={16} aria-hidden="true" />
            </a>
          ) : (
            <span className="demo-unavailable">Repositório público não confirmado</span>
          )}
          {project.demo ? (
            <a
              className="button button-secondary"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Abrir demonstração <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : (
            <span className="demo-unavailable">Demonstração pública não informada</span>
          )}
        </div>
      </header>

      <div className="project-detail-meta">
        <div>
          <span className="eyebrow">01 / Objetivo</span>
          <p>{project.objective}</p>
        </div>
        <div>
          <span className="eyebrow">02 / Problema</span>
          <p>{project.problem}</p>
        </div>
      </div>

      <section className="project-gallery" aria-label="Imagens do projeto">
        <div className="detail-section-heading">
          <span className="eyebrow">Olhar de perto</span>
          <span>
            {project.screenshots.length
              ? 'Capturas originais do repositório'
              : 'Material visual disponível'}
          </span>
        </div>
        {project.screenshots.length ? (
          <div className={`gallery-grid gallery-count-${project.screenshots.length}`}>
            {project.screenshots.map((screenshot) => (
              <figure key={screenshot.src}>
                <a
                  href={screenshot.src}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir imagem: ${screenshot.caption}`}
                >
                  <img src={screenshot.src} alt={screenshot.alt} loading="lazy" decoding="async" />
                </a>
                <figcaption>{screenshot.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div
            className={`no-screenshot${project.status === 'Projeto de portfólio' ? ' archive-no-screenshot' : ''}`}
          >
            {project.status === 'Projeto de portfólio' ? (
              <>
                <ProjectArtwork project={project} large />
                <p>
                  O perfil descreve este projeto, mas não encontrei um repositório ou captura de
                  tela pública correspondente. A arte é ilustrativa, não uma tela implementada.
                </p>
              </>
            ) : (
              <>
                <div className="helpdesk-artwork helpdesk-artwork-large" aria-hidden="true">
                  <div className="artwork-topline">
                    <span>ATENDIMENTO · PLATAFORMA</span>
                    <span className="artwork-dot" />
                  </div>
                  <div className="artwork-heading">
                    SUPORTE
                    <br />
                    COM CONTEXTO.
                  </div>
                  <div className="artwork-flow">
                    <span>cliente</span>
                    <span className="flow-line" />
                    <span>chamado</span>
                    <span className="flow-line" />
                    <span>equipe</span>
                  </div>
                  <span className="artwork-note">Ilustração editorial · não é captura de tela</span>
                </div>
                <p>
                  O repositório não publica capturas de tela deste projeto. Esta ilustração é apenas
                  visual e não representa uma tela implementada.
                </p>
              </>
            )}
          </div>
        )}
      </section>

      <div className="project-detail-columns">
        <Reveal>
          <section className="detail-panel">
            <span className="eyebrow">O que está presente</span>
            <h2>Funcionalidades</h2>
            <ul className="detail-check-list">
              {project.features.map((feature) => (
                <li key={feature}>
                  <Check size={16} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
        <Reveal>
          <section className="detail-panel">
            <span className="eyebrow">Construção</span>
            <h2>Decisões técnicas</h2>
            <ul className="detail-bullet-list">
              {project.decisions.map((decision) => (
                <li key={decision}>{decision}</li>
              ))}
            </ul>
          </section>
        </Reveal>
      </div>

      <div className="project-detail-columns project-detail-columns-bottom">
        <Reveal>
          <section className="detail-panel">
            <span className="eyebrow">Aprendizados</span>
            <h2>Desafios</h2>
            <ul className="detail-bullet-list">
              {project.challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          </section>
        </Reveal>
        <Reveal>
          <section className="detail-panel technology-panel">
            <span className="eyebrow">Stack do projeto</span>
            <h2>Tecnologias</h2>
            <div className="technology-tags">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
            {isInProgress && (
              <p className="project-state-note">
                <CircleHelp size={15} aria-hidden="true" /> Projeto em desenvolvimento; integrações
                e fluxo de produção podem exigir configuração adicional.
              </p>
            )}
          </section>
        </Reveal>
      </div>

      <nav className="project-pagination" aria-label="Navegar entre projetos">
        <Link to={`/projetos/${previous.slug}`}>
          <ArrowLeft size={16} aria-hidden="true" />
          <span>
            <small>Anterior</small>
            {previous.name}
          </span>
        </Link>
        <Link to={`/projetos/${next.slug}`}>
          <span>
            <small>Próximo</small>
            {next.name}
          </span>
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </nav>
    </article>
  )
}
