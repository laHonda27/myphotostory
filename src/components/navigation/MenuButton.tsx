import React from 'react';
import { Menu } from 'lucide-react';
import { useNavigation } from './NavigationContext';

export default function MenuButton() {
  const { isOpen, toggle } = useNavigation();

  // Ne pas afficher le bouton quand le menu est ouvert
  if (isOpen) return null;

  return (
    <button
      onClick={toggle}
      className="relative z-[1001] w-10 h-10 flex items-center justify-center md:hidden"
      aria-label="Menu"
    >
      <Menu className="w-6 h-6" />
    </button>
  );
}