import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SubMenuProps } from '../../types/navigation';

interface ExtendedSubMenuProps extends SubMenuProps {
  onItemClick: (path: string) => void;
}

export default function SubMenu({ label, items, isOpen, onToggle, onItemClick }: ExtendedSubMenuProps) {
  const basePath = `/${label.toLowerCase()}`;
  
  return (
    <div className="border-b border-gray-200">
      <div className="flex items-center">
        <Link
          to={basePath}
          className="flex-1 py-4 px-6 hover:bg-gray-50 transition-colors"
          onClick={() => onItemClick(basePath)}
        >
          {label}
        </Link>
        <button
          onClick={onToggle}
          className="p-4 hover:bg-gray-50 transition-colors"
          aria-label={isOpen ? 'Fermer le sous-menu' : 'Ouvrir le sous-menu'}
        >
          {isOpen ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </button>
      </div>
      
      {isOpen && (
        <div className="bg-gray-50">
          {items?.map((item, index) => {
            const itemLabel = typeof item === 'string' ? item : item.label;
            const itemPath = `${basePath}/${itemLabel.toLowerCase()}`;
            return (
              <Link
                key={index}
                to={itemPath}
                className="block py-2 px-8 hover:bg-gray-100 transition-colors"
                onClick={() => onItemClick(itemPath)}
              >
                {itemLabel}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}