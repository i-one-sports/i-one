import React, { useId } from 'react'
import { motion } from 'framer-motion'

export interface DonutSegment {
  label: string
  value: number
  color: string // solid colour (legend / fallback)
  gradient?: [string, string] // optional [from, to] for a richer arc
}

interface DonutChartProps {
  segments: DonutSegment[]
  size?: number
  thickness?: number
  centerValue: React.ReactNode
  centerLabel?: string
}

const DonutChart: React.FC<DonutChartProps> = ({
  segments,
  size = 184,
  thickness = 18,
  centerValue,
  centerLabel,
}) => {
  const uid = useId().replace(/:/g, '')
  const radius = (size - thickness) / 2
  const circumference = 2 * Math.PI * radius
  const total = Math.max(
    segments.reduce((sum, s) => sum + s.value, 0),
    0
  )

  // Visible segments only, so gaps land between real arcs.
  const visible = segments.filter(s => s.value > 0)
  // Gap (in px along the circumference) between adjacent arcs.
  const gap = visible.length > 1 ? 10 : 0

  let offset = 0

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          {segments.map((seg, i) =>
            seg.gradient ? (
              <linearGradient
                key={seg.label}
                id={`${uid}-grad-${i}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={seg.gradient[0]} />
                <stop offset="100%" stopColor={seg.gradient[1]} />
              </linearGradient>
            ) : null
          )}
          <filter id={`${uid}-shadow`} x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="0"
              dy="2.5"
              stdDeviation="3"
              floodColor="#0f172a"
              floodOpacity="0.18"
            />
          </filter>
        </defs>

        {/* track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#eef2f7"
          strokeWidth={thickness}
        />

        <g filter={`url(#${uid}-shadow)`}>
          {total > 0 &&
            visible.map(seg => {
              const idx = segments.indexOf(seg)
              const fraction = seg.value / total
              const fullDash = fraction * circumference
              const dash = Math.max(fullDash - gap, 1)
              const stroke = seg.gradient
                ? `url(#${uid}-grad-${idx})`
                : seg.color
              const node = (
                <motion.circle
                  key={seg.label}
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="none"
                  stroke={stroke}
                  strokeWidth={thickness}
                  strokeLinecap="round"
                  strokeDasharray={`${dash} ${circumference - dash}`}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset: -(offset + gap / 2) }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
              )
              offset += fullDash
              return node
            })}
        </g>
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[32px] font-bold leading-none tracking-tight text-slate-900">
          {centerValue}
        </span>
        {centerLabel && (
          <span className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
            {centerLabel}
          </span>
        )}
      </div>
    </div>
  )
}

export default DonutChart
