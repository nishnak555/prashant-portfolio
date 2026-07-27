"use client"

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    console.log(data)
    // Here you would send the data to your backend
  }

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-slate-950 py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute top-0 right-1/4 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-3xl font-serif font-bold text-white mb-4">
            Get In Touch
          </h3>
          <p className="text-xl text-slate-400">
            Let&apos;s discuss your project
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative rotating axis gizmo — echoes the Hero viewport HUD */}
          <motion.svg
            className="pointer-events-none absolute -top-6 -right-6 h-12 w-12 opacity-50 hidden sm:block"
            viewBox="0 0 40 40"
            animate={{ rotate: 360 }}
            transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
          >
            <line x1="20" y1="20" x2="20" y2="4" stroke="#818cf8" strokeWidth="1.5" />
            <circle cx="20" cy="4" r="2.5" fill="#818cf8" />
            <line x1="20" y1="20" x2="34" y2="26" stroke="#f59e0b" strokeWidth="1.5" />
            <circle cx="34" cy="26" r="2.5" fill="#f59e0b" />
            <line x1="20" y1="20" x2="8" y2="28" stroke="#94a3b8" strokeWidth="1.5" />
            <circle cx="8" cy="28" r="2.5" fill="#94a3b8" />
          </motion.svg>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                {...register('name')}
                className={`w-full rounded-md bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500/70 focus:border-amber-400/60 ${
                  errors.name ? 'border-red-400/70' : ''
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                {...register('email')}
                className={`w-full rounded-md bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500/70 focus:border-amber-400/60 ${
                  errors.email ? 'border-red-400/70' : ''
                }`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                {...register('subject')}
                className={`w-full rounded-md bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500/70 focus:border-amber-400/60 ${
                  errors.subject ? 'border-red-400/70' : ''
                }`}
                placeholder="Subject"
              />
              {errors.subject && (
                <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                {...register('message')}
                rows={6}
                className={`w-full rounded-md bg-white/5 backdrop-blur-md border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500/70 focus:border-amber-400/60 resize-none ${
                  errors.message ? 'border-red-400/70' : ''
                }`}
                placeholder="Your message"
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full rounded-full bg-amber-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition-all ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-amber-400 hover:shadow-amber-400/30 hover:scale-105'
              }`}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {isSubmitSuccessful && (
              <motion.p
                className="text-green-400 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you! Your message has been sent.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
