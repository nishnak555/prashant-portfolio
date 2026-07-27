"use client"

import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section id="about" className="relative isolate bg-slate-900/50 py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)]" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="group relative rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/profile.svg"
                alt="Architect"
                className="w-full rounded-2xl object-cover"
              />
              {/* CAD corner brackets */}
              <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-amber-400/0 transition-colors duration-500 group-hover:border-amber-400/60" />
              <span className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-amber-400/0 transition-colors duration-500 group-hover:border-amber-400/60" />
              <span className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-amber-400/0 transition-colors duration-500 group-hover:border-amber-400/60" />
              <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-amber-400/0 transition-colors duration-500 group-hover:border-amber-400/60" />
              {/* Static faint brackets for the CAD-viewport feel even without hover */}
              <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-amber-400/20" />
              <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-indigo-400/20" />
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-serif font-bold text-white mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                Me
              </span>
            </h3>
            <motion.p
              className="text-lg text-slate-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I&apos;m an architect with over 6 years of experience designing spaces that
              blend functionality with aesthetic excellence. My work focuses on
              creating environments that inspire and elevate everyday life.
            </motion.p>
            <motion.p
              className="text-lg text-slate-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I believe in the power of thoughtful design to transform spaces and
              positively impact the lives of the people who use them. Every project
              is an opportunity to push boundaries while respecting context and
              craftsmanship.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button className="rounded-full bg-amber-500 px-7 py-3 font-semibold text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400 hover:shadow-amber-400/30 active:scale-95 transition-all">
                Download Resume
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
