import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Camera, Award, Users } from 'lucide-react';

const stats = [
  { 
    icon: Camera,
    value: 1500,
    label: "Séances Photo",
    suffix: "+"
  },
  { 
    icon: Award,
    value: 25,
    label: "Prix Reçus",
    suffix: ""
  },
  { 
    icon: Users,
    value: 98,
    label: "Satisfaction Client",
    suffix: "%"
  }
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?auto=format&fit=crop&w=2000)',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h1 
          ref={ref}
          className={`font-playfair text-5xl md:text-7xl text-center mb-6 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Capturons l'Essence de vos Moments
        </h1>
        
        <p className={`text-xl md:text-2xl text-center max-w-2xl mb-12 transition-opacity duration-1000 delay-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          Une approche artistique unique pour immortaliser vos souvenirs les plus précieux
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
              <div className="text-4xl font-bold mb-2">
                {isVisible && (
                  <CountUp 
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <div className="text-lg text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}