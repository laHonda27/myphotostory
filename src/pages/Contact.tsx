import React from 'react';
import BookingForm from '../components/booking/BookingForm';
import ContactInfo from '../components/contact/ContactInfo';
import Map from '../components/contact/Map';

export default function Contact() {
  return (
    <main className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-playfair mb-6">
              Racontez-nous votre projet
            </h2>
            <p className="text-gray-600 mb-8">
              Chaque histoire est unique. Partagez avec nous votre vision et créons ensemble des souvenirs inoubliables.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="lg:order-2">
            {/* 1. Informations de contact - Premier sur mobile */}
            <div className="mb-12">
              <ContactInfo />
            </div>
            
            {/* 2. Formulaire - Deuxième sur mobile */}
            <div className="lg:hidden mb-12">
              <BookingForm />
            </div>
            
            {/* 3. Carte - Dernier sur mobile */}
            <Map />
          </div>

          {/* Formulaire sur desktop - Caché sur mobile car déplacé plus haut */}
          <div className="hidden lg:block lg:order-1">
            <BookingForm />
          </div>
        </div>
      </div>
    </main>
  );
}