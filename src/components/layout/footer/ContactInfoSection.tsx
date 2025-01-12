import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactInfoSection() {
  return (
    <div className="space-y-6">
      <h3 className="font-playfair text-lg">Contact et Information</h3>
      <div className="space-y-4">
        <p className="text-gray-400 text-sm">
          Vous souhaitez être recontacté ou obtenir plus d'informations sur nos services ?
        </p>
        <div className="space-y-3">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span>Demander un devis</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-gray-400 text-sm">
            Notre équipe vous répondra sous 48h
          </p>
        </div>
        <div className="pt-4 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            Horaires d'ouverture :<br />
            Lun - Ven : 9h - 18h<br />
            Sam : Sur rendez-vous
          </p>
        </div>
      </div>
    </div>
  );
}