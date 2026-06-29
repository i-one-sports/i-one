import React from 'react'
import { ShieldPlus, Plus } from 'lucide-react'
import { Avatar, Button, CopyButton } from '../common'

interface UserIdentityStripProps {
  userId: string
  canFund: boolean
  onChangeRole: () => void
  onFund: () => void
}

const UserIdentityStrip: React.FC<UserIdentityStripProps> = ({
  userId,
  canFund,
  onChangeRole,
  onFund,
}) => (
  <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
    <div className="flex items-center gap-3">
      <Avatar seed={userId} size={46} />
      <div>
        <p className="text-sm font-semibold text-slate-800">User profile</p>
        <CopyButton
          value={userId}
          label="User ID"
          className="text-xs text-slate-400 hover:text-primary"
        >
          {userId}
        </CopyButton>
      </div>
    </div>
    <div className="flex gap-2">
      <Button
        variant="outline"
        icon={<ShieldPlus size={16} />}
        onClick={onChangeRole}
      >
        Change role
      </Button>
      <Button icon={<Plus size={16} />} onClick={onFund} disabled={!canFund}>
        Fund wallet
      </Button>
    </div>
  </div>
)

export default UserIdentityStrip
