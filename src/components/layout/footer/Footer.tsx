import React from 'react';
import NewsletterSection from './NewsletterSection';
import NavigationSection from './NavigationSection';
import ContactSection from './ContactSection';
import SocialSection from './SocialSection';
import LegalSection from './LegalSection';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <NavigationSection />
          <ContactSection />
          <SocialSection />
          <NewsletterSection />
        </div>
        <LegalSection />
      </div>
    </footer>
  );
}