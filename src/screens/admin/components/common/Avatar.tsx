import React from 'react'

// Soft gradient tints — calmer and more premium than flat fills.
const COLORS = [
  'from-emerald-400 to-teal-500',
  'from-sky-400 to-blue-500',
  'from-violet-400 to-purple-500',
  'from-amber-400 to-orange-500',
  'from-rose-400 to-pink-500',
  'from-indigo-400 to-blue-500',
]

const pickColor = (seed: string) =>
  COLORS[
    seed.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % COLORS.length
  ]

interface AvatarProps {
  seed: string
  label?: string
  size?: number
}

const Avatar: React.FC<AvatarProps> = ({ seed, label, size = 40 }) => {
  const initials = (label || seed).slice(0, 2).toUpperCase()
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br font-semibold text-white shadow-sm ring-2 ring-white ${pickColor(
        seed
      )}`}
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {initials}
    </div>
  )
}

export default Avatar
