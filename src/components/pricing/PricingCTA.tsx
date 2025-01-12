import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PricingCTA() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-playfair mb-6"
        >
          Une prestation sur mesure ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mb-8"
        >
          Chaque projet est unique. Contactez-nous pour discuter de vos besoins spécifiques et obtenir un devis personnalisé.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition-colors group"
          >
            <MessageSquare className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
            Demander un devis
          </Link>
        </motion.div>
      </div>
    </section>
  );
}