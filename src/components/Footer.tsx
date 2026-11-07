import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-main">
          <div>
            <p className="eyebrow">Próximo passo</p>
            <h2>Boas conversas também constroem coisas.</h2>
          </div>
          <Link className="footer-contact-link" to="/#contato">
            Entre em contato <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="footer-bottom">
          <Link className="wordmark" to="/">
            <span className="wordmark-mark">c.</span>
            <span>caio cristian</span>
          </Link>
          <span>Feito com intenção · {new Date().getFullYear()}</span>
          <div className="footer-socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={17} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
