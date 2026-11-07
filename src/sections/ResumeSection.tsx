import { ArrowUpRight, ExternalLink, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { ResumeDownloadButton } from '../components/ResumeDownloadButton'

export function ResumeSection() {
  return (
    <section className="resume-band">
      <div className="page-container resume-band-inner">
        <Reveal className="resume-copy">
          <span className="eyebrow">Pronto para compartilhar</span>
          <h2>Uma versão objetiva da minha trajetória.</h2>
          <p>
            Consulte o currículo online ou baixe uma versão PDF com texto pesquisável e estrutura
            direta.
          </p>
          <div className="resume-actions">
            <Link className="button button-primary" to="/curriculo">
              <FileText size={17} aria-hidden="true" /> Ver currículo online
            </Link>
            <ResumeDownloadButton label="Baixar PDF" className="button button-secondary" />
          </div>
          <a
            className="resume-pdf-preview"
            href="/curriculo-caio-cristian.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink size={15} aria-hidden="true" /> Visualizar o PDF original
          </a>
        </Reveal>
        <div className="resume-stamp" aria-hidden="true">
          <span>
            CAIO
            <br />
            CRISTIAN
          </span>
          <ArrowUpRight size={25} />
          <small>
            CURRÍCULO
            <br />
            2026
          </small>
        </div>
      </div>
    </section>
  )
}
