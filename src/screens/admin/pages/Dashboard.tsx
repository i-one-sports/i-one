import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useVerificationStats } from '../hooks/useVerificationStats'
import {
  WelcomeBanner,
  StatCardGrid,
  StatusBreakdown,
  RecentSubmissions,
} from '../components/dashboard'

const Dashboard: React.FC = () => {
  const navigate = useNavigate()
  const { total, loading, counts, recent } = useVerificationStats()
  const goToVerifications = () => navigate('/admin/verifications')

  return (
    <div className="space-y-6">
      <WelcomeBanner pendingCount={counts.PENDING} onReview={goToVerifications} />

      <StatCardGrid total={total} counts={counts} loading={loading} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <RecentSubmissions
          items={recent}
          loading={loading}
          onViewAll={goToVerifications}
          onSelect={goToVerifications}
        />
        <StatusBreakdown counts={counts} total={total} />
      </div>
    </div>
  )
}

export default Dashboard
