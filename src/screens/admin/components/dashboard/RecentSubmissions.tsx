import React from 'react'
import { Inbox } from 'lucide-react'
import Card, { CardHeader } from '../common/Card'
import EmptyState from '../common/EmptyState'
import RecentSubmissionItem from './RecentSubmissionItem'
import RecentSubmissionsSkeleton from './RecentSubmissionsSkeleton'
import type { Verification } from '@/api/admin'

interface RecentSubmissionsProps {
  items: Verification[]
  loading: boolean
  onViewAll: () => void
  onSelect: (item: Verification) => void
}

const RecentSubmissions: React.FC<RecentSubmissionsProps> = ({
  items,
  loading,
  onViewAll,
  onSelect,
}) => (
  <Card className="lg:col-span-2">
    <CardHeader
      title="Recent Submissions"
      action={
        <button
          onClick={onViewAll}
          className="text-sm font-semibold text-primary transition hover:text-emerald-600"
        >
          View all
        </button>
      }
    />
    {loading ? (
      <RecentSubmissionsSkeleton />
    ) : items.length === 0 ? (
      <EmptyState
        icon={<Inbox size={24} />}
        title="No submissions yet"
        subtitle="Verification requests will appear here as users submit them."
      />
    ) : (
      <ul className="divide-y divide-slate-100">
        {items.map(item => (
          <RecentSubmissionItem
            key={item._id}
            item={item}
            onClick={() => onSelect(item)}
          />
        ))}
      </ul>
    )}
  </Card>
)

export default RecentSubmissions
