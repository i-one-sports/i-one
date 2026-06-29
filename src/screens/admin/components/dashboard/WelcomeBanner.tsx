import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface WelcomeBannerProps {
  pendingCount: number
  onReview: () => void
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({
  pendingCount,
  onReview,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-emerald-500 to-teal-600 p-6 text-white shadow-lg shadow-primary/20 lg:p-8"
  >
    {/* decorative orbs */}
    <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/10" />
    <div className="absolute -bottom-20 right-28 h-52 w-52 rounded-full bg-white/5" />
    

    <div className="relative">
      <p className="text-sm font-medium text-emerald-50/90">Welcome back 👋</p>
      <h2 className="mt-1 max-w-xl text-2xl font-bold leading-tight lg:text-3xl">
        {pendingCount > 0
          ? `${pendingCount} submission${pendingCount > 1 ? 's' : ''} awaiting your review`
          : 'All caught up — no pending reviews'}
      </h2>
      <p className="mt-2 max-w-lg text-sm text-emerald-50/80">
        Keep verifications moving so pitch owners can start receiving payments to
        their wallets.
      </p>
      <button
        onClick={onReview}
        className="group mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50"
      >
        Review queue
        <ArrowUpRight
          size={16}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </button>
    </div>
  </motion.div>
)

export default WelcomeBanner
