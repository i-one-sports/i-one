import React from 'react'
import type { RoleOption } from './constants'

interface RoleOptionCardProps {
  option: RoleOption
  selected: boolean
  onSelect: () => void
}

const RoleOptionCard: React.FC<RoleOptionCardProps> = ({
  option,
  selected,
  onSelect,
}) => (
  <button
    onClick={onSelect}
    className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition ${
      selected
        ? 'border-primary bg-primary/5 ring-1 ring-primary/30'
        : 'border-slate-200 hover:border-slate-300'
    }`}
  >
    <span
      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
        selected ? 'border-primary' : 'border-slate-300'
      }`}
    >
      {selected && <span className="h-2.5 w-2.5 rounded-full bg-primary" />}
    </span>
    <span>
      <span className="block text-sm font-semibold text-slate-800">
        {option.label}
      </span>
      <span className="block text-xs text-slate-400">{option.desc}</span>
    </span>
  </button>
)

export default RoleOptionCard
