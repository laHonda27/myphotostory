import React from 'react';
import { motion } from 'framer-motion';
import { Camera, HeartHandshake, User, Baby, Cake, Heart } from 'lucide-react';
import { PricingCategory } from '../../types/pricing';

const icons = {
  wedding: Camera,
  engagement: HeartHandshake, // Changed from Ring to HeartHandshake
  portrait: User,
  birth: Baby,
  birthday: Cake,
  custom: Heart,
} as const;

interface PricingButtonProps {
  service: PricingCategory;
  onClick: () => void;
  isSelected: boolean;
}

export default function PricingButton({ 
  service, 
  onClick, 
  isSelected 
}: PricingButtonProps) {
  const Icon = icons[service.id as keyof typeof icons] || Camera;

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative w-full p-6 rounded-xl text-left transition-colors group cursor-pointer overflow-hidden
        ${isSelected 
          ? 'bg-primary text-white shadow-lg' 
          : 'bg-white hover:bg-gray-50 text-gray-900 shadow-md'
        }
      `}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg ${isSelected ? 'bg-white/10' : 'bg-primary/10'}`}>
          <Icon className={isSelected ? 'w-6 h-6 text-white' : 'w-6 h-6 text-primary'} />
        </div>
        <div>
          <h3 className="text-lg font-medium mb-1">{service.title}</h3>
          <p className={`text-sm ${isSelected ? 'text-white/90' : 'text-gray-600'}`}>
            À partir de {service.startingPrice}€
          </p>
        </div>
      </div>
    </motion.div>
  );
}