import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageMeta } from '../components/PageMeta'

export function NotFoundPage() {
  return (
    <section className="not-found page-container">
      <PageMeta
        title="Página não encontrada — Caio Cristian"
        description="Esta página não foi encontrada."
      />
      <span className="eyebrow">Erro 404</span>
      <h1>Este caminho não leva a lugar algum.</h1>
      <Link className="button button-primary" to="/">
        <ArrowLeft size={16} aria-hidden="true" /> Voltar ao início
      </Link>
    </section>
  )
}
