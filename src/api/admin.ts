// admin.ts — Super-admin dashboard API calls.
// Endpoints are served under the `/i-one` prefix and rely on the httpOnly
// `Authentication` cookie (axiosInstance has `withCredentials: true`).
import axiosInstance from './axios'
import type {
  AdminProfile,
  FundWalletResponse,
  PromotableRole,
  VerificationsResponse,
  WalletResponse,
} from './admin.types'

// Re-export the types so existing `@/api/admin` imports keep working.
export type * from './admin.types'

export const getProfile = async (): Promise<AdminProfile> => {
  const { data } = await axiosInstance.get('/i-one/user/profile')
  return data
}

export const getVerifications = async (
  page = 1,
  limit = 20
): Promise<VerificationsResponse> => {
  const { data } = await axiosInstance.get('/i-one/verification/all', {
    params: { page, limit },
  })
  return data
}

export const approveVerification = async (id: string) => {
  const { data } = await axiosInstance.patch(`/i-one/verification/${id}/approve`)
  return data
}

export const rejectVerification = async (
  id: string,
  rejectionReason: string
) => {
  const { data } = await axiosInstance.patch(
    `/i-one/verification/${id}/reject`,
    { rejectionReason }
  )
  return data
}

export const promoteUser = async (userId: string, role: PromotableRole) => {
  const { data } = await axiosInstance.patch(`/i-one/user/promote/${userId}`, {
    role,
  })
  return data
}

export const getUserWallet = async (
  userId: string
): Promise<WalletResponse> => {
  const { data } = await axiosInstance.get(`/i-one/wallet/user/${userId}`)
  return data
}

export const fundWallet = async (
  userId: string,
  amount: number
): Promise<FundWalletResponse> => {
  const { data } = await axiosInstance.post('/i-one/admin/billing/fund-wallet', {
    userId,
    amount,
  })
  return data
}
