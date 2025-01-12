import React from 'react';
import { motion } from 'framer-motion';
import { Photo } from '../../../../types/portfolio';
import ImageWithSkeleton from '../../../ui/ImageWithSkeleton';

interface GalleryGridProps {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
}

export default function GalleryGrid({ photos, onPhotoClick }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {photos.map((photo) => (
        <motion.div
          key={photo.id}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
          onClick={() => onPhotoClick(photo)}
        >
          <div className="relative h-full">
            <ImageWithSkeleton
              src={photo.url}
              alt={photo.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-lg font-playfair">{photo.caption}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}