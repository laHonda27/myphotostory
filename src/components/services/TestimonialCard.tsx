import React from 'react';
import { Star } from 'lucide-react';
import { TestimonialType } from '../../types/services';

interface TestimonialCardProps {
  testimonial: TestimonialType;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-light p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        {testimonial.profileImage && (
          <img
            src={testimonial.profileImage}
            alt={`${testimonial.name} profile`}
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-medium">{testimonial.name}</p>
          <p className="text-sm text-gray-600">{testimonial.date}</p>
        </div>
      </div>
      <div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating ? 'text-primary fill-primary' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700">{testimonial.text}</p>
    </div>
  );
}