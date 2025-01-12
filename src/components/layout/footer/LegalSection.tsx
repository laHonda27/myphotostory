import React from 'react';
import { Link } from 'react-router-dom';

export default function LegalSection() {
  return (
    <div className="mt-9 pt-8 border-t border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center">
        {/* Espace vide à gauche sur desktop */}
        <div className="hidden md:block" />
        
        {/* Copyright centré */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} L'Œil du Moment - Tous droits réservés
          </p>
        </div>

        {/* Mentions légales alignées à droite avec marge */}
        <div className="text-center md:text-right mt-4 md:mt-0 md:pr-8">
          <Link 
            to="/legal" 
            className="text-sm text-gray-400 hover:text-primary transition-colors"
          >
            Mentions légales
          </Link>
        </div>
      </div>
    </div>
  );
}