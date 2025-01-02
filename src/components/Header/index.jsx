import React from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <Navigation />
        <MobileMenu />
      </div>
    </header>
  );
}