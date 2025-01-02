import React from 'react';

export function Navigation() {
  return (
    <nav className="hidden md:flex space-x-6">
      <a href="#" className="hover:text-purple-200 transition">Inicio</a>
      <a href="#" className="hover:text-purple-200 transition">Programación</a>
      <a href="#" className="hover:text-purple-200 transition">Noticias</a>
      <a href="#" className="hover:text-purple-200 transition">Contacto</a>
    </nav>
  );
}