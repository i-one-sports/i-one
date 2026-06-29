import React from 'react'

interface EmptyStateProps {
  icon?: React.ReactNode
  title: string
  subtitle?: string
}

const EmptyState: React.FC<EmptyStateProps> = ({ icon, title, subtitle }) => (
  <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
    {icon && (
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 text-slate-400 ring-1 ring-slate-100">
        {icon}
      </div>
    )}
    <p className="text-base font-semibold text-slate-800">{title}</p>
    {subtitle && <p className="max-w-sm text-sm text-slate-400">{subtitle}</p>}
  </div>
)

export default EmptyState
