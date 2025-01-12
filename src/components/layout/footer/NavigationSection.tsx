import React from 'react';
import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';

export default function NavigationSection() {
  const mainLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Réalisations', path: '/realisations' },
    { label: 'Avis clients', path: '/avis' },
    { label: 'Tarifs', path: '/tarifs' },
  ];

  return (
    <div className="space-y-6">
      {/* Logo et Tagline */}
      <div>
        <div className="flex items-center space-x-2 mb-3">
          <Camera className="h-8 w-8 text-primary" />
          <span className="text-xl font-playfair">L'Œil du Moment</span>
        </div>
        <p className="text-gray-400 text-sm italic">
          "Capturons l'essence de vos moments précieux"
        </p>
      </div>

      {/* Navigation principale */}
      <nav className="space-y-2">
        {mainLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className="block text-gray-400 hover:text-primary transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}