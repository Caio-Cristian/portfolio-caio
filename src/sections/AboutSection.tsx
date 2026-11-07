import { ArrowUpRight, Check } from 'lucide-react'
import { profile } from '../data/profile'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

const principles = ['Código organizado', 'Responsividade', 'Acessibilidade', 'Aprendizado contínuo']

export function AboutSection() {
  return (
    <section className="content-section page-container" id="sobre">
      <SectionHeading
        index="01"
        eyebrow="Um pouco sobre mim"
        title="Tecnologia com intenção."
        description="Gosto de transformar ideias em experiências digitais claras, úteis e agradáveis de usar."
      />
      <div className="about-grid">
        <Reveal>
          <p className="about-lead">
            Sou bacharel em Ciência da Computação e busco minha primeira oportunidade em
            desenvolvimento Front-End.
          </p>
          <p className="body-copy">
            Meu foco é React, JavaScript, HTML e CSS, com conhecimentos em TypeScript e Vue.js. Nos
            projetos do meu portfólio, pratico componentização, design responsivo, consumo de APIs,
            gerenciamento de estado e persistência de dados. Também utilizo Adobe Photoshop para
            criação e edição de materiais gráficos. A experiência anterior em suporte de TI e na
            área administrativa me ensinou a ouvir, organizar informações e resolver problemas com
            atenção.
          </p>
          <a
            className="text-link about-link"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            Mais sobre minha trajetória <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </Reveal>
        <Reveal className="about-principles-wrap">
          <div className="about-principles">
            <span className="eyebrow">O que levo para cada projeto</span>
            <ul>
              {principles.map((principle) => (
                <li key={principle}>
                  <Check size={16} aria-hidden="true" /> {principle}
                </li>
              ))}
            </ul>
            <div className="about-education-note">
              <span className="education-note-mark">↗</span>
              <span>
                <strong>{profile.education.course}</strong>
                <small>{profile.education.institution} · concluído em dez. 2025</small>
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
