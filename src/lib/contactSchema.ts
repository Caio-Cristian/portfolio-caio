import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Informe seu nome.').max(100, 'Use até 100 caracteres.'),
  email: z.email('Informe um e-mail válido.'),
  subject: z.string().trim().min(3, 'Informe um assunto.').max(120, 'Use até 120 caracteres.'),
  message: z
    .string()
    .trim()
    .min(10, 'Escreva uma mensagem com pelo menos 10 caracteres.')
    .max(2000, 'Use até 2.000 caracteres.'),
})

export type ContactFormValues = z.infer<typeof contactSchema>
