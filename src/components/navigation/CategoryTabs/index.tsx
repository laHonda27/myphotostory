import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { cn } from '../../../utils/styles';

interface CategoryTabsProps {
  categories: {
    id: string;
    label: string;
    path: string;
  }[];
}

export default function CategoryTabs({ categories }: CategoryTabsProps) {
  const location = useLocation();

  return (
    <nav className="relative bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className={cn(
                'relative py-4 px-1 text-base font-medium transition-colors whitespace-nowrap',
                location.pathname === category.path
                  ? 'text-white'
                  : 'text-gray-400 hover:text-gray-200'
              )}
            >
              {category.label}
              {location.pathname === category.path && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}