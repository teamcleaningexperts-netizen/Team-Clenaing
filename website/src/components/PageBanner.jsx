import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { images } from '../data/content'

export default function PageBanner({ title, crumb, image }) {
  return (
    <section
      className="page-banner relative overflow-hidden pt-36 pb-16 md:pt-40 md:pb-20"
      style={{ '--banner-image': `url(${image || images.banner})` }}
    >
      <div className="pointer-events-none absolute -right-10 top-0 h-full w-1/2 bg-gradient-to-l from-brand/20 to-transparent" />
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 flex items-center gap-2 text-sm text-white/75"
          >
            <Link to="/" className="hover:text-brand">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white">{crumb || title}</span>
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            {title}
          </motion.h1>
        </div>
      </div>
    </section>
  )
}
