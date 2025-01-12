import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Star, Camera, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PricingCategory } from '../../types/pricing';
import PricingGallery from './PricingGallery';

interface PricingDetailsProps {
  service: PricingCategory;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function PricingDetails({ 
  service, 
  onClose,
  onNext,
  onPrevious
}: PricingDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === service.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? service.gallery.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="grid md:grid-cols-2 gap-8 h-full">
        <div className="flex flex-col h-full justify-between">
          <h3 className="text-2xl font-playfair mb-2">{service.title}</h3>
          <p className="text-gray-600 mb-6">{service.description}</p>
          
          <div className="flex-grow">
            <h4 className="font-medium">Inclus dans cette prestation :</h4>
            <div className="grid grid-cols-2 gap-x-8">
              <ul className="space-y-2">
                {service.features.slice(0, 10).map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-gray-600"
                  >
                    <span className="text-primary mr-2">•</span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <ul className="space-y-2">
                {service.features.slice(10).map((feature, index) => (
                  <motion.li
                    key={index + 10}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index + 10) * 0.1 }}
                    className="flex items-center text-gray-600"
                  >
                    <span className="text-primary mr-2">•</span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Link
              to={service.link}
              className="flex-1 bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors text-center"
            >
              Voir les détails
            </Link>
            <Link
              to={`/realisations/${service.id}`}
              className="flex items-center justify-center gap-2 px-6 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
            >
              <Camera className="w-5 h-5" />
              Réalisations
            </Link>
          </div>
        </div>

        <div className="flex flex-col h-full space-y-6">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <img
              src={service.gallery[currentImageIndex].url}
              alt={service.gallery[currentImageIndex].alt}
              className="w-full h-full object-cover object-center cursor-zoom-in transition-transform duration-300 hover:scale-105"
              onClick={() => setShowGallery(true)}
            />
            <div 
              className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center"
              onClick={() => setShowGallery(true)}
            >
              <div className="bg-white/90 rounded-full p-4 transform transition-transform hover:scale-110">
                <Camera className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
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
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Testimonial Section */}
          <div className="bg-light rounded-lg p-6 relative">
            <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
            <div className="flex items-center gap-4 mb-4">
              {service.testimonial.photo && (
                <img
                  src={service.testimonial.photo}
                  alt={service.testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}
              <div>
                <h4 className="font-medium">{service.testimonial.name}</h4>
                <p className="text-sm text-gray-500">{service.testimonial.date}</p>
              </div>
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < service.testimonial.rating
                      ? 'text-primary fill-primary'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600 italic">"{service.testimonial.comment}"</p>
          </div>
        </div>
      </div>

      {showGallery && (
        <PricingGallery
          images={service.gallery}
          initialIndex={currentImageIndex}
          onClose={() => setShowGallery(false)}
        />
      )}
    </div>
  );
}