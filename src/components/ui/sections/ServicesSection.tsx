"use client"

import { motion } from 'framer-motion'
import { Home, Building, Palette, Presentation, Users } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Residential Design',
    description: 'Designing comfortable, functional living spaces that reflect your lifestyle.',
  },
  {
    icon: Building,
    title: 'Commercial Architecture',
    description: 'Creating innovative workspaces and commercial environments.',
  },
  {
    icon: Palette,
    title: 'Interior Design',
    description: 'Collaborating with clients to design interiors that inspire.',
  },
  {
    icon: Presentation,
    title: 'Master Planning',
    description: 'Developing comprehensive master plans for urban development.',
  },
  {
    icon: Users,
    title: 'Construction Documents',
    description: 'Detailed drawings and specifications for smooth construction.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-3xl font-serif font-bold text-white mb-4">
            My Services
          </h3>
          <p className="text-xl text-slate-400">
            What I Offer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-5xl lg:mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="glass rounded-2xl p-8 shadow-glass h-full">
                <div className="w-16 h-16 rounded-md bg-amber-500/20 flex items-center justify-center mb-6">
                  <service.icon className="text-amber-400" size={28} />
                </div>
                <h4 className="text-2xl font-serif font-bold text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-slate-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
