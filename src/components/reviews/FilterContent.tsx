import React from 'react';
import { Star } from 'lucide-react';
import { categories } from '../../data/reviews';
import { motion } from 'framer-motion';
import { useScrollToReviews } from '../../hooks/useScrollToReviews';

interface FilterContentProps {
  selectedCategory: string;
  selectedRating: number | null;
  onCategoryChange: (category: string) => void;
  onRatingChange: (rating: number | null) => void;
  categoryCounts: Record<string, number>;
}

export default function FilterContent({
  selectedCategory,
  selectedRating,
  onCategoryChange,
  onRatingChange,
  categoryCounts
}: FilterContentProps) {
  const scrollToReviews = useScrollToReviews();

  const handleCategoryChange = (category: string) => {
    onCategoryChange(category);
    scrollToReviews();
  };

  const handleRatingChange = (rating: number | null) => {
    onRatingChange(rating);
    scrollToReviews();
  };
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Catégories</h3>
        <div className="grid grid-cols-2 gap-2">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`
                p-3 rounded-lg text-sm text-left transition-colors
                ${selectedCategory === category.id 
                  ? 'bg-primary text-white shadow-[0_2px_4px_rgba(197,165,114,0.2)]' 
                  : 'bg-gray-50 hover:bg-gray-100 shadow-[0_2px_3px_rgba(0,0,0,0.05)]'
                }
              `}
              whileTap={{ scale: 0.95 }}
            >
              <span className="block font-medium">{category.label}</span>
              <span className="text-xs opacity-80">
                {categoryCounts[category.id] || 0} avis
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Note minimum</h3>
        <div className="grid grid-cols-2 gap-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <motion.button
              key={rating}
              onClick={() => handleRatingChange(selectedRating === rating ? null : rating)}
              className={`
                p-3 rounded-lg text-sm transition-colors
                ${selectedRating === rating 
                  ? 'bg-primary text-white shadow-[0_2px_4px_rgba(197,165,114,0.2)]' 
                  : 'bg-gray-50 hover:bg-gray-100 shadow-[0_2px_3px_rgba(0,0,0,0.05)]'
                }
              `}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center gap-1">
                <Star 
                  className={`w-4 h-4 ${
                    selectedRating === rating ? 'fill-white' : 'fill-primary'
                  }`} 
                />
                <span>{rating}+</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}