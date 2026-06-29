import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Sidebar from './Sidebar'

interface MobileSidebarProps {
  open: boolean
  onClose: () => void
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ open, onClose }) => (
  <AnimatePresence>
    {open && (
      <>
        <motion.div
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-[2px] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        <motion.aside
          className="fixed inset-y-0 left-0 z-50 w-[264px] border-r border-slate-200 bg-white shadow-2xl shadow-slate-900/10 lg:hidden"
          initial={{ x: -280 }}
          animate={{ x: 0 }}
          exit={{ x: -280 }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        >
          <button
            onClick={onClose}
            className="absolute right-3 top-5 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          >
            <X size={18} />
          </button>
          <Sidebar onNavigate={onClose} />
        </motion.aside>
      </>
    )}
  </AnimatePresence>
)

export default MobileSidebar
