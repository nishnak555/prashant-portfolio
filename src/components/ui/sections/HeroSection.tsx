"use client"

import { Suspense } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei'
import { ArrowRight, ChevronDown } from 'lucide-react'

import { SimpleBuilding } from '@/components/ui/3d/SimpleBuilding'
import { resumeData } from '@/data/resume'

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '6+', label: 'Years of Experience' },
  { value: '20+', label: 'Awards & Features' },
]

function CanvasLoading() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#94a3b8" />
    </mesh>
  )
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] w-full flex-col overflow-hidden bg-slate-950"
    >
      {/* Ambient gradient / grid backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]" />
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950" />
      </div>

      {/* 3D visual — hidden on small screens for performance & layout clarity */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        <Canvas camera={{ position: [0, 2, 5], fov: 50 }} shadows>
          <Suspense fallback={<CanvasLoading />}>
            <SimpleBuilding />
            <Environment preset="city" />
          </Suspense>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
          <ContactShadows position={[0, 0.01, 0]} opacity={0.5} scale={10} blur={2} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
        {/* Fade the 3D scene toward the text side on large screens */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent lg:via-slate-950/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pt-28 pb-16 sm:px-6 md:pt-32 lg:px-8">
        <div className="flex flex-col items-center text-center lg:max-w-2xl lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-amber-300 backdrop-blur-md sm:text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Designing spaces that{' '}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              inspire
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl"
          >
            I&apos;m {resumeData.personal.name}, a {resumeData.personal.title.toLowerCase()} crafting
            thoughtful, human-centered architecture — from concept sketches to finished spaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
            className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition-all hover:bg-amber-400 hover:shadow-amber-400/30 active:scale-95"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/10 active:scale-95"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            className="mt-14 grid w-full grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:max-w-lg sm:gap-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="font-serif text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-slate-400 sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="relative z-10 mx-auto mb-8 hidden flex-col items-center gap-2 text-slate-400 transition-colors hover:text-white sm:flex"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  )
}
