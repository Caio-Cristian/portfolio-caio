import { ArrowDown, ArrowDownRight, ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { profile, summary } from '../data/profile'
import { Reveal } from '../components/Reveal'
import { ResumeDownloadButton } from '../components/ResumeDownloadButton'

export function HeroSection() {
  return (
    <section className="hero-section page-container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <Reveal>
          <div className="availability">
            <span className="availability-dot" />
            Aberto a oportunidades · Front-End Júnior
          </div>
          <p className="hero-eyebrow">PORTFÓLIO · {new Date().getFullYear()}</p>
          <h1 id="hero-title">
            Olá, eu sou
            <br />
            <span>Caio Cristian.</span>
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-location">{profile.location}</p>
          <p className="hero-description">{summary}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">
              Ver projetos <ArrowDownRight size={17} aria-hidden="true" />
            </a>
            <ResumeDownloadButton label="Baixar currículo" className="button button-secondary" />
          </div>
          <div className="hero-socials" aria-label="Redes profissionais">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={16} aria-hidden="true" /> LinkedIn{' '}
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={16} aria-hidden="true" /> GitHub{' '}
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal className="hero-art-wrap">
        <div className="hero-art" aria-label="Ilustração editorial com trecho de código">
          <div className="hero-art-top">
            <span className="hero-art-label">UM POUCO DO MEU PROCESSO</span>
            <span className="hero-art-coordinates">CAJAZEIRAS · PB</span>
          </div>
          <div className="hero-art-grid" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit-center">
              <span>c.</span>
            </div>
            <span className="orbit-point point-one" />
            <span className="orbit-point point-two" />
            <span className="orbit-cross">+</span>
          </div>
          <div className="code-note" aria-hidden="true">
            <div>
              <span className="code-muted">01</span> <span className="code-green">const</span>{' '}
              cuidado = {'{'}
            </div>
            <div>
              <span className="code-muted">02</span> &nbsp; clareza:{' '}
              <span className="code-orange">true</span>,
            </div>
            <div>
              <span className="code-muted">03</span> &nbsp; detalhe:{' '}
              <span className="code-orange">"sempre"</span>
            </div>
            <div>
              <span className="code-muted">04</span> {'}'}
            </div>
          </div>
          <span className="hero-art-index">01 — 03</span>
          <span className="hero-art-caption">
            Interface é conversa.
            <br />
            Código é o meio.
          </span>
        </div>
      </Reveal>
      <a className="scroll-cue" href="#sobre">
        <span>Role para conhecer</span>
        <ArrowDown size={15} aria-hidden="true" />
      </a>
    </section>
  )
}
