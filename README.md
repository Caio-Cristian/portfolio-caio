# Portfólio — Caio Cristian

Portfólio pessoal de Caio Cristian, desenvolvido para apresentar sua trajetória em tecnologia, projetos públicos e interesse em oportunidades de Desenvolvedor Front-End Júnior.

## Funcionalidades

- Página inicial com apresentação, sobre, habilidades, projetos, experiência, formação e contato.
- Páginas individuais para os três projetos principais e três projetos anteriores mencionados no perfil profissional.
- Capturas de tela reais do AgendaPro e VÉRTICE; projetos sem capturas ou repositórios verificados são identificados claramente.
- Tema escuro por padrão, tema claro alternativo e preferência salva no navegador.
- Navegação responsiva, seções com entrada suave e respeito a `prefers-reduced-motion`.
- Currículo online sincronizado com o currículo enviado e PDF original disponível para visualização e download.
- Formulário validado com React Hook Form e Zod, que abre o aplicativo de e-mail com a mensagem preenchida.
- Metadados para compartilhamento, favicon, `robots.txt` e geração opcional de sitemap.

## Tecnologias

- React, TypeScript strict e Vite.
- Tailwind CSS 4 e CSS com propriedades de tema.
- React Router, Lucide React, React Hook Form e Zod.
- Vitest, Testing Library, ESLint e Prettier.

## Estrutura

```text
src/
  components/   # Navegação, cartões, metadados e elementos reutilizáveis
  data/         # Perfil, habilidades, experiências e projetos
  hooks/        # Preferência de tema
  lib/          # Validação do formulário
  pages/        # Página inicial, projetos, currículo e 404
  sections/     # Seções da página inicial
  styles/       # Identidade visual responsiva
public/
  curriculo-caio-cristian.pdf  # Currículo original enviado pelo proprietário
  projects/     # Capturas reais otimizadas em WebP
scripts/        # Geração de sitemap com domínio configurado
```

## Requisitos

- Node.js 20.19+ ou 22.12+.
- npm.

## Desenvolvimento local

```bash
npm install
npm run dev
```

O Vite informa o endereço local no terminal.

## Verificações

```bash
npm test
npm run lint
npm run format:check
npm run build
```

O build verifica os tipos TypeScript antes de gerar os arquivos em `dist/`.

## Configuração opcional

Copie `.env.example` para `.env.local`:

```env
VITE_SITE_URL=https://seu-dominio-publicado
SITE_URL=https://seu-dominio-publicado
```

`SITE_URL` é usado no build de produção para gerar `dist/sitemap.xml` com URLs absolutas. Sem um domínio confirmado, o sitemap é deliberadamente omitido para evitar publicar endereços fictícios. Configure o domínio e a variável nas configurações de build da Vercel.

## Publicação na Vercel

1. Importe este repositório na Vercel e selecione o preset **Vite**.
2. Use `npm run build` como comando de build e `dist` como diretório de saída.
3. Configure `SITE_URL` com o domínio real atribuído à aplicação.

As páginas de projeto usam rotas SPA. A Vercel encaminha as rotas do projeto para `index.html` por meio da configuração em `vercel.json`.