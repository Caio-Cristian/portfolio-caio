export type ProjectStatus =
  'Em desenvolvimento' | 'Demonstrativo funcional' | 'Projeto de portfólio'

export interface Project {
  slug: string
  name: string
  category: string
  status: ProjectStatus
  description: string
  cardDescription: string
  problem: string
  objective: string
  features: string[]
  technologies: string[]
  decisions: string[]
  challenges: string[]
  repository?: string
  demo?: string
  screenshots: { src: string; alt: string; caption: string }[]
}

export const projects: Project[] = [
  {
    slug: 'agendapro',
    name: 'AgendaPro',
    category: 'SaaS · Agendamentos',
    status: 'Em desenvolvimento',
    description:
      'Plataforma de agendamentos para pequenos negócios de serviços. O repositório já reúne uma interface React funcional, uma área pública, autenticação e um espaço de trabalho para a operação do negócio.',
    cardDescription:
      'Uma experiência de agendamento pensada para conectar clientes, profissionais e pequenos negócios.',
    problem:
      'Pequenos negócios de serviços precisam organizar horários, serviços e atendimento sem depender de processos espalhados.',
    objective:
      'Criar uma base de produto para apresentar serviços e estruturar a rotina de agendamentos em um único espaço.',
    features: [
      'Site público para apresentação de serviços.',
      'Fluxos de autenticação e espaço de trabalho na interface.',
      'Estrutura preparada para conectar um projeto Supabase.',
      'Testes automatizados para a página de autenticação.',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    decisions: [
      'A experiência pública permanece navegável sem credenciais de serviço.',
      'Dados persistentes, convites e reservas dependem da configuração de um projeto Supabase.',
    ],
    challenges: [
      'Separar a interface utilizável localmente das integrações que dependem de configuração externa.',
      'Deixar explícito quais recursos só ficam ativos após conectar o Supabase.',
    ],
    repository: 'https://github.com/Caio-Cristian/agendapro',
    screenshots: [
      {
        src: '/projects/agendapro.webp',
        alt: 'Captura da interface pública do AgendaPro, obtida do repositório do projeto.',
        caption: 'Interface do projeto · captura original do repositório',
      },
    ],
  },
  {
    slug: 'vertice',
    name: 'VÉRTICE',
    category: 'E-commerce · Moda urbana',
    status: 'Demonstrativo funcional',
    description:
      'Loja demonstrativa para uma marca fictícia de moda urbana. Une direção visual editorial, navegação de catálogo e um fluxo de compra completo no navegador, sem processar pagamentos.',
    cardDescription:
      'Uma loja autoral que combina identidade editorial e uma jornada de compra demonstrativa.',
    problem:
      'Uma vitrine de moda precisa apresentar a coleção com personalidade sem deixar busca, seleção e compra difíceis de usar.',
    objective:
      'Construir uma experiência de e-commerce responsiva que percorra as principais etapas de descoberta e seleção de produtos.',
    features: [
      'Catálogo local com 24 produtos, pesquisa, filtros combinados e ordenação.',
      'Detalhes de produto com galeria e variações de tamanho e cor.',
      'Sacola, favoritos, conta e pedidos persistidos no navegador.',
      'Checkout demonstrativo com validação e consulta opcional de CEP.',
      'Layout responsivo e navegação por teclado.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Redux Toolkit',
      'React Router',
      'React Hook Form',
      'Zod',
    ],
    decisions: [
      'Manter o catálogo disponível sem depender de uma API externa.',
      'Persistir o estado no navegador e identificar com clareza o checkout como demonstrativo.',
    ],
    challenges: [
      'Combinar pesquisa, filtros e ordenação em uma experiência de catálogo coerente.',
      'Preservar variações de produtos e estado da sacola entre visitas no mesmo navegador.',
    ],
    repository: 'https://github.com/Caio-Cristian/vertice-ecommerce',
    screenshots: [
      {
        src: '/projects/vertice-home.webp',
        alt: 'Captura real da página inicial da loja VÉRTICE.',
        caption: 'Página inicial · captura original do repositório',
      },
      {
        src: '/projects/vertice-catalog.webp',
        alt: 'Captura real do catálogo de produtos da VÉRTICE.',
        caption: 'Catálogo de produtos · captura original do repositório',
      },
      {
        src: '/projects/vertice-mobile.webp',
        alt: 'Captura real da versão mobile da página inicial da VÉRTICE.',
        caption: 'Experiência mobile · captura original do repositório',
      },
    ],
  },
  {
    slug: 'helpdesk-pro',
    name: 'HelpDesk Pro',
    category: 'Full Stack · Suporte',
    status: 'Em desenvolvimento',
    description:
      'Base de uma plataforma SaaS multiempresa de atendimento. O monorepo reúne uma SPA em React, uma API NestJS e persistência com PostgreSQL e Prisma.',
    cardDescription:
      'Uma plataforma em desenvolvimento para organizar solicitações, equipes e conversas de suporte.',
    problem:
      'Equipes de suporte precisam acompanhar chamados, responsáveis e mensagens sem perder o contexto de cada atendimento.',
    objective:
      'Estruturar um produto multiempresa com fluxos de autenticação, tickets, mensagens e operação de suporte.',
    features: [
      'Fluxos de autenticação, empresas, usuários e departamentos.',
      'Abertura e acompanhamento de tickets e mensagens.',
      'Interface com dashboards e API REST.',
      'Base de comunicação em tempo real e relatórios.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'NestJS',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'Socket.IO',
      'Docker',
    ],
    decisions: [
      'Organizar front-end, API e banco de dados em um monorepo.',
      'Registrar o escopo como projeto em desenvolvimento, não como produto pronto para produção.',
    ],
    challenges: [
      'Coordenar responsabilidades de interface, API e persistência numa aplicação full stack.',
      'Distinguir fluxos já funcionais localmente dos requisitos de uma entrega de produção.',
    ],
    repository: 'https://github.com/Caio-Cristian/helpdesk-pro',
    screenshots: [],
  },
]

export const previousProjects: Project[] = [
  {
    slug: 'loja-de-jogos',
    name: 'Loja de Jogos',
    category: 'E-commerce · Front-End',
    status: 'Projeto de portfólio',
    description:
      'Aplicação de loja de jogos com carrinho de compras, integração com uma API simulada e testes automatizados.',
    cardDescription:
      'Uma experiência de compra de jogos construída com React, gerenciamento de estado e testes.',
    problem:
      'Apresentar produtos e oferecer um fluxo de compra claro que permita adicionar jogos ao carrinho.',
    objective:
      'Desenvolver uma aplicação front-end para praticar composição de interface, estado global e consumo de dados.',
    features: [
      'Carrinho de compras.',
      'Integração com API simulada usando RTK Query.',
      'Testes com Jest e React Testing Library.',
    ],
    technologies: ['React', 'Redux Toolkit', 'RTK Query', 'Jest', 'React Testing Library'],
    decisions: [
      'Separar a interface do estado de compra e do carregamento de dados.',
      'Usar testes automatizados para verificar os fluxos da aplicação.',
    ],
    challenges: [
      'Manter o estado do carrinho previsível ao adicionar produtos.',
      'Cobrir os comportamentos principais da interface com testes.',
    ],
    screenshots: [],
  },
  {
    slug: 'clone-disney-plus',
    name: 'Clone Disney+',
    category: 'Streaming · Interface',
    status: 'Projeto de portfólio',
    description:
      'Interface inspirada em serviços de streaming, composta por componentes reutilizáveis e conteúdo apresentado dinamicamente a partir de dados JSON.',
    cardDescription:
      'Uma interface de streaming com composição reutilizável e conteúdo dinâmico vindo de JSON.',
    problem:
      'Organizar diferentes títulos e áreas de conteúdo em uma interface de streaming coesa.',
    objective:
      'Praticar a composição de componentes reutilizáveis e a apresentação dinâmica de dados numa aplicação React.',
    features: ['Componentes reutilizáveis.', 'Exibição dinâmica de conteúdo a partir de JSON.'],
    technologies: ['React', 'JavaScript', 'JSON'],
    decisions: [
      'Representar o conteúdo em dados JSON separados da estrutura da página.',
      'Compor a experiência com componentes reutilizáveis.',
    ],
    challenges: ['Transformar dados de conteúdo numa interface consistente e fácil de ampliar.'],
    screenshots: [],
  },
  {
    slug: 'lista-de-contatos',
    name: 'Lista de Contatos',
    category: 'Aplicação web · JavaScript',
    status: 'Projeto de portfólio',
    description:
      'Aplicação para cadastrar, editar e excluir contatos, com persistência dos dados no LocalStorage.',
    cardDescription: 'Cadastro, edição e remoção de contatos com dados preservados no navegador.',
    problem: 'Organizar contatos de forma simples e manter os registros disponíveis entre visitas.',
    objective:
      'Criar uma aplicação web para praticar operações de cadastro e persistência de dados no navegador.',
    features: [
      'Cadastro de contatos.',
      'Edição de registros existentes.',
      'Exclusão de contatos.',
      'Persistência usando LocalStorage.',
    ],
    technologies: ['JavaScript', 'LocalStorage'],
    decisions: [
      'Persistir os dados localmente sem depender de um backend.',
      'Implementar ações independentes para adicionar, atualizar e remover registros.',
    ],
    challenges: ['Manter a interface sincronizada com os registros persistidos no navegador.'],
    screenshots: [],
  },
]

export const allProjects = [...projects, ...previousProjects]
