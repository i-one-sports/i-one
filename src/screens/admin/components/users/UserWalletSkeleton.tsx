import React from 'react'
import Skeleton, { SkeletonCircle } from '../common/Skeleton'

const UserWalletSkeleton: React.FC = () => (
  <div className="space-y-6">
    {/* identity strip */}
    <div className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <SkeletonCircle size={46} />
        <div className="space-y-2">
          <Skeleton className="h-3.5 w-28" rounded="rounded" />
          <Skeleton className="h-2.5 w-40" rounded="rounded" />
        </div>
      </div>
      <Skeleton className="hidden h-9 w-44 sm:block" rounded="rounded-xl" />
    </div>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {/* balance */}
      <div className="space-y-4 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm lg:col-span-2">
        <Skeleton className="h-3 w-32" rounded="rounded" />
        <Skeleton className="h-10 w-56" rounded="rounded-lg" />
        <Skeleton className="h-3 w-40" rounded="rounded" />
        <div className="flex justify-between pt-6">
          <Skeleton className="h-3 w-32" rounded="rounded" />
          <Skeleton className="h-9 w-28" rounded="rounded-xl" />
        </div>
      </div>
      {/* dva */}
      <div className="space-y-4 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
        <Skeleton className="h-3.5 w-36" rounded="rounded" />
        <Skeleton className="h-7 w-40" rounded="rounded-lg" />
        <Skeleton className="h-3 w-28" rounded="rounded" />
        <Skeleton className="h-3 w-32" rounded="rounded" />
      </div>
    </div>
  </div>
)

export default UserWalletSkeleton
