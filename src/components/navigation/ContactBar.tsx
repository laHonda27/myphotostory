import React from 'react';
import { Mail, Phone, Instagram, Video } from 'lucide-react';

export default function ContactBar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-10 bg-black text-white z-[1000] flex justify-between items-center px-5">
      <div className="flex items-center space-x-4">
        <a
          href="https://www.instagram.com/votre_compte"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-primary transition-colors duration-200 mt-1"  
        >
          <Instagram className="w-4 h-4 " />
          <span className="hidden sm:inline ml-2">Instagram</span>
        </a>
        <a
          href="https://www.tiktok.com/@votre_compte"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-primary transition-colors duration-200 mt-1"
        >
          <Video className="w-4 h-4" />
          <span className="hidden sm:inline ml-2">TikTok</span>
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <a 
          href="mailto:info@example.com"
          className="flex items-center hover:text-primary transition-colors duration-200"
        >
          <Mail className="w-4 h-4" />
          <span className="hidden sm:inline ml-2">info@example.com</span>
        </a>
        <a 
          href="tel:+12345678900"
          className="flex items-center hover:text-primary transition-colors duration-200"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline ml-2">+1-234-567-8900</span>
        </a>
      </div>
    </div>
  );
}