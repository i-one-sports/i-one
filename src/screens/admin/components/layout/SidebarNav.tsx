import React from 'react'
import SidebarNavItem from './SidebarNavItem'
import { NAV_ITEMS } from './navItems'

const SidebarNav: React.FC<{ onNavigate?: () => void }> = ({ onNavigate }) => (
  <nav className="flex-1 px-4">
    <p className="px-3.5 pb-2 pt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-300">
      Menu
    </p>
    <div className="space-y-1">
      {NAV_ITEMS.map(item => (
        <SidebarNavItem key={item.to} item={item} onNavigate={onNavigate} />
      ))}
    </div>
  </nav>
)

export default SidebarNav
