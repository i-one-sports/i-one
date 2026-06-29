import React from 'react'
import { Eye, Check, X, CheckCircle2 } from 'lucide-react'
import Spinner from '../common/Spinner'
import type { Verification } from '@/api/admin'

interface VerificationRowActionsProps {
  item: Verification
  busy: boolean
  onView: () => void
  onApprove: () => void
  onReject: () => void
}

const VerificationRowActions: React.FC<VerificationRowActionsProps> = ({
  item,
  busy,
  onView,
  onApprove,
  onReject,
}) => (
  <div className="flex items-center justify-end gap-1.5">
    <button
      onClick={onView}
      className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
      title="View details"
    >
      <Eye size={16} />
    </button>

    {item.status === 'PENDING' && (
      <>
        <button
          onClick={onApprove}
          disabled={busy}
          className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-50 text-emerald-600 ring-1 ring-inset ring-emerald-600/10 transition hover:bg-emerald-100 disabled:opacity-50"
          title="Approve"
        >
          {busy ? <Spinner size={16} /> : <Check size={16} />}
        </button>
        <button
          onClick={onReject}
          disabled={busy}
          className="grid h-9 w-9 place-items-center rounded-lg bg-rose-50 text-rose-600 ring-1 ring-inset ring-rose-600/10 transition hover:bg-rose-100 disabled:opacity-50"
          title="Reject"
        >
          <X size={16} />
        </button>
      </>
    )}

    {item.status === 'APPROVED' && (
      <CheckCircle2 size={18} className="mr-1 text-emerald-500" />
    )}
  </div>
)

export default VerificationRowActions
