import React from 'react';
import { motion } from 'framer-motion';
import { GalleryImage } from '../../types/gallery';

interface ImageCardProps {
  image: GalleryImage;
  onClick: () => void;
}

export default function ImageCard({ image, onClick }: ImageCardProps) {
  return (
    <motion.div
      layoutId={`image-${image.id}`}
      className="aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
    >
      <img
        src={image.url}
        alt={image.caption}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <p className="text-lg font-medium">{image.caption}</p>
        </div>
      </div>
    </motion.div>
  );
}