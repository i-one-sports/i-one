import { LayoutGrid, BadgeCheck, UsersRound } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  to: string
  label: string
  icon: LucideIcon
  end?: boolean
}

export const NAV_ITEMS: NavItem[] = [
  { to: '/admin', label: 'Overview', icon: LayoutGrid, end: true },
  { to: '/admin/verifications', label: 'Verifications', icon: BadgeCheck },
  { to: '/admin/users', label: 'User Management', icon: UsersRound },
]

export interface PageMeta {
  title: string
  subtitle: string
}

export const PAGE_META: Record<string, PageMeta> = {
  '/admin': {
    title: 'Dashboard Overview',
    subtitle: 'Monitor verifications and platform activity at a glance.',
  },
  '/admin/verifications': {
    title: 'Verification Requests',
    subtitle: 'Review, approve or reject pitch-owner KYC submissions.',
  },
  '/admin/users': {
    title: 'User Management',
    subtitle: 'Manage roles, wallets and balances for platform users.',
  },
}
