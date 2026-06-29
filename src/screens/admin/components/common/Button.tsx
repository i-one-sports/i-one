import React from 'react'
import Spinner from './Spinner'

export type ButtonVariant =
  | 'primary'
  | 'success'
  | 'danger'
  | 'ghost'
  | 'outline'

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-emerald-600 shadow-sm shadow-primary/25',
  success:
    'bg-emerald-500 text-white hover:bg-emerald-600 shadow-sm shadow-emerald-500/25',
  danger: 'bg-rose-500 text-white hover:bg-rose-600 shadow-sm shadow-rose-500/20',
  ghost: 'text-slate-600 hover:bg-slate-100',
  outline:
    'border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  loading?: boolean
  icon?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  loading,
  icon,
  children,
  className = '',
  disabled,
  ...rest
}) => (
  <button
    {...rest}
    disabled={disabled || loading}
    className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 ${VARIANTS[variant]} ${className}`}
  >
    {loading ? <Spinner size={15} /> : icon}
    {children}
  </button>
)

export default Button
