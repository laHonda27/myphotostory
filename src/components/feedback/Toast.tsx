import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { ToastProps, ToastType, TOAST_COLORS } from '../../types/feedback';

const TOAST_ICONS = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
  warning: AlertTriangle
} as const;

export default function Toast({ 
  isVisible, 
  onClose,
  type = 'success',
  title = 'Message envoyé avec succès',
  message = 'Nous vous répondrons dans les plus brefs délais'
}: ToastProps) {
  const Icon = TOAST_ICONS[type];
  const borderColor = TOAST_COLORS[type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -20, x: 20 }}
          transition={{ 
            type: 'spring', 
            stiffness: 300, 
            damping: 25,
            duration: 0.4 
          }}
          className="fixed top-20 right-4 z-[9999] max-w-sm"
        >
          <div 
            className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg flex items-start gap-3 transform-gpu"
            style={{
              borderLeft: `4px solid ${borderColor}`,
              borderTop: '1px solid #E5E7EB',
              borderRight: '1px solid #E5E7EB',
              borderBottom: '1px solid #E5E7EB'
            }}
          >
            <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: borderColor }} />
            <div>
              <h3 className="font-medium text-gray-900">
                {title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {message}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}