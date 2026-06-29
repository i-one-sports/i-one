import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useIsMobile } from '../../hooks/useMediaQuery'

interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  maxWidth?: string
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  maxWidth = 'max-w-lg',
}) => {
  const isMobile = useIsMobile()

  // Bottom-sheet on mobile, centered dialog on larger screens.
  const panelMotion = isMobile
    ? {
        initial: { y: '100%' },
        animate: { y: 0 },
        exit: { y: '100%' },
        transition: { type: 'spring' as const, damping: 32, stiffness: 360 },
      }
    : {
        initial: { scale: 0.96, y: 16, opacity: 0 },
        animate: { scale: 1, y: 0, opacity: 1 },
        exit: { scale: 0.96, y: 16, opacity: 0 },
        transition: { type: 'spring' as const, damping: 26, stiffness: 320 },
      }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-[3px]"
            onClick={onClose}
          />
          <motion.div
            {...panelMotion}
            className={`relative flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl shadow-slate-900/20 sm:max-h-[90vh] sm:rounded-3xl ${maxWidth}`}
          >
            {/* Mobile grab handle */}
            <div className="flex justify-center pt-3 sm:hidden">
              <span className="h-1.5 w-10 rounded-full bg-slate-200" />
            </div>

            {title && (
              <div className="flex items-center justify-between gap-4 px-6 pb-4 pt-4 sm:border-b sm:border-slate-100">
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <button
                  onClick={onClose}
                  className="-mr-1 grid h-8 w-8 place-items-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                >
                  <X size={18} />
                </button>
              </div>
            )}

            <div className="overflow-y-auto px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-2 sm:pb-6 sm:pt-6 scrollbar-thin scrollbar-thumb-slate-200">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
