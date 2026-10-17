import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import { company, images } from '../data/content'

export function Privacy() {
  return (
    <div className="bg-white">
      <PageBanner title="Privacy Policy" crumb="Privacy Policy" image={images.banner} />
      <section className="py-16">
        <Reveal className="mx-auto max-w-3xl space-y-4 px-4 text-sm leading-relaxed text-muted sm:px-6">
          <p>
            Team Cleaning Experts respects your privacy. Information you share through our enquiry form —
            name, email, phone number and message — is used only to respond to your request and schedule
            services.
          </p>
          <p>
            We do not sell personal data. Contact details may be used to follow up on bookings at{' '}
            {company.email} or {company.phone}. For questions about this policy, email us or visit{' '}
            <Link to="/contact" className="font-semibold text-brand">
              Contact Us
            </Link>
            .
          </p>
        </Reveal>
      </section>
    </div>
  )
}

export function Terms() {
  return (
    <div className="bg-white">
      <PageBanner title="Terms & Conditions" crumb="Terms & Conditions" image={images.banner} />
      <section className="py-16">
        <Reveal className="mx-auto max-w-3xl space-y-4 px-4 text-sm leading-relaxed text-muted sm:px-6">
          <p>
            Quotes are based on inspection of the space, access and severity of dirt or mold. Final
            pricing may change if hidden damage is found during work.
          </p>
          <p>
            Bookings are available 24 x 7. Customers are responsible for providing safe access and
            disclosing known moisture, electrical or structural issues before work begins. Mold
            remediation reduces risk but cannot guarantee that spores will never return if moisture
            returns.
          </p>
        </Reveal>
      </section>
    </div>
  )
}
