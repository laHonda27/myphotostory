import { useState, useEffect, useCallback } from 'react';
import { Review } from '../types/reviews';
import { reviews as mockReviews } from '../data/reviews';
import { useScrollToReviews } from './useScrollToReviews';

const ITEMS_PER_PAGE = 6;

export function useReviews(
  selectedCategory: string, 
  selectedRating: number | null,
  searchQuery: string
) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const scrollToReviews = useScrollToReviews();

  const filterReviews = useCallback(() => {
    let filtered = [...mockReviews];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        review => review.service.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }
    
    // Filter by rating
    if (selectedRating !== null) {
      filtered = filtered.filter(review => review.rating >= selectedRating);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(review => 
        review.comment.toLowerCase().includes(query) ||
        review.name.toLowerCase().includes(query) ||
        review.service.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [selectedCategory, selectedRating, searchQuery]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        // Simulate network delay only in development
        if (process.env.NODE_ENV === 'development') {
          await new Promise(resolve => setTimeout(resolve, 500));
        }
        
        const filteredReviews = filterReviews();
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        
        setReviews(filteredReviews.slice(startIndex, endIndex));
        setTotalPages(Math.ceil(filteredReviews.length / ITEMS_PER_PAGE));
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [currentPage, filterReviews]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedRating, searchQuery]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Défilement immédiat pour la pagination
    scrollToReviews(true);
  };

  return {
    reviews,
    isLoading,
    currentPage,
    totalPages,
    handlePageChange
  };
}