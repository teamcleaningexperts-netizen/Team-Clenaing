import { Armchair, Building2, Droplets, Home, PanelsTopLeft, ShieldCheck, Sparkles } from 'lucide-react'

const map = {
  home: Home,
  building: Building2,
  sparkles: Sparkles,
  sofa: Armchair,
  glass: PanelsTopLeft,
  shield: ShieldCheck,
  droplets: Droplets,
  award: ShieldCheck,
}

export default function ServiceIcon({ name, size = 22, className = '' }) {
  const Icon = map[name] || Sparkles
  return <Icon size={size} className={className} />
}
