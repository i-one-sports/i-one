import React from 'react'
import { Clock, CheckCircle2, XCircle } from 'lucide-react'
import type { VerificationStatus } from '@/api/admin'

const STYLES: Record<
  VerificationStatus,
  { cls: string; icon: React.ReactNode }
> = {
  PENDING: {
    cls: 'bg-amber-50 text-amber-700 ring-amber-600/20',
    icon: <Clock size={12} />,
  },
  APPROVED: {
    cls: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
    icon: <CheckCircle2 size={12} />,
  },
  REJECTED: {
    cls: 'bg-rose-50 text-rose-700 ring-rose-600/20',
    icon: <XCircle size={12} />,
  },
}

const StatusBadge: React.FC<{ status: VerificationStatus }> = ({ status }) => {
  const { cls, icon } = STYLES[status]
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${cls}`}
    >
      {icon}
      {status.charAt(0) + status.slice(1).toLowerCase()}
    </span>
  )
}

export default StatusBadge
