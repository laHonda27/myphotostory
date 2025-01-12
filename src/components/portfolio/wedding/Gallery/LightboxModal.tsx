import React from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Photo } from '../../../../types/portfolio';
import { useKeyPress } from '../../../../hooks/useKeyPress';

interface LightboxModalProps {
  photos: Photo[];
  selectedPhoto: Photo;
  onClose: () => void;
  onNavigate: (photo: Photo) => void;
}

export default function LightboxModal({
  photos,
  selectedPhoto,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  const currentIndex = photos.findIndex(photo => photo.id === selectedPhoto.id);
  
  const handlePrevious = () => {
    if (currentIndex > 0) {
      onNavigate(photos[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < photos.length - 1) {
      onNavigate(photos[currentIndex + 1]);
    }
  };

  useKeyPress('Escape', onClose);
  useKeyPress('ArrowLeft', handlePrevious);
  useKeyPress('ArrowRight', handleNext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <button
          className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        <button
          className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <motion.img
          key={selectedPhoto.id}
          src={selectedPhoto.url}
          alt={selectedPhoto.caption}
          className="max-h-[90vh] max-w-[90vw] object-contain"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
        />

        <button
          className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          disabled={currentIndex === photos.length - 1}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 left-4 right-4 text-white text-center">
          <p className="text-lg font-playfair">{selectedPhoto.caption}</p>
        </div>
      </div>
    </motion.div>
  );
}