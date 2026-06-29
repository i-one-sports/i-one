import React from 'react'
import Card from '../common/Card'
import DonutChart, { type DonutSegment } from './DonutChart'
import type { StatusCounts } from '../../hooks/useVerificationStats'

interface StatusBreakdownProps {
  counts: StatusCounts
  total: number
}

const StatusBreakdown: React.FC<StatusBreakdownProps> = ({ counts, total }) => {
  const segments: DonutSegment[] = [
    {
      label: 'Pending',
      value: counts.PENDING,
      color: '#f59e0b',
      gradient: ['#fbbf24', '#f59e0b'],
    },
    {
      label: 'Approved',
      value: counts.APPROVED,
      color: '#10b981',
      gradient: ['#34d399', '#059669'],
    },
    {
      label: 'Rejected',
      value: counts.REJECTED,
      color: '#f43f5e',
      gradient: ['#fb7185', '#e11d48'],
    },
  ]

  const denom = Math.max(total, 1)
  const pct = (n: number) => Math.round((n / denom) * 100)

  return (
    <Card padded>
      <h3 className="font-semibold text-slate-900">Status Breakdown</h3>
      <p className="mt-1 text-sm text-slate-400">
        Distribution of all submissions
      </p>

      <div className="mt-4 flex justify-center">
        <DonutChart
          segments={segments}
          centerValue={total}
          centerLabel="total"
        />
      </div>

      <ul className="mt-6 space-y-2.5">
        {segments.map(seg => (
          <li
            key={seg.label}
            className="flex items-center justify-between rounded-xl bg-slate-50 px-3.5 py-2.5"
          >
            <span className="flex items-center gap-2.5 text-sm text-slate-600">
              <span
                className="h-2.5 w-2.5 rounded-full ring-2 ring-white"
                style={{
                  backgroundImage: seg.gradient
                    ? `linear-gradient(135deg, ${seg.gradient[0]}, ${seg.gradient[1]})`
                    : undefined,
                  backgroundColor: seg.gradient ? undefined : seg.color,
                }}
              />
              {seg.label}
            </span>
            <span className="text-sm font-semibold text-slate-700">
              {seg.value}
              <span className="ml-1.5 text-xs font-medium text-slate-400">
                {pct(seg.value)}%
              </span>
            </span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default StatusBreakdown
