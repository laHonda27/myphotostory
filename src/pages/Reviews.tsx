import React, { useState } from 'react';
import ReviewsHero from '../components/reviews/ReviewsHero';
import ReviewsGrid from '../components/reviews/ReviewsGrid';
import ReviewsStats from '../components/reviews/ReviewsStats';
import FilterDrawer from '../components/reviews/FilterDrawer';
import MobileFilterButton from '../components/reviews/MobileFilterButton';
import FilterContent from '../components/reviews/FilterContent';
import ReviewsSearch from '../components/reviews/ReviewsSearch';
import ReviewsCTA from '../components/reviews/ReviewsCTA';
import { reviews } from '../data/reviews';

export default function Reviews() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Calculate category counts
  const categoryCounts = reviews.reduce((acc, review) => {
    const category = review.service.toLowerCase();
    acc[category] = (acc[category] || 0) + 1;
    acc['all'] = (acc['all'] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const activeFiltersCount = (selectedCategory !== 'all' ? 1 : 0) + 
    (selectedRating !== null ? 1 : 0);

  return (
    <main className="pt-32 pb-20 bg-gray-50">
      <ReviewsHero />
      <div className="max-w-[1400px] mx-auto px-5">
        <ReviewsStats />
        <div className="flex flex-col lg:flex-row gap-8 relative">
          {/* Filters Sidebar */}
          <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-44">
              <FilterContent
                selectedCategory={selectedCategory}
                selectedRating={selectedRating}
                onCategoryChange={setSelectedCategory}
                onRatingChange={setSelectedRating}
                categoryCounts={categoryCounts}
              />
            </div>
          </aside>
          
          {/* Main Content */}
          <div className="flex-1 min-w-0 lg:max-w-[calc(100%-20rem)]">
            <ReviewsSearch onSearch={setSearchQuery} />
            <ReviewsGrid
              selectedCategory={selectedCategory}
              selectedRating={selectedRating}
              searchQuery={searchQuery}
            />
          </div>
        </div>

        {/* Mobile Filter Button & Drawer */}
        <MobileFilterButton
          onToggle={() => setIsFilterOpen(!isFilterOpen)}
          isOpen={isFilterOpen}
          activeFiltersCount={activeFiltersCount}
        />
        <FilterDrawer
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          selectedCategory={selectedCategory}
          selectedRating={selectedRating}
          onCategoryChange={setSelectedCategory}
          onRatingChange={setSelectedRating}
          categoryCounts={categoryCounts}
        />
      </div>
      <ReviewsCTA />
    </main>
  );
}