import React, { createContext, useContext, useState } from 'react';

interface NavigationContextType {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(prev => !prev);
  };

  const close = () => setIsOpen(false);

  return (
    <NavigationContext.Provider value={{ isOpen, toggle, close }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}