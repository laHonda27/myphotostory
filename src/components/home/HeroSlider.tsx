import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b',
    title: 'Mariages',
    description: 'Capturons l\'essence de votre amour'
  },
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552',
    title: 'Événements',
    description: 'Des moments uniques, figés dans le temps'
  },
  {
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
    title: 'Portraits',
    description: 'Révélez votre vraie nature'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image}?auto=format&fit=crop&w=2000&q=80)` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center text-white">
            <div className="max-w-3xl px-4">
              <h1 className="font-playfair text-5xl md:text-7xl mb-4">{slide.title}</h1>
              <p className="text-xl md:text-2xl">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}