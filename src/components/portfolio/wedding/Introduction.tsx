import React from 'react';
import { motion } from 'framer-motion';

export default function Introduction() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.blockquote 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-playfair italic text-gray-800 mb-8"
        >
          "Chaque mariage raconte une histoire unique. Notre passion : immortaliser ces instants précieux qui deviennent vos souvenirs éternels"
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600"
        >
          Notre approche combine l'élégance intemporelle et l'authenticité des émotions pour créer des souvenirs qui vous ressemblent.
        </motion.p>
      </div>
    </section>
  );
}