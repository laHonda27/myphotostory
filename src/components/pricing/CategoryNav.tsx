import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface CategoryNavProps {
  selectedService: string;
  onServiceSelect: (serviceId: string) => void;
  services: Array<{
    id: string;
    title: string;
  }>;
}

export default function CategoryNav({ selectedService, onServiceSelect, services }: CategoryNavProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <nav className="relative border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide touch-pan-x"
        >
          <div className="flex space-x-8 px-4 md:px-12 min-w-max">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => onServiceSelect(service.id)}
                className="relative py-4 px-1 text-base font-medium transition-colors"
              >
                <span className={selectedService === service.id ? 'text-primary' : 'text-gray-500 hover:text-gray-700'}>
                  {service.title}
                </span>
                {selectedService === service.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}