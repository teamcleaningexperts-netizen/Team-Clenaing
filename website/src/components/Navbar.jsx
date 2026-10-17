import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRight, Clock3, Mail, Menu, Phone, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { company, navLinks } from '../data/content'
import SocialIcons from './SocialIcons'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-[12px] sm:px-6 lg:px-8">
          <p className="flex min-w-0 items-center gap-2 font-medium text-white/85">
            <Clock3 size={14} className="shrink-0 text-brand" />
            <span className="truncate">
              {company.hours} · Serving {company.locations.join(', ')}
            </span>
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-1.5 font-semibold text-white transition hover:text-brand"
            >
              <Phone size={14} className="text-brand" />
              {company.phone}
            </a>
            <a
              href={company.emailHref}
              className="hidden items-center gap-1.5 font-medium text-white/85 transition hover:text-brand md:inline-flex"
            >
              <Mail size={14} className="text-brand" />
              {company.email}
            </a>
            <SocialIcons variant="light" className="hidden sm:flex" />
          </div>
        </div>
      </div>

      <div
        className={`border-b border-line/70 transition-all duration-300 ${
          scrolled || open ? 'bg-white/95 shadow-md backdrop-blur' : 'bg-white'
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="relative z-10 flex h-12 w-[148px] shrink-0 items-center overflow-visible">
            <img
              src={logo}
              alt="Team Cleaning Experts"
              className="absolute left-0 top-1/2 h-16 w-auto max-w-none -translate-y-1/2 sm:h-[72px]"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-[15px] font-semibold transition hover:text-brand ${
                    isActive ? 'text-brand' : 'text-navy'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-brand/25 transition hover:bg-brand-dark sm:inline-flex"
            >
              Get a Quote <ArrowRight size={16} />
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-navy lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-line bg-white lg:hidden"
            >
              <nav className="flex flex-col gap-1 px-4 py-4">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3 text-base font-semibold ${
                        isActive ? 'bg-brand-light text-brand' : 'text-navy'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <a href={company.phoneHref} className="rounded-xl px-4 py-3 text-sm font-semibold text-navy">
                  {company.phone}
                </a>
                <Link
                  to="/contact"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white"
                >
                  Get a Quote <ArrowRight size={16} />
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
