import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import FaqList from '../components/FaqList'
import { faqs, images } from '../data/content'

export default function FAQ() {
  return (
    <div className="bg-white">
      <PageBanner title="FAQ" crumb="FAQ" image={images.faqBanner} />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-navy">Frequently Asked Questions</h2>
            <p className="mt-3 text-muted">
              Find answers to common questions about our cleaning and mold clean-up services.
            </p>
          </Reveal>
          <Reveal>
            <FaqList items={faqs} />
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 overflow-hidden rounded-[32px] bg-navy px-6 py-10 text-white md:flex-row md:px-12">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">Still have questions?</h2>
              <p className="mt-2 text-white/75">Contact our team for more information.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand-dark"
            >
              Contact Us +
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
