"use client"

import { motion } from 'framer-motion'
import { testimonials } from '@/data/testimonials'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const AVATAR_GRADIENTS = [
  'from-amber-500 to-orange-600',
  'from-indigo-500 to-purple-600',
  'from-teal-500 to-cyan-600',
]

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .replace(/[^A-Za-z]/g, '')
    .slice(0, 2)
    .toUpperCase()
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  return (
    <section id="testimonials" className="py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-3xl font-serif font-bold text-white mb-4">
            What They Say
          </h3>
          <p className="text-xl text-slate-400">
            Client testimonials
          </p>
        </motion.div>

        <div className="relative">
          <div className="relative h-64 md:h-80">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className={`absolute inset-0 ${
                  index !== current ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: current === index ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="glass rounded-2xl p-8 max-w-3xl mx-auto shadow-glass">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full mb-4 border-2 border-amber-500 bg-gradient-to-br font-serif text-lg font-bold text-white ${
                        AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length]
                      }`}
                    >
                      {getInitials(testimonial.name)}
                    </div>
                    <blockquote className="text-xl md:text-2xl text-slate-200 italic mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="text-lg font-serif font-bold text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-amber-400">{testimonial.role}</p>
                      <p className="text-slate-400 text-sm">{testimonial.project}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 rounded-full p-2 bg-black/50 hover:bg-black/70 transition-colors"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
          <button
            onClick={() => setCurrent((current + 1) % testimonials.length)}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 rounded-full p-2 bg-black/50 hover:bg-black/70 transition-colors"
          >
            <ChevronRight className="text-white" size={24} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? 'bg-amber-500' : 'bg-slate-600 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
