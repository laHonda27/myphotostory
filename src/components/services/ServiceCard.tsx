import React from 'react';
import { Star } from 'lucide-react';
import { ServiceType, TestimonialType } from '../../types/services';
import TestimonialCard from './TestimonialCard';

interface ServiceCardProps {
  service: ServiceType;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative h-64">
        <img
          src={service.images[0]}
          alt={service.imageAlts[0]}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-playfair text-white">{service.title}</h3>
          <p className="text-white/90 mt-2">À partir de {service.basePrice}€</p>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-700 mb-6">{service.description}</p>
        
        <div className="space-y-6">
          <div className="border-t pt-6">
            <h4 className="font-playfair text-lg mb-4">Ce qui est inclus :</h4>
            <ul className="space-y-2">
              {service.includes.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border-t pt-6">
            <h4 className="font-playfair text-lg mb-4">Témoignages</h4>
            <div className="space-y-4">
              {service.testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
        
        <button className="w-full mt-8 bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors">
          Réserver une consultation
        </button>
      </div>
    </div>
  );
}