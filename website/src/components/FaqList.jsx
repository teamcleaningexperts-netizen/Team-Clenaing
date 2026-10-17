import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FaqList({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const open = openIndex === i
        return (
          <div
            key={item.q}
            className={`overflow-hidden rounded-2xl bg-white shadow-sm ring-1 transition ${
              open ? 'ring-brand/40 shadow-[0_10px_30px_rgba(12,45,74,0.06)]' : 'ring-line'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : i)}
              className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6"
            >
              <span className="hidden w-8 shrink-0 text-sm font-extrabold text-brand sm:block">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex-1 text-sm font-bold text-navy sm:text-base">{item.q}</span>
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${
                  open ? 'bg-brand text-white' : 'bg-brand-light text-brand'
                }`}
              >
                <ChevronDown size={16} className={`transition ${open ? 'rotate-180' : ''}`} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28 }}
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6 sm:pl-[4.5rem]">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
