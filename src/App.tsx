import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import Pricing from './pages/Pricing';
import Portfolio from './pages/Portfolio';
import WeddingPortfolio from './pages/portfolio/WeddingPortfolio';
import { useScrollToTop } from './hooks/useScrollToTop';

function ScrollToTop() {
  useScrollToTop();
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/avis" element={<Reviews />} />
          <Route path="/realisations" element={<Portfolio />} />
          <Route path="/realisations/mariages" element={<WeddingPortfolio />} />
          <Route path="/tarifs" element={<Pricing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}