import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { Review } from '../../types/reviews';

interface ReviewCardProps {
  review: Review;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();
}

function getAvatarColor(name: string): string {
  const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500'
  ];
  const index = name.length % colors.length;
  return colors[index];
}

function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const initials = getInitials(review.name);
  const avatarColor = getAvatarColor(review.name);
  const formattedDate = formatDate(review.date);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-[0_2px_4px_rgba(0,0,0,0.1)] p-6">
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-medium ${avatarColor}`}>
          {initials}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-medium text-gray-900">{review.name}</h3>
              <p className="text-sm text-gray-500">{review.service}</p>
            </div>
            <time className="text-sm text-primary font-medium" dateTime={review.date}>
              {formattedDate}
            </time>
          </div>
          
          <div className="flex items-center mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating
                    ? 'text-primary fill-primary'
                    : 'text-gray-300'
                }`}
              />
            ))}
            {review.verified && (
              <div className="flex items-center ml-2 text-green-600 text-sm">
                <CheckCircle className="w-4 h-4 mr-1" />
                Vérifié
              </div>
            )}
          </div>
          
          <p className="text-gray-700">{review.comment}</p>
        </div>
      </div>
    </div>
  );
}