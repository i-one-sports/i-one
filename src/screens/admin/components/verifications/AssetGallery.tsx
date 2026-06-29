import React from 'react'
import AssetThumb from './AssetThumb'

interface AssetGalleryProps {
  title: string
  assets: { url: string; label: string }[]
  columns?: string
}

const AssetGallery: React.FC<AssetGalleryProps> = ({
  title,
  assets,
  columns = 'grid-cols-2',
}) => {
  if (assets.length === 0) return null
  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-slate-700">{title}</p>
      <div className={`grid gap-3 ${columns}`}>
        {assets.map(a => (
          <AssetThumb key={a.url} url={a.url} label={a.label} />
        ))}
      </div>
    </div>
  )
}

export default AssetGallery
