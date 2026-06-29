import React from 'react'
import { CircleSlash } from 'lucide-react'
import EmptyState from '../common/EmptyState'
import WalletBalanceCard from './WalletBalanceCard'
import DvaCard from './DvaCard'
import type { WalletResponse } from '@/api/admin'

interface UserWalletSectionProps {
  data: WalletResponse | null
  notFound: boolean
  onFund: () => void
}

const UserWalletSection: React.FC<UserWalletSectionProps> = ({
  data,
  notFound,
  onFund,
}) => {
  if (notFound) {
    return (
      <EmptyState
        icon={<CircleSlash size={24} />}
        title="No wallet for this user yet"
        subtitle="A wallet & dedicated account are created automatically once the user's verification is approved. You can still change their role above."
      />
    )
  }

  if (!data) return null

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <WalletBalanceCard wallet={data.wallet} onFund={onFund} />
      <DvaCard dva={data.dva} />
    </div>
  )
}

export default UserWalletSection
