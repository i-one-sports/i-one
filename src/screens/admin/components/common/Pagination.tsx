import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  page: number
  totalPages: number
  total: number
  onChange: (page: number) => void
}

const navBtn =
  'flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white'

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  total,
  onChange,
}) => (
  <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3.5 text-sm text-slate-500">
    <span>
      Page <span className="font-semibold text-slate-700">{page}</span> of{' '}
      {totalPages} · {total} total
    </span>
    <div className="flex gap-2">
      <button
        disabled={page <= 1}
        onClick={() => onChange(Math.max(1, page - 1))}
        className={navBtn}
      >
        <ChevronLeft size={15} /> Prev
      </button>
      <button
        disabled={page >= totalPages}
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        className={navBtn}
      >
        Next <ChevronRight size={15} />
      </button>
    </div>
  </div>
)

export default Pagination
