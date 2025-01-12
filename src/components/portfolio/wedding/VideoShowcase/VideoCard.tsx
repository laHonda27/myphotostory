import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { Video } from '../../../../types/portfolio';
import VideoModal from './VideoModal';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white/90 rounded-full p-4 transform transition-transform group-hover:scale-110">
            <Play className="w-8 h-8 text-primary" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-white font-playfair text-lg">{video.title}</h3>
          <p className="text-white/80 text-sm">{video.duration}</p>
        </div>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        video={video}
      />
    </>
  );
}