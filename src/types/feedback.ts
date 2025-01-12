export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastProps {
  isVisible: boolean;
  onClose: () => void;
  type?: ToastType;
  title?: string;
  message?: string;
}

export const TOAST_COLORS = {
  success: '#4CAF50',
  error: '#F44336',
  info: '#2196F3',
  warning: '#FF9800'
} as const;