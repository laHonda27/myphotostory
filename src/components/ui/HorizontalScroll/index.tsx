import React, { useRef } from 'react';
import { useHorizontalScroll } from './useHorizontalScroll';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './styles.css';

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
  showArrows?: boolean;
  scrollAmount?: number;
}

export default function HorizontalScroll({
  children,
  className = '',
  showArrows = true,
  scrollAmount = 300
}: HorizontalScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { 
    handleWheel,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    handleTouchStart,
    handleTouchMove,
    handleMouseEnter,
    handleMouseLeave,
    isDragging
  } = useHorizontalScroll(scrollRef);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -scrollAmount : scrollAmount;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <div className="horizontal-scroll-container">
      {showArrows && (
        <button
          onClick={() => scroll('left')}
          className="scroll-arrow left"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      <div
        ref={scrollRef}
        className={`horizontal-scroll-content ${isDragging ? 'dragging' : ''} ${className}`}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {children}
      </div>

      {showArrows && (
        <button
          onClick={() => scroll('right')}
          className="scroll-arrow right"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}