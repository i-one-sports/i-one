import { useState } from 'react'
import { getUserWallet } from '@/api/admin'
import type { WalletResponse } from '@/api/admin'
import { showToast } from '@/components/Toast'
import { getApiErrorMessage, getStatus } from '../utils/errors'

/** Looks up a user's wallet/DVA by id and tracks the 404 (no-wallet) case. */
export const useUserWallet = () => {
  const [activeId, setActiveId] = useState('')
  const [data, setData] = useState<WalletResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)

  const lookup = async (id: string) => {
    const userId = id.trim()
    if (!userId) return
    setActiveId(userId)
    setLoading(true)
    setNotFound(false)
    setData(null)
    try {
      const res = await getUserWallet(userId)
      setData(res)
    } catch (err) {
      if (getStatus(err) === 404) setNotFound(true)
      else showToast({ type: 'error', msg: getApiErrorMessage(err) })
    } finally {
      setLoading(false)
    }
  }

  const refresh = () => activeId && lookup(activeId)

  return { activeId, data, loading, notFound, lookup, refresh }
}
