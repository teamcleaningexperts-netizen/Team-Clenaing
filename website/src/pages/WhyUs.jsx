import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import { company, images, processSteps, stats, whyPoints } from '../data/content'

export default function WhyUs() {
  return (
    <div className="bg-white">
      <PageBanner title="Why Us" crumb="Why Us" image={images.banner} />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">Why Choose Us</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
              The Best Mold Remediation Service
            </h2>
            <p className="mt-4 text-muted">
              We are growing every day with your help. Families and businesses trust Team Cleaning Experts
              for reliable, specialist mold remediation.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyPoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <article className="h-full rounded-[24px] border border-line bg-[#f4f8fb] p-6">
                  <CheckCircle2 className="text-brand" />
                  <h3 className="mt-4 text-lg font-extrabold text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8fb] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <h2 className="text-3xl font-extrabold text-navy">How We Work</h2>
            <p className="mt-2 text-muted">A clear process from first call to a healthier space</p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.08}>
                <article className="relative h-full rounded-[24px] bg-white p-6 shadow-sm">
                  <p className="text-4xl font-extrabold text-brand/20">{s.step}</p>
                  <h3 className="mt-2 text-lg font-extrabold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08} className="text-center">
              <p className="text-3xl font-extrabold text-brand sm:text-4xl">{item.value}</p>
              <p className="mt-1 text-sm font-semibold text-navy">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-7xl rounded-[32px] bg-navy px-6 py-12 text-center text-white sm:px-10">
            <h2 className="text-3xl font-extrabold">
              Recover Your Home / Office From Any Mold Damage
            </h2>
            <p className="mt-3 text-white/75">
              Get professional mold clean-up services from Team Cleaning Experts today. Call {company.phone}
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand-dark"
            >
              Book a Service <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
