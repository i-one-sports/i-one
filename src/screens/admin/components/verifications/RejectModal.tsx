import React, { useEffect, useState } from 'react'
import Modal from '../common/Modal'
import Button from '../common/Button'
import { QUICK_REJECTION_REASONS } from './rejectionReasons'
import type { Verification } from '@/api/admin'

interface RejectModalProps {
  item: Verification | null
  loading: boolean
  onClose: () => void
  onConfirm: (reason: string) => void
}

const RejectModal: React.FC<RejectModalProps> = ({
  item,
  loading,
  onClose,
  onConfirm,
}) => {
  const [reason, setReason] = useState('')

  useEffect(() => {
    if (item) setReason('')
  }, [item])

  return (
    <Modal open={!!item} onClose={onClose} title="Reject Verification">
      <div className="space-y-4">
        <p className="text-sm text-slate-500">
          Let the user know why their submission was rejected. This message is
          shown to them so they can resubmit correctly.
        </p>
        <textarea
          autoFocus
          value={reason}
          onChange={e => setReason(e.target.value)}
          rows={4}
          placeholder="e.g. ID image is blurry, please resubmit a clearer photo"
          className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
        <div className="flex flex-wrap gap-2">
          {QUICK_REJECTION_REASONS.map(s => (
            <button
              key={s}
              onClick={() => setReason(s)}
              className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500 transition hover:border-primary hover:text-primary"
            >
              {s}
            </button>
          ))}
        </div>
        <div className="flex justify-end gap-3 pt-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="danger"
            loading={loading}
            disabled={!reason.trim()}
            onClick={() => onConfirm(reason.trim())}
          >
            Confirm rejection
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default RejectModal
