import React from 'react'
import Skeleton, { SkeletonCircle } from '../common/Skeleton'

const RecentSubmissionsSkeleton: React.FC<{ rows?: number }> = ({
  rows = 5,
}) => (
  <ul className="divide-y divide-slate-100">
    {Array.from({ length: rows }).map((_, i) => (
      <li key={i} className="flex items-center gap-3 px-5 py-3.5">
        <SkeletonCircle size={40} />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-3 w-32" rounded="rounded" />
          <Skeleton className="h-2.5 w-20" rounded="rounded" />
        </div>
        <Skeleton className="h-5 w-16" rounded="rounded-full" />
      </li>
    ))}
  </ul>
)

export default RecentSubmissionsSkeleton
