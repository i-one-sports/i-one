import React from 'react'
import { motion } from 'framer-motion'
import type { FilterValue } from '../../hooks/useVerificationManager'

const FILTERS: FilterValue[] = ['ALL', 'PENDING', 'APPROVED', 'REJECTED']

interface VerificationFiltersProps {
  value: FilterValue
  counts: Record<string, number>
  onChange: (value: FilterValue) => void
}

const VerificationFilters: React.FC<VerificationFiltersProps> = ({
  value,
  counts,
  onChange,
}) => (
  <div className="inline-flex flex-col lg:flex-row items-center gap-1 w-full rounded-xl lg:rounded-full border border-slate-200/70 bg-white p-1 shadow-sm">
    {FILTERS.map(f => {
      const active = value === f
      return (
        <button
          key={f}
          onClick={() => onChange(f)}
          className="relative w-full flex justify-center rounded-3xl lg:rounded-full px-3.5 py-1.5 text-sm font-medium outline-none transition"
        >
          {active && (
            <motion.span
              layoutId="filterPill"
              className="absolute inset-0 rounded-md lg:rounded-full bg-primary shadow-sm shadow-primary/30"
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            />
          )}
          <span
            className={`relative z-10 flex items-center gap-2 ${
              active ? 'text-white' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {f === 'ALL' ? 'All' : f.charAt(0) + f.slice(1).toLowerCase()}
            <span
              className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none ${
                active ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-500'
              }`}
            >
              {counts[f] ?? 0}
            </span>
          </span>
        </button>
      )
    })}
  </div>
)

export default VerificationFilters
