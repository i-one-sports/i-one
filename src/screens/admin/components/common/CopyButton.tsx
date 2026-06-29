import React from 'react'
import { Copy } from 'lucide-react'
import { showToast } from '@/components/Toast'

interface CopyButtonProps {
  value: string
  label?: string
  children: React.ReactNode
  className?: string
  iconSize?: number
}

const CopyButton: React.FC<CopyButtonProps> = ({
  value,
  label = 'Value',
  children,
  className = '',
  iconSize = 13,
}) => {
  const handleCopy = () => {
    navigator.clipboard?.writeText(value)
    showToast({ type: 'success', msg: `${label} copied` })
  }
  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 transition ${className}`}
    >
      {children}
      <Copy size={iconSize} className="text-slate-400" />
    </button>
  )
}

export default CopyButton
