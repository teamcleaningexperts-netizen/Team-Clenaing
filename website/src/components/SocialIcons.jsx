const icons = {
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.6l.4-3H14V9z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M6.5 9H4v11h2.5V9zM5.3 4C4.4 4 3.7 4.7 3.7 5.6c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6C6.9 4.7 6.2 4 5.3 4zM20 20h-2.5v-5.6c0-1.6-.6-2.6-2-2.6-1.1 0-1.7.7-2 1.4-.1.2-.1.6-.1.9V20H11V9h2.5v1.5c.5-.8 1.5-1.9 3.5-1.9 2.5 0 4 1.6 4 5.1V20z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M21.6 7.2c-.2-.8-.8-1.4-1.6-1.6C18.4 5.2 12 5.2 12 5.2s-6.4 0-8 .4c-.8.2-1.4.8-1.6 1.6C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.8.8 1.4 1.6 1.6 1.6.4 8 .4 8 .4s6.4 0 8-.4c.8-.2 1.4-.8 1.6-1.6.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  ),
}

export default function SocialIcons({
  href = 'https://teamcleaningexperts.in/',
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
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={key}
          className={itemClass}
        >
          {icon}
        </a>
      ))}
    </div>
  )
}
