"use client"

import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'

// Tiered massing: podium (base) + glass shaft + setback crown, plus a smaller accent building.
const PODIUM = { w: 220, d: 190, h: 50, baseY: 0 }
const SHAFT = { w: 170, d: 150, h: 260, baseY: -50 }
const CROWN = { w: 110, d: 95, h: 60, baseY: -310 }

const ACCENT_PODIUM = { w: 130, d: 120, h: 30, baseY: 0, x: 150, z: -10 }
const ACCENT_SHAFT = { w: 100, d: 100, h: 150, baseY: -30, x: 150, z: -10 }

const WINDOW_GRID: CSSProperties = {
  backgroundImage:
    'repeating-linear-gradient(to bottom, rgba(2,6,23,0.85) 0px 2px, transparent 2px 26px), ' +
    'repeating-linear-gradient(to right, rgba(2,6,23,0.85) 0px 2px, transparent 2px 30px)',
}

function Face({
  w,
  h,
  transform,
  className,
  windowed = false,
}: {
  w: number
  h: number
  transform: string
  className: string
  windowed?: boolean
}) {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        width: w,
        height: h,
        left: '50%',
        top: '50%',
        marginLeft: -w / 2,
        marginTop: -h / 2,
        transform,
        backfaceVisibility: 'hidden',
        ...(windowed ? WINDOW_GRID : {}),
      }}
    />
  )
}

function Box3D({
  w,
  d,
  h,
  x = 0,
  z = 0,
  baseY = 0,
  glass,
  wire,
  windowed = false,
}: {
  w: number
  d: number
  h: number
  x?: number
  z?: number
  baseY?: number
  glass: string
  wire: string
  windowed?: boolean
}) {
  const faceClass = `${glass} border ${wire}`
  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{ transformStyle: 'preserve-3d', transform: `translate3d(${x}px, ${baseY - h / 2}px, ${z}px)` }}
    >
      <Face w={w} h={h} transform={`translateZ(${d / 2}px)`} className={faceClass} windowed={windowed} />
      <Face w={w} h={h} transform={`rotateY(180deg) translateZ(${d / 2}px)`} className={faceClass} windowed={windowed} />
      <Face
        w={d}
        h={h}
        transform={`rotateY(90deg) translateZ(${w / 2}px)`}
        className={`${faceClass} brightness-75`}
        windowed={windowed}
      />
      <Face
        w={d}
        h={h}
        transform={`rotateY(-90deg) translateZ(${w / 2}px)`}
        className={`${faceClass} brightness-75`}
        windowed={windowed}
      />
      <Face w={w} h={d} transform={`rotateX(90deg) translateZ(${h / 2}px)`} className={`${faceClass} brightness-125`} />
    </div>
  )
}

function LitWindow({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <motion.div
      className="absolute bg-amber-300"
      style={{
        width: 14,
        height: 16,
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: `translateZ(${SHAFT.d / 2 + 1}px)`,
      }}
      animate={{ opacity: [0.15, 0.85, 0.15] }}
      transition={{ duration: 4 + (delay % 3), repeat: Infinity, ease: 'easeInOut', delay }}
    />
  )
}

