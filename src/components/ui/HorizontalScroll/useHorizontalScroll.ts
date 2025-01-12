import { useCallback, RefObject, useState, useEffect } from 'react';

export function useHorizontalScroll(scrollRef: RefObject<HTMLDivElement>) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [momentum, setMomentum] = useState({ velocity: 0, timestamp: 0 });
  
  // Gestion du momentum pour un défilement plus fluide
  useEffect(() => {
    let animationFrame: number;
    
    const updateScroll = () => {
      if (!scrollRef.current || Math.abs(momentum.velocity) < 0.1) return;
      
      const now = performance.now();
      const elapsed = now - momentum.timestamp;
      const delta = momentum.velocity * (elapsed / 16); // Normalisation à 60fps
      
      scrollRef.current.scrollLeft += delta;
      setMomentum(prev => ({
        velocity: prev.velocity * 0.95, // Décélération progressive
        timestamp: now
      }));
      
      animationFrame = requestAnimationFrame(updateScroll);
    };
    
    if (momentum.velocity !== 0) {
      animationFrame = requestAnimationFrame(updateScroll);
    }
    
    return () => cancelAnimationFrame(animationFrame);
  }, [momentum]);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    setMomentum({ velocity: 0, timestamp: performance.now() });
    scrollRef.current.style.cursor = 'grabbing';
    scrollRef.current.style.userSelect = 'none';
  }, []);

  const handleMouseUp = useCallback(() => {
    if (!scrollRef.current) return;
    
    setIsDragging(false);
    scrollRef.current.style.cursor = 'grab';
    scrollRef.current.style.removeProperty('user-select');
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;

    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 0.8;
    const newScrollLeft = scrollLeft - walk;
    
    // Calcul de la vélocité pour le momentum
    const now = performance.now();
    const velocity = (scrollRef.current.scrollLeft - newScrollLeft) / (now - momentum.timestamp);
    
    scrollRef.current.scrollLeft = newScrollLeft;
    setMomentum({ velocity, timestamp: now });
  }, [isDragging, startX, scrollLeft, momentum.timestamp]);

  const handleWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    if (!scrollRef.current || !isMouseOver) return;

    // Empêcher le défilement vertical de la page
    e.preventDefault();

    const container = scrollRef.current;
    const { deltaY, deltaX } = e;
    
    // Réduction de la vitesse de défilement
    const baseSpeed = 0.3;
    const maxSpeed = 1.2;
    const acceleration = Math.min(Math.abs(deltaY || deltaX) / 200, 1);
    const speedMultiplier = baseSpeed + (acceleration * (maxSpeed - baseSpeed));
    
    const scrollDelta = Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : deltaY;
    const smoothDelta = scrollDelta * speedMultiplier;
    
    // Animation plus douce avec easing
    let start: number | null = null;
    const duration = 300; // Augmentation de la durée d'animation

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      
      // Fonction d'easing pour une animation plus naturelle
      const easing = Math.min(progress / duration, 1);
      const easedProgress = 1 - Math.pow(1 - easing, 3);
      
      container.scrollLeft += smoothDelta * easedProgress;
      
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isMouseOver]);

  const handleMouseEnter = useCallback(() => {
    setIsMouseOver(true);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsMouseOver(false);
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.removeProperty('cursor');
      scrollRef.current.style.removeProperty('user-select');
    }
  }, []);

  return {
    handleWheel,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    isDragging
  };
}