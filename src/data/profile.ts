export const profile = {
  name: 'Caio Cristian',
  role: 'Desenvolvedor Front-End Júnior',
  location: 'Cajazeiras, Paraíba, Brasil',
  linkedin: 'https://www.linkedin.com/in/caiocristian/',
  github: 'https://github.com/Caio-Cristian',
  email: 'caiocristianoliveiramarques@gmail.com',
  phone: '(83) 99342-3848',
  education: {
    institution: 'Cruzeiro do Sul Virtual',
    course: 'Ciência da Computação',
    status: 'Concluído em dezembro de 2025',
  },
  course: {
    institution: 'EBAC — Escola Britânica de Artes Criativas e Tecnologia',
    name: 'Desenvolvimento Full Stack Java',
    status: 'Concluído',
  },
} as const

export const experiences = [
  {
    company: 'Araújo Confecções',
    role: 'Auxiliar Administrativo',
    period: 'out. 2022 — ago. 2024',
    activities: [
      'Inserção e organização de dados.',
      'Atendimento ao cliente e apoio a atividades administrativas.',
      'Organização de informações e processos internos.',
    ],
  },
  {
    company: 'Tecnoius',
    role: 'Estagiário de Análise e Suporte de TI',
    period: 'mai. 2021 — ago. 2021',
    activities: [
      'Apoio em atividades de suporte técnico.',
      'Auxílio na análise de problemas de TI.',
      'Atendimento e suporte aos usuários.',
    ],
  },
] as const

export const skillGroups = [
  {
    title: 'Interface & Front-End',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Redux Toolkit',
      'Tailwind CSS',
      'React Router',
    ],
  },
  {
    title: 'Ferramentas & qualidade',
    skills: [
      'React Hook Form',
      'Zod',
      'Vitest',
      'React Testing Library',
      'Jest',
      'Git',
      'GitHub',
      'Vite',
    ],
  },
  {
    title: 'Back-End & dados',
    skills: ['APIs REST', 'Node.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Supabase'],
  },
] as const

export const summary =
  'Desenvolvedor Front-End com formação em Ciência da Computação e prática em projetos pessoais utilizando React, TypeScript, JavaScript, HTML e CSS. Desenvolvimento de interfaces responsivas, gerenciamento de estado, validação de formulários e integração com APIs REST.'
