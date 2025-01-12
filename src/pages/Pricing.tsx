import React from 'react';
import PricingHero from '../components/pricing/PricingHero';
import PricingGrid from '../components/pricing/PricingGrid';
import PricingCTA from '../components/pricing/PricingCTA';
import PricingFAQ from '../components/pricing/PricingFAQ';

export default function Pricing() {
  return (
    <main className="pt-32 pb-20 bg-gradient-to-b from-light to-white">
      <PricingHero />
      <PricingGrid />
      <PricingFAQ />
      <PricingCTA />
    </main>
  );
}