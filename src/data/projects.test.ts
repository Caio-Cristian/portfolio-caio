import { describe, expect, it } from 'vitest'
import { allProjects, previousProjects } from './projects'
import { profile, summary } from './profile'

describe('Resume profile details', () => {
  it('records the completed education and contact details from the supplied resume', () => {
    expect(profile.education.status).toBe('Concluído em dezembro de 2025')
    expect(profile.location).toBe('Cajazeiras, Paraíba, Brasil')
    expect(profile.course.status).toBe('Concluído')
    expect(profile.email).toBe('caiocristianoliveiramarques@gmail.com')
    expect(profile.phone).toBe('(83) 99342-3848')
    expect(summary).toContain('interfaces responsivas')
  })

  it('includes the three previous projects without inventing public repositories', () => {
    expect(previousProjects.map((project) => project.name)).toEqual([
      'Loja de Jogos',
      'Clone Disney+',
      'Lista de Contatos',
    ])
    expect(previousProjects.every((project) => project.repository === undefined)).toBe(true)
    expect(allProjects).toHaveLength(6)
  })
})
