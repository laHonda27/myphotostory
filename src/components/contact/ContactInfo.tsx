import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm space-y-6">
      <h2 className="font-playfair text-2xl mb-6">Informations de contact</h2>
      
      <div className="space-y-4">
        <a 
          href="tel:+33612345678" 
          className="flex items-center space-x-4 text-gray-600 hover:text-primary transition-colors duration-200"
        >
          <Phone className="w-5 h-5" />
          <span>+33 6 12 34 56 78</span>
        </a>
        
        <a 
          href="mailto:contact@example.com"
          className="flex items-center space-x-4 text-gray-600 hover:text-primary transition-colors duration-200"
        >
          <Mail className="w-5 h-5" />
          <span>contact@example.com</span>
        </a>
        
        <div className="flex items-center space-x-4 text-gray-600">
          <MapPin className="w-5 h-5" />
          <span>123 rue Example, 75000 Paris</span>
        </div>
        
        <div className="flex items-start space-x-4 text-gray-600">
          <Clock className="w-5 h-5 mt-1" />
          <div>
            <p className="font-medium mb-1">Horaires</p>
            <p>Lundi - Vendredi: 9h - 18h</p>
            <p>Samedi: Sur rendez-vous</p>
            <p>Dimanche: Fermé</p>
          </div>
        </div>
      </div>
    </div>
  );
}