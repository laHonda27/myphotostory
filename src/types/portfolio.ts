export type MediaType = 'photos' | 'videos';

export interface Category {
  id: string;
  label: string;
}

export interface ProjectImage {
  url: string;
  alt: string;
}

export interface Project {
  id: string;
  type: 'photo' | 'video';
  title: string;
  description: string;
  thumbnail: string;
  images: ProjectImage[];  // Ajout du tableau d'images
  url?: string;  // Optionnel car utilisé uniquement pour les vidéos
  category: string;
  tags: string[];
  duration: string;
  team: string;
}