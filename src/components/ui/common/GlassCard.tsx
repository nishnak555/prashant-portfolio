"use client"

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={`
        rounded-xl p-6 backdrop-blur-md bg-white/5 border border-white/10
        shadow-glass transition-all duration-300
        ${hover ? 'hover:scale-105 hover:shadow-glass-lg hover:border-white/20' : ''}
        ${className}
      `}
      whileHover={hover ? { scale: 1.05 } : undefined}
      whileTap={hover ? { scale: 0.98 } : undefined}
    >
      {children}
    </motion.div>
  )
}
