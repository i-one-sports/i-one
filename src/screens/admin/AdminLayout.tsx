import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar, MobileSidebar, Topbar } from './components/layout'

const AdminLayout: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 text-slate-800">
      {/* Desktop rail */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[264px] border-r border-slate-200/70 bg-white lg:block">
        <Sidebar />
      </aside>

      {/* Mobile drawer */}
      <MobileSidebar open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Main column */}
      <div className="lg:pl-[264px]">
        <Topbar onMenuClick={() => setMobileOpen(true)} />
        <main className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
