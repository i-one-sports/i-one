import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  padded?: boolean
}

/** Base surface used across the admin dashboard. */
const Card: React.FC<CardProps> = ({ children, className = '', padded }) => (
  <div
    className={`rounded-2xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04),0_4px_16px_-8px_rgba(16,24,40,0.08)] ${
      padded ? 'p-5' : ''
    } ${className}`}
  >
    {children}
  </div>
)

interface CardHeaderProps {
  title: string
  action?: React.ReactNode
  icon?: React.ReactNode
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  action,
  icon,
}) => (
  <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
    <div className="flex items-center gap-2 text-slate-900">
      {icon}
      <h3 className="font-semibold">{title}</h3>
    </div>
    {action}
  </div>
)

export default Card
