import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useNavigation } from './NavigationContext';
import ContactButton from './ContactButton';
import SubMenu from './SubMenu';
import { menuItems } from '../../data/menuItems';

export default function MobileNav() {
  const { isOpen, close } = useNavigation();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    close();
    setOpenMenus({});
    navigate(path);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed inset-0 bg-white z-[1000] md:hidden pt-10"
        >
          <div className="flex flex-col h-full">
            <div className="sticky top-10 z-10 bg-white border-b border-gray-200 p-4 flex justify-end">
              <button
                onClick={close}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Fermer le menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto">
              <div className="py-2">
                {menuItems.map((item) => (
                  <div key={item.label} className="border-b border-gray-100">
                    {item.path ? (
                      <button
                        onClick={() => handleNavigation(item.path!)}
                        className="w-full text-left px-6 py-4 hover:bg-gray-50 transition-colors"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <SubMenu
                        label={item.label}
                        items={item.items}
                        isOpen={openMenus[item.label] || false}
                        onToggle={() => {
                          setOpenMenus(prev => ({
                            ...prev,
                            [item.label]: !prev[item.label]
                          }));
                        }}
                        onItemClick={handleNavigation}
                      />
                    )}
                  </div>
                ))}
              </div>
            </nav>

            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
              <ContactButton onClick={() => handleNavigation('/contact')} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}