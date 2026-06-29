import React from 'react'
import { LogOut } from 'lucide-react'
import { Avatar } from '../common'
import { useAdminAuth } from '../../hooks/useAdminAuth'

const SidebarUserCard: React.FC = () => {
  const { fullName, email, seed, signOut } = useAdminAuth()

  return (
    <div className="mt-auto border-t border-slate-100 p-4">
      <div className="mb-2 flex items-center gap-3 rounded-xl bg-slate-50 p-3">
        <Avatar seed={seed} label={fullName} size={38} />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-700">
            {fullName}
          </p>
          <p className="truncate text-xs text-slate-400">{email}</p>
        </div>
      </div>
      <button
        onClick={signOut}
        className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-rose-500 transition hover:bg-rose-50"
      >
        <LogOut size={18} />
        Sign out
      </button>
    </div>
  )
}

export default SidebarUserCard
