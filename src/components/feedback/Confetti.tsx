import React, { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface ConfettiProps {
  isActive: boolean;
  onComplete: () => void;
}

interface ConfettiParticle {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  color: string;
  spread: number;
}

export default function Confetti({ isActive, onComplete }: ConfettiProps) {
  const colors = ['#C5A572', '#4CAF50', '#2196F3', '#9C27B0', '#FF9800'];
  
  const createConfetti = useCallback(() => {
    const particles: ConfettiParticle[] = [];
    const particleCount = 100;
    const spreadFactor = window.innerWidth / particleCount;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        id: i,
        x: i * spreadFactor,
        y: -10,
        rotation: Math.random() * 360,
        scale: Math.random() * 0.3 + 0.2, // Réduit la taille des particules
        color: colors[Math.floor(Math.random() * colors.length)],
        spread: (Math.random() - 0.5) * 100 // Facteur de dispersion
      });
    }
    return particles;
  }, []);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(onComplete, 3000);
      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {createConfetti().map((confetti) => (
        <motion.div
          key={confetti.id}
          initial={{ 
            x: confetti.x,
            y: confetti.y,
            rotate: confetti.rotation,
            scale: confetti.scale
          }}
          animate={{ 
            y: window.innerHeight + 20,
            x: confetti.x + confetti.spread,
            rotate: confetti.rotation + Math.random() * 720 - 360
          }}
          transition={{ 
            duration: 2 + Math.random(),
            ease: [0.23, 0.83, 0.68, 0.99],
            delay: Math.random() * 0.5
          }}
          className="absolute w-2 h-2"
          style={{
            backgroundColor: confetti.color,
            borderRadius: '1px',
            opacity: 0.8
          }}
        />
      ))}
    </div>
  );
}