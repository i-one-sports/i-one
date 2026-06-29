import React from 'react'

interface SpinnerProps {
  size?: number
  className?: string
}

const Spinner: React.FC<SpinnerProps> = ({ size = 18, className = '' }) => (
  <span
    className={`inline-block animate-spin rounded-full border-2 border-current border-t-transparent ${className}`}
    style={{ width: size, height: size }}
  />
)

export default Spinner
