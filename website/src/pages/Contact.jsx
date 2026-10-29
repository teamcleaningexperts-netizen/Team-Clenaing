import { useState } from 'react'
import { Mail, Phone } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import SocialIcons from '../components/SocialIcons'
import { company, images, services } from '../data/content'

const initial = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm(initial)
  }

  return (
    <div className="bg-white">
      <PageBanner title="Contact Us" crumb="Contact Us" image={images.contactBanner} />

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-navy">Get In Touch</h2>
            <p className="mt-3 text-muted">
              We’d love to hear from you. Reach out to us for enquiries, quotes or support.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand">
                  <Phone size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-muted">Phone</p>
                  <a href={company.phoneHref} className="font-bold text-navy hover:text-brand">
                    {company.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-light text-brand">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-muted">Email</p>
                  <a href={company.emailHref} className="font-bold text-navy hover:text-brand">
                    {company.email}
                  </a>
                </div>
              </li>
            </ul>

            <p className="mt-8 text-sm font-bold text-navy">Service area</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-brand-light px-3 py-1 text-xs font-bold text-brand">
                {company.serviceArea}
              </span>
            </div>

            <SocialIcons className="mt-8" />
          </Reveal>

          <Reveal delay={0.12}>
            <form onSubmit={onSubmit} className="rounded-[28px] bg-[#f4f8fb] p-6 sm:p-8">
              <h3 className="text-xl font-extrabold text-navy">Send Us a Message</h3>
              {sent && (
                <p className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                  Thank you. We have received your request and will contact you shortly.
                </p>
              )}
              <div className="mt-5 grid gap-4">
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your Name"
                  className="input-field"
                />
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="Your Email"
                  className="input-field"
                />
                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  placeholder="Phone Number"
                  className="input-field"
                />
                <select
                  required
                  name="service"
                  value={form.service}
                  onChange={onChange}
                  className="input-field"
                >
                  <option value="">Select Service</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={4}
                  placeholder="Type your message..."
                  className="input-field resize-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-dark"
                >
                  Send Message
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
