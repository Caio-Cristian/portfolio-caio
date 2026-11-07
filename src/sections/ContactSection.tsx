import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowUpRight, Github, Linkedin, Mail, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { profile } from '../data/profile'
import { contactSchema, type ContactFormValues } from '../lib/contactSchema'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

export function ContactSection() {
  const [notice, setNotice] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) })

  function onSubmit(values: ContactFormValues) {
    const subject = encodeURIComponent(values.subject)
    const body = encodeURIComponent(
      `Olá, Caio!\n\n${values.message}\n\n${values.name}\n${values.email}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setNotice('Seu aplicativo de e-mail foi aberto. Revise e envie a mensagem por lá.')
    reset()
  }

  return (
    <section className="content-section contact-section page-container" id="contato">
      <SectionHeading
        index="05"
        eyebrow="Contato"
        title="Vamos conversar?"
        description="Estou aberto a oportunidades júnior em Front-End e a boas conversas sobre tecnologia."
      />
      <div className="contact-grid">
        <Reveal>
          <div className="contact-card">
            <span className="eyebrow">Me encontre por aqui</span>
            <a className="contact-method" href={profile.linkedin} target="_blank" rel="noreferrer">
              <span className="contact-method-icon">
                <Linkedin size={19} aria-hidden="true" />
              </span>
              <span>
                <strong>LinkedIn</strong>
                <small>Conecte-se comigo</small>
              </span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="contact-method" href={profile.github} target="_blank" rel="noreferrer">
              <span className="contact-method-icon">
                <Github size={19} aria-hidden="true" />
              </span>
              <span>
                <strong>GitHub</strong>
                <small>Veja meus repositórios</small>
              </span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="contact-method" href={`mailto:${profile.email}`}>
              <span className="contact-method-icon">
                <Mail size={19} aria-hidden="true" />
              </span>
              <span>
                <strong>E-mail</strong>
                <small>{profile.email}</small>
              </span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="contact-method" href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}>
              <span className="contact-method-icon">
                <Phone size={19} aria-hidden="true" />
              </span>
              <span>
                <strong>Telefone</strong>
                <small>{profile.phone}</small>
              </span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <p className="contact-aside">
              Respondo assim que possível. Para uma conversa profissional, o LinkedIn é o melhor
              caminho.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <span className="eyebrow">Ou envie uma mensagem</span>
            <div className="form-row">
              <label className="form-field">
                <span>Nome</span>
                <input
                  {...register('name')}
                  autoComplete="name"
                  placeholder="Como posso te chamar?"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span className="field-error" id="name-error">
                    {errors.name.message}
                  </span>
                )}
              </label>
              <label className="form-field">
                <span>E-mail</span>
                <input
                  {...register('email')}
                  type="email"
                  autoComplete="email"
                  placeholder="voce@email.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span className="field-error" id="email-error">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <label className="form-field">
              <span>Assunto</span>
              <input
                {...register('subject')}
                placeholder="O que você tem em mente?"
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              />
              {errors.subject && (
                <span className="field-error" id="subject-error">
                  {errors.subject.message}
                </span>
              )}
            </label>
            <label className="form-field">
              <span>Mensagem</span>
              <textarea
                {...register('message')}
                rows={4}
                placeholder="Conte um pouco sobre a oportunidade ou ideia..."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <span className="field-error" id="message-error">
                  {errors.message.message}
                </span>
              )}
            </label>
            <div className="form-submit-row">
              <button className="button button-primary" type="submit" disabled={isSubmitting}>
                Enviar mensagem <Send size={15} aria-hidden="true" />
              </button>
              <span className="form-disclaimer">
                Seu aplicativo de e-mail será aberto com a mensagem preenchida.
              </span>
            </div>
            <p className="form-notice" role="status" aria-live="polite">
              {notice}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
