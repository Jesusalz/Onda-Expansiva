import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Schedule } from './components/Schedule';
import { Player } from './components/Player';

export function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <Features />
          <div className="mt-16">
            <Schedule />
          </div>
        </div>
      </main>
      <Player />
    </div>
  );
}