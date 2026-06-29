import React from 'react'
import { QUICK_AMOUNTS } from './constants'

interface AmountInputProps {
  value: string
  onChange: (value: string) => void
}

const AmountInput: React.FC<AmountInputProps> = ({ value, onChange }) => (
  <div className="space-y-3">
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-slate-400">
        ₦
      </span>
      <input
        autoFocus
        type="number"
        min={1}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="0.00"
        className="w-full rounded-xl border border-slate-200 py-3 pl-9 pr-4 text-lg font-semibold text-slate-800 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
    <div className="flex flex-wrap gap-2">
      {QUICK_AMOUNTS.map(a => (
        <button
          key={a}
          type="button"
          onClick={() => onChange(String(a))}
          className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:border-primary hover:text-primary"
        >
          +{a.toLocaleString()}
        </button>
      ))}
    </div>
  </div>
)

export default AmountInput
