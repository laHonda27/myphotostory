import React from 'react';
import { motion } from 'framer-motion';

export default function PricingHero() {
  return (
    <section className="mb-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-playfair mb-6"
        >
          Formules & Prestations
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600"
        >
          Chaque moment est unique et mérite une attention particulière. Nos formules sont conçues pour s'adapter à vos besoins, avec la possibilité de personnaliser chaque prestation selon vos envies.
        </motion.p>
      </div>
    </section>
  );
}