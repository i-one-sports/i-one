import type { PromotableRole } from '@/api/admin'

export const QUICK_AMOUNTS = [1000, 5000, 10000, 50000]

export interface RoleOption {
  value: PromotableRole
  label: string
  desc: string
}

export const ROLE_OPTIONS: RoleOption[] = [
  {
    value: 'admin',
    label: 'Admin',
    desc: 'Can review and manage verifications.',
  },
  {
    value: 'super_admin',
    label: 'Super Admin',
    desc: 'Full access including roles, wallets & funding.',
  },
]
