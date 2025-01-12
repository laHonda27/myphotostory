import React from 'react';
import { Search } from 'lucide-react';
import { useScrollToReviews } from '../../hooks/useScrollToReviews';

interface ReviewsSearchProps {
  onSearch: (query: string) => void;
}

export default function ReviewsSearch({ onSearch }: ReviewsSearchProps) {
  const scrollToReviews = useScrollToReviews();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
    scrollToReviews();
  };

  return (
    <div className="mb-8" role="search">
      <div className="relative">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Rechercher dans les avis..."
          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
}