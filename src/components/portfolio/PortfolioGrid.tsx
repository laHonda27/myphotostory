import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CategoryNav from './CategoryNav';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import ProjectCardSkeleton from './ProjectCardSkeleton';
import { Project, Category } from '../../types/portfolio';
import { portfolioData } from '../../data/portfolio';

interface ProjectWithIndex extends Project {
  index: number;
}

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('wedding');
  const [selectedMediaType, setSelectedMediaType] = useState<MediaType>('photos');
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<ProjectWithIndex | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const projectsPerPage = 12;

  useEffect(() => {
    const loadProjects = async () => {
      setIsLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate loading
        const filteredProjects = portfolioData.projects.filter(p =>
          p.category === selectedCategory && 
          (selectedMediaType === 'photos' ? p.type === 'photo' : p.type === 'video')
        );
        setProjects(filteredProjects);
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, [selectedCategory, selectedMediaType]);

  const displayedProjects = projects.slice(0, page * projectsPerPage);
  const hasMore = displayedProjects.length < projects.length;

  const handleProjectClick = (project: Project, index: number) => {
    setSelectedProject({ ...project, index });
  };

  const handleNextProject = () => {
    if (selectedProject && selectedProject.index < displayedProjects.length - 1) {
      const nextProject = displayedProjects[selectedProject.index + 1];
      setSelectedProject({ ...nextProject, index: selectedProject.index + 1 });
    }
  };

  const handlePreviousProject = () => {
    if (selectedProject && selectedProject.index > 0) {
      const previousProject = displayedProjects[selectedProject.index - 1];
      setSelectedProject({ ...previousProject, index: selectedProject.index - 1 });
    }
  };

  return (
    <section className="mb-20 pt-10">
      <div className="max-w-7xl mx-auto px-4">
        <CategoryNav
          categories={portfolioData.categories}
          selectedCategory={selectedCategory}
          selectedMediaType={selectedMediaType}
          onSelectCategory={setSelectedCategory}
          onMediaTypeChange={setSelectedMediaType}
        />
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {[...Array(6)].map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <>
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12"
            >
              <AnimatePresence mode="popLayout">
                {displayedProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    showContactCTA={(index + 1) % 3 === 0}
                    onClick={() => handleProjectClick(project, index)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>

            {selectedProject && (
              <ProjectModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
                onNext={selectedProject.index < displayedProjects.length - 1 ? handleNextProject : undefined}
                onPrevious={selectedProject.index > 0 ? handlePreviousProject : undefined}
              />
            )}

            {hasMore && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setPage(p => p + 1)}
                  className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Voir plus de projets
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}