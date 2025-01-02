import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-purple-700 rounded-lg transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-purple-800 shadow-lg py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="hover:text-purple-200 transition-colors">Inicio</a>
            <a href="#" className="hover:text-purple-200 transition-colors">Programación</a>
            <a href="#" className="hover:text-purple-200 transition-colors">Noticias</a>
            <a href="#" className="hover:text-purple-200 transition-colors">Contacto</a>
          </nav>
        </div>
      )}
    </div>
  );
}