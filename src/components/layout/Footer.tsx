import React from 'react';
import NavigationSection from './footer/NavigationSection';
import ContactSection from './footer/ContactSection';
import SocialSection from './footer/SocialSection';
import ContactInfoSection from './footer/ContactInfoSection';
import LegalSection from './footer/LegalSection';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <NavigationSection />
          <ContactSection />
          <SocialSection />
          <ContactInfoSection />
        </div>
        <LegalSection />
      </div>
    </footer>
  );
}