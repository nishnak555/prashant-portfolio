"use client"

import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
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
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/profile.svg"
                alt="Architect"
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-serif font-bold text-white mb-6">
              About Me
            </h3>
            <motion.p
              className="text-lg text-slate-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm an architect with over 6 years of experience designing spaces that
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
              <button className="rounded-md bg-amber-500 px-6 py-3 font-medium text-black hover:bg-amber-600 transition-colors">
                Download Resume
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
