import { useEffect } from 'react'

interface PageMetaProps {
  title: string
  description: string
}

export function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    document.title = title

    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    descriptionTag?.setAttribute('content', description)

    const openGraphTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
    openGraphTitle?.setAttribute('content', title)

    const openGraphDescription = document.querySelector<HTMLMetaElement>(
      'meta[property="og:description"]',
    )
    openGraphDescription?.setAttribute('content', description)

    const siteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/+$/, '')
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (siteUrl) {
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.append(canonical)
      }
      canonical.href = `${siteUrl}${window.location.pathname}`
    } else {
      canonical?.remove()
    }

    return () => {
      document.title = 'Caio Cristian — Desenvolvedor Front-End'
    }
  }, [description, title])

  return null
}
