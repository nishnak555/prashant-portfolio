"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const skills = [
  { name: 'Architectural Design', level: 5 },
  { name: '3D Modeling', level: 5 },
  { name: 'Rendering', level: 4 },
  { name: 'Project Management', level: 4 },
  { name: 'BIM', level: 4 },
  { name: 'Construction Docs', level: 5 },
  { name: 'Sustainable Design', level: 4 },
  { name: 'Visualisation', level: 4 },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative bg-slate-950 py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.h3
          className="text-3xl font-serif font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Skills & Expertise
        </motion.h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:max-w-3xl lg:mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-between">
                <span className="text-slate-300">{skill.name}</span>
                <span className="text-amber-400">{skill.level}/5</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-amber-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level * 20}%` }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 + 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
