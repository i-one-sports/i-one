import React from 'react'
import { useLocation } from 'react-router-dom'
import { Menu, Bell } from 'lucide-react'
import { Avatar } from '../common'
import { useAdminAuth } from '../../hooks/useAdminAuth'
import { PAGE_META } from './navItems'

const Topbar: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
  const { pathname } = useLocation()
  const { seed, roleLabel } = useAdminAuth()
  const meta = PAGE_META[pathname] ?? PAGE_META['/admin']

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-500 transition hover:bg-slate-50 lg:hidden"
          >
            <Menu size={20} />
          </button>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900 lg:text-xl">
              {meta.title}
            </h1>
            <p className="hidden text-sm text-slate-400 sm:block">
              {meta.subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button className="relative grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-500 transition hover:bg-slate-50">
            <Bell size={18} />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-primary ring-2 ring-white" />
          </button>
          <div className="hidden items-center gap-2 rounded-xl border border-slate-200 py-1.5 pl-1.5 pr-3 sm:flex">
            <Avatar seed={seed} size={28} />
            <span className="text-xs font-semibold capitalize text-slate-600">
              {roleLabel}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Topbar
