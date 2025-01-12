import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CategoryNav from './CategoryNav';
import ImageGrid from './ImageGrid';
import Carousel from './Carousel';
import { useGallery } from '../../hooks/useGallery';

export default function ImageGallery() {
  const {
    images,
    categories,
    selectedCategory,
    selectedImage,
    isLoading,
    setSelectedCategory,
    setSelectedImage,
  } = useGallery();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <CategoryNav
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      <ImageGrid
        images={images}
        isLoading={isLoading}
        onImageClick={setSelectedImage}
      />

      <AnimatePresence>
        {selectedImage && (
          <Carousel
            images={images}
            selectedImage={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}