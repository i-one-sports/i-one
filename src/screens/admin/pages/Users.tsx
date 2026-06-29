import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { UserCog } from 'lucide-react'
import { useUserWallet } from '../hooks/useUserWallet'
import { useUserSuggestions } from '../hooks/useUserSuggestions'
import { EmptyState } from '../components/common'
import {
  UserLookup,
  UserIdentityStrip,
  UserWalletSection,
  UserWalletSkeleton,
  FundWalletModal,
  PromoteUserModal,
} from '../components/users'

const Users: React.FC = () => {
  const { activeId, data, loading, notFound, lookup, refresh } = useUserWallet()
  const suggestions = useUserSuggestions()

  const [fundOpen, setFundOpen] = useState(false)
  const [promoteOpen, setPromoteOpen] = useState(false)

  return (
    <div className="space-y-6">
      <UserLookup
        loading={loading}
        suggestions={suggestions}
        onLookup={lookup}
      />

      {loading && <UserWalletSkeleton />}

      {!loading && activeId && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <UserIdentityStrip
            userId={activeId}
            canFund={!notFound}
            onChangeRole={() => setPromoteOpen(true)}
            onFund={() => setFundOpen(true)}
          />
          <UserWalletSection
            data={data}
            notFound={notFound}
            onFund={() => setFundOpen(true)}
          />
        </motion.div>
      )}

      {!loading && !activeId && (
        <EmptyState
          icon={<UserCog size={24} />}
          title="No user selected"
          subtitle="Search by user ID or pick one from recent verifications to begin."
        />
      )}

      <FundWalletModal
        open={fundOpen}
        userId={activeId}
        currency={data?.wallet.currency}
        onClose={() => setFundOpen(false)}
        onSuccess={() => {
          setFundOpen(false)
          refresh()
        }}
      />
      <PromoteUserModal
        open={promoteOpen}
        userId={activeId}
        onClose={() => setPromoteOpen(false)}
      />
    </div>
  )
}

export default Users
