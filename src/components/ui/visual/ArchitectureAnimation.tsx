"use client"

import { motion } from 'framer-motion'

const buildings = [
  { x: 40, w: 70, h: 210, y: 390, floors: 7, delay: 0 },
  { x: 130, w: 90, h: 300, y: 300, floors: 10, delay: 0.15 },
  { x: 240, w: 60, h: 170, y: 430, floors: 6, delay: 0.3 },
  { x: 320, w: 80, h: 260, y: 340, floors: 9, delay: 0.45 },
]

function BuildingWindows({
  bx,
  by,
  w,
  h,
  floors,
  delay,
}: {
  bx: number
  by: number
  w: number
  h: number
  floors: number
  delay: number
}) {
  const cols = Math.max(2, Math.round(w / 24))
  const rows = floors
  const padX = 10
  const padY = 14
  const cellW = (w - padX * 2) / cols
  const cellH = (h - padY * 2) / rows
  const windows: JSX.Element[] = []

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const wx = bx + padX + c * cellW + cellW * 0.15
      const wy = by + padY + r * cellH + cellH * 0.15
      const ww = cellW * 0.7
      const wh = cellH * 0.6
      const lit = (r + c) % 3 !== 0
      windows.push(
        <motion.rect
          key={`${bx}-${r}-${c}`}
          x={wx}
          y={wy}
          width={ww}
          height={wh}
          rx={1}
          fill={lit ? '#fbbf24' : '#1e293b'}
          initial={{ opacity: 0 }}
          animate={{
            opacity: lit ? [0.15, 0.9, 0.15] : 0.25,
          }}
          transition={
            lit
              ? {
                  duration: 3 + ((r + c) % 4),
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: delay + (r + c) * 0.12,
                }
              : { duration: 0.6, delay }
          }
        />
      )
    }
  }
  return <>{windows}</>
}

export function ArchitectureAnimation() {
  return (
    <div className="relative h-full w-full">
      <svg
        viewBox="0 0 480 520"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="buildingFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#334155" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="skylineGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Ambient glow rising from the skyline */}
        <motion.ellipse
          cx="240"
          cy="440"
          rx="220"
          ry="90"
          fill="url(#skylineGlow)"
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Rotating compass / draftsman motif */}
        <motion.g
          style={{ originX: '400px', originY: '90px' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          <circle
            cx="400"
            cy="90"
            r="46"
            fill="none"
            stroke="#f59e0b"
            strokeOpacity="0.35"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          <circle
            cx="400"
            cy="90"
            r="30"
            fill="none"
            stroke="#818cf8"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
          <line x1="400" y1="44" x2="400" y2="136" stroke="#f59e0b" strokeOpacity="0.25" strokeWidth="1" />
          <line x1="354" y1="90" x2="446" y2="90" stroke="#f59e0b" strokeOpacity="0.25" strokeWidth="1" />
        </motion.g>

        {/* Blueprint construction lines drawing in */}
        <motion.path
          d="M 10 460 H 470"
          stroke="#f59e0b"
          strokeWidth="1.5"
          strokeOpacity="0.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
        />
        <motion.path
          d="M 60 460 L 60 40 L 420 40"
          stroke="#818cf8"
          strokeWidth="1"
          strokeOpacity="0.25"
          strokeDasharray="6 8"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeOut', delay: 0.4 }}
        />

        {/* Buildings, floating gently */}
        {buildings.map((b, i) => (
          <motion.g
            key={b.x}
            initial={{ opacity: 0, y: 40, scaleY: 0.85 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            transition={{ duration: 0.9, delay: b.delay, ease: 'easeOut' }}
            style={{ transformOrigin: `${b.x + b.w / 2}px ${b.y + b.h}px` }}
          >
            <motion.g
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            >
              <rect
                x={b.x}
                y={b.y}
                width={b.w}
                height={b.h}
                fill="url(#buildingFill)"
                stroke="#475569"
                strokeWidth="1"
              />
              {/* Rooftop antenna for taller towers */}
              {b.h > 220 && (
                <motion.line
                  x1={b.x + b.w / 2}
                  y1={b.y}
                  x2={b.x + b.w / 2}
                  y2={b.y - 26}
                  stroke="#f59e0b"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: b.delay + 0.6 }}
                />
              )}
              {b.h > 220 && (
                <motion.circle
                  cx={b.x + b.w / 2}
                  cy={b.y - 28}
                  r="3"
                  fill="#f59e0b"
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                />
              )}
              <BuildingWindows
                bx={b.x}
                by={b.y}
                w={b.w}
                h={b.h}
                floors={b.floors}
                delay={b.delay + 0.5}
              />
            </motion.g>
          </motion.g>
        ))}

        {/* Ground line */}
        <motion.line
          x1="10"
          y1="460"
          x2="470"
          y2="460"
          stroke="#334155"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />

        {/* Floating light particles drifting upward */}
        {Array.from({ length: 10 }).map((_, i) => {
          const cx = 50 + ((i * 41) % 400)
          const startY = 460 - ((i * 53) % 300)
          return (
            <motion.circle
              key={i}
              cx={cx}
              cy={startY}
              r={i % 3 === 0 ? 2 : 1.2}
              fill={i % 2 === 0 ? '#fbbf24' : '#818cf8'}
              initial={{ opacity: 0 }}
              animate={{
                cy: [startY, startY - 120],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 6 + (i % 5),
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.7,
              }}
            />
          )
        })}
      </svg>
    </div>
  )
}
