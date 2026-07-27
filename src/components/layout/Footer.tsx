"use client"

import { motion } from 'framer-motion'
import { Github, Twitter, User } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-slate-950 py-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_100%,black_40%,transparent_100%)]" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-between gap-6 md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">Architecture</h3>
            <p className="text-slate-400">
              Crafting spaces that inspire through thoughtful design and innovation.
            </p>
          </div>

          <div className="flex space-x-4">
            {[
              { href: 'https://linkedin.com', label: 'LinkedIn', Icon: User },
              { href: 'https://twitter.com', label: 'Twitter', Icon: Twitter },
              { href: 'https://github.com', label: 'GitHub', Icon: Github },
            ].map(({ href, label, Icon }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 backdrop-blur-md transition-colors hover:border-amber-400/40 hover:text-amber-300"
                aria-label={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.15 }}
                whileHover={{ y: -2 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-8 border-t border-white/10 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-slate-500">
            © {new Date().getFullYear()} Architecture Portfolio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
