import React from 'react'
import { NavLink } from 'react-router-dom'
import type { NavItem } from './navItems'

interface SidebarNavItemProps {
  item: NavItem
  onNavigate?: () => void
}

const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
  item,
  onNavigate,
}) => {
  const { to, label, icon: Icon, end } = item
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onNavigate}
      className={({ isActive }) =>
        `group relative flex items-center gap-3 rounded-xl py-2 pl-2 pr-3.5 text-sm font-medium transition-all duration-200 ${
          isActive
            ? 'bg-primary/[0.08] text-primary'
            : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
        }`
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <span className="absolute left-0 top-1/2 h-7 w-1 -translate-y-1/2 rounded-r-full bg-primary" />
          )}
          {/* app-style icon chip */}
          <span
            className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-all duration-200 ${
              isActive
                ? 'bg-primary text-white shadow-sm shadow-primary/30'
                : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200/70 group-hover:text-slate-700'
            }`}
          >
            <Icon size={18} strokeWidth={2.2} />
          </span>
          {label}
        </>
      )}
    </NavLink>
  )
}

export default SidebarNavItem
