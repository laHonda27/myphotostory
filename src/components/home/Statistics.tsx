import React from 'react';
import { Camera, Award, Users, Star, Clock, Heart } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const stats = [
  { 
    icon: Camera,
    value: 1500,
    label: "Séances Photo",
    suffix: "+"
  },
  { 
    icon: Award,
    value: 25,
    label: "Prix Reçus",
    suffix: ""
  },
  { 
    icon: Users,
    value: 98,
    label: "Satisfaction Client",
    suffix: "%"
  },
  {
    icon: Star,
    value: 450,
    label: "Avis 5 Étoiles",
    suffix: "+"
  },
  {
    icon: Clock,
    value: 10,
    label: "Années d'Expérience",
    suffix: ""
  },
  {
    icon: Heart,
    value: 200,
    label: "Mariages Capturés",
    suffix: "+"
  }
];

export default function Statistics() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-light to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-playfair mb-4">Notre Impact en Chiffres</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des années d'expertise et de passion au service de vos moments les plus précieux
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-6 text-primary" />
              <div className="text-4xl font-bold font-playfair mb-2 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {inView && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    {stat.value}{stat.suffix}
                  </motion.span>
                )}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}