import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Mariages",
    description: "Une approche documentaire élégante pour votre jour J",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866",
    link: "/services#mariages"
  },
  {
    title: "Portraits",
    description: "Révélez votre personnalité à travers notre objectif",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    link: "/services#portraits"
  },
  {
    title: "Événements",
    description: "Immortalisez vos moments corporate avec style",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
    link: "/services#evenements"
  }
];

export default function FeaturedServices() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-playfair text-center mb-16">Nos Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white h-full"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={`${service.image}?auto=format&fit=crop&w=800&h=600&q=80`}
                  alt={service.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-playfair mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}