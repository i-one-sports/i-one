import React from 'react'
import { IdCard, FileText, CalendarDays, Check, X } from 'lucide-react'
import Modal from '../common/Modal'
import Button from '../common/Button'
import { Avatar, StatusBadge } from '../common'
import MetaItem from './MetaItem'
import AssetGallery from './AssetGallery'
import { formatDate } from '../../utils/format'
import type { Verification } from '@/api/admin'

interface VerificationDetailModalProps {
  item: Verification | null
  onApproveBusy: boolean
  onRejectBusy: boolean
  onClose: () => void
  onApprove: (item: Verification) => void
  onReject: (item: Verification) => void
}

const VerificationDetailModal: React.FC<VerificationDetailModalProps> = ({
  item,
  onApproveBusy,
  onRejectBusy,
  onClose,
  onApprove,
  onReject,
}) => {
  if (!item) return null

  return (
    <Modal
      open={!!item}
      onClose={onClose}
      title="Verification Details"
      maxWidth="max-w-3xl"
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Avatar seed={item.userId} label={item.address} size={48} />
            <div>
              <p className="text-base font-semibold text-slate-800">
                {item.address || 'Unnamed submission'}
              </p>
              <p className="text-xs text-slate-400">User ID: {item.userId}</p>
            </div>
          </div>
          <StatusBadge status={item.status} />
        </div>

        {/* Meta */}
        <div className="grid grid-cols-2 gap-3 rounded-xl bg-slate-50 p-4 sm:grid-cols-3">
          <MetaItem
            icon={<IdCard size={14} />}
            label="ID Type"
            value={item.idType}
          />
          <MetaItem
            icon={<FileText size={14} />}
            label="ID Number"
            value={item.idNumber}
          />
          <MetaItem
            icon={<CalendarDays size={14} />}
            label="Submitted"
            value={formatDate(item.createdAt)}
          />
        </div>

        {item.rejectionReason && (
          <div className="rounded-xl border border-rose-100 bg-rose-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-rose-500">
              Rejection reason
            </p>
            <p className="mt-1 text-sm text-rose-700">{item.rejectionReason}</p>
          </div>
        )}

        <AssetGallery
          title="Identity Documents"
          assets={[
            { url: item.frontUrl, label: 'Front' },
            { url: item.backUrl, label: 'Back' },
          ]}
        />

        <AssetGallery
          title={`Location Pictures (${item.locationPictures?.length ?? 0})`}
          columns="grid-cols-2 sm:grid-cols-3"
          assets={(item.locationPictures ?? []).map((url, i) => ({
            url,
            label: `Location ${i + 1}`,
          }))}
        />

        {/* Actions */}
        {item.status === 'PENDING' && (
          <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
            <Button
              variant="danger"
              icon={<X size={16} />}
              loading={onRejectBusy}
              onClick={() => onReject(item)}
            >
              Reject
            </Button>
            <Button
              variant="success"
              icon={<Check size={16} />}
              loading={onApproveBusy}
              onClick={() => onApprove(item)}
            >
              Approve & create wallet
            </Button>
          </div>
        )}
      </div>
    </Modal>
  )
}

export default VerificationDetailModal
