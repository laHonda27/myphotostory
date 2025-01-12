import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ContactButton() {
  return (
    <button 
      onClick={() => window.location.href = '/contact'}
      className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded flex items-center justify-center space-x-2 transition-colors duration-200"
    >
      <span>Être contacté</span>
      <ArrowRight className="w-4 h-4" />
    </button>
  );
}