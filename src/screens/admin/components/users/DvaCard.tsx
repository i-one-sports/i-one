import React from 'react'
import { Landmark } from 'lucide-react'
import Card, { CardHeader } from '../common/Card'
import { CopyButton } from '../common'
import type { Dva } from '@/api/admin'

const DvaCard: React.FC<{ dva: Dva | null }> = ({ dva }) => (
  <Card>
    <CardHeader
      title="Dedicated Account"
      icon={<Landmark size={18} className="text-primary" />}
    />
    <div className="p-5">
      {dva ? (
        <div className="space-y-4">
          <div>
            <p className="text-xs text-slate-400">Account Number</p>
            <CopyButton
              value={dva.accountNumber}
              label="Account number"
              iconSize={14}
              className="text-lg font-bold tracking-wide text-slate-800 hover:text-primary"
            >
              {dva.accountNumber}
            </CopyButton>
          </div>
          <div>
            <p className="text-xs text-slate-400">Bank</p>
            <p className="text-sm font-semibold text-slate-700">{dva.bankName}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Account Name</p>
            <p className="text-sm font-semibold text-slate-700">
              {dva.accountName}
            </p>
          </div>
          {dva.status && (
            <span className="inline-block rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-600 ring-1 ring-inset ring-emerald-600/20">
              {dva.status}
            </span>
          )}
        </div>
      ) : (
        <p className="text-sm text-slate-400">No dedicated account on file.</p>
      )}
    </div>
  </Card>
)

export default DvaCard
