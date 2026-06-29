import React, { useState } from 'react'
import { useVerificationManager } from '../hooks/useVerificationManager'
import {
  VerificationToolbar,
  VerificationTable,
  VerificationDetailModal,
  RejectModal,
} from '../components/verifications'
import type { Verification } from '@/api/admin'

const Verifications: React.FC = () => {
  const vm = useVerificationManager()
  const [selected, setSelected] = useState<Verification | null>(null)
  const [rejectTarget, setRejectTarget] = useState<Verification | null>(null)

  const handleApprove = async (item: Verification) => {
    const ok = await vm.approve(item)
    if (ok) setSelected(prev => (prev?._id === item._id ? null : prev))
  }

  const handleReject = async (reason: string) => {
    if (!rejectTarget) return
    const ok = await vm.reject(rejectTarget, reason)
    if (ok) {
      setRejectTarget(null)
      setSelected(null)
    }
  }

  return (
    <div className="space-y-5">
      <VerificationToolbar
        filter={vm.filter}
        counts={vm.pageCounts}
        onFilterChange={vm.setFilter}
        query={vm.query}
        onQueryChange={vm.setQuery}
        onRefresh={vm.refresh}
        refreshing={vm.loading}
      />

      <VerificationTable
        rows={vm.filtered}
        loading={vm.loading}
        busyId={vm.busyId}
        filtered={vm.filter !== 'ALL' || !!vm.query}
        page={vm.page}
        totalPages={vm.totalPages}
        total={vm.total}
        onPageChange={vm.setPage}
        onView={setSelected}
        onApprove={handleApprove}
        onReject={setRejectTarget}
      />

      <VerificationDetailModal
        item={selected}
        busy={!!vm.busyId && vm.busyId === selected?._id}
        onClose={() => setSelected(null)}
        onApprove={handleApprove}
        onReject={setRejectTarget}
      />

      <RejectModal
        item={rejectTarget}
        loading={!!vm.busyId && vm.busyId === rejectTarget?._id}
        onClose={() => setRejectTarget(null)}
        onConfirm={handleReject}
      />
    </div>
  )
}

export default Verifications
