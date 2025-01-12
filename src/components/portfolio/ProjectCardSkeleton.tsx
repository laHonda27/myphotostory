import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCardSkeleton() {
  return (
    <div className="space-y-4">
      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
        <motion.div
          className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"
          animate={{
            backgroundPosition: ['200% 0', '-200% 0'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="space-y-2">
        <div className="h-6 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
      </div>

      <div className="flex gap-2">
        <div className="h-8 bg-gray-200 rounded-full w-20" />
        <div className="h-8 bg-gray-200 rounded-full w-20" />
      </div>
    </div>
  );
}