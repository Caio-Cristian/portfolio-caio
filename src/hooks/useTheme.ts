import { useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

function getInitialTheme(): Theme {
  try {
    const storedTheme = localStorage.getItem('portfolio-theme')
    if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme
  } catch {
    return 'dark'
  }

  return 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme

    try {
      localStorage.setItem('portfolio-theme', theme)
    } catch {
      // The selected theme remains active for the current page view.
    }
  }, [theme])

  return {
    theme,
    toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
  }
}
