import React from 'react'
import Logo from '@/assets/images/logo.png'

const SidebarBrand: React.FC = () => (
  <div className="flex items-center gap-2 px-6 py-6">
    <img src={Logo} alt="i-One" className="h-9 w-auto object-contain" />
    <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
      Admin
    </span>
  </div>
)

export default SidebarBrand
