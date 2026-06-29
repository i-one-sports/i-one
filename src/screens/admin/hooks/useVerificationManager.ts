import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  getVerifications,
  approveVerification,
  rejectVerification,
} from '@/api/admin'
import type { Verification, VerificationStatus } from '@/api/admin'
import { showToast } from '@/components/Toast'
import { getApiErrorMessage } from '../utils/errors'

export const LIMIT = 20
export type FilterValue = 'ALL' | VerificationStatus

/** Owns list fetching, pagination, filtering and approve/reject actions. */
export const useVerificationManager = () => {
  const [items, setItems] = useState<Verification[]>([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [busyId, setBusyId] = useState<string | null>(null)

  const [filter, setFilter] = useState<FilterValue>('ALL')
  const [query, setQuery] = useState('')

  const fetchPage = useCallback(async (p: number) => {
    setLoading(true)
    try {
      const res = await getVerifications(p, LIMIT)
      setItems(res.verifications)
      setTotalPages(res.pagination?.totalPages ?? 1)
      setTotal(res.pagination?.total ?? res.verifications.length)
    } catch (err) {
      showToast({ type: 'error', msg: getApiErrorMessage(err) })
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPage(page)
  }, [page, fetchPage])

  const patchItem = useCallback((updated: Verification) => {
    setItems(prev => prev.map(v => (v._id === updated._id ? updated : v)))
  }, [])

  const approve = useCallback(
    async (item: Verification) => {
      setBusyId(item._id)
      try {
        const res = await approveVerification(item._id)
        patchItem({ ...item, status: 'APPROVED', rejectionReason: null })
        const acct = res?.dva?.accountNumber
        showToast({
          type: 'success',
          msg: acct
            ? `Approved · wallet created (acct ${acct})`
            : 'Verification approved & wallet created',
        })
        return true
      } catch (err) {
        showToast({ type: 'error', msg: getApiErrorMessage(err) })
        return false
      } finally {
        setBusyId(null)
      }
    },
    [patchItem]
  )

  const reject = useCallback(
    async (item: Verification, reason: string) => {
      setBusyId(item._id)
      try {
        await rejectVerification(item._id, reason)
        patchItem({ ...item, status: 'REJECTED', rejectionReason: reason })
        showToast({ type: 'success', msg: 'Verification rejected' })
        return true
      } catch (err) {
        showToast({ type: 'error', msg: getApiErrorMessage(err) })
        return false
      } finally {
        setBusyId(null)
      }
    },
    [patchItem]
  )

  const filtered = useMemo(() => {
    let list = items
    if (filter !== 'ALL') list = list.filter(v => v.status === filter)
    const q = query.trim().toLowerCase()
    if (q)
      list = list.filter(
        v =>
          v.address?.toLowerCase().includes(q) ||
          v.idNumber?.toLowerCase().includes(q) ||
          v.userId?.toLowerCase().includes(q)
      )
    return list
  }, [items, filter, query])

  const pageCounts = useMemo(() => {
    const c: Record<string, number> = { ALL: items.length }
    items.forEach(v => (c[v.status] = (c[v.status] ?? 0) + 1))
    return c
  }, [items])

  return {
    items,
    filtered,
    page,
    setPage,
    totalPages,
    total,
    loading,
    busyId,
    filter,
    setFilter,
    query,
    setQuery,
    pageCounts,
    refresh: () => fetchPage(page),
    approve,
    reject,
  }
}
