import React from 'react';
import ServiceCard from './ServiceCard';
import { services, faq } from '../../data/services';

export default function ServicesSection() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-playfair mb-6">Nos Services</h2>
          <p className="text-gray-700">
            Spécialisés dans la capture de vos moments les plus précieux, nous proposons une gamme complète de services photographiques et vidéo. Chaque prestation est personnalisée pour répondre parfaitement à vos attentes et créer des souvenirs intemporels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-playfair text-center mb-8">Questions Fréquentes</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <details
                key={index}
                className="group bg-white rounded-lg shadow-sm cursor-pointer"
              >
                <summary className="flex justify-between items-center p-6 text-lg font-medium">
                  {item.question}
                  <span className="transform group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}