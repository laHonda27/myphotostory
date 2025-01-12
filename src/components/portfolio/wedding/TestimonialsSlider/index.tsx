import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import TestimonialCardSkeleton from './TestimonialCardSkeleton';
import { testimonials } from '../../../../data/wedding-portfolio';

export default function TestimonialsSlider() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">
          Ce que disent nos mariés
        </h2>
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x">
          {isLoading ? (
            [...Array(3)].map((_, index) => (
              <div key={index} className="min-w-[300px] md:min-w-[400px] snap-center">
                <TestimonialCardSkeleton />
              </div>
            ))
          ) : (
            testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="min-w-[300px] md:min-w-[400px] snap-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}