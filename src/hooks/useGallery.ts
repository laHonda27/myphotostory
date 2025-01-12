import { useState, useEffect } from 'react';
import { GalleryImage, Category } from '../types/gallery';
import { galleryData } from '../data/gallery';

export function useGallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [categories] = useState<Category[]>(galleryData.categories);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        const filteredImages = selectedCategory === 'all'
          ? galleryData.images
          : galleryData.images.filter(img => img.category === selectedCategory);
        setImages(filteredImages);
      } catch (error) {
        console.error('Error loading images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [selectedCategory]);

  return {
    images,
    categories,
    selectedCategory,
    selectedImage,
    isLoading,
    setSelectedCategory,
    setSelectedImage,
  };
}