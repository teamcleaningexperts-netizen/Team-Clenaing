import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Activity, ArrowRight, Clock, Eye, HeartPulse, Phone, Thermometer, TriangleAlert, Wind } from 'lucide-react'
import Reveal, { fadeUp, stagger } from './Reveal'
import { company } from '../data/content'

const symptoms = [
  { label: 'Allergic reactions', icon: TriangleAlert },
  { label: 'Asthma attacks', icon: HeartPulse },
  { label: 'Stuffy nose & wheezing', icon: Wind },
  { label: 'Fever & skin rash', icon: Thermometer },
  { label: 'Itchy, watery eyes', icon: Eye },
  { label: 'Respiratory infections', icon: Activity },
]

export default function MoldDanger() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-mid via-navy to-navy-deep pb-28 pt-16 text-white md:pb-36 md:pt-24">
      {/* diagonal cut into the next (brand-light) section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-brand-light md:h-32"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
      />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-24 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full bg-brand/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand ring-1 ring-brand/30">
            <TriangleAlert size={14} /> Know the Risk
          </p>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[44px]">
            What Is Mold and Why Is It <span className="text-brand">Dangerous?</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-white/80 sm:text-base">
            Mold is a fungus that grows from tiny airborne spores and flourishes in warm, moist
            conditions. Outdoors, it breaks down dead organic matter and plays a vital role in our
            planet’s ecosystem.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-white/80 sm:text-base">
            Indoors, it becomes a serious health concern. Many people are sensitive to mold and quickly
            develop allergic or asthmatic reactions. Long-term exposure can even trigger upper
            respiratory infections, hypersensitivity pneumonitis and, in some cases, life-threatening
            conditions.
          </p>

          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3"
          >
            {symptoms.map(({ label, icon: Icon }) => (
              <motion.li
                key={label}
                variants={fadeUp}
                className="flex items-center gap-2.5 rounded-2xl bg-white/[0.06] px-3 py-3 text-[13px] font-semibold leading-snug ring-1 ring-white/10 backdrop-blur-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand/20 text-brand">
                  <Icon size={16} />
                </span>
                {label}
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
            >
              Book Mold Clean-up <ArrowRight size={16} />
            </Link>
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-bold text-white ring-1 ring-white/25 transition hover:bg-white/20"
            >
              <Phone size={16} /> {company.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mx-auto max-w-xl">
            <div className="absolute -inset-3 rotate-3 rounded-[40px] bg-gradient-to-br from-brand/70 to-brand-dark/40" />
            <div className="relative overflow-hidden rounded-[36px] shadow-2xl ring-1 ring-white/20">
              <img
                src="/images/mold.jpg"
                alt="Black mold spreading across a damp interior wall"
                className="h-[360px] w-full object-cover sm:h-[440px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Hidden Danger</p>
                <p className="mt-1 text-lg font-extrabold leading-snug sm:text-xl">
                  What looks like a stain on the wall can be releasing spores into the air you breathe.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -left-3 -top-5 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-navy shadow-xl sm:-left-8"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white">
                <Clock size={20} />
              </span>
              <span>
                <span className="block text-lg font-extrabold leading-none">24–48 hrs</span>
                <span className="text-xs font-semibold text-muted">for mold to start on damp surfaces</span>
              </span>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
