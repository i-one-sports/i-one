import React from 'react'
import { Wallet as WalletIcon, Plus } from 'lucide-react'
import { formatNaira } from '../../utils/format'
import type { Wallet } from '@/api/admin'

interface WalletBalanceCardProps {
  wallet: Wallet
  onFund: () => void
}

const WalletBalanceCard: React.FC<WalletBalanceCardProps> = ({
  wallet,
  onFund,
}) => (
  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-emerald-500 to-teal-600 p-6 text-white shadow-lg shadow-primary/20 lg:col-span-2">
    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
    <div className="absolute -bottom-16 right-20 h-44 w-44 rounded-full bg-white/5" />

    <div className="relative flex items-start justify-between">
      <div>
        <p className="flex items-center gap-2 text-sm text-emerald-50/90">
          <WalletIcon size={16} /> Available balance
        </p>
        <p className="mt-2 text-4xl font-bold tracking-tight">
          {formatNaira(wallet.balance, wallet.currency)}
        </p>
        <p className="mt-1 text-sm text-emerald-50/70">
          Ledger: {formatNaira(wallet.ledgerBalance, wallet.currency)}
        </p>
      </div>
      <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
        {wallet.status}
      </span>
    </div>

    <div className="relative mt-8 flex items-center justify-between border-t border-white/20 pt-4">
      <span className="font-mono text-xs text-emerald-50/70">
        Wallet · {wallet._id.slice(-10)}
      </span>
      <button
        onClick={onFund}
        className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50"
      >
        <Plus size={16} /> Add funds
      </button>
    </div>
  </div>
)

export default WalletBalanceCard
