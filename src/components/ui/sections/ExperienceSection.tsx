"use client"

import { motion } from 'framer-motion'

const experience = [
  {
    title: 'Senior Architect',
    company: 'Studio Modern',
    period: '2020 - Present',
    description: 'Lead architect for residential and commercial projects, managing design development and coordination with consultants.',
  },
  {
    title: 'Architect',
    company: 'Design Collective',
    period: '2018 - 2020',
    description: 'Designed buildings from concept to construction documentation for various project types.',
  },
  {
    title: 'Intern Architect',
    company: 'Urban Spaces',
    period: '2017 - 2018',
    description: 'Supported senior architects in design development and construction administration.',
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative bg-slate-900/50 py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-3xl font-serif font-bold text-white mb-4">
            Experience
          </h3>
          <p className="text-xl text-slate-400">
            My professional journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line — draws itself in as the section scrolls into view */}
          <motion.div
            className="absolute left-8 top-0 h-full w-px origin-top bg-gradient-to-b from-amber-400/60 via-slate-700 to-slate-700"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />

          <div className="space-y-12 ml-16">
            {experience.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative ml-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Dot — pulsing ping like the Hero status badge */}
                <span className="absolute -left-3 top-6 flex h-6 w-6 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400/60" />
                  <span className="relative inline-flex h-6 w-6 rounded-full bg-amber-500 border-4 border-slate-950 shadow-lg shadow-amber-500/20" />
                </span>

                {/* Content */}
                <div className="glass rounded-2xl p-6 shadow-glass transition-colors hover:border-amber-400/20">
                  <h4 className="text-2xl font-serif font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-amber-400 mb-3">{item.company}</p>
                  <p className="text-slate-500 mb-3">{item.period}</p>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
