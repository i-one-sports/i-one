import React from 'react'

interface MetaItemProps {
  icon: React.ReactNode
  label: string
  value: string
}

const MetaItem: React.FC<MetaItemProps> = ({ icon, label, value }) => (
  <div>
    <p className="flex items-center gap-1.5 text-xs text-slate-400">
      {icon}
      {label}
    </p>
    <p className="mt-0.5 break-words text-sm font-semibold text-slate-700">
      {value}
    </p>
  </div>
)

export default MetaItem
