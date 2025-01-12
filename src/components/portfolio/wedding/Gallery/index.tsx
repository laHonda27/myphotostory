import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import GalleryGrid from './GalleryGrid';
import GalleryGridSkeleton from './GalleryGridSkeleton';
import GalleryFilters from './GalleryFilters';
import LightboxModal from './LightboxModal';
import { categories, photos } from '../../../../data/wedding-portfolio';
import { Photo } from '../../../../types/portfolio';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un chargement
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <GalleryFilters 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        {isLoading ? (
          <GalleryGridSkeleton />
        ) : (
          <GalleryGrid 
            photos={filteredPhotos}
            onPhotoClick={setSelectedPhoto}
          />
        )}

        <AnimatePresence>
          {selectedPhoto && (
            <LightboxModal
              photos={filteredPhotos}
              selectedPhoto={selectedPhoto}
              onClose={() => setSelectedPhoto(null)}
              onNavigate={setSelectedPhoto}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}