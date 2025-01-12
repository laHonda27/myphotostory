import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Category } from '../../types/gallery';

interface CategoryNavProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryNav({ categories, selectedCategory, onSelectCategory }: CategoryNavProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -200 : 200;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative mb-8">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => scroll('left')}
          className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      <div 
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide px-8 py-2"
      >
        <div className="flex gap-4 min-w-max">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-white hover:bg-gray-50'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => scroll('right')}
          className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}