import * as React from 'react'
import type { IconType } from 'react-icons'

interface HowItWorksCardProps {
  icon: IconType
  iconColor: string
  iconSize?: number
  title: string
  description: string
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({
  icon: Icon,
  iconColor,
  iconSize = 26,
  title,
  description
}) => {
  return (
    <div className="flex flex-col gap-4 items-center p-4 rounded-3xl bg-white shadow-md">
      <div
        className="w-[52px] h-[52px] flex items-center justify-center rounded-full"
        style={{ backgroundColor: iconColor }}
      >
        <Icon className="text-white" size={iconSize} />
      </div>
      <p className="text-[15px] font-light text-black text-center">{title}</p>
      <p className="text-sm text-primaryLight text-center leading-5">
        {description}
      </p>
    </div>
  )
}

export default HowItWorksCard
