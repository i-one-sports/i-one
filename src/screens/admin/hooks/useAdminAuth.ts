import { useAppDispatch, useAppSelector } from '@/redux/store'
import { logout } from '@/redux/reducers/auth'
import { logOut } from '@/api/auth'

/** Derived admin identity + a one-call sign-out. */
export const useAdminAuth = () => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(state => state.auth)

  const fullName =
    [user?.firstName, user?.lastName].filter(Boolean).join(' ') || 'Super Admin'
  const email = user?.email ?? ''
  const roleLabel = (user?.role ?? 'super_admin').toString().replace('_', ' ')
  const seed = email || 'SA'

  const signOut = () => {
    dispatch(logOut())
    dispatch(logout())
  }

  return { user, fullName, email, roleLabel, seed, signOut }
}
