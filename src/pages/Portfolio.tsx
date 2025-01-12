import React from 'react';
import PortfolioHero from '../components/portfolio/PortfolioHero';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import PortfolioContact from '../components/portfolio/PortfolioContact';
import BackToTop from '../components/ui/BackToTop';

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white pt-32">
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioContact />
      <BackToTop />
    </main>
  );
}