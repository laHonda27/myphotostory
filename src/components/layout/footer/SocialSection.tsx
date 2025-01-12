import React from 'react';
import { Instagram, Facebook, MessageCircle, Camera, Video } from 'lucide-react';

export default function SocialSection() {
  const socials = [
    { icon: Instagram, label: 'Instagram', url: '#' },
    { icon: Facebook, label: 'Facebook', url: '#' },
    { icon: MessageCircle, label: 'WhatsApp', url: '#' },
    { icon: Camera, label: 'Snapchat', url: '#' }, // Remplacé Snapchat par Camera
    { icon: Video, label: 'TikTok', url: '#' }
  ];

  return (
    <div className="space-y-6">
      <h3 className="font-playfair text-lg">Suivez-nous</h3>
      <div className="flex flex-wrap gap-4">
        {socials.map(({ icon: Icon, label, url }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
            aria-label={label}
          >
            <Icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </div>
  );
}