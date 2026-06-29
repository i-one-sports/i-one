import React from 'react'

/** Lightweight full-screen fallback shown while a lazy route chunk loads. */
const RouteFallback: React.FC = () => (
  <div className="flex min-h-screen items-center justify-center bg-[#FFFBF6]">
    <div className="flex flex-col items-center gap-4">
      <span className="inline-block h-10 w-10 animate-spin rounded-full border-[3px] border-primary border-t-transparent" />
      <p className="text-sm font-medium text-primaryLight">Loading…</p>
    </div>
  </div>
)

export default RouteFallback
