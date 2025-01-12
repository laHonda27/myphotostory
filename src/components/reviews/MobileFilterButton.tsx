import React from 'react';
import { Filter } from 'lucide-react';
import { motion } from 'framer-motion';

interface MobileFilterButtonProps {
  onToggle: () => void;
  isOpen: boolean;
  activeFiltersCount: number;
}

export default function MobileFilterButton({ 
  onToggle, 
  isOpen,
  activeFiltersCount 
}: MobileFilterButtonProps) {
  return (
    <motion.button
      onClick={onToggle}
      className={`
        fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 
        rounded-full shadow-lg md:hidden
        ${isOpen ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}
      `}
      whileTap={{ scale: 0.95 }}
    >
      <Filter className="w-5 h-5" />
      <span>Filtres</span>
      {activeFiltersCount > 0 && (
        <span className="flex items-center justify-center w-5 h-5 text-xs bg-primary text-white rounded-full">
          {activeFiltersCount}
        </span>
      )}
    </motion.button>
  );
}