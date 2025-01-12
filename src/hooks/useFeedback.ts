import { useState, useCallback } from 'react';
import { ToastType } from '../types/feedback';

interface FeedbackOptions {
  type?: ToastType;
  title?: string;
  message?: string;
}

export function useFeedback() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastConfig, setToastConfig] = useState<FeedbackOptions>({});

  const showFeedback = useCallback((options: FeedbackOptions = {}) => {
    setToastConfig(options);
    setShowConfetti(options.type === 'success');
    setShowToast(true);
    
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  }, []);

  const resetFeedback = useCallback(() => {
    setShowConfetti(false);
    setShowToast(false);
    setToastConfig({});
  }, []);

  return {
    showConfetti,
    showToast,
    toastConfig,
    showFeedback,
    resetFeedback
  };
}