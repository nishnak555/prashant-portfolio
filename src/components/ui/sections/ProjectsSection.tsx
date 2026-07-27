"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/data/projects'

export function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-slate-950 py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-3xl font-serif font-bold text-white mb-4">
            Featured Projects
          </h3>
          <p className="text-xl text-slate-400">
            Selected works that showcase our architectural vision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-5xl lg:mx-auto">
          {projects.map((project, index) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <motion.div
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-colors hover:border-amber-400/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* CAD corner brackets — fade in on hover */}
                  <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-amber-400/0 transition-colors duration-300 group-hover:border-amber-400/60" />
                  <span className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-amber-400/0 transition-colors duration-300 group-hover:border-amber-400/60" />
                  <span className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-amber-400/0 transition-colors duration-300 group-hover:border-amber-400/60" />
                  <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-amber-400/0 transition-colors duration-300 group-hover:border-amber-400/60" />
                </div>

                <div className="p-6">
                  <motion.h4
                    className="text-2xl font-serif font-bold text-white mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.title}
                  </motion.h4>
                  <motion.p
                    className="text-slate-400 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.location} • {project.year}
                  </motion.p>
                  <motion.p
                    className="text-slate-300 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
