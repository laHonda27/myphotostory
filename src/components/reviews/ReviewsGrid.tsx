import React from 'react';
import ReviewCard from './ReviewCard';
import ReviewCardSkeleton from './ReviewCardSkeleton';
import Pagination from '../ui/Pagination';
import ReviewsStats from './ReviewsStats';
import { useReviews } from '../../hooks/useReviews';

interface ReviewsGridProps {
  selectedCategory: string;
  selectedRating: number | null;
  searchQuery: string;
}

export default function ReviewsGrid({ 
  selectedCategory, 
  selectedRating,
  searchQuery 
}: ReviewsGridProps) {
  const {
    reviews,
    isLoading,
    currentPage,
    totalPages,
    handlePageChange
  } = useReviews(selectedCategory, selectedRating, searchQuery);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[...Array(9)].map((_, i) => (
          <ReviewCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Aucun avis ne correspond à vos critères.</p>
      </div>
    );
  }

  return (
    <section id="reviews-list" className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </section>
  );
}