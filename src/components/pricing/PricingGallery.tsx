import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useKeyPress } from '../../hooks/useKeyPress';
import { useSwipe } from '../../hooks/useSwipe';
import { createPortal } from 'react-dom';

interface Image {
  url: string;
  alt: string;
}

interface PricingGalleryProps {
  images: Image[];
  initialIndex?: number;
  onClose: () => void;
}

export default function PricingGallery({ images, initialIndex = 0, onClose }: PricingGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const navigate = (direction: 'prev' | 'next') => {
    setCurrentIndex(prev => {
      if (direction === 'prev') {
        return prev === 0 ? images.length - 1 : prev - 1;
      }
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  useKeyPress('Escape', onClose);
  useKeyPress('ArrowLeft', () => navigate('prev'));
  useKeyPress('ArrowRight', () => navigate('next'));

  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useSwipe({
    onSwipeLeft: () => navigate('next'),
    onSwipeRight: () => navigate('prev'),
  });

  const galleryContent = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 z-[1000] flex items-center justify-center"
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        <button
          className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full"
          onClick={(e) => {
            e.stopPropagation();
            navigate('prev');
          }}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <motion.img
          key={currentIndex}
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          className="max-h-[80vh] max-w-[85vw] object-contain select-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
        />

        <button
          className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full"
          onClick={(e) => {
            e.stopPropagation();
            navigate('next');
          }}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex justify-center gap-2 mb-4">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
              />
            ))}
          </div>
          <p className="text-white text-center">{images[currentIndex].alt}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );

  if (!mounted) return null;

  return createPortal(galleryContent, document.body);
}