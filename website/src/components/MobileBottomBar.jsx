import { Phone } from 'lucide-react'
import { company } from '../data/content'
import WhatsAppIcon from './WhatsAppIcon'

export default function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy px-4 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] sm:hidden">
      <div className="mx-auto flex max-w-md gap-2">
        <a
          href={company.phoneHref}
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#2563eb] px-3 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#1d4ed8]"
        >
          <Phone size={16} strokeWidth={2.5} aria-hidden="true" />
          Call
        </a>
        <a
          href={company.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-3 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[#1ebe57]"
        >
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
