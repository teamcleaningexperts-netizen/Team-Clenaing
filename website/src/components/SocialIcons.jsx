import { company } from '../data/content'

const icons = {
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.6l.4-3H14V9z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M17.8 3h3.1l-6.8 7.8L22 21h-6.3l-4.9-6.4L5.2 21H2.1l7.3-8.3L1.8 3h6.4l4.4 5.9L17.8 3zm-1.1 16.2h1.7L7.3 4.7H5.5l11.2 14.5z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M21.6 7.2c-.2-.8-.8-1.4-1.6-1.6C18.4 5.2 12 5.2 12 5.2s-6.4 0-8 .4c-.8.2-1.4.8-1.6 1.6C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.8.8 1.4 1.6 1.6 1.6.4 8 .4 8 .4s6.4 0 8-.4c.8-.2 1.4-.8 1.6-1.6.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  ),
}

const labels = {
  facebook: 'Facebook',
  twitter: 'X (Twitter)',
  instagram: 'Instagram',
  youtube: 'YouTube',
}

export default function SocialIcons({
  className = '',
  variant = 'default',
}) {
  const itemClass =
    variant === 'light'
      ? 'flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-brand hover:bg-brand'
      : 'flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white transition hover:bg-brand'

  return (
    <div className={`flex gap-2 ${className}`}>
      {Object.entries(icons).map(([key, icon]) => (
        <a
          key={key}
          href={company.social[key]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Team Cleaning Experts on ${labels[key]}`}
          title={labels[key]}
          className={itemClass}
        >
          {icon}
        </a>
      ))}
    </div>
  )
}
