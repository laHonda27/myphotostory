import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PricingCategory } from '../../types/pricing';

export default function PricingCard({
  title,
  description,
  image,
  startingPrice,
  features,
  link
}: PricingCategory) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-playfair text-white">{title}</h3>
          <p className="text-white/90 mt-2">À partir de {startingPrice}€</p>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-2 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-gray-600">
              <span className="text-primary mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
        
        <Link
          to={link}
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group"
        >
          En savoir plus
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}