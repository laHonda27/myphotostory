import React from 'react';
import { motion } from 'framer-motion';
import { faqData } from '../../data/pricing';

export default function PricingFAQ() {
  return (
    <section className="mb-20">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-playfair text-center mb-12"
        >
          Questions Fréquentes
        </motion.h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.details
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-lg shadow-sm cursor-pointer"
            >
              <summary className="flex justify-between items-center p-6 text-lg font-medium">
                {item.question}
                <span className="transform group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600">
                {item.answer}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}