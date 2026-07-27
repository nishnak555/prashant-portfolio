"use client"

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  /** Show CAD-style corner brackets that fade in on hover. */
  bracket?: boolean
}

export function GlassCard({ children, className = '', hover = true, bracket = false }: GlassCardProps) {
  return (
    <motion.div
      className={`
        group/glass relative rounded-2xl p-6 backdrop-blur-md bg-white/5 border border-white/10
        shadow-glass transition-all duration-300
        ${hover ? 'hover:shadow-glass-lg hover:border-amber-400/20' : ''}
        ${className}
      `}
      whileHover={hover ? { y: -4, scale: 1.02 } : undefined}
      whileTap={hover ? { scale: 0.98 } : undefined}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {bracket && (
        <>
          <span className="pointer-events-none absolute left-2 top-2 h-4 w-4 border-l-2 border-t-2 border-amber-400/0 transition-colors duration-300 group-hover/glass:border-amber-400/40" />
          <span className="pointer-events-none absolute right-2 top-2 h-4 w-4 border-r-2 border-t-2 border-amber-400/0 transition-colors duration-300 group-hover/glass:border-amber-400/40" />
          <span className="pointer-events-none absolute bottom-2 left-2 h-4 w-4 border-b-2 border-l-2 border-amber-400/0 transition-colors duration-300 group-hover/glass:border-amber-400/40" />
          <span className="pointer-events-none absolute bottom-2 right-2 h-4 w-4 border-b-2 border-r-2 border-amber-400/0 transition-colors duration-300 group-hover/glass:border-amber-400/40" />
        </>
      )}
      {children}
    </motion.div>
  )
}
