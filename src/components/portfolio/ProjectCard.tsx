import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Camera, Clock, Users, Tag } from 'lucide-react';
import { Project } from '../../types/portfolio';
import { forwardRef } from 'react';
import ProjectModal from './ProjectModal';
import ContactForm from './ContactForm';

interface ProjectCardProps {
  project: Project;
  index: number;
  showContactCTA: boolean;
  onClick: () => void;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(({ project, index, showContactCTA, onClick }, ref) => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <>
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="group w-full"
      >
        <div
          className="relative aspect-video overflow-hidden rounded-lg cursor-pointer"
          onClick={onClick}
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 max-w-full"
            loading="lazy"
          />
          
          {project.type === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/90 transition-transform group-hover:scale-110">
                <Play className="w-8 h-8 text-primary" />
              </div>
            </div>
          )}
        </div>

        <div className="mt-4">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-medium line-clamp-1">{project.title}</h3>
            <span className="text-primary">{project.type === 'video' ? 'Vidéo' : 'Photo'}</span>
          </div>

          <p className="text-gray-600 mt-2 line-clamp-2">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {project.duration}
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {project.team}
            </div>
          </div>
        </div>
      </motion.article>
    </>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;