import React from 'react'
import { Avatar, StatusBadge } from '../common'
import { formatDate } from '../../utils/format'
import type { Verification } from '@/api/admin'

interface RecentSubmissionItemProps {
  item: Verification
  onClick: () => void
}

const RecentSubmissionItem: React.FC<RecentSubmissionItemProps> = ({
  item,
  onClick,
}) => (
  <li
    onClick={onClick}
    className="flex cursor-pointer items-center gap-3 px-5 py-3.5 transition hover:bg-slate-50"
  >
    <Avatar seed={item.userId} label={item.address} />
    <div className="min-w-0 flex-1">
      <p className="truncate text-sm font-semibold text-slate-700">
        {item.address || 'Unnamed'}
      </p>
      <p className="truncate text-xs text-slate-400">
        {item.idType} · {item.idNumber}
      </p>
    </div>
    <div className="hidden text-xs text-slate-400 sm:block">
      {formatDate(item.createdAt)}
    </div>
    <StatusBadge status={item.status} />
  </li>
)

export default RecentSubmissionItem
