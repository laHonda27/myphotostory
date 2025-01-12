import React from 'react';
import Spinner from './Spinner';

interface SubmitButtonProps {
  isSubmitting: boolean;
  children: React.ReactNode;
}

export default function SubmitButton({ isSubmitting, children }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`
        w-full bg-primary text-white py-3 px-6 rounded-lg 
        hover:bg-primary/90 disabled:bg-primary/70 disabled:cursor-not-allowed
        transition-colors duration-200 flex items-center justify-center gap-2
      `}
    >
      {isSubmitting ? (
        <>
          <Spinner />
          <span>Envoi en cours...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}