"use client"

import { motion } from 'framer-motion'
import { useParams, useRouter } from 'next/navigation'
import { projects } from '@/data/projects'
import Link from 'next/link'

export default function ProjectPage() {
  const params = useParams()
  const project = projects.find((p) => p.slug === params.slug)
  const router = useRouter()

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <p className="text-xl text-slate-300">Project not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-slate-300">
              {project.location} • {project.year}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="relative bg-slate-900/50 py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors mb-8"
          >
            ← Back to Projects
          </Link>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-serif font-bold text-white mb-6">
                  Project Overview
                </h3>
                <p className="text-lg text-slate-300 mb-6">{project.fullDescription}</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Area</p>
                    <p className="text-white font-medium">{project.area}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Year</p>
                    <p className="text-white font-medium">{project.year}</p>
                  </div>
                </div>

                <h4 className="text-2xl font-serif font-bold text-white mb-4">
                  Challenges
                </h4>
                <ul className="space-y-2 mb-8">
                  {project.challenges.map((challenge, index) => (
                    <motion.li
                      key={challenge}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-amber-400 mt-1">•</span>
                      <span className="text-slate-300">{challenge}</span>
                    </motion.li>
                  ))}
                </ul>

                <h4 className="text-2xl font-serif font-bold text-white mb-4">
                  Solutions
                </h4>
                <ul className="space-y-2">
                  {project.solutions.map((solution, index) => (
                    <motion.li
                      key={solution}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-amber-400 mt-1">✓</span>
                      <span className="text-slate-300">{solution}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div>
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-serif font-bold text-white mb-6">
                  Gallery
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {project.images.map((image, index) => (
                    <motion.div
                      key={index}
                      className="relative rounded-lg overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <img
                        src={image}
                        alt={`${project.title} ${index + 1}`}
                        className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                </div>

                <h4 className="text-2xl font-serif font-bold text-white mt-12 mb-6">
                  Floor Plans
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {project.floorPlans.map((floorPlan, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <img
                        src={floorPlan}
                        alt={`Floor plan ${index + 1}`}
                        className="w-full rounded-lg"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
