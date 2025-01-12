import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

export default function PortfolioHero() {
  return (
    <section className="relative mb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6"
          >
            <Camera className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-medium">Portfolio</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-playfair mb-6"
          >
            Nos Réalisations
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Découvrez une sélection de nos plus belles réalisations photographiques et vidéos. 
            Chaque projet raconte une histoire unique, capturée avec passion et expertise.
          </motion.p>
        </div>
      </div>
    </section>
  );
}