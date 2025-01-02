import React from 'react';
import { HeroContent } from './HeroContent';

export function Hero() {
  return (
    <div 
      className="relative h-[400px] bg-cover bg-center" 
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=2000")'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <HeroContent />
    </div>
  );
}