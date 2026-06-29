import React from 'react'
import SidebarBrand from './SidebarBrand'
import SidebarNav from './SidebarNav'
import SidebarUserCard from './SidebarUserCard'

/** Shared sidebar body used by both the desktop rail and the mobile drawer. */
const Sidebar: React.FC<{ onNavigate?: () => void }> = ({ onNavigate }) => (
  <div className="flex h-full flex-col">
    <SidebarBrand />
    <SidebarNav onNavigate={onNavigate} />
    <SidebarUserCard />
  </div>
)

export default Sidebar
