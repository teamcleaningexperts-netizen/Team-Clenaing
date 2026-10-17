import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react'
import Reveal, { fadeUp, stagger } from '../components/Reveal'
import ServiceIcon from '../components/ServiceIcon'
import MoldTypes from '../components/MoldTypes'
import FaqList from '../components/FaqList'
import {
  aboutChecks,
  company,
  faqs,
  images,
  services,
  stats,
  trustPoints,
} from '../data/content'

const homeFaqs = faqs.slice(0, 6)

const homeServices = services.filter((s) => !s.featured)
const previewServices = homeServices.slice(0, 6)

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white">
      <section className="relative z-10 bg-gradient-to-b from-brand-light via-[#fffaf3] to-[#eef4fb] pt-32 md:pt-36">
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-20">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-extrabold leading-[1.12] tracking-tight text-navy sm:text-5xl lg:text-[56px]"
            >
              Professional
              <br />
              Cleaning Services
              <br />
              for a <span className="text-brand">Healthier Tomorrow</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              We provide reliable, high-quality cleaning solutions for homes, offices and commercial
              spaces — plus specialist mold clean-up across Bangalore, Mumbai, Delhi, Noida and Gurugram.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
              >
                Get a Free Quote <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-6 py-3.5 text-sm font-bold text-navy transition hover:bg-navy hover:text-white"
              >
                Our Services
              </Link>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
            >
              {trustPoints.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-semibold text-navy">
                  <CheckCircle2 size={18} className="text-brand" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="relative">
              <div className="pointer-events-none absolute -inset-2 rounded-[44px] bg-white/50 blur-xl" />
              <div className="pointer-events-none absolute -inset-[3px] rounded-[42px] bg-gradient-to-b from-white/80 via-white/30 to-white/70 blur-[2px]" />
              <div className="relative overflow-hidden rounded-[40px] border border-white/80 shadow-[0_18px_50px_rgba(15,40,70,0.12)] ring-1 ring-white/60">
                <img
                  src={images.hero}
                  alt="Professional cleaner at work"
                  className="h-[430px] w-full object-cover object-top sm:h-[500px] lg:h-[540px]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-white/55 px-5 py-4 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted">Book 24 x 7</p>
                      <a href={company.phoneHref} className="text-sm font-extrabold text-navy">
                        {company.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </section>

      <section className="relative z-20 bg-[#eef4fb] px-4 pb-6 pt-2 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-7xl -translate-y-12 grid-cols-2 gap-2 rounded-[28px] bg-white px-3 py-3 shadow-[0_16px_40px_rgba(12,45,74,0.12)] ring-1 ring-navy/5 sm:grid-cols-3 sm:px-5 md:-translate-y-14 md:px-6 lg:grid-cols-6 lg:px-3 lg:py-3.5"
        >
          {homeServices.map((s) => (
            <motion.div key={s.id} variants={fadeUp} className="min-w-0">
              <Link
                to={`/services#${s.id}`}
                className="flex h-full flex-col items-center justify-start gap-1.5 rounded-xl px-1.5 py-1.5 text-center transition hover:bg-brand-light"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef4fa] text-navy">
                  <ServiceIcon name={s.icon} size={18} />
                </span>
                <span className="block text-[12px] font-semibold leading-4 text-navy">
                  {(s.bar || s.title.split(' ')).map((line) => (
                    <span key={line} className="block whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="relative z-0 bg-[#eef4fb] pb-16 pt-6 md:pb-20 md:pt-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative mx-auto max-w-lg">
              <div className="overflow-hidden rounded-[32px] shadow-xl">
                <img src={images.team} alt="Team Cleaning Experts staff" className="h-[420px] w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-2 rounded-[22px] bg-brand px-6 py-5 text-white shadow-lg sm:left-6">
                <p className="text-4xl font-extrabold leading-none">5+</p>
                <p className="mt-1 text-sm font-semibold">
                  Years of
                  <br />
                  Experience
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">
              About Team Cleaning Experts
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
              Your Trusted Cleaning Partner
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              We are committed to delivering top-quality cleaning services with professional and trained
              staff. Our goal is to create cleaner, healthier and happier spaces for you. Team Cleaning
              Experts was founded with a simple goal: to provide reliable, affordable and high-quality
              cleaning — including mold clean-up that protects your family and workplace.
            </p>
            <ul className="mt-6 space-y-3">
              {aboutChecks.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-semibold text-navy">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">What We Do</p>
              <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Our Cleaning Services</h2>
              <p className="mt-2 text-muted">Comprehensive cleaning solutions for every need</p>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline"
              >
                View All Services <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {previewServices.map((s) => (
              <motion.div key={s.id} variants={fadeUp}>
                <Link
                  to={`/services#${s.id}`}
                  className="card-hover group block overflow-hidden rounded-[24px] bg-white shadow-md ring-1 ring-line"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-lg">
                      <ServiceIcon name={s.icon} />
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-extrabold text-navy">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted">{s.short}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#eef4fb] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14 text-center md:mb-20">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">Mold Expertise</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Types of Mold</h2>
            <p className="mt-2 text-muted">Top 4 most common types found in homes and offices</p>
          </Reveal>
          <MoldTypes />
        </div>
      </section>

      <section className="bg-navy py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">Our Impact</p>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Growing Every Day With Your Trust
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08} className="text-center">
                <div className="rounded-[24px] bg-white/5 px-4 py-7 ring-1 ring-white/10">
                  <p className="text-3xl font-extrabold text-brand sm:text-4xl">{item.value}</p>
                  <p className="mt-2 text-sm font-semibold text-white/80">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8fb] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand">FAQ</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
                Frequently Asked
                <br />
                Questions
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
                Quick answers about our cleaning services, booking, and mold clean-up. Still unsure?
                Our team is available 24 x 7.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/faq"
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-navy/90"
                >
                  View All Questions <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
                >
                  Ask Us Directly
                </Link>
              </div>
            </Reveal>
            <Reveal>
              <FaqList items={homeFaqs} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-brand-light px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative mx-auto flex max-w-7xl flex-col overflow-hidden rounded-[32px] bg-navy px-6 py-12 text-white sm:px-10 md:flex-row md:items-center md:justify-between lg:px-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/20" />
            <div className="relative max-w-xl">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Get Your Space Professionally Cleaned Today!
              </h2>
              <p className="mt-3 text-white/75">
                Reliable. Affordable. Trusted Cleaning Services. Recover your home or office from any
                mold damage — call {company.phone}
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
              >
                Get a Quote <ArrowRight size={16} />
              </Link>
            </div>
            <img
              src={images.cta}
              alt="Cleaning supplies"
              className="relative mt-8 h-44 w-auto rounded-2xl object-cover md:mt-0 md:h-52"
            />
          </div>
        </Reveal>
      </section>
    </div>
  )
}
