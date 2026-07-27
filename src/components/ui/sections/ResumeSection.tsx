"use client"

import { motion } from 'framer-motion'
import { resumeData } from '@/data/resume'

export function ResumeSection() {
  return (
    <section id="resume" className="relative bg-slate-950 py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-3xl font-serif font-bold text-white mb-4">
            Resume
          </h3>
          <p className="text-xl text-slate-400 mb-6">
            Download my resume or view my experience
          </p>
          <motion.button
            className="rounded-full bg-amber-500 px-7 py-3 font-semibold text-slate-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400 hover:shadow-amber-400/30 active:scale-95 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            Download PDF
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Skills */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-2xl font-serif font-bold text-white mb-6">
              Skills
            </h4>
            <div className="space-y-4">
              {resumeData.skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300 text-sm">{skill.name}</span>
                    <span className="text-amber-400 text-sm">{skill.level}/5</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-amber-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level * 20}%` }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education and Experience */}
          <motion.div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Education */}
              <div>
                <h4 className="text-2xl font-serif font-bold text-white mb-4">
                  Education
                </h4>
                <div className="space-y-4">
                  {resumeData.education.map((edu, index) => (
                    <motion.div
                      key={edu.institution}
                      className="border-l-2 border-amber-500 pl-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <p className="text-sm text-slate-500">{edu.year}</p>
                      <h5 className="text-lg font-bold text-white">{edu.degree}</h5>
                      <p className="text-slate-300">{edu.institution}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h4 className="text-2xl font-serif font-bold text-white mb-4">
                  Experience
                </h4>
                <div className="space-y-4">
                  {resumeData.experience.map((exp, index) => (
                    <motion.div
                      key={exp.company}
                      className="border-l-2 border-amber-500 pl-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <p className="text-sm text-slate-500">{exp.year}</p>
                      <h5 className="text-lg font-bold text-white">{exp.title}</h5>
                      <p className="text-amber-400 text-sm">{exp.company}</p>
                      <p className="text-slate-300 text-sm mt-1">{exp.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
