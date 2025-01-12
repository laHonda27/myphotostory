import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../../types/portfolio';
import { useKeyPress } from '../../hooks/useKeyPress';
import { useSwipe } from '../../hooks/useSwipe';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
  onNext?: () => void;
  onPrevious?: () => void;
}

export default function ProjectModal({ 
  isOpen, 
  onClose, 
  project,
  onNext,
  onPrevious 
}: ProjectModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useKeyPress('Escape', onClose);
  useKeyPress('ArrowLeft', () => onPrevious?.());
  useKeyPress('ArrowRight', () => onNext?.());

  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useSwipe({
    onSwipeLeft: () => onNext?.(),
    onSwipeRight: () => onPrevious?.()
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay pour fermer en cliquant à l'extérieur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/90"
            onClick={onClose}
          />
          
          {/* Contenu de la modal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 mt-10"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
          <button
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>

          <motion.div
            className="w-full max-w-6xl"
            onClick={e => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {project.type === 'video' ? (
              <div className="aspect-video">
                <iframe
                  src={project.url}
                  title={project.title}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <>
                <img
                  src={project.images[currentIndex].url}
                  alt={project.images[currentIndex].alt}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg select-none"
                  draggable={false}
                />
              
              </>
            )}

         
          </motion.div>

          {/* Navigation buttons */}
          {project.type === 'photo' && project.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(prev => prev === 0 ? project.images.length - 1 : prev - 1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          {project.type === 'photo' && project.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(prev => prev === project.images.length - 1 ? 0 : prev + 1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}