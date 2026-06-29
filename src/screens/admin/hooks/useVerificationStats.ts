import { useEffect, useMemo, useState } from 'react'
import { getVerifications } from '@/api/admin'
import type { Verification, VerificationStatus } from '@/api/admin'
import { showToast } from '@/components/Toast'
import { getApiErrorMessage } from '../utils/errors'

export type StatusCounts = Record<VerificationStatus, number>

const EMPTY: StatusCounts = { PENDING: 0, APPROVED: 0, REJECTED: 0 }

/** Aggregates verification data for the dashboard overview. */
export const useVerificationStats = () => {
  const [items, setItems] = useState<Verification[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    ;(async () => {
      try {
        const res = await getVerifications(1, 100)
        if (!active) return
        setItems(res.verifications)
        setTotal(res.pagination?.total ?? res.verifications.length)
      } catch (err) {
        showToast({ type: 'error', msg: getApiErrorMessage(err) })
      } finally {
        if (active) setLoading(false)
      }
    })()
    return () => {
      active = false
    }
  }, [])

  const counts = useMemo<StatusCounts>(() => {
    const c = { ...EMPTY }
    items.forEach(v => (c[v.status] += 1))
    return c
  }, [items])

  const recent = useMemo(
    () =>
      [...items]
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .slice(0, 6),
    [items]
  )

  return { items, total, loading, counts, recent }
}
