import React, { useEffect, useState } from 'react'
import { ShieldPlus } from 'lucide-react'
import Modal from '../common/Modal'
import Button from '../common/Button'
import RoleOptionCard from './RoleOptionCard'
import { ROLE_OPTIONS } from './constants'
import { promoteUser } from '@/api/admin'
import type { PromotableRole } from '@/api/admin'
import { showToast } from '@/components/Toast'
import { getApiErrorMessage } from '../../utils/errors'

interface PromoteUserModalProps {
  open: boolean
  userId: string
  onClose: () => void
}

const PromoteUserModal: React.FC<PromoteUserModalProps> = ({
  open,
  userId,
  onClose,
}) => {
  const [role, setRole] = useState<PromotableRole>('admin')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (open) setRole('admin')
  }, [open])

  const submit = async () => {
    setLoading(true)
    try {
      const res = await promoteUser(userId, role)
      showToast({
        type: 'success',
        msg: res?.message || `Role updated to ${role}`,
      })
      onClose()
    } catch (err) {
      showToast({ type: 'error', msg: getApiErrorMessage(err) })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal open={open} onClose={onClose} title="Change User Role">
      <div className="space-y-4">
        <p className="text-sm text-slate-500">
          Grant elevated access to this user. This takes effect immediately.
        </p>
        <div className="space-y-2.5">
          {ROLE_OPTIONS.map(option => (
            <RoleOptionCard
              key={option.value}
              option={option}
              selected={role === option.value}
              onSelect={() => setRole(option.value)}
            />
          ))}
        </div>
        <div className="flex justify-end gap-3 pt-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            loading={loading}
            icon={<ShieldPlus size={16} />}
            onClick={submit}
          >
            Update role
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default PromoteUserModal
