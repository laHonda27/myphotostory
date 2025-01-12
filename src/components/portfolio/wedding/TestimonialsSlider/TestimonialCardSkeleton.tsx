import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function TestimonialCardSkeleton() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <Skeleton circle width={64} height={64} />
        <div>
          <Skeleton width={120} height={20} />
          <Skeleton width={80} height={16} />
        </div>
      </div>
      <Skeleton count={3} />
    </div>
  );
}