import React from 'react'
import { Avatar } from '../common'
import type { UserSuggestion } from '../../hooks/useUserSuggestions'

interface UserSuggestionsProps {
  suggestions: UserSuggestion[]
  onPick: (userId: string) => void
}

const UserSuggestions: React.FC<UserSuggestionsProps> = ({
  suggestions,
  onPick,
}) => {
  if (suggestions.length === 0) return null
  return (
    <div className="mt-4">
      <p className="mb-2 text-xs font-medium text-slate-400">
        From recent verifications
      </p>
      <div className="flex flex-wrap gap-2">
        {suggestions.map(s => (
          <button
            key={s.userId}
            onClick={() => onPick(s.userId)}
            className="flex items-center gap-2 rounded-full border border-slate-200 py-1.5 pl-1.5 pr-3 text-xs text-slate-600 transition hover:border-primary hover:bg-primary/5"
          >
            <Avatar seed={s.userId} label={s.address} size={22} />
            <span className="max-w-[120px] truncate">
              {s.address || s.userId}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default UserSuggestions
