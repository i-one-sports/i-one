import React from 'react'
import Skeleton, { SkeletonCircle } from '../common/Skeleton'

const VerificationTableSkeleton: React.FC<{ rows?: number }> = ({
  rows = 6,
}) => (
  <div className="divide-y divide-slate-100">
    {Array.from({ length: rows }).map((_, i) => (
      <div key={i} className="flex items-center gap-4 px-5 py-4">
        <SkeletonCircle size={40} />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-3 w-40" rounded="rounded" />
          <Skeleton className="h-2.5 w-24" rounded="rounded" />
        </div>
        <Skeleton className="hidden h-3 w-16 sm:block" rounded="rounded" />
        <Skeleton className="hidden h-3 w-20 md:block" rounded="rounded" />
        <Skeleton className="h-6 w-20" rounded="rounded-full" />
        <Skeleton className="h-8 w-8" rounded="rounded-lg" />
      </div>
    ))}
  </div>
)

export default VerificationTableSkeleton
