import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { company, navLinks, services } from '../data/content'
import logo from '../assets/logo.png'
import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <img src={logo} alt="Team Cleaning Experts" className="h-12 w-auto" />
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Professional cleaning services for homes, offices and commercial spaces. We ensure clean,
            healthy and safe environments — including specialist mold remediation.
          </p>
          <SocialIcons className="mt-5 [&>a]:h-9 [&>a]:w-9 [&>a]:bg-white/10" />
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-white/75">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold">Our Services</h4>
          <ul className="space-y-2.5 text-sm text-white/75">
            {services.map((s) => (
              <li key={s.id}>
                <Link to={`/services#${s.id}`} className="hover:text-brand">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold">Contact Info</h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-brand" />
              <a href={company.phoneHref} className="hover:text-brand">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-brand" />
              <a href={company.emailHref} className="hover:text-brand">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
              <span>{company.address}</span>
            </li>
          </ul>
          <p className="mt-4 text-xs uppercase tracking-wide text-white/50">{company.hours}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/55 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Team Cleaning Experts. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-brand">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-brand">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
