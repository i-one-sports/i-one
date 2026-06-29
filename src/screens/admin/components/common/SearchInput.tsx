import React from 'react'
import { Search } from 'lucide-react'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = 'Search…',
  className = '',
}) => (
  <div className={`relative ${className}`}>
    <Search
      size={17}
      className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
    />
    <input
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-10 pr-3.5 text-sm text-slate-700 placeholder:text-slate-400 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
    />
  </div>
)

export default SearchInput
