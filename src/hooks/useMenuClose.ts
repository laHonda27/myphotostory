import { useEffect } from 'react';
import { useNavigation } from '../components/navigation/NavigationContext';
import { useLocation } from 'react-router-dom';

export const useMenuClose = () => {
  const { isOpen, close } = useNavigation();
  const location = useLocation();

  useEffect(() => {
    // Ferme le menu lors des changements de route
    if (isOpen) {
      close();
    }
  }, [location.pathname, close, isOpen]);

  return { isOpen, close };
};