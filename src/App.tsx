import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ScrollToTop } from './components/ScrollToTop'
import { useTheme } from './hooks/useTheme'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'

const CurriculumPage = lazy(() =>
  import('./pages/CurriculumPage').then((module) => ({ default: module.CurriculumPage })),
)
const ProjectPage = lazy(() =>
  import('./pages/ProjectPage').then((module) => ({ default: module.ProjectPage })),
)

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo
      </a>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/projetos/:slug"
            element={
              <Suspense
                fallback={
                  <div className="page-loading" role="status">
                    Abrindo projeto…
                  </div>
                }
              >
                <ProjectPage />
              </Suspense>
            }
          />
          <Route
            path="/curriculo"
            element={
              <Suspense
                fallback={
                  <div className="page-loading" role="status">
                    Abrindo currículo…
                  </div>
                }
              >
                <CurriculumPage />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
