import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import FilterContent from './FilterContent';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: string;
  selectedRating: number | null;
  onCategoryChange: (category: string) => void;
  onRatingChange: (rating: number | null) => void;
  categoryCounts: Record<string, number>;
}

export default function FilterDrawer({
  isOpen,
  onClose,
  selectedCategory,
  selectedRating,
  onCategoryChange,
  onRatingChange,
  categoryCounts
}: FilterDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-10 bottom-0 w-[80%] max-w-md bg-white z-50 md:hidden"
          >
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Filtres</h3>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-4 overflow-y-auto h-[calc(100vh-104px)]">
              <FilterContent
                selectedCategory={selectedCategory}
                selectedRating={selectedRating}
                onCategoryChange={onCategoryChange}
                onRatingChange={onRatingChange}
                categoryCounts={categoryCounts}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}