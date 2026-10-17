import Reveal from './Reveal'
import { moldTypes } from '../data/content'

export default function MoldTypes() {
  return (
    <div className="space-y-16 md:space-y-24">
      {moldTypes.map((m, i) => {
        const imageLeft = i % 2 === 1
        return (
          <Reveal key={m.number}>
            <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <div className={imageLeft ? 'lg:order-1' : 'lg:order-2'}>
                <div className="overflow-hidden rounded-[32px] shadow-[0_16px_40px_rgba(12,45,74,0.1)] ring-1 ring-line">
                  <img
                    src={m.image}
                    alt={m.title}
                    className="aspect-[5/4] w-full object-cover"
                  />
                </div>
              </div>
              <div
                className={`max-w-md ${
                  imageLeft ? 'lg:order-2 lg:justify-self-start' : 'lg:order-1 lg:justify-self-end'
                }`}
              >
                <div className="flex items-center gap-5">
                  <p className="text-[42px] font-extrabold leading-none tracking-tight text-navy sm:text-5xl">
                    {m.number}.
                  </p>
                  <span className="h-px w-24 bg-navy/25 sm:w-32" />
                </div>
                <h3 className="mt-6 text-3xl font-extrabold leading-[1.15] sm:text-[40px]">
                  <span className="text-brand">{m.name}</span>
                  <br />
                  <span className="text-navy">Mold</span>
                </h3>
                <p className="mt-6 text-[15px] leading-7 text-muted">{m.text}</p>
                <p className="mt-6 text-sm font-semibold text-brand">Risks: {m.risk}</p>
              </div>
            </article>
          </Reveal>
        )
      })}
    </div>
  )
}
