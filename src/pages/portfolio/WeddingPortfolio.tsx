import React from 'react';
import Hero from '../../components/portfolio/wedding/Hero';
import Introduction from '../../components/portfolio/wedding/Introduction';
import Gallery from '../../components/portfolio/wedding/Gallery';
import VideoShowcase from '../../components/portfolio/wedding/VideoShowcase';
import TestimonialsSlider from '../../components/portfolio/wedding/TestimonialsSlider';
import ContactCTA from '../../components/portfolio/wedding/ContactCTA';

export default function WeddingPortfolio() {
  return (
    <main className="min-h-screen bg-white pt-32">
      <Hero />
      <Introduction />
      <Gallery />
      <VideoShowcase />
      <TestimonialsSlider />
      <ContactCTA />
    </main>
  );
}