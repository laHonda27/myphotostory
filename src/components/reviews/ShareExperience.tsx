import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare } from 'lucide-react';

export default function ShareExperience() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Fond avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F4EE] via-[#F5EFE6] to-[#F0E9E0]" />
      
      {/* Motif décoratif */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,#C5A572_1px,transparent_0)] [background-size:30px_30px]" />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Contenu (60%) */}
          <motion.div 
            className="lg:col-span-3 text-center lg:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-playfair mb-6">
              Partagez votre expérience
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Votre avis est précieux pour nous et aide d'autres clients à faire leur choix. 
              Prenez un moment pour partager votre expérience avec notre communauté.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-all duration-300 group backdrop-blur-sm hover:shadow-xl hover:translate-y-[-2px]"
            >
              <MessageSquare className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
              Laisser un avis
            </motion.button>
          </motion.div>

          {/* Image (40%) */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866"
                alt="Plus performants ensemble"
                className="rounded-lg shadow-xl w-full transition-transform duration-500 hover:scale-[1.02]"
              />
              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-sm font-medium mt-1">Note moyenne 4.9/5</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}