import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function VideoCardSkeleton() {
  return (
    <div>
      <div className="aspect-video mb-2">
        <Skeleton height="100%" />
      </div>
      <Skeleton width="75%" height={20} />
      <Skeleton width="50%" height={16} />
    </div>
  );
}