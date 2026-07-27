"use client"

import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '@/data/testimonials'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 60 : -60,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -60 : 60,
  }),
}

const AVATAR_GRADIENTS = [
  'from-amber-500 to-orange-600',
  'from-indigo-500 to-indigo-700',
  'from-amber-400 to-indigo-500',
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
  const [[current, direction], setCurrent] = useState<[number, number]>([0, 0])

  const paginate = (newDirection: number) => {
    setCurrent(([prev]) => [
      (prev + newDirection + testimonials.length) % testimonials.length,
      newDirection,
    ])
  }

  const goTo = (index: number) => {
    setCurrent(([prev]) => [index, index > prev ? 1 : -1])
  }

  return (
    <section id="testimonials" className="relative bg-slate-900/50 py-32">
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
          <div className="relative h-64 overflow-hidden md:h-80">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                className="absolute inset-0"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: 'easeInOut' }}
              >
                <div className="glass rounded-2xl p-8 max-w-3xl mx-auto shadow-glass">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full mb-4 border-2 border-amber-500 bg-gradient-to-br font-serif text-lg font-bold text-white ${
                        AVATAR_GRADIENTS[current % AVATAR_GRADIENTS.length]
                      }`}
                    >
                      {getInitials(testimonials[current].name)}
                    </div>
                    <blockquote className="text-xl md:text-2xl text-slate-200 italic mb-6">
                      &quot;{testimonials[current].quote}&quot;
                    </blockquote>
                    <div>
                      <p className="text-lg font-serif font-bold text-white">
                        {testimonials[current].name}
                      </p>
                      <p className="text-amber-400">{testimonials[current].role}</p>
                      <p className="text-slate-400 text-sm">{testimonials[current].project}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <button
            onClick={() => paginate(-1)}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-md transition-colors hover:border-white/30 hover:bg-white/10"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur-md transition-colors hover:border-white/30 hover:bg-white/10"
          >
            <ChevronRight className="text-white" size={24} />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
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
