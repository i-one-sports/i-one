import React from 'react'
import { FileText, Eye } from 'lucide-react'
import { isPdf } from '../../utils/format'

interface AssetThumbProps {
  url: string
  label: string
}

const AssetThumb: React.FC<AssetThumbProps> = ({ url, label }) => (
  <div className="space-y-1.5">
    <p className="text-xs font-medium text-slate-400">{label}</p>
    {isPdf(url) ? (
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="flex h-32 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-slate-200 bg-slate-50 text-slate-500 transition hover:border-primary hover:text-primary"
      >
        <FileText size={26} />
        <span className="text-xs font-semibold">Open PDF</span>
      </a>
    ) : (
      <a href={url} target="_blank" rel="noreferrer" className="group block">
        <div className="relative h-32 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
          <img
            src={url}
            alt={label}
            loading="lazy"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 opacity-0 transition group-hover:bg-slate-900/40 group-hover:opacity-100">
            <Eye size={20} className="text-white" />
          </div>
        </div>
      </a>
    )}
  </div>
)

export default AssetThumb
