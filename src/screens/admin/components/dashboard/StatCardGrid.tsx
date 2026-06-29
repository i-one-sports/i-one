import React from 'react'
import { ShieldCheck, Clock, CheckCircle2, XCircle } from 'lucide-react'
import StatCard, { type StatCardData } from './StatCard'
import type { StatusCounts } from '../../hooks/useVerificationStats'

interface StatCardGridProps {
  total: number
  counts: StatusCounts
  loading?: boolean
}

const StatCardGrid: React.FC<StatCardGridProps> = ({
  total,
  counts,
  loading,
}) => {
  const share = (n: number) =>
    total > 0 ? `${Math.round((n / total) * 100)}%` : undefined

  const cards: StatCardData[] = [
    {
      key: 'total',
      label: 'Total Submissions',
      value: total,
      icon: <ShieldCheck size={22} />,
      accent: 'text-primary',
      ring: 'bg-primary/10 ring-primary/15',
      sub: 'all time',
    },
    {
      key: 'pending',
      label: 'Pending Review',
      value: counts.PENDING,
      icon: <Clock size={22} />,
      accent: 'text-amber-600',
      ring: 'bg-amber-50 ring-amber-600/10',
      sub: share(counts.PENDING),
    },
    {
      key: 'approved',
      label: 'Approved',
      value: counts.APPROVED,
      icon: <CheckCircle2 size={22} />,
      accent: 'text-emerald-600',
      ring: 'bg-emerald-50 ring-emerald-600/10',
      sub: share(counts.APPROVED),
    },
    {
      key: 'rejected',
      label: 'Rejected',
      value: counts.REJECTED,
      icon: <XCircle size={22} />,
      accent: 'text-rose-600',
      ring: 'bg-rose-50 ring-rose-600/10',
      sub: share(counts.REJECTED),
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {cards.map((data, i) => (
        <StatCard key={data.key} data={data} index={i} loading={loading} />
      ))}
    </div>
  )
}

export default StatCardGrid
