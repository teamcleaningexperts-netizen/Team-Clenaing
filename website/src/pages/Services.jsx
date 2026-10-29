import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import ServiceIcon from '../components/ServiceIcon'
import MoldTypes from '../components/MoldTypes'
import { company, images, services } from '../data/content'

export default function Services() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [hash])

  return (
    <div className="bg-white">
      <PageBanner title="Our Services" crumb="Services" image={images.banner} />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
              Specialist Mold Remediation for Every Space
            </h2>
            <p className="mt-4 text-muted">
              From general mold removal to targeted treatment for specific mold types — professional
              remediation trusted across Bangalore and other cities.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.06}>
                <article
                  id={s.id}
                  className="card-hover scroll-mt-28 overflow-hidden rounded-[24px] bg-white shadow-md ring-1 ring-line"
                >
                  <div className="relative h-48">
                    <img src={s.image} alt={s.title} className="h-full w-full object-cover" />
                    <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-lg">
                      <ServiceIcon name={s.icon} />
                    </span>
                    {s.featured && (
                      <span className="absolute right-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">
                        Specialty
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-extrabold text-navy">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
                    <Link
                      to="/contact"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand"
                    >
                      Book this service <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8fb] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">Mold Expertise</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy">Types of Mold We Treat</h2>
            <p className="mt-2 text-muted">
              Ten common mold types in homes and offices — where they grow, health risks, and how we remediate
              them safely.
            </p>
          </Reveal>
          <div className="mt-14">
            <MoldTypes />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative mx-auto flex max-w-7xl flex-col overflow-hidden rounded-[32px] bg-navy px-6 py-12 text-white sm:px-10 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold">Need a Custom Remediation Plan?</h2>
              <p className="mt-3 max-w-xl text-white/75">
                Contact us for a free mold inspection. Recover your home or office from any mold
                damage — call {company.phone}
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand-dark md:mt-0"
            >
              Get a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
