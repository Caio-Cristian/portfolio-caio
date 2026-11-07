import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

let localEnv = ''
try {
  localEnv = await readFile(resolve('.env.local'), 'utf8')
} catch (error) {
  if (error?.code !== 'ENOENT') throw error
}

const localSiteUrl = localEnv
  .split(/\r?\n/)
  .map((line) => line.match(/^\s*(?:export\s+)?SITE_URL\s*=\s*(.*?)\s*$/)?.[1])
  .find(Boolean)
  ?.replace(/^(['"])(.*)\1$/, '$2')
const siteUrl = (process.env.SITE_URL || localSiteUrl)?.replace(/\/+$/, '')

if (!siteUrl || !URL.canParse(siteUrl)) {
  console.warn(
    'Sitemap not generated: set SITE_URL to the deployed portfolio URL before building for production.',
  )
  process.exit(0)
}

const routes = [
  '/',
  '/curriculo',
  '/projetos/agendapro',
  '/projetos/vertice',
  '/projetos/helpdesk-pro',
  '/projetos/loja-de-jogos',
  '/projetos/clone-disney-plus',
  '/projetos/lista-de-contatos',
]

const urls = routes.map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`).join('\n')
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

await writeFile(resolve('dist', 'sitemap.xml'), sitemap)
await writeFile(
  resolve('dist', 'robots.txt'),
  `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`,
)
console.info(`Sitemap generated for ${siteUrl}`)
