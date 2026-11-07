import { describe, expect, it } from 'vitest'
import { contactSchema } from './contactSchema'

describe('contactSchema', () => {
  it('accepts a complete and valid message', () => {
    expect(
      contactSchema.safeParse({
        name: 'Ana Costa',
        email: 'ana@example.com',
        subject: 'Oportunidade front-end',
        message: 'Gostaria de conversar sobre uma oportunidade.',
      }).success,
    ).toBe(true)
  })

  it('rejects invalid email addresses and short messages', () => {
    const result = contactSchema.safeParse({
      name: 'A',
      email: 'not-an-email',
      subject: 'Oi',
      message: 'Olá',
    })

    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues.map((issue) => issue.path[0])).toEqual(
        expect.arrayContaining(['name', 'email', 'subject', 'message']),
      )
    }
  })
})
