import React from 'react';
import { Send } from 'lucide-react';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export default function SubmitButton({ isSubmitting }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200"
    >
      {isSubmitting ? (
        <>
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span>Envoi en cours...</span>
        </>
      ) : (
        <>
          <span>Envoyer le message</span>
          <Send className="w-5 h-5" />
        </>
      )}
    </button>
  );
}