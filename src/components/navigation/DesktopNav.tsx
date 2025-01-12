import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { menuItems } from '../../data/menuItems';

export default function DesktopNav() {
  const location = useLocation();

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {menuItems.map((item) => (
        <div 
          key={item.label} 
          className="relative group"
        >
          {item.path ? (
            <Link
              to={item.path}
              className="relative py-2 text-gray-800 hover:text-primary transition-colors duration-200"
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ) : (
            <div className="relative">
              <div className="flex items-center">
                <Link
                  to={`/${item.label.toLowerCase()}`}
                  className="py-2 text-gray-800 hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                  <ChevronDown className="inline-block w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="absolute top-full left-0 w-48 py-2 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                {item.items?.map((subItem, index) => (
                  <Link
                    key={index}
                    to={`/${item.label.toLowerCase()}/${subItem.toLowerCase()}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
                  >
                    {subItem}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}