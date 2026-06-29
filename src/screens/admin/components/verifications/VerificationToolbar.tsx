import React from 'react'
import { RefreshCw } from 'lucide-react'
import SearchInput from '../common/SearchInput'
import VerificationFilters from './VerificationFilters'
import type { FilterValue } from '../../hooks/useVerificationManager'

interface VerificationToolbarProps {
  filter: FilterValue
  counts: Record<string, number>
  onFilterChange: (value: FilterValue) => void
  query: string
  onQueryChange: (value: string) => void
  onRefresh: () => void
  refreshing: boolean
}

const VerificationToolbar: React.FC<VerificationToolbarProps> = ({
  filter,
  counts,
  onFilterChange,
  query,
  onQueryChange,
  onRefresh,
  refreshing,
}) => (
  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
    {/* Horizontally scrollable on mobile so the pills never overflow */}
    <div className="-mx-1 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:overflow-visible lg:px-0">
      <VerificationFilters
        value={filter}
        counts={counts}
        onChange={onFilterChange}
      />
    </div>

    <div className="flex items-center gap-2">
      <SearchInput
        value={query}
        onChange={onQueryChange}
        placeholder="Search address, ID, user…"
        className="flex-1 lg:w-72"
      />
      <button
        onClick={onRefresh}
        className="grid h-[42px] w-[42px] place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:bg-slate-50 hover:text-slate-700"
        title="Refresh"
      >
        <RefreshCw size={17} className={refreshing ? 'animate-spin' : ''} />
      </button>
    </div>
  </div>
)

export default VerificationToolbar
