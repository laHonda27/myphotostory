import React from 'react';
import { Testimonial } from '../../../../types/portfolio';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={testimonial.photo}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h3 className="font-medium">{testimonial.name}</h3>
          <p className="text-sm text-gray-500">{testimonial.date}</p>
        </div>
      </div>
      <blockquote className="text-gray-700 italic">
        "{testimonial.quote}"
      </blockquote>
    </div>
  );
}