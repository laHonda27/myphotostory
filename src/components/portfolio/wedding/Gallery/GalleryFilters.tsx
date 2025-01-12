import React from 'react';
import { Category } from '../../../../types/portfolio';

interface GalleryFiltersProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function GalleryFilters({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: GalleryFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-8 justify-center">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-2 rounded-full transition-colors ${
            selectedCategory === category.id
              ? 'bg-primary text-white'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}