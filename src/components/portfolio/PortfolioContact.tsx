import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PortfolioContact() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair mb-6">
              Envie de réaliser votre projet ?
            </h2>
            <p className="text-gray-600 mb-8">
              Chaque projet est unique et mérite une attention particulière. 
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors group"
            >
              <Camera className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
              Démarrer votre projet
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1606800052052-a08af7148866"
              alt="Photographe en action"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}