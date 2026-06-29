import { useEffect, useState } from 'react'
import { getVerifications } from '@/api/admin'

export interface UserSuggestion {
  userId: string
  address: string
}

/** Distinct users pulled from recent verifications for quick lookup. */
export const useUserSuggestions = (limit = 6) => {
  const [suggestions, setSuggestions] = useState<UserSuggestion[]>([])

  useEffect(() => {
    let active = true
    ;(async () => {
      try {
        const res = await getVerifications(1, 20)
        if (!active) return
        const seen = new Set<string>()
        const list: UserSuggestion[] = []
        res.verifications.forEach(v => {
          if (!seen.has(v.userId)) {
            seen.add(v.userId)
            list.push({ userId: v.userId, address: v.address })
          }
        })
        setSuggestions(list.slice(0, limit))
      } catch {
        /* non-blocking */
      }
    })()
    return () => {
      active = false
    }
  }, [limit])

  return suggestions
}
