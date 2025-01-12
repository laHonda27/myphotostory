import React from 'react';
import { Star } from 'lucide-react';

export default function ReviewsHero() {
  return (
    <section id="reviews-section" className="mb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-playfair mb-6">Nos Clients Témoignent</h1>
          <p className="text-gray-600 mb-1">
            Découvrez les expériences authentiques de nos clients et leurs histoires uniques. Chaque avis reflète notre engagement envers l'excellence et la satisfaction client.
          </p>
       
        </div>
      </div>
    </section>
  );
}