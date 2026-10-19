import { Phone } from 'lucide-react'
import { company } from '../data/content'
import WhatsAppIcon from './WhatsAppIcon'

export default function MobileContactButtons() {
  return (
    <>
      <a
        href={company.phoneHref}
        className="inline-flex items-center gap-1.5 font-semibold text-white transition hover:text-brand"
      >
        <Phone size={14} className="text-brand" />
        {company.phone}
      </a>
      <a
        href={company.whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="hidden items-center gap-1.5 font-medium text-white/85 transition hover:text-[#25D366] sm:inline-flex"
      >
        <WhatsAppIcon className="h-3.5 w-3.5 text-[#25D366]" />
        WhatsApp
      </a>
    </>
  )
}
