/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './redux/store.js'
import { getUser } from './api/auth.js'
import { AnimatePresence, motion } from 'framer-motion'
import Preloader from './components/Preloader.js'
import ProtectedRoute from './components/ProtectedRoute.js'
import RouteFallback from './components/RouteFallback.js'

// Code-split every route so each screen ships in its own chunk.
const Home = React.lazy(() => import('./screens/home/index.js'))
const How = React.lazy(() => import('./screens/how/index.js'))
const Services = React.lazy(() => import('./screens/services/index.js'))
const SignUp = React.lazy(() => import('./screens/sign-up/index.js'))
const Role = React.lazy(() => import('./screens/choose-role/Index.js'))
const ForgetPassword = React.lazy(
  () => import('./screens/forgot-password/Index.js')
)
const ResetPassword = React.lazy(
  () => import('./screens/reset-password/Index.js')
)
const SignIn = React.lazy(() => import('./screens/sign-in/index.js'))
const ResetSuccess = React.lazy(
  () => import('./screens/reset-success/index.js')
)
const Homepage = React.lazy(() => import('./screens/Homepage/index.js'))
const Schedule = React.lazy(() => import('./screens/schedule/index.js'))
const Tournaments = React.lazy(() => import('./screens/tournaments/index.js'))
const Profile = React.lazy(() => import('./screens/profile/index.js'))
const ScheduleDetail = React.lazy(
  () => import('./screens/schedule-detail/index.js')
)
const Lineup = React.lazy(() => import('./screens/upcoming-match/index.js'))
const ProfileStats = React.lazy(
  () => import('./screens/profile-stats/index.js')
)
const Verify = React.lazy(() => import('./screens/verify/Index.js'))
const LivePage = React.lazy(() => import('./screens/live-match/index.js'))
const Privacy = React.lazy(() => import('./screens/privacy/index.js'))
const DeleteAccount = React.lazy(
  () => import('./screens/DeleteAccount/index.js')
)

// Admin area — lazily loaded as its own chunk.
const AdminLayout = React.lazy(() => import('./screens/admin/AdminLayout.js'))
const AdminDashboard = React.lazy(
  () => import('./screens/admin/pages/Dashboard.js')
)
const Verifications = React.lazy(
  () => import('./screens/admin/pages/Verifications.js')
)
const AdminUsers = React.lazy(() => import('./screens/admin/pages/Users.js'))

const ADMIN_ROLES = ['admin', 'super_admin']

const AppContent = () => {
  const { isAuthenticated, isRegistered, user } = useAppSelector(
    state => state.auth
  )
  const role = (user?.role ?? '').toString()
  const isAdmin = isAuthenticated && ADMIN_ROLES.includes(role)
  const dispatch = useAppDispatch()
  React.useEffect(() => {
    dispatch(getUser())
  }, [dispatch])
  return (
    <Router>
      <React.Suspense fallback={<RouteFallback />}>
        <Routes>
          {!isAuthenticated && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/how-it-works" element={<How />} />
              <Route path="/services" element={<Services />} />
              <Route path="/role" element={<Role />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/forgot-password" element={<ForgetPassword />} />
              <Route path="/verification" element={<Verify />} />
              <Route path="/reset" element={<ResetPassword />} />
              <Route path="/reset-success" element={<ResetSuccess />} />
              <Route path="/privacy" element={<Privacy />} />
            </>
          )}

          {isAdmin && (
            <>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="verifications" element={<Verifications />} />
                <Route path="users" element={<AdminUsers />} />
              </Route>
              <Route path="*" element={<Navigate to="/admin" replace />} />
            </>
          )}

          {isAuthenticated && !isAdmin && (
            <>
              <Route path="/" element={<Homepage />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/schedule-detail" element={<ScheduleDetail />} />
              <Route path="/tournament" element={<Tournaments />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/upcoming-match" element={<Lineup />} />
              <Route path="/profile-stats" element={<ProfileStats />} />
              <Route path="/live-match" element={<LivePage />} />
              {/* <Route path="/delete-account" element={<DeleteAccount />} /> */}
            </>
          )}
          <Route
            path="/delete-account"
            element={
              <ProtectedRoute>
                <DeleteAccount />
              </ProtectedRoute>
            }
          />
        </Routes>
      </React.Suspense>
    </Router>
  )
}

const App = () => {
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])
  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Preloader key="preloader" />
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <AppContent />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default App
