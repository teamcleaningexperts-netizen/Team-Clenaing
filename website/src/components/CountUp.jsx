import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

// Counts up to a value like '12,000+' or '1,00,000+' once it scrolls into view.
export default function CountUp({ value, duration = 2, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [, prefix = '', digits = '', suffix = ''] = value.match(/^([^\d]*)([\d,]+)(.*)$/) || []
  const target = Number(digits.replace(/,/g, ''))
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView || !target) return
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, target, duration])

  if (!digits) return <span className={className}>{value}</span>

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}
