import React from 'react';
import HeroCarousel from '../components/home/HeroCarousel';
import FeaturedServices from '../components/home/FeaturedServices';
import Statistics from '../components/home/Statistics';
import Testimonials from '../components/home/Testimonials';

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <FeaturedServices />
      <Statistics />
      <Testimonials />
    </main>
  );
}