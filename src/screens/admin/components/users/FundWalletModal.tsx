import React, { useEffect, useState } from 'react'
import { Banknote } from 'lucide-react'
import Modal from '../common/Modal'
import Button from '../common/Button'
import AmountInput from './AmountInput'
import { fundWallet } from '@/api/admin'
import { showToast } from '@/components/Toast'
import { getApiErrorMessage } from '../../utils/errors'
import { formatNaira } from '../../utils/format'

interface FundWalletModalProps {
  open: boolean
  userId: string
  currency?: string
  onClose: () => void
  onSuccess: () => void
}

const FundWalletModal: React.FC<FundWalletModalProps> = ({
  open,
  userId,
  currency,
  onClose,
  onSuccess,
}) => {
  const [amount, setAmount] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (open) setAmount('')
  }, [open])

  const submit = async () => {
    const value = Number(amount)
    if (!value || value <= 0) {
      showToast({ type: 'error', msg: 'Enter a valid amount' })
      return
    }
    setLoading(true)
    try {
      const res = await fundWallet(userId, value)
      showToast({
        type: 'success',
        msg: `${formatNaira(value, currency)} added · new balance ${formatNaira(
          res.transaction.balanceAfter,
          currency
        )}`,
      })
      onSuccess()
    } catch (err) {
      showToast({ type: 'error', msg: getApiErrorMessage(err) })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal open={open} onClose={onClose} title="Fund Wallet">
      <div className="space-y-4">
        <p className="text-sm text-slate-500">
          Credit this user's wallet. The funds are available immediately.
        </p>
        <AmountInput value={amount} onChange={setAmount} />
        <div className="flex justify-end gap-3 pt-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="success"
            loading={loading}
            icon={<Banknote size={16} />}
            onClick={submit}
          >
            Fund {amount ? formatNaira(Number(amount), currency) : 'wallet'}
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default FundWalletModal
