import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PricingCategory } from '../../types/pricing';

interface ServiceCardProps {
  service: PricingCategory;
  onClick: () => void;
}

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === service.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? service.gallery.length - 1 : prev - 1
    );
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      {/* Image Carousel */}
      <div className="relative aspect-[16/10]">
        <img
          src={service.gallery[currentImageIndex].url}
          alt={service.gallery[currentImageIndex].alt}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Navigation Arrows */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={prevImage}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {service.gallery.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(index);
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2 line-clamp-2">{service.title}</h3>
        <p className="text-2xl font-bold text-primary mb-4">
          À partir de {service.startingPrice}€
        </p>
        
        <p className="text-gray-600 mb-6 line-clamp-3">{service.description}</p>
        
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start text-gray-600">
              <span className="text-primary mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-500">Durée moyenne</p>
            <p className="font-medium">2-3 heures</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-sm text-gray-500">Délai de livraison</p>
            <p className="font-medium">5-7 jours</p>
          </div>
        </div>

        <div className="flex gap-4">
          <Link
            to="/contact"
            className="flex-1 bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors text-center"
            onClick={(e) => e.stopPropagation()}
          >
            Réserver
          </Link>
          <Link
            to={service.link}
            className="flex items-center justify-center px-4 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Camera className="w-5 h-5" />
          </Link>
        </div>
        
        <p className="text-sm text-gray-500 text-center mt-4">
          * Les tarifs peuvent varier selon vos besoins spécifiques
        </p>
      </div>
    </motion.div>
  );
}