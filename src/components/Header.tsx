import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { Theme } from '../hooks/useTheme'
import { ThemeToggle } from './ThemeToggle'

const navigation = [
  { label: 'Sobre', id: 'sobre' },
  { label: 'Habilidades', id: 'habilidades' },
  { label: 'Projetos', id: 'projetos' },
  { label: 'Experiência', id: 'experiencia' },
]

interface HeaderProps {
  theme: Theme
  onToggleTheme: () => void
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    setMenuOpen(false)
    if (!isHome) setActiveSection('')
  }, [isHome, location.pathname])

  useEffect(() => {
    if (!isHome || !('IntersectionObserver' in window)) return

    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visibleEntry) setActiveSection(visibleEntry.target.id)
      },
      { rootMargin: '-24% 0px -58% 0px', threshold: [0, 0.25, 0.5] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [isHome])

  return (
    <header className="site-header">
      <div className="header-inner page-container">
        <Link className="wordmark" to="/" aria-label="Caio Cristian, página inicial">
          <span className="wordmark-mark">c.</span>
          <span>caio cristian</span>
        </Link>

        <button
          className="icon-button menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav
          className={`primary-navigation ${menuOpen ? 'is-open' : ''}`}
          id="primary-navigation"
          aria-label="Navegação principal"
        >
          {navigation.map((item) => {
            const href = `/#${item.id}`
            const isActive = isHome && activeSection === item.id
            return (
              <Link
                className={`nav-link ${isActive ? 'is-active' : ''}`}
                to={href}
                key={item.id}
                aria-current={isActive ? 'location' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
          <Link className="nav-link" to="/curriculo">
            Currículo
          </Link>
        </nav>

        <div className="header-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Link className="header-contact" to="/#contato">
            Vamos conversar <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  )
}
