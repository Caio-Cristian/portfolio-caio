import { ArrowDownToLine } from 'lucide-react'

interface ResumeDownloadButtonProps {
  label?: string
  className?: string
}

export function ResumeDownloadButton({
  label = 'Baixar currículo PDF',
  className = 'button button-primary',
}: ResumeDownloadButtonProps) {
  return (
    <a
      className={className}
      href="/curriculo-caio-cristian.pdf"
      download="curriculo-caio-cristian.pdf"
    >
      <ArrowDownToLine size={17} aria-hidden="true" /> {label}
    </a>
  )
}
