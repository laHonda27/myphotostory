import React from 'react';
import { motion } from 'framer-motion';

export default function ReviewCardSkeleton() {
  const shimmer = {
    initial: { x: '-100%' },
    animate: { 
      x: '100%',
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: 'linear'
      }
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.1)] p-6">
      <div className="flex items-start gap-4">
        {/* Avatar skeleton */}
        <div className="relative w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
          <motion.div
            variants={shimmer}
            initial="initial"
            animate="animate"
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{ 
              WebkitMaskImage: '-webkit-radial-gradient(white, black)',
              maskImage: 'radial-gradient(white, black)'
            }}
          />
        </div>

        <div className="flex-1">
          {/* Header section */}
          <div className="flex items-start justify-between mb-2">
            <div className="space-y-2">
              {/* Name skeleton */}
              <div className="relative w-32 h-5 bg-gray-200 rounded overflow-hidden">
                <motion.div
                  variants={shimmer}
                  initial="initial"
                  animate="animate"
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </div>
              {/* Service skeleton */}
              <div className="relative w-24 h-4 bg-gray-200 rounded overflow-hidden">
                <motion.div
                  variants={shimmer}
                  initial="initial"
                  animate="animate"
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </div>
            </div>
            {/* Date skeleton */}
            <div className="relative w-24 h-4 bg-gray-200 rounded overflow-hidden">
              <motion.div
                variants={shimmer}
                initial="initial"
                animate="animate"
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            </div>
          </div>

          {/* Rating skeleton */}
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="relative w-4 h-4 bg-gray-200 rounded overflow-hidden"
              >
                <motion.div
                  variants={shimmer}
                  initial="initial"
                  animate="animate"
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </div>
            ))}
          </div>

          {/* Comment skeleton */}
          <div className="space-y-2">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className={`relative bg-gray-200 rounded h-4 overflow-hidden ${
                  i === 2 ? 'w-3/4' : 'w-full'
                }`}
              >
                <motion.div
                  variants={shimmer}
                  initial="initial"
                  animate="animate"
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}