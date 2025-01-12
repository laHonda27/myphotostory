import { useCallback } from 'react';

export function useScrollToReviews() {
  return useCallback((immediate: boolean = false) => {
    const searchBar = document.querySelector('[role="search"]');
    if (searchBar) {
      const yOffset = -120; // Offset pour tenir compte du header fixe et donner de l'espace
      const y = searchBar.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: immediate ? 'instant' : 'smooth'
      });
    }
  }, []);
}