// Type definitions for the super-admin dashboard API.

export type VerificationStatus = 'PENDING' | 'APPROVED' | 'REJECTED'

export interface Verification {
  _id: string
  userId: string
  idType: string
  idNumber: string
  address: string
  frontUrl: string
  backUrl: string
  locationPictures: string[]
  status: VerificationStatus
  rejectionReason: string | null
  createdAt: string
  updatedAt: string
}

export interface Pagination {
  page: number
  limit: number
  total: number
  totalPages: number
}

export interface VerificationsResponse {
  verifications: Verification[]
  pagination: Pagination
}

export interface Wallet {
  _id: string
  userId: string
  balance: number
  ledgerBalance: number
  status: string
  currency: string
  createdAt?: string
  updatedAt?: string
}

export interface Dva {
  _id?: string
  userId: string
  walletId?: string
  accountNumber: string
  bankName: string
  bankCode?: string
  accountName: string
  status?: string
  currency?: string
}

export interface WalletResponse {
  wallet: Wallet
  dva: Dva | null
}

export interface AdminProfile {
  _id: string
  firstName: string
  lastName: string
  email: string
  nickname?: string
  address?: string
  phoneNumber?: string
  role: string
  emailVerified?: boolean
}

export type PromotableRole = 'admin' | 'super_admin'

export interface FundWalletResponse {
  message: string
  transaction: {
    _id: string
    walletId: string
    userId: string
    type: string
    amount: number
    balanceBefore: number
    balanceAfter: number
    status: string
    source: string
    reference: string
    metadata: Record<string, unknown>
  }
}
