import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <div className="space-y-6">
      <h3 className="font-playfair text-lg">Contact</h3>
      <div className="space-y-4">
        <a 
          href="mailto:contact@oeildumoment.com" 
          className="flex items-center space-x-3 text-gray-400 hover:text-primary transition-colors"
        >
          <Mail className="h-5 w-5" />
          <span>contact@oeildumoment.com</span>
        </a>
        <a 
          href="tel:+33612345678" 
          className="flex items-center space-x-3 text-gray-400 hover:text-primary transition-colors"
        >
          <Phone className="h-5 w-5" />
          <span>+33 6 12 34 56 78</span>
        </a>
        <div className="flex items-start space-x-3 text-gray-400">
          <MapPin className="h-5 w-5 mt-1" />
          <span>123 rue Example,<br />75000 Paris, France</span>
        </div>
      </div>
    </div>
  );
}