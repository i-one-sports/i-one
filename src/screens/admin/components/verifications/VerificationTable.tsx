import React from 'react'
import { Inbox } from 'lucide-react'
import EmptyState from '../common/EmptyState'
import Pagination from '../common/Pagination'
import VerificationTableHeader from './VerificationTableHeader'
import VerificationRow from './VerificationRow'
import VerificationTableSkeleton from './VerificationTableSkeleton'
import type { Verification } from '@/api/admin'

interface VerificationTableProps {
  rows: Verification[]
  loading: boolean
  busyId: string | null
  filtered: boolean
  page: number
  totalPages: number
  total: number
  onPageChange: (page: number) => void
  onView: (item: Verification) => void
  onApprove: (item: Verification) => void
  onReject: (item: Verification) => void
}

const VerificationTable: React.FC<VerificationTableProps> = ({
  rows,
  loading,
  busyId,
  filtered,
  page,
  totalPages,
  total,
  onPageChange,
  onView,
  onApprove,
  onReject,
}) => (
  <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04),0_4px_16px_-8px_rgba(16,24,40,0.08)]">
    {loading ? (
      <VerificationTableSkeleton />
    ) : rows.length === 0 ? (
      <EmptyState
        icon={<Inbox size={24} />}
        title="No verifications found"
        subtitle={
          filtered
            ? 'Try adjusting your filters or search query.'
            : 'New submissions will show up here.'
        }
      />
    ) : (
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <VerificationTableHeader />
          <tbody className="divide-y divide-slate-100">
            {rows.map((item, i) => (
              <VerificationRow
                key={item._id}
                item={item}
                index={i}
                busy={busyId === item._id}
                onView={() => onView(item)}
                onApprove={() => onApprove(item)}
                onReject={() => onReject(item)}
              />
            ))}
          </tbody>
        </table>
      </div>
    )}

    {!loading && total > 0 && (
      <Pagination
        page={page}
        totalPages={totalPages}
        total={total}
        onChange={onPageChange}
      />
    )}
  </div>
)

export default VerificationTable
