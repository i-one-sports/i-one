import React, { useState } from 'react'
import { Search, UserCog } from 'lucide-react'
import Card from '../common/Card'
import Button from '../common/Button'
import SearchInput from '../common/SearchInput'
import UserSuggestions from './UserSuggestions'
import type { UserSuggestion } from '../../hooks/useUserSuggestions'

interface UserLookupProps {
  loading: boolean
  suggestions: UserSuggestion[]
  onLookup: (userId: string) => void
}

const UserLookup: React.FC<UserLookupProps> = ({
  loading,
  suggestions,
  onLookup,
}) => {
  const [input, setInput] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    onLookup(input)
  }

  const pick = (userId: string) => {
    setInput(userId)
    onLookup(userId)
  }

  return (
    <Card padded>
      <div className="flex items-center gap-2 text-slate-700">
        <UserCog size={18} className="text-primary" />
        <h3 className="font-semibold">Look up a user</h3>
      </div>
      <p className="mt-1 text-sm text-slate-400">
        Enter a user ID to inspect their wallet, fund their balance, or change
        their role.
      </p>

      <form onSubmit={submit} className="mt-4 flex flex-col gap-2 sm:flex-row">
        <SearchInput
          value={input}
          onChange={setInput}
          placeholder="Paste user ID e.g. 6a25af5cd846bbf79315b8bc"
          className="flex-1"
        />
        <Button type="submit" loading={loading} icon={<Search size={16} />}>
          Look up
        </Button>
      </form>

      <UserSuggestions suggestions={suggestions} onPick={pick} />
    </Card>
  )
}

export default UserLookup
