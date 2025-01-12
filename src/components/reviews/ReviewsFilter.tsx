import React from 'react';
import { Star } from 'lucide-react';
import { categories } from '../../data/reviews';

interface ReviewsFilterProps {
  selectedCategory: string;
  selectedRating: number | null;
  onCategoryChange: (category: string) => void;
  onRatingChange: (rating: number | null) => void;
}

export default function ReviewsFilter({
  selectedCategory,
  selectedRating,
  onCategoryChange,
  onRatingChange,
}: ReviewsFilterProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-32">
      <div className="space-y-8">
        {/* Catégories */}
        <div>
          <h3 className="font-medium text-gray-900 mb-4">Catégories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`
                  w-full text-left px-4 py-2 rounded-lg transition-colors
                  ${selectedCategory === category.id 
                    ? 'bg-primary text-white' 
                    : 'text-gray-600 hover:bg-gray-50'
                  }
                `}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div>
          <h3 className="font-medium text-gray-900 mb-4">Note minimum</h3>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <button
                key={rating}
                onClick={() => onRatingChange(selectedRating === rating ? null : rating)}
                className={`
                  w-full flex items-center justify-between px-4 py-2 rounded-lg transition-colors
                  ${selectedRating === rating 
                    ? 'bg-primary text-white' 
                    : 'text-gray-600 hover:bg-gray-50'
                  }
                `}
              >
                <div className="flex items-center">
                  <Star className={`w-4 h-4 mr-1 ${
                    selectedRating === rating ? 'fill-white' : 'fill-primary'
                  }`} />
                  <span>{rating}</span>
                </div>
                <span className="text-sm">et plus</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}