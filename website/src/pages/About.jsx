import { Link } from 'react-router-dom'
import { CheckCircle2, Quote } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import { aboutChecks, aboutStats, images, values } from '../data/content'
import { Award, HeartHandshake, ShieldCheck, BadgeCheck } from 'lucide-react'

const valueIcons = {
  award: Award,
  badge: BadgeCheck,
  shield: ShieldCheck,
  heart: HeartHandshake,
}

export default function About() {
  return (
    <div className="bg-white">
      <PageBanner title="About Us" crumb="About Us" image={images.banner} />

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">Our Story</p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
              Committed to Healthier, Mold-Free Spaces
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              Team Cleaning Experts was founded with a simple goal: to provide reliable, affordable and
              high-quality mold remediation for homes, offices and commercial spaces. We believe that a
              mold-free environment leads to a healthier, happier and more productive life.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              We are specialists in mold clean-up and remediation. Indoor mold can trigger allergies,
              asthma and more serious respiratory issues. Our teams inspect, contain, remove and help
              prevent recurrence so you can recover your home or office safely.
            </p>
            <ul className="mt-6 space-y-3">
              {aboutChecks.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-semibold text-navy">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="overflow-hidden rounded-[32px] shadow-xl">
              <img
                src={images.aboutStory}
                alt="Cleaning professional with supplies"
                className="h-[420px] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f4f8fb] py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {aboutStats.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08} className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <p className="text-3xl font-extrabold text-brand sm:text-4xl">{item.value}</p>
              <p className="mt-1 text-sm font-semibold text-navy">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">Our Values</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted">
              Quality, trust, safety and customer focus guide every visit — from a small damp patch to
              emergency mold remediation.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = valueIcons[v.icon] || Award
              return (
                <Reveal key={v.title} delay={i * 0.08}>
                  <article className="h-full rounded-[24px] bg-[#f4f8fb] p-6 text-center">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-light text-brand">
                      <Icon size={26} />
                    </span>
                    <h3 className="mt-4 text-lg font-extrabold text-navy">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-[28px] bg-navy px-8 py-12 text-center text-white">
            <Quote className="mx-auto mb-4 text-brand" />
            <p className="text-xl font-semibold leading-relaxed sm:text-2xl">
              “We don’t just remove mold, we create healthier environments for a better tomorrow.”
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand-dark"
            >
              Work With Us
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
