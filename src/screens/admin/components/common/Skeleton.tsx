import React from 'react'

interface SkeletonProps {
  className?: string
  rounded?: string
  style?: React.CSSProperties
}

/** Base shimmer block. Compose with width/height utility classes. */
const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  rounded = 'rounded-lg',
  style,
}) => <div className={`shimmer ${rounded} ${className}`} style={style} />

export const SkeletonText: React.FC<{ className?: string }> = ({
  className = 'h-3 w-24',
}) => <Skeleton className={className} rounded="rounded" />

export const SkeletonCircle: React.FC<{ size?: number }> = ({ size = 40 }) => (
  <Skeleton
    rounded="rounded-full"
    className="shrink-0"
    style={{ width: size, height: size }}
  />
)

export default Skeleton
