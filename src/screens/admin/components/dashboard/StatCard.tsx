import React from 'react'
import { motion } from 'framer-motion'
import Skeleton from '../common/Skeleton'

export interface StatCardData {
  key: string
  label: string
  value: number
  icon: React.ReactNode
  accent: string
  ring: string
  sub?: string
}

interface StatCardProps {
  data: StatCardData
  index?: number
  loading?: boolean
}

const StatCard: React.FC<StatCardProps> = ({ data, index = 0, loading }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-5 shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-14px_rgba(16,24,40,0.22)]"
  >
    {/* watermark icon */}
    <div
      className={`pointer-events-none absolute -bottom-5 -right-3 opacity-[0.07] transition-transform duration-500 group-hover:scale-110 ${data.accent}`}
    >
      {React.isValidElement(data.icon)
        ? React.cloneElement(data.icon as React.ReactElement<{ size?: number }>, {
            size: 104,
          })
        : null}
    </div>

    <div
      className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ring-1 ring-inset ${data.ring} ${data.accent}`}
    >
      {data.icon}
    </div>
    <p className="text-sm text-slate-400">{data.label}</p>
    {loading ? (
      <Skeleton className="mt-2 h-8 w-16" />
    ) : (
      <div className="mt-1 flex items-baseline gap-2">
        <p className="text-3xl font-bold tracking-tight text-slate-900">
          {data.value.toLocaleString()}
        </p>
        {data.sub && (
          <span className="text-xs font-medium text-slate-400">{data.sub}</span>
        )}
      </div>
    )}
  </motion.div>
)

export default StatCard
