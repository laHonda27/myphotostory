import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Category, MediaType } from '../../types/portfolio';

interface CategoryNavProps {
  categories: Category[];
  selectedCategory: string;
  selectedMediaType: MediaType;
  onSelectCategory: (category: string) => void;
  onMediaTypeChange: (type: MediaType) => void;
}

export default function CategoryNav({
  categories,
  selectedCategory,
  selectedMediaType,
  onSelectCategory,
  onMediaTypeChange
}: CategoryNavProps) {
  return (
    <nav className="relative mb-8">
      <div className="flex flex-col items-center gap-6">
        <div className="w-full overflow-x-auto scrollbar-hide border-b border-gray-200">
          <div className="flex justify-start md:justify-center min-w-max px-4">
            <div className="flex space-x-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => onSelectCategory(category.id)}
                  className="relative py-4 px-2 text-base font-medium transition-colors whitespace-nowrap"
                >
                  <span className={selectedCategory === category.id ? 'text-primary' : 'text-gray-500 hover:text-gray-700'}>
                    {category.label}
                  </span>
                  {selectedCategory === category.id && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Sélecteur Photos/Vidéos */}
        <div className="inline-flex rounded-full bg-gray-100 p-1">
          <button
            onClick={() => onMediaTypeChange('photos')}
            className={`px-8 py-2 rounded-full transition-colors ${
              selectedMediaType === 'photos'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Photos
          </button>
          <button
            onClick={() => onMediaTypeChange('videos')}
            className={`px-8 py-2 rounded-full transition-colors ${
              selectedMediaType === 'videos'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Vidéos
          </button>
        </div>
      </div>
    </nav>
  );
}