export function ArchitectureModelViewport() {
  return (
    <div className="relative h-full w-full select-none">
      {/* 3D stage */}
      <div
        className="absolute inset-0 flex origin-center scale-[0.55] items-center justify-center pt-24 sm:scale-75 md:scale-100 md:pt-16"
        style={{ perspective: 1400 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          style={{ transformStyle: 'preserve-3d', transform: 'rotateX(20deg)' }}
        >
          <motion.div
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateY: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          >
            {/* Ground grid plane */}
            <div
              className="absolute left-1/2 top-1/2"
              style={{
                width: 640,
                height: 640,
                marginLeft: -320,
                marginTop: -320,
                transform: 'rotateX(90deg)',
                backgroundImage:
                  'linear-gradient(rgba(251,191,36,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,0.14) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(circle, black 25%, transparent 68%)',
                WebkitMaskImage: 'radial-gradient(circle, black 25%, transparent 68%)',
              }}
            />

            {/* Main tower: podium + glass shaft + setback crown */}
            <Box3D {...PODIUM} glass="bg-slate-600/20" wire="border-slate-400/40" />
            <Box3D {...SHAFT} glass="bg-amber-400/[0.08]" wire="border-amber-300/60" windowed />
            <Box3D {...CROWN} glass="bg-slate-500/20" wire="border-amber-200/50" />

            {/* Rooftop antenna + beacon */}
            <div
              className="absolute left-1/2 top-1/2 bg-amber-300"
              style={{
                width: 2,
                height: 20,
                marginLeft: -1,
                transform: `translate3d(0px, ${CROWN.baseY - CROWN.h - 20}px, 0px)`,
              }}
            />
            <motion.div
              className="absolute left-1/2 top-1/2 rounded-full bg-amber-400"
              style={{
                width: 6,
                height: 6,
                marginLeft: -3,
                marginTop: -3,
                transform: `translate3d(0px, ${CROWN.baseY - CROWN.h - 22}px, 0px)`,
              }}
              animate={{ opacity: [1, 0.15, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* A few lit windows on the shaft's front face */}
            <LitWindow x={-45} y={-230} delay={0} />
            <LitWindow x={-10} y={-140} delay={1.2} />
            <LitWindow x={30} y={-260} delay={2.1} />
            <LitWindow x={50} y={-100} delay={0.6} />

            {/* Accent tower: podium + shaft */}
            <Box3D {...ACCENT_PODIUM} glass="bg-slate-600/20" wire="border-slate-400/40" />
            <Box3D {...ACCENT_SHAFT} glass="bg-indigo-400/[0.08]" wire="border-indigo-300/60" windowed />

            {/* Scanning highlight sweeping through the main shaft */}
            <motion.div
              className="absolute left-1/2 top-1/2 bg-gradient-to-r from-transparent via-amber-300/70 to-transparent"
              style={{
                width: SHAFT.w + 20,
                height: 3,
                marginLeft: -(SHAFT.w + 20) / 2,
                transform: `translateZ(${SHAFT.d / 2 + 2}px)`,
              }}
              animate={{ top: ['calc(50% + 150px)', 'calc(50% - 210px)'] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', repeatType: 'reverse' }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Viewport HUD overlay — desktop only, sits flat above the 3D stage */}
      <div className="pointer-events-none absolute inset-x-6 bottom-14 top-24 hidden sm:inset-x-8 sm:bottom-16 sm:top-28 md:block">
        {/* corner brackets */}
        <div className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-amber-400/40" />
        <div className="absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-amber-400/40" />
        <div className="absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-amber-400/40" />
        <div className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-amber-400/40" />

        {/* viewport label */}
        <div className="absolute left-6 top-0 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-slate-400/80">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-400" />
          </span>
          Perspective · Live Model
        </div>

        {/* axis gizmo */}
        <svg className="absolute right-4 top-4 h-10 w-10 opacity-70" viewBox="0 0 40 40">
          <line x1="20" y1="20" x2="20" y2="4" stroke="#818cf8" strokeWidth="1.5" />
          <circle cx="20" cy="4" r="2.5" fill="#818cf8" />
          <text x="23" y="7" fill="#818cf8" fontSize="7" fontFamily="monospace">Y</text>
          <line x1="20" y1="20" x2="34" y2="26" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="34" cy="26" r="2.5" fill="#f59e0b" />
          <text x="35" y="24" fill="#f59e0b" fontSize="7" fontFamily="monospace">X</text>
          <line x1="20" y1="20" x2="8" y2="28" stroke="#94a3b8" strokeWidth="1.5" />
          <circle cx="8" cy="28" r="2.5" fill="#94a3b8" />
          <text x="1" y="36" fill="#94a3b8" fontSize="7" fontFamily="monospace">Z</text>
        </svg>

        {/* stats readout */}
        <div className="absolute bottom-0 left-6 font-mono text-[10px] tracking-wide text-slate-500/80">
          2,048 tris · 60 fps
        </div>

        {/* render progress bar */}
        <div className="absolute bottom-0 right-6 w-24">
          <div className="mb-1 text-right font-mono text-[10px] tracking-wide text-slate-500/80">
            Rendering
          </div>
          <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full w-1/3 rounded-full bg-gradient-to-r from-amber-400 to-indigo-400"
              animate={{ x: ['-120%', '320%'] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
