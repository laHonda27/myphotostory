import React from 'react';
import { motion } from 'framer-motion';
import ImageCard from './ImageCard';
import ImageCardSkeleton from './ImageCardSkeleton';
import { GalleryImage } from '../../types/gallery';

interface ImageGridProps {
  images: GalleryImage[];
  isLoading: boolean;
  onImageClick: (image: GalleryImage) => void;
}

export default function ImageGrid({ images, isLoading, onImageClick }: ImageGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <ImageCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {images.map((image) => (
        <ImageCard
          key={image.id}
          image={image}
          onClick={() => onImageClick(image)}
        />
      ))}
    </motion.div>
  );
}