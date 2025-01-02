import React from 'react';

export function HeroContent() {
  return (
    <div className="relative container mx-auto px-6 h-full flex items-center">
      <div className="text-white max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Tu Radio Favorita</h1>
        <p className="text-lg md:text-xl mb-8">Música, entretenimiento y las mejores noticias las 24 horas del día.</p>
        <button className="bg-purple-600 text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105">
          Escuchar Ahora
        </button>
      </div>
    </div>
  );
}