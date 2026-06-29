import React from 'react'
import { motion } from 'framer-motion'
import { Avatar, StatusBadge } from '../common'
import VerificationRowActions from './VerificationRowActions'
import { formatDate } from '../../utils/format'
import type { Verification } from '@/api/admin'

interface VerificationRowProps {
  item: Verification
  index: number
  busy: boolean
  onView: () => void
  onApprove: () => void
  onReject: () => void
}

const VerificationRow: React.FC<VerificationRowProps> = ({
  item,
  index,
  busy,
  onView,
  onApprove,
  onReject,
}) => (
  <motion.tr
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: Math.min(index * 0.02, 0.3) }}
    className="group transition hover:bg-slate-50"
  >
    <td className="px-5 py-3.5">
      <div className="flex items-center gap-3">
        <Avatar seed={item.userId} label={item.address} />
        <div className="min-w-0">
          <p className="max-w-[180px] truncate font-semibold text-slate-700">
            {item.address || 'Unnamed'}
          </p>
          <p className="max-w-[180px] truncate text-xs text-slate-400">
            {item.userId}
          </p>
        </div>
      </div>
    </td>
    <td className="px-5 py-3.5">
      <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
        {item.idType}
      </span>
      <p className="mt-1 text-xs text-slate-400">{item.idNumber}</p>
    </td>
    <td className="px-5 py-3.5">
      <span className="text-xs text-slate-500">
        2 IDs · {item.locationPictures?.length ?? 0} location
      </span>
    </td>
    <td className="px-5 py-3.5 text-xs text-slate-500">
      {formatDate(item.createdAt)}
    </td>
    <td className="px-5 py-3.5">
      <StatusBadge status={item.status} />
    </td>
    <td className="px-5 py-3.5">
      <VerificationRowActions
        item={item}
        busy={busy}
        onView={onView}
        onApprove={onApprove}
        onReject={onReject}
      />
    </td>
  </motion.tr>
)

export default VerificationRow
