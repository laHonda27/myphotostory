import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { NavigationProvider } from '../navigation/NavigationContext';
import MenuButton from '../navigation/MenuButton';
import DesktopNav from '../navigation/DesktopNav';
import MobileNav from '../navigation/MobileNav';
import ContactBar from '../navigation/ContactBar';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.8]);

  useEffect(() => {
    return scrollY.onChange(latest => {
      setIsScrolled(latest > 10);
    });
  }, [scrollY]);

  return (
    <NavigationProvider>
      <ContactBar />
      <header
        className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-sm' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div style={{ scale: logoScale }}>
              <Link to="/" className="flex items-center space-x-2">
                <Camera className="h-8 w-8 text-primary" />
                <span className="text-xl font-playfair font-bold">
                  L'Œil du Moment
                </span>
              </Link>
            </motion.div>

            <DesktopNav />
            <MenuButton />
            <MobileNav />
          </div>
        </div>
      </header>
    </NavigationProvider>
  );
}