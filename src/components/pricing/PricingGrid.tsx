import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PricingDetails from './PricingDetails';
import CategoryNav from './CategoryNav';
import { pricingData } from '../../data/pricing';

export default function PricingGrid() {
  const [selectedService, setSelectedService] = useState<string>('wedding');
  const navigate = useNavigate();

  const services = pricingData.map(({ id, title }) => ({ id, title }));
  const selectedServiceData = selectedService 
    ? pricingData.find(s => s.id === selectedService)
    : null;

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
    // Only scroll on mobile/tablet screens
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        const detailsElement = document.getElementById('pricing-details');
        if (detailsElement) {
          const headerOffset = 150;
          const elementPosition = detailsElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 50);
    }
  };

  const handleClose = () => {
    setSelectedService(null);
  };

  const handlePortfolioClick = (serviceId: string) => {
    navigate(`/realisations/${serviceId}`);
  };

  return (
    <section className="mb-20 bg-gradient-to-b from-light/50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <CategoryNav
            selectedService={selectedService}
            onServiceSelect={handleServiceClick}
            services={services}
          />
        </div>

        <AnimatePresence>
          {selectedService && selectedServiceData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mt-8" 
              id="pricing-details"
            >
              <PricingDetails
                service={selectedServiceData}
                onClose={handleClose}
                onNext={() => {
                  const currentIndex = pricingData.findIndex(s => s.id === selectedService);
                  const nextIndex = (currentIndex + 1) % pricingData.length;
                  setSelectedService(pricingData[nextIndex].id);
                }}
                onPrevious={() => {
                  const currentIndex = pricingData.findIndex(s => s.id === selectedService);
                  const previousIndex = currentIndex === 0 ? pricingData.length - 1 : currentIndex - 1;
                  setSelectedService(pricingData[previousIndex].id);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